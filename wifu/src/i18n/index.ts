import en from './en';
import ru from './ru';

// English is the main language (served at /), Russian lives under /ru/
export const languages = { en: 'EN', ru: 'RU' } as const;
export const defaultLang = 'en';
export type Lang = keyof typeof languages;

const dicts = { en, ru };

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
  const bare = /\/404/.test(pathname) ? '' : pathname.replace(/^\/(ru)(\/|$)/, '/');
  return localePath(to, bare);
}

export const isTodo = (s: string) => s.trim().startsWith('TODO');
