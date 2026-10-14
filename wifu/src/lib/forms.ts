import { forms } from '../config';

/** Attributes for a <form> depending on the backend chosen in src/config.ts. */
export function formAttrs(name: 'contact' | 'rsvpDemo', thanksUrl: string) {
  if (forms.provider === 'netlify') {
    return { name, method: 'post', action: thanksUrl, 'data-netlify': 'true', 'netlify-honeypot': 'bot-field', 'data-provider': 'netlify' };
  }
  if (forms.provider === 'formspree' && forms.formspree[name]) {
    return { name, method: 'post', action: forms.formspree[name], 'data-provider': 'formspree' };
  }
  return { name, method: 'get', action: thanksUrl, 'data-provider': 'none' };
}
