import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const cache = new Map<string, string>();

/**
 * URL of a file in /public with a content-hash version, e.g. "/images/x.jpg?v=3f2a9c1b".
 * When the file changes, the URL changes too, so browsers and the hosting CDN
 * never keep serving an old picture.
 */
export function asset(path: string) {
  const clean = '/' + path.replace(/^\/+/, '');
  if (!cache.has(clean)) {
    const hash = createHash('sha1').update(readFileSync(join(process.cwd(), 'public', clean))).digest('hex').slice(0, 8);
    cache.set(clean, `${clean}?v=${hash}`);
  }
  return cache.get(clean)!;
}

export const img = (name: string) => asset(`images/${name}`);
