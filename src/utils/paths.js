export function resolveMediaPath(path) {
  if (!path || typeof path !== 'string') return path;
  // Always route through the functions endpoint; avoids relying on Netlify redirects
  return path.replace(/^\/api\/media(\/|$)/, '/.netlify/functions/media$1');
}


