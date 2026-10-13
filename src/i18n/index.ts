import en from './en';
import tr from './tr';

// Turkish is the main language (served at /), English lives under /en/
export const languages = { tr: 'TR', en: 'EN' } as const;
export const defaultLang = 'tr';
export type Lang = keyof typeof languages;

export const dicts = { en, tr };

export function t(lang: Lang) {
  return dicts[lang];
}

/** Root-relative URL for a page in the given language ("" = home). */
export function localePath(lang: Lang, path = '') {
  const clean = path.replace(/^\/+/, '');
  return lang === defaultLang ? `/${clean}` : `/${lang}/${clean}`;
}

export const isTodo = (s: string) => s.trim().startsWith('TODO');
