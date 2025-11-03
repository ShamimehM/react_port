import { createClient } from '@supabase/supabase-js';

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, MEDIA_BUCKET = 'media', DOCUMENTS_BUCKET = 'documents' } = process.env;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

function parsePath(path) {
  // Works for both:
  //  - /api/media/:bucket/:key                    (after Netlify redirect)
  //  - /.netlify/functions/media/:bucket/:key     (direct function path)
  const segments = path.split('/').filter(Boolean);
  const fnIndex = segments.indexOf('media');
  if (fnIndex === -1) return { bucket: undefined, key: undefined };
  const bucket = segments[fnIndex + 1];
  const key = decodeURIComponent(segments.slice(fnIndex + 2).join('/'));
  return { bucket, key };
}

export async function handler(event) {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const debug = event?.queryStringParameters?.debug === '1' || event?.headers?.['x-debug'] === '1';
    if (debug && (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY)) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stage: 'env',
          message: 'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in function environment'
        })
      };
    }
    const { bucket, key } = parsePath(event.path);
    if (!bucket || !key) return { statusCode: 400, body: 'Bad request' };

    // enforce only allowed buckets
    if (![MEDIA_BUCKET, DOCUMENTS_BUCKET].includes(bucket)) {
      return { statusCode: 403, body: 'Forbidden' };
    }

    // create a short-lived signed URL then fetch bytes server-side
    const { data: signed, error: signErr } = await supabase.storage.from(bucket).createSignedUrl(key, 60);
    if (signErr || !signed?.signedUrl) {
      console.error('signed url error', signErr);
      if (debug) {
        return {
          statusCode: 404,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ stage: 'sign', bucket, key, message: signErr?.message, details: signErr?.details, hint: signErr?.hint })
        };
      }
      return { statusCode: 404, body: 'Not found' };
    }

    const res = await fetch(signed.signedUrl);
    if (!res.ok) {
      if (debug) {
        return {
          statusCode: res.status,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ stage: 'fetch', bucket, key, upstreamStatus: res.status })
        };
      }
      return { statusCode: res.status, body: 'Upstream error' };
    }
    const contentType = res.headers.get('content-type') || 'application/octet-stream';
    const arrayBuffer = await res.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');

    return {
      statusCode: 200,
      isBase64Encoded: true,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
        'X-Robots-Tag': 'noai, noimageai, noimageindex, noarchive'
      },
      body: base64
    };
  } catch (e) {
    console.error(e);
    if (event?.queryStringParameters?.debug === '1' || event?.headers?.['x-debug'] === '1') {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stage: 'catch', message: e?.message })
      };
    }
    return { statusCode: 500, body: 'Server error' };
  }
}


