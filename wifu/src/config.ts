/**
 * Site-wide settings that are not translated copy.
 * Translated texts live in src/i18n/tr.ts (main) and src/i18n/en.ts.
 *
 * Anything starting with "TODO" is shown on the page as a dashed placeholder chip,
 * so you can see at a glance what is still missing.
 */

export const brand = {
  /** Product name shown in the header, footer and page titles. */
  name: 'Wifu',
  /** Registered company name (footer, legal pages, structured data). */
  legalName: 'WIFU YAZILIM VE ORGANİZASYON HİZMETLERİ A.Ş.',
  /** Company address (footer, legal pages). Uses the Istanbul owner's address. */
  address: 'Turgut Özal Bulvarı 227, Maltepe, İstanbul 34844, Türkiye',
  /** Work email: footer, legal pages, contact block. */
  email: 'info@wifupad.com',
};

/**
 * Company owners shown in the footer and on the legal pages.
 * `phone` is shown as written; `tel` is the dial string for the link (leave '' to show the number without a link).
 */
export const owners = [
  {
    name: 'Cahit Baş',
    address: '177/18. Sokak, Karabağlar, İzmir 35140, Türkiye',
    phone: '+90 232 237 72 21',
    tel: '+902322377221',
  },
  {
    name: 'Yücel Efe',
    address: 'Turgut Özal Bulvarı 227, Maltepe, İstanbul 34844, Türkiye',
    // TODO: this number has one digit too few for a Turkish number (0216 + 7 digits expected). Check and fix.
    phone: '0216 383 492',
    tel: '',
  },
];

/** "Create your website" buttons point here. TODO: replace with the sign-up / app URL when it exists. */
export const appUrl = '#get-started';

/**
 * Social links. TODO: replace each `href` with the real profile URL.
 * Remove an item to hide it.
 */
export const socials = [
  { name: 'Instagram', icon: 'instagram', href: '#TODO-instagram' },
  { name: 'X', icon: 'x', href: 'https://x.com/wifupad' },
] as const;

/**
 * Form backend.
 * - 'netlify'   — Netlify Forms. Works automatically when the site is hosted on Netlify.
 * - 'formspree' — Formspree. Works on any host (Vercel, etc.). Put your form endpoints below.
 * - 'none'      — nothing is sent; the form just shows the "thank you" screen (handy for previews).
 */
export const forms = {
  provider: 'netlify' as 'netlify' | 'formspree' | 'none',
  formspree: {
    // TODO: create forms at https://formspree.io and paste the endpoints, e.g. 'https://formspree.io/f/abcdwxyz'
    contact: '',
    rsvpDemo: '',
  },
};

/**
 * Device mockups on the home page are drawn in HTML/CSS (crisp, translated, light).
 * To use your own screenshots instead, put the files in /public/images and set the path here,
 * e.g. websitePhone: '/images/mockup-website-phone.png'. Leave null to keep the HTML version.
 */
export const mockupImages: Record<'websitePhone' | 'websiteLaptop' | 'rsvpPhone' | 'rsvpDashboard', string | null> = {
  websitePhone: null,
  websiteLaptop: null,
  rsvpPhone: null,
  rsvpDashboard: null,
};

/** Date of the fictional demo wedding (used by the countdown on /demo). */
export const demoWeddingDate = '2027-06-12T16:00:00';
