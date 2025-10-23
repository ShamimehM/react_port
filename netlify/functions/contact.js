import { createClient } from '@supabase/supabase-js';
import crypto from 'node:crypto';
import { isbot as isBot } from 'isbot';

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, IP_HASH_SALT } = process.env;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

function hashIp(ip) {
  if (!ip) return null;
  const h = crypto.createHmac('sha256', IP_HASH_SALT || '');
  h.update(ip);
  return h.digest('hex');
}

function getIpFromHeaders(headers) {
  return headers['x-forwarded-for']?.split(',')[0]?.trim()
    || headers['client-ip']
    || headers['x-real-ip']
    || null;
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const headers = event.headers || {};
    const ua = headers['user-agent'] || '';
    const debugEnabled = headers['x-debug'] === '1';

    const body = JSON.parse(event.body || '{}');
    const { name = '', email = '', phone = '', message = '', source_path = '/', _hp = '', _ts, _debug } = body;
    const effectiveDebug = debugEnabled || _debug === 1 || _debug === '1';

    // basic validation
    if (!message || (String(message).trim().length === 0)) {
      return { statusCode: 400, body: 'Message is required' };
    }

    // honeypot
    if (_hp) {
      return { statusCode: 202, body: 'ok' };
    }

    // time-to-submit (client should send timestamp at form render)
    let isFast = false;
    if (_ts) {
      const now = Date.now();
      const delta = now - Number(_ts);
      if (!Number.isNaN(delta) && delta < 2000) isFast = true;
    }

    const ip = getIpFromHeaders(headers);
    const ip_hash = hashIp(ip);
    const botUa = isBot(ua);
    const is_bot = Boolean(botUa || isFast);

    const { error } = await supabase.from('contacts').insert({
      name, email, phone, message, source_path, user_agent: ua, ip_hash, is_bot
    });
    if (error) {
      console.error('supabase insert error', error);
      if (effectiveDebug) {
        return {
          statusCode: 500,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ stage: 'insert', message: error.message, details: error.details, hint: error.hint })
        };
      }
      return { statusCode: 500, body: 'Failed to save' };
    }

    return { statusCode: 202, body: 'ok' };
  } catch (e) {
    console.error(e);
    const isJson = typeof e?.message === 'string';
    return {
      statusCode: 500,
      body: isJson ? e.message : 'Server error'
    };
  }
}


