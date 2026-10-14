// Creates placeholder images in public/images (only files that don't exist yet),
// plus the favicon set and Open Graph images.
//
//   npm run images            → create missing placeholders
//   npm run images -- --force → redraw every placeholder (overwrites your photos!)
//   npm run images:fit        → crop/resize YOUR photos to the expected size and re-compress them
//
// The list below is the single source of truth for file names and sizes (also documented in README).
import sharp from 'sharp';
import { existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = (p) => join(root, 'public', p);
const force = process.argv.includes('--force');
const fit = process.argv.includes('--fit');

const C = {
  paper: '#f6f0e6',
  paper2: '#ece3d4',
  ink: '#1f2638',
  terra: '#b4593c',
  clay: '#c9876b',
  sage: '#8c9a7d',
  sageDark: '#5d6b52',
  wine: '#6e2f3a',
  sand: '#d9c7ad',
};
const SERIF = 'Caladea, Georgia, DejaVu Serif, serif';
const SANS = 'Carlito, DejaVu Sans, sans-serif';

// name → [width, height, colours for the photo placeholder]
const photos = {
  'hero-couple.jpg': [1200, 1500, [C.clay, C.sand]],
  'rsvp-couple.jpg': [1200, 1500, [C.sage, C.paper2]],
  'guests-celebration.jpg': [1200, 900, [C.sand, C.paper]],
  'demo-couple-cover.jpg': [1920, 1280, [C.sageDark, C.sand]],
  'demo-story.jpg': [1000, 1250, [C.clay, C.paper2]],
  'demo-venue.jpg': [1500, 1000, [C.sage, C.sand]],
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function grain(id) {
  return `<filter id="${id}"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.09 0"/></filter>`;
}

function photoSvg(name, w, h, [a, b]) {
  const fs = Math.round(Math.min(w, h) / 34);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
    ${grain('n')}
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect width="100%" height="100%" filter="url(#n)"/>
  <g font-family="${SANS}" font-size="${fs}" fill="${C.ink}" fill-opacity="0.55">
    <text x="${fs * 1.4}" y="${h - fs * 2.6}">${esc(name)}</text>
    <text x="${fs * 1.4}" y="${h - fs * 1.3}">${w} × ${h} · replace with your photo</text>
  </g>
</svg>`;
}

// Six invitation designs, drawn simply so the gallery has something real to show.
function inviteSvg(i) {
  const w = 800, h = 1120;
  const base = (bg, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs>${grain('n')}</defs><rect width="100%" height="100%" fill="${bg}"/>${body}<rect width="100%" height="100%" filter="url(#n)"/></svg>`;
  const center = (y, size, text, fill, family = SERIF, extra = '') =>
    `<text x="400" y="${y}" text-anchor="middle" font-family="${family}" font-size="${size}" fill="${fill}" ${extra}>${esc(text)}</text>`;
  switch (i) {
    case 1: // Linen
      return base(C.paper, `<rect x="48" y="48" width="704" height="1024" fill="none" stroke="${C.ink}" stroke-opacity=".35" stroke-width="2"/>
        ${center(330, 26, 'TOGETHER WITH THEIR FAMILIES', C.ink, SANS, 'letter-spacing="6"')}
        ${center(480, 92, 'Mira', C.ink)}${center(560, 48, '&', C.terra)}${center(660, 92, 'Daniel', C.ink)}
        <path d="M300 720 C 360 700, 440 740, 500 715" stroke="${C.terra}" stroke-width="4" fill="none" stroke-linecap="round"/>
        ${center(810, 34, '12 June 2027', C.ink)}${center(860, 26, 'Old Mill · Lake Garda', C.ink, SANS)}`);
    case 2: // Garden
      return base(C.sage, `${[0, 1, 2, 3, 4].map((k) => `<path d="M${120 + k * 140} 1120 C ${100 + k * 140} 980, ${170 + k * 140} 900, ${150 + k * 140} 820" stroke="${C.paper}" stroke-opacity=".5" stroke-width="3" fill="none"/><ellipse cx="${175 + k * 140}" cy="${900}" rx="26" ry="11" transform="rotate(-35 ${175 + k * 140} 900)" fill="${C.paper}" fill-opacity=".35"/>`).join('')}
        ${center(300, 26, 'PLEASE JOIN US', C.paper, SANS, 'letter-spacing="6"')}
        ${center(440, 96, 'Mira &', C.paper)}${center(550, 96, 'Daniel', C.paper)}
        ${center(650, 34, 'Saturday, 12 June 2027', C.paper)}`);
    case 3: // City
      return base(C.ink, `<text x="80" y="300" font-family="${SANS}" font-size="30" fill="${C.paper}" letter-spacing="8">WE'RE GETTING</text>
        <text x="80" y="420" font-family="${SERIF}" font-size="130" fill="${C.paper}">Married.</text>
        <rect x="80" y="470" width="180" height="6" fill="${C.terra}"/>
        <text x="80" y="640" font-family="${SERIF}" font-size="64" fill="${C.paper}">Mira</text>
        <text x="80" y="720" font-family="${SERIF}" font-size="64" fill="${C.paper}">+ Daniel</text>
        <text x="80" y="960" font-family="${SANS}" font-size="30" fill="${C.paper}" fill-opacity=".8">12.06.2027 — 16:00</text>
        <text x="80" y="1010" font-family="${SANS}" font-size="30" fill="${C.paper}" fill-opacity=".8">OLD MILL, LAKE GARDA</text>`);
    case 4: // Terracotta
      return base(C.terra, `<path d="M160 1000 V 420 A 240 240 0 0 1 640 420 V 1000 Z" fill="${C.paper}"/>
        ${center(470, 24, 'THE WEDDING OF', C.terra, SANS, 'letter-spacing="6"')}
        ${center(600, 84, 'Mira', C.ink)}${center(680, 40, 'and', C.terra)}${center(780, 84, 'Daniel', C.ink)}
        ${center(890, 30, '12 · 06 · 2027', C.ink, SANS)}`);
    case 5: // Save the Date
      return base(C.paper2, `${center(260, 30, 'SAVE THE DATE', C.wine, SANS, 'letter-spacing="10"')}
        ${center(500, 210, '12', C.ink)}${center(640, 70, 'June 2027', C.ink)}
        <path d="M250 700 C 330 680, 470 720, 550 690" stroke="${C.wine}" stroke-width="4" fill="none" stroke-linecap="round"/>
        ${center(800, 40, 'Mira & Daniel', C.ink)}${center(860, 26, 'Invitation to follow', C.ink, SANS, 'fill-opacity=".7"')}`);
    default: // Postcard
      return base('#efe6d6', `<rect x="60" y="60" width="680" height="1000" fill="${C.paper}" stroke="${C.sand}" stroke-width="3"/>
        <rect x="560" y="100" width="140" height="170" fill="none" stroke="${C.terra}" stroke-width="3" stroke-dasharray="8 6"/>
        <circle cx="630" cy="185" r="40" fill="${C.sage}" fill-opacity=".6"/>
        <text x="110" y="200" font-family="${SANS}" font-size="26" fill="${C.ink}" letter-spacing="6">GREETINGS FROM</text>
        <text x="110" y="300" font-family="${SERIF}" font-size="80" fill="${C.terra}">Lake Garda</text>
        ${[520, 600, 680, 760].map((y) => `<line x1="110" y1="${y}" x2="690" y2="${y}" stroke="${C.sand}" stroke-width="2"/>`).join('')}
        <text x="110" y="505" font-family="${SERIF}" font-size="42" fill="${C.ink}">Mira &amp; Daniel are getting</text>
        <text x="110" y="585" font-family="${SERIF}" font-size="42" fill="${C.ink}">married on 12 June 2027.</text>
        <text x="110" y="665" font-family="${SERIF}" font-size="42" fill="${C.ink}">Come celebrate with us!</text>`);
  }
}

function ogSvg({ title, sub, kicker, invite }) {
  const w = 1200, h = 630;
  const env = invite
    ? `<g transform="translate(760 150)"><rect width="340" height="230" rx="6" fill="${C.paper2}" stroke="${C.sand}" stroke-width="3"/><path d="M0 0 L170 130 L340 0" fill="none" stroke="${C.sand}" stroke-width="3"/><circle cx="170" cy="130" r="30" fill="${C.terra}"/></g>`
    : `<g transform="translate(800 140)"><rect x="0" y="40" width="300" height="200" rx="6" fill="${C.paper2}" stroke="${C.sand}" stroke-width="3" transform="rotate(-6 150 140)"/><rect x="40" y="0" width="160" height="300" rx="22" fill="${C.ink}"/><rect x="52" y="14" width="136" height="272" rx="14" fill="${C.paper}"/><text x="120" y="120" text-anchor="middle" font-family="${SERIF}" font-size="24" fill="${C.ink}">M &amp; D</text><rect x="80" y="230" width="80" height="26" rx="13" fill="${C.terra}"/></g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs>${grain('n')}</defs>
  <rect width="100%" height="100%" fill="${C.paper}"/>
  <text x="80" y="110" font-family="${SERIF}" font-size="44" fill="${C.ink}">Wifu</text>
  <text x="80" y="250" font-family="${SANS}" font-size="28" fill="${C.terra}" letter-spacing="4">${esc(kicker)}</text>
  ${title.map((line, i) => `<text x="80" y="${330 + i * 74}" font-family="${SERIF}" font-size="64" fill="${C.ink}">${esc(line)}</text>`).join('')}
  <path d="M82 ${350 + title.length * 74 - 40} C 180 ${330 + title.length * 74 - 40}, 330 ${370 + title.length * 74 - 40}, 430 ${345 + title.length * 74 - 40}" stroke="${C.terra}" stroke-width="5" fill="none" stroke-linecap="round"/>
  <text x="80" y="560" font-family="${SANS}" font-size="28" fill="${C.ink}" fill-opacity=".75">${esc(sub)}</text>
  ${env}
  <rect width="100%" height="100%" filter="url(#n)"/>
</svg>`;
}

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${C.ink}"/>
  <rect x="12" y="19" width="40" height="28" rx="3" fill="${C.paper}"/>
  <path d="M12.5 20 L32 35 L51.5 20" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="32" cy="36" r="6" fill="${C.terra}"/>
</svg>`;

async function write(path, svg, w, h, format = 'jpeg') {
  const file = out(path);
  if (existsSync(file) && !force) return;
  mkdirSync(dirname(file), { recursive: true });
  let img = sharp(Buffer.from(svg)).resize(w, h);
  img = format === 'png' ? img.png({ compressionLevel: 9 }) : img.jpeg({ quality: 78, mozjpeg: true, progressive: true });
  await img.toFile(file);
  console.log('wrote', path);
}

async function fitAll() {
  const sizes = { ...Object.fromEntries(Object.entries(photos).map(([n, [w, h]]) => [n, [w, h]])) };
  for (let i = 1; i <= 6; i++) sizes[`invite-design-0${i}.jpg`] = [800, 1120];
  for (const [name, [w, h]] of Object.entries(sizes)) {
    const file = out(`images/${name}`);
    if (!existsSync(file)) continue;
    const buf = await sharp(file).rotate().resize(w, h, { fit: 'cover', position: 'attention' }).jpeg({ quality: 78, mozjpeg: true, progressive: true }).toBuffer();
    await sharp(buf).toFile(file);
    console.log('fitted', name, `${w}×${h}`);
  }
}

if (fit) {
  await fitAll();
} else {
  for (const [name, [w, h, colours]] of Object.entries(photos)) await write(`images/${name}`, photoSvg(name, w, h, colours), w, h);
  for (let i = 1; i <= 6; i++) await write(`images/invite-design-0${i}.jpg`, inviteSvg(i), 800, 1120);

  await write('images/og-default.jpg', ogSvg({ kicker: 'DÜĞÜN SİTESİ · DAVETİYE · LCV', title: ['Düğün siteniz', 've davetiyeleriniz'], sub: 'Bir akşamda hazır. Misafirler telefondan yanıt verir.' }), 1200, 630);
  await write('images/og-default-en.jpg', ogSvg({ kicker: 'WEDDING WEBSITE · INVITATIONS · RSVP', title: ['Your wedding website', 'and invitations'], sub: 'Done in an evening. Guests reply from their phone.' }), 1200, 630);
  await write('images/og-invite.jpg', ogSvg({ kicker: 'DAVETLİSİNİZ', title: ['Mira & Daniel', '12 Haziran 2027'], sub: 'Davetiyeyi açın, bir dakikada yanıt verin.', invite: true }), 1200, 630);
  await write('images/og-invite-en.jpg', ogSvg({ kicker: 'YOU’RE INVITED', title: ['Mira & Daniel', '12 June 2027'], sub: 'Open the invitation and reply in a minute.', invite: true }), 1200, 630);

  await write('apple-touch-icon.png', favicon.replace('rx="14"', 'rx="0"'), 180, 180, 'png');
  await write('favicon-32.png', favicon, 32, 32, 'png');
  const fav = out('favicon.svg');
  if (!existsSync(fav) || force) {
    const { writeFileSync } = await import('node:fs');
    writeFileSync(fav, favicon);
    console.log('wrote favicon.svg');
  }
}
