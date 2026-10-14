import { appUrl } from '../config';
import { localePath, type Lang } from '../i18n';

/** Where "Create your website" points. An in-page anchor like "#get-started" is resolved to the home page. */
export const appHref = (lang: Lang) => (appUrl.startsWith('#') ? localePath(lang, appUrl) : appUrl);
