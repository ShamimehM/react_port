export function resolveMediaPath(path) {
  if (!path || typeof path !== 'string') return path;
  if (import.meta.env && import.meta.env.DEV) {
    return path.replace(/^\/api\/media(\/|$)/, '/.netlify/functions/media$1');
  }
  return path;
}


