import en from './en';
import tr from './tr';

export const languages = { en: 'EN', tr: 'TR' } as const;
export type Lang = keyof typeof languages;

export const dicts = { en, tr };

export function t(lang: Lang) {
  return dicts[lang];
}

/** Root-relative URL for a page in the given language ("" = home). */
export function localePath(lang: Lang, path = '') {
  const clean = path.replace(/^\/+/, '');
  return lang === 'en' ? `/${clean}` : `/${lang}/${clean}`;
}

export const isTodo = (s: string) => s.trim().startsWith('TODO');
