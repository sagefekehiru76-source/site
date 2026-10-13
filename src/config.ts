// Site-wide settings. Everything marked TODO needs a real value before launch.

export const site = {
  name: 'LaunchOnNato',
  // TODO: real production URL (also update astro.config.mjs and public/robots.txt)
  url: 'https://launchonnato.com',
};

export const contact = {
  email: 'info@natolaunch.ceo',
};

/** Owners — shown in the footer contacts and in the structured data (JSON-LD). */
export const owners = [
  {
    name: 'Ünzile Atasoy',
    // tel: international format for the link, display: how it's printed
    phone: { tel: '+902642731687', display: '+90 264 273 16 87' },
    address: { street: 'Dereboyu Sokak 12', postalCode: '54100', district: 'Adapazarı', province: 'Sakarya', country: 'Türkiye' },
  },
  {
    name: 'Füsun Başkaya',
    phone: { tel: '+902485213356', display: '+90 248 521 33 56' },
    address: { street: 'Saadettin Yücel Caddesi 88', postalCode: '15420', district: 'Altınyayla', province: 'Burdur', country: 'Türkiye' },
  },
];

export const legal = {
  // TODO: registered company name (e.g. "… Tekstil Ltd. Şti.")
  companyName: '',
  // TODO: tax office + tax number (Vergi Dairesi / Vergi No) or VAT ID
  taxId: '',
  // TODO: link to privacy policy / KVKK + GDPR notice (page or PDF). Leave empty to hide the link.
  privacyUrl: '',
};

export const socials = [
  { name: 'Instagram', href: 'https://instagram.com/launchonnato', icon: 'instagram' },
  { name: 'YouTube', href: 'https://youtube.com/@launchonnato', icon: 'youtube' },
  { name: 'X', href: 'https://x.com/launchonnato', icon: 'x' },
] as const;

/**
 * Quote form backend.
 * - 'netlify': works out of the box when the site is deployed on Netlify (Netlify Forms, file uploads up to 8 MB).
 * - 'formspree': for Vercel or any other host. Create a form at formspree.io and paste its endpoint below.
 *   Note: file uploads on Formspree require a paid plan.
 */
export const quoteForm = {
  provider: 'netlify' as 'netlify' | 'formspree',
  // TODO (only if provider = 'formspree'): e.g. 'https://formspree.io/f/abcdwxyz'
  formspreeEndpoint: '',
};
