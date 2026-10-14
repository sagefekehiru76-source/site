import en from './en';
import tr from './tr';

// Turkish is the main language (served at /), English lives under /en/
export const languages = { tr: 'TR', en: 'EN' } as const;
export const defaultLang = 'tr';
export type Lang = keyof typeof languages;

const dicts = { tr, en };

export function t(lang: Lang) {
  return dicts[lang];
}

/** Root-relative URL for a page in the given language ("" = home). Always ends with "/" unless it has a #hash. */
export function localePath(lang: Lang, path = '') {
  const [p, hash] = path.replace(/^\/+/, '').split('#');
  const clean = p && !p.endsWith('/') ? `${p}/` : p;
  const base = lang === defaultLang ? `/${clean}` : `/${lang}/${clean}`;
  return hash ? `${base}#${hash}` : base;
}

/** The same page in another language: strips the current prefix from a pathname. */
export function switchPath(pathname: string, to: Lang) {
  const bare = /\/404/.test(pathname) ? '' : pathname.replace(/^\/(en)(\/|$)/, '/');
  return localePath(to, bare);
}

export const isTodo = (s: string) => s.trim().startsWith('TODO');
