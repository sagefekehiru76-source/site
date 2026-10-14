import { brand, forms } from '../config';

/** Attributes for a <form> depending on the backend chosen in src/config.ts. */
export function formAttrs(name: 'contact' | 'rsvpDemo', thanksUrl: string) {
  const provider = forms.provider[name];
  if (provider === 'netlify') {
    return { name, method: 'post', action: thanksUrl, 'data-netlify': 'true', 'netlify-honeypot': 'bot-field', 'data-provider': 'netlify' };
  }
  if (provider === 'formspree' && forms.formspree[name]) {
    return { name, method: 'post', action: forms.formspree[name], 'data-provider': 'formspree' };
  }
  if (provider === 'mailto') {
    // Without JS the browser hands the fields to the email app as plain text.
    return { name, method: 'post', action: `mailto:${brand.email}`, enctype: 'text/plain', 'data-provider': 'mailto', 'data-mailto': brand.email };
  }
  return { name, method: 'get', action: thanksUrl, 'data-provider': 'none' };
}
