// Draws the brand logo and flat illustrations for every image slot on the site.
//   npm run illustrations            → writes only images that don't exist yet
//   npm run illustrations -- --force → overwrites public/images/* (careful: replaces your photos!)
// Logo files are always rewritten: public/brand/*, public/favicon.*, public/apple-touch-icon.png
import sharp from 'sharp';
import opentype from 'opentype.js';
import { existsSync, mkdirSync, writeFileSync, unlinkSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const IMG = join(ROOT, 'public/images');
const BRAND = join(ROOT, 'public/brand');
const force = process.argv.includes('--force');

const C = {
  cream: '#F3ECE0', paper: '#FAF6EE', sand: '#E7DCCB', sand2: '#DCCFB9', line: '#CDBFA8',
  ink: '#1D2433', navy: '#1F2A44', navy2: '#2C3A5C', terra: '#A9472A', terra2: '#C2603F',
  mustard: '#D6A137', brick: '#8E2B23', graphite: '#3A3D42', ecru: '#EDE4D3', sky: '#8FB1CC',
  steel1: '#F4F5F6', steel2: '#C4C9CF', steel3: '#8A929C', wood: '#C9A57C', wood2: '#B8916A', tan: '#A8724A',
};

// ---------- fonts → outlined paths ----------
const font = (f) => {
  const buf = readFileSync(join(ROOT, 'node_modules', f));
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
};
const F = {
  serif: font('@fontsource/young-serif/files/young-serif-latin-400-normal.woff'),
  mono: font('@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff'),
};
function text(str, x, y, size, { f = 'serif', anchor = 'start', fill = C.ink, spacing = 0, attrs = '' } = {}) {
  const fo = F[f];
  const w = width(str, size, f, spacing);
  let cx = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  let d = '';
  for (const ch of str) {
    const g = fo.charToGlyph(ch);
    d += pathData(g.getPath(cx, y, size));
    cx += adv(fo, ch, size) + spacing;
  }
  return `<path d="${d}" fill="${fill}" ${attrs}/>`;
}
// opentype's toPathData() can print NaN for some coordinates — format the commands ourselves
const n = (v) => (Math.round(v * 100) / 100).toString();
function pathData(p) {
  return p.commands.map((c) => {
    if (c.type === 'M' || c.type === 'L') return c.type + n(c.x) + ' ' + n(c.y);
    if (c.type === 'Q') return 'Q' + n(c.x1) + ' ' + n(c.y1) + ' ' + n(c.x) + ' ' + n(c.y);
    if (c.type === 'C') return 'C' + n(c.x1) + ' ' + n(c.y1) + ' ' + n(c.x2) + ' ' + n(c.y2) + ' ' + n(c.x) + ' ' + n(c.y);
    return 'Z';
  }).join('');
}
// glyph metrics load lazily in opentype.js — read them via the font API
const adv = (fo, ch, size) => fo.getAdvanceWidth(ch, size, { kerning: false });
function width(str, size, f = 'serif', spacing = 0) {
  const fo = F[f];
  let w = 0;
  for (const ch of str) w += adv(fo, ch, size) + spacing;
  return w - spacing;
}

// ---------- shared defs ----------
const defs = `
<defs>
  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="14"/><feOffset dx="10" dy="18"/>
    <feComponentTransfer><feFuncA type="linear" slope="0.22"/></feComponentTransfer>
    <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <filter id="shadowSm" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="5"/><feOffset dx="4" dy="7"/>
    <feComponentTransfer><feFuncA type="linear" slope="0.25"/></feComponentTransfer>
    <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <linearGradient id="steel" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${C.steel1}"/><stop offset=".45" stop-color="${C.steel2}"/>
    <stop offset=".7" stop-color="${C.steel1}"/><stop offset="1" stop-color="${C.steel3}"/>
  </linearGradient>
  <radialGradient id="steelR" cx=".35" cy=".3" r=".8">
    <stop offset="0" stop-color="${C.steel1}"/><stop offset=".6" stop-color="${C.steel2}"/><stop offset="1" stop-color="${C.steel3}"/>
  </radialGradient>
  <pattern id="paper" width="8" height="8" patternUnits="userSpaceOnUse">
    <rect width="8" height="8" fill="none"/><path d="M0 2h3M5 6h3" stroke="#000" stroke-opacity=".025" stroke-width="2"/>
  </pattern>
  <pattern id="weave" width="6" height="6" patternUnits="userSpaceOnUse">
    <path d="M0 1.5h3M3 4.5h3" stroke="#000" stroke-opacity=".14" stroke-width="1.6"/>
    <path d="M1.5 0v3M4.5 3v3" stroke="#fff" stroke-opacity=".10" stroke-width="1.2"/>
  </pattern>
  <pattern id="weaveBig" width="18" height="18" patternUnits="userSpaceOnUse">
    <path d="M0 4.5h9M9 13.5h9" stroke="#000" stroke-opacity=".16" stroke-width="5"/>
    <path d="M4.5 0v9M13.5 9v9" stroke="#fff" stroke-opacity=".10" stroke-width="3.5"/>
  </pattern>
  <pattern id="satin" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(55)">
    <path d="M0 5h10" stroke="#000" stroke-opacity=".22" stroke-width="1.6"/>
    <path d="M0 1h10" stroke="#fff" stroke-opacity=".25" stroke-width="1.2"/>
  </pattern>
  <pattern id="grain" width="40" height="12" patternUnits="userSpaceOnUse">
    <path d="M0 3 Q10 1 20 3 T40 3M0 9 Q10 11 20 9 T40 9" fill="none" stroke="#000" stroke-opacity=".06" stroke-width="1.4"/>
  </pattern>
</defs>`;

const svg = (w, h, body, bg = C.cream) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${defs}
  <rect width="${w}" height="${h}" fill="${bg}"/><rect width="${w}" height="${h}" fill="url(#paper)"/>${body}</svg>`;

// ---------- building blocks ----------
// Palettes: stripes from the outer edge to the centre, as [colour, fraction of half-width]
const PAL = {
  navyTerra: { base: C.navy, stripes: [[C.terra, 0.78], [C.navy, 0.66], [C.mustard, 0.12]], thread: C.cream },
  mustard: { base: C.mustard, stripes: [[C.navy, 0.8], [C.mustard, 0.62]], thread: C.navy },
  terra: { base: C.terra, stripes: [[C.cream, 0.84], [C.terra, 0.76]], thread: C.cream },
  graphite: { base: C.graphite, stripes: [[C.brick, 0.2]], thread: C.sand },
  ecru: { base: C.ecru, stripes: [[C.navy, 0.86], [C.ecru, 0.78]], thread: C.navy },
  brick: { base: C.brick, stripes: [[C.mustard, 0.3], [C.brick, 0.18]], thread: C.cream },
  sky: { base: C.sky, stripes: [[C.cream, 0.5], [C.navy, 0.4], [C.sky, 0.3]], thread: C.navy },
  black: { base: '#1A1B1E', stripes: [[C.graphite, 0.9], ['#1A1B1E', 0.8]], thread: C.steel3 },
};

/** Strap along any path: base, edge stitching, stripes, weave texture. */
function strap(d, W, pal, { stitch = true, cap = 'butt', texture = true } = {}) {
  let s = `<g filter="url(#shadow)"><path d="${d}" fill="none" stroke="${pal.base}" stroke-width="${W}" stroke-linecap="${cap}"/></g>`;
  if (stitch) {
    s += `<path d="${d}" fill="none" stroke="${pal.thread}" stroke-width="${W - W * 0.1}" stroke-dasharray="${W * 0.06} ${W * 0.045}" stroke-linecap="butt" opacity=".85"/>`;
    s += `<path d="${d}" fill="none" stroke="${pal.base}" stroke-width="${W - W * 0.1 - Math.max(3, W * 0.025) * 2}" stroke-linecap="butt"/>`;
  }
  for (const [col, frac] of pal.stripes) {
    s += `<path d="${d}" fill="none" stroke="${col}" stroke-width="${W * frac * (stitch ? 0.88 : 1)}" stroke-linecap="butt"/>`;
  }
  if (texture) {
    s += `<path d="${d}" fill="none" stroke="url(#weave)" stroke-width="${W}" stroke-linecap="${cap}"/>`;
  }
  return s;
}

/** Watch seen from above, centred at cx,cy. Lugs point along the angle (deg, 90 = vertical strap). */
function watch(cx, cy, r, { dial = C.paper, hands = C.ink, accent = C.terra, angle = 90, logo = true } = {}) {
  const lug = r * 0.32;
  let s = `<g transform="translate(${cx} ${cy}) rotate(${angle - 90})" filter="url(#shadow)">`;
  // lugs
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) {
    s += `<rect x="${sx * r * 0.52 - r * 0.09}" y="${sy > 0 ? r * 0.72 : -r * 0.72 - lug}" width="${r * 0.18}" height="${lug}" rx="${r * 0.05}" fill="url(#steel)"/>`;
  }
  // crown
  s += `<rect x="${r * 0.96}" y="${-r * 0.1}" width="${r * 0.16}" height="${r * 0.2}" rx="${r * 0.04}" fill="url(#steel)"/>`;
  s += `<circle r="${r}" fill="url(#steelR)"/><circle r="${r * 0.9}" fill="${C.steel3}"/><circle r="${r * 0.86}" fill="${dial}"/>`;
  // indices
  for (let i = 0; i < 60; i++) {
    const a = (i / 60) * Math.PI * 2;
    const big = i % 5 === 0;
    const r1 = r * (big ? 0.66 : 0.76), r2 = r * 0.8;
    s += `<line x1="${Math.sin(a) * r1}" y1="${-Math.cos(a) * r1}" x2="${Math.sin(a) * r2}" y2="${-Math.cos(a) * r2}" stroke="${hands}" stroke-width="${big ? r * 0.035 : r * 0.008}" stroke-linecap="${big ? 'round' : 'butt'}"/>`;
  }
  if (logo) s += text('LON', 0, -r * 0.32, r * 0.13, { f: 'serif', anchor: 'middle', fill: hands });
  // hands at 10:09
  const hand = (deg, len, w, col) => `<line x1="0" y1="${len * 0.18}" x2="0" y2="${-len}" stroke="${col}" stroke-width="${w}" stroke-linecap="round" transform="rotate(${deg})"/>`;
  s += hand(-58, r * 0.46, r * 0.055, hands) + hand(48, r * 0.66, r * 0.04, hands) + hand(150, r * 0.72, r * 0.012, accent);
  s += `<circle r="${r * 0.04}" fill="${accent}"/>`;
  s += `</g>`;
  return s;
}

/** Buckle frame across a strap (local: centred at 0,0, strap runs along x). */
function buckle(x, y, W, angle = 0) {
  const fw = W * 0.55, fh = W * 1.22, t = W * 0.085;
  return `<g transform="translate(${x} ${y}) rotate(${angle})" filter="url(#shadowSm)">
    <rect x="${-fw / 2}" y="${-fh / 2}" width="${fw}" height="${fh}" rx="${t * 1.4}" fill="none" stroke="url(#steel)" stroke-width="${t}"/>
    <rect x="${-fw / 2 - t * 0.3}" y="${-t * 0.45}" width="${fw * 0.9}" height="${t * 0.9}" rx="${t * 0.45}" fill="url(#steel)"/>
  </g>`;
}
function keeper(x, y, W, angle = 0) {
  const kw = W * 0.14, kh = W * 1.08;
  return `<g transform="translate(${x} ${y}) rotate(${angle})" filter="url(#shadowSm)"><rect x="${-kw / 2}" y="${-kh / 2}" width="${kw}" height="${kh}" rx="${kw * 0.25}" fill="url(#steel)"/></g>`;
}
const holes = (x0, y, n, gap, r) => Array.from({ length: n }, (_, i) => `<circle cx="${x0 + i * gap}" cy="${y}" r="${r}" fill="#000" fill-opacity=".45"/><circle cx="${x0 + i * gap}" cy="${y}" r="${r * 0.7}" fill="#000" fill-opacity=".35"/>`).join('');

// ---------- logo ----------
function markSVG(size = 64, { bg = C.navy } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">${markBody(bg)}</svg>`;
}
function markBody(bg = C.navy) {
  return `<rect width="64" height="64" rx="14" fill="${bg}"/>
  <rect x="22" y="0" width="20" height="64" fill="${C.terra}"/>
  <rect x="25" y="0" width="1.6" height="64" fill="${C.cream}" opacity=".85"/><rect x="37.4" y="0" width="1.6" height="64" fill="${C.cream}" opacity=".85"/>
  <rect x="30" y="0" width="4" height="64" fill="${C.mustard}"/>
  <rect x="14" y="18" width="36" height="17" rx="5" fill="none" stroke="${C.cream}" stroke-width="4"/>
  <rect x="30.5" y="26.5" width="3" height="15" rx="1.5" fill="${C.cream}"/>
  <rect x="19" y="44" width="26" height="5" rx="2" fill="${C.cream}"/>`;
}
function lockup({ dark = false } = {}) {
  const size = 96, gap = 26, ts = 74;
  const w1 = width('LaunchOn', ts), w2 = width('Nato', ts);
  const W = size + gap + w1 + w2 + 8, H = size;
  const base = size * 0.72;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${Math.ceil(W)}" height="${H}" viewBox="0 0 ${Math.ceil(W)} ${H}">
  <g transform="scale(${size / 64})">${markBody(dark ? C.navy2 : C.navy)}</g>
  ${text('LaunchOn', size + gap, base, ts, { fill: dark ? C.cream : C.ink })}
  ${text('Nato', size + gap + w1, base, ts, { fill: dark ? C.mustard : C.terra })}
</svg>`;
}

// ---------- scenes ----------
const scenes = {};

scenes['hero-watch-strap.jpg'] = [1200, 1500, () => {
  const W = 230, x = 600;
  let s = `<circle cx="1020" cy="260" r="260" fill="${C.sand}"/><circle cx="130" cy="1330" r="200" fill="${C.sand}"/>`;
  s += strap(`M${x} -40 V1540`, W, PAL.navyTerra);
  // woven wordmark along the upper strap
  s += `<g transform="translate(${x} 220) rotate(-90)">${text('LAUNCHONNATO', 0, 13, 40, { f: 'mono', anchor: 'middle', fill: C.cream, spacing: 6 })}</g>`;
  s += `<path d="M${x} 20 V420" stroke="url(#weave)" stroke-width="${W}"/>`;
  s += watch(x, 700, 300, { dial: C.paper });
  s += keeper(x, 1130, W, 90) + keeper(x, 1205, W, 90) + buckle(x, 1330, W, 90);
  return s;
}];

const flatStrap = (pal, { watchOpts = {}, keepers = [330, 400], buckleX = 220, holeStart = 880, holeN = 6, two = false } = {}) => () => {
  const W = 190, y = 470;
  let s = `<rect x="0" y="${y + 150}" width="1200" height="300" fill="${C.sand}"/>`;
  if (!two) {
    s += strap(`M-30 ${y} H1230`, W, pal);
    s += holes(holeStart, y, holeN, 52, 9);
  } else {
    s += strap(`M120 ${y} H520`, W, pal) + strap(`M680 ${y} H1110`, W, pal, { cap: 'round' });
    s += holes(840, y, 6, 46, 8);
  }
  s += watch(600, y, 235, { angle: 0, ...watchOpts });
  for (const k of keepers) s += keeper(k, y, W);
  s += buckle(buckleX, y, W);
  return s;
};
scenes['strap-pass-through.jpg'] = [1200, 900, flatStrap(PAL.mustard, { watchOpts: { dial: C.navy, hands: C.cream, accent: C.mustard } })];
scenes['strap-single-pass.jpg'] = [1200, 900, flatStrap(PAL.terra, { keepers: [330], watchOpts: { dial: C.cream } })];
scenes['strap-two-piece.jpg'] = [1200, 900, flatStrap(PAL.graphite, { two: true, keepers: [250], buckleX: 160, watchOpts: { dial: C.paper, accent: C.brick } })];

scenes['macro-logo-stitch.jpg'] = [1500, 1000, () => {
  let s = `<g transform="rotate(-7 750 500)">`;
  s += `<rect x="-200" y="90" width="1900" height="820" fill="${C.navy}"/>`;
  s += `<rect x="-200" y="90" width="1900" height="70" fill="${C.terra}"/><rect x="-200" y="840" width="1900" height="70" fill="${C.terra}"/>`;
  s += `<rect x="-200" y="90" width="1900" height="820" fill="url(#weaveBig)"/>`;
  for (const yy of [190, 810]) s += `<line x1="-200" y1="${yy}" x2="1700" y2="${yy}" stroke="${C.cream}" stroke-width="8" stroke-dasharray="34 22" stroke-linecap="round"/>`;
  s += `<g filter="url(#shadowSm)">${text('LaunchOnNato', 750, 565, 180, { anchor: 'middle', fill: C.mustard })}</g>`;
  s += text('LaunchOnNato', 750, 565, 180, { anchor: 'middle', fill: 'url(#satin)' });
  s += `</g>`;
  return s;
}, C.navy];

scenes['logo-embroidery.jpg'] = [800, 800, () => {
  let s = `<g transform="rotate(-8 400 400)"><rect x="-100" y="110" width="1000" height="580" fill="${C.terra}"/>`;
  s += `<rect x="-100" y="110" width="1000" height="580" fill="url(#weaveBig)"/>`;
  for (const yy of [160, 640]) s += `<line x1="-100" y1="${yy}" x2="900" y2="${yy}" stroke="${C.cream}" stroke-width="6" stroke-dasharray="24 16"/>`;
  s += `<g filter="url(#shadowSm)">${text('LON', 400, 485, 250, { anchor: 'middle', fill: C.cream })}</g>`;
  s += text('LON', 400, 485, 250, { anchor: 'middle', fill: 'url(#satin)' }) + `</g>`;
  return s;
}, C.cream];

scenes['logo-jacquard.jpg'] = [800, 800, () => {
  let s = `<g transform="rotate(-8 400 400)"><rect x="-100" y="110" width="1000" height="580" fill="${C.ecru}"/>`;
  for (let r = 0; r < 6; r++) {
    const y = 190 + r * 92, off = r % 2 ? -120 : 0;
    s += text('LAUNCHONNATO · LAUNCHONNATO · LAUNCHONNATO', -60 + off, y, 44, { f: 'mono', fill: r % 3 === 1 ? C.terra : C.navy, spacing: 4 });
  }
  s += `<rect x="-100" y="110" width="1000" height="580" fill="url(#weaveBig)"/>`;
  s += `<rect x="-100" y="110" width="1000" height="22" fill="${C.navy}"/><rect x="-100" y="668" width="1000" height="22" fill="${C.navy}"/></g>`;
  return s;
}, C.sand];

scenes['logo-embossing.jpg'] = [800, 800, () => {
  let s = `<rect x="0" y="0" width="800" height="800" fill="${C.sand}"/>`;
  s += strap(`M400 -40 V840`, 300, PAL.black, { stitch: true });
  s += `<g filter="url(#shadow)"><rect x="215" y="250" width="370" height="300" rx="34" fill="${C.tan}"/></g>`;
  s += `<rect x="215" y="250" width="370" height="300" rx="34" fill="url(#grain)"/>`;
  s += `<rect x="235" y="270" width="330" height="260" rx="22" fill="none" stroke="${C.ecru}" stroke-opacity=".6" stroke-width="4" stroke-dasharray="14 10"/>`;
  s += text('LON', 402, 440, 118, { anchor: 'middle', fill: '#fff', attrs: 'fill-opacity=".22"' });
  s += text('LON', 400, 436, 118, { anchor: 'middle', fill: '#5E3A22' });
  return s;
}];

scenes['logo-engraving-buckle.jpg'] = [800, 800, () => {
  let s = strap(`M-40 400 H840`, 330, PAL.navyTerra);
  s += `<g filter="url(#shadow)"><rect x="210" y="170" width="380" height="460" rx="56" fill="none" stroke="url(#steel)" stroke-width="58"/></g>`;
  s += `<rect x="190" y="374" width="330" height="52" rx="26" fill="url(#steel)" filter="url(#shadowSm)"/>`;
  s += text('LAUNCHONNATO', 400, 625, 34, { f: 'mono', anchor: 'middle', fill: '#4E5560', spacing: 5 });
  s += text('LON', 400, 205, 34, { f: 'serif', anchor: 'middle', fill: '#4E5560' });
  return s;
}];

scenes['process-samples.jpg'] = [1500, 1000, () => {
  let s = `<rect width="1500" height="1000" fill="${C.wood}"/><rect width="1500" height="1000" fill="url(#grain)"/>`;
  for (let i = 1; i < 5; i++) s += `<line x1="0" y1="${i * 220}" x2="1500" y2="${i * 220 - 30}" stroke="${C.wood2}" stroke-width="3"/>`;
  const pals = [PAL.navyTerra, PAL.mustard, PAL.terra, PAL.ecru, PAL.graphite, PAL.sky, PAL.brick];
  s += `<g transform="rotate(-24 750 500)">`;
  pals.forEach((p, i) => {
    const y = 120 + i * 125, x0 = 260 + (i % 2) * 90, x1 = 1220 - (i % 3) * 70;
    s += strap(`M${x0} ${y} H${x1}`, 96, p);
  });
  s += `</g>`;
  // paper tag
  s += `<g transform="rotate(8 1230 820)" filter="url(#shadowSm)"><rect x="1110" y="740" width="250" height="140" rx="10" fill="${C.paper}"/>
    <circle cx="1140" cy="810" r="10" fill="${C.wood}"/>
    ${text('SAMPLE 03', 1170, 795, 26, { f: 'mono', fill: C.ink, spacing: 2 })}${text('20 MM', 1170, 840, 26, { f: 'mono', fill: C.terra, spacing: 2 })}</g>`;
  return s;
}];

scenes['camera-strap.jpg'] = [1200, 1500, () => {
  let s = `<circle cx="600" cy="1080" r="460" fill="${C.sand}"/>`;
  s += strap(`M265 1000 C150 520 380 120 600 120 C820 120 1050 520 935 1000`, 120, PAL.terra, { cap: 'butt' });
  // camera
  s += `<g filter="url(#shadow)">
    <rect x="250" y="980" width="700" height="380" rx="40" fill="#22252B"/>
    <rect x="250" y="980" width="700" height="120" rx="40" fill="url(#steel)"/><rect x="250" y="1060" width="700" height="40" fill="url(#steel)"/>
    <rect x="300" y="940" width="150" height="60" rx="14" fill="url(#steel)"/><rect x="760" y="950" width="110" height="50" rx="12" fill="#22252B"/>
    <rect x="510" y="930" width="180" height="80" rx="16" fill="#2D3138"/>
    <circle cx="600" cy="1220" r="170" fill="url(#steelR)"/><circle cx="600" cy="1220" r="140" fill="#15171B"/>
    <circle cx="600" cy="1220" r="96" fill="#2B3A55"/><circle cx="565" cy="1185" r="30" fill="#fff" fill-opacity=".18"/>
  </g>`;
  s += `<rect x="235" y="985" width="44" height="70" rx="12" fill="url(#steel)"/><rect x="921" y="985" width="44" height="70" rx="12" fill="url(#steel)"/>`;
  s += `<g transform="translate(330 560) rotate(-62)">${text('LAUNCHONNATO', 0, 12, 34, { f: 'mono', anchor: 'middle', fill: C.cream, spacing: 5 })}</g>`;
  return s;
}];

scenes['bag-strap.jpg'] = [1000, 1000, () => {
  let s = strap(`M240 560 C170 200 330 60 500 60 C670 60 830 200 760 560`, 96, PAL.navyTerra);
  for (const x of [240, 760]) s += `<g filter="url(#shadowSm)"><rect x="${x - 34}" y="540" width="68" height="70" rx="20" fill="none" stroke="url(#steel)" stroke-width="14"/><circle cx="${x}" cy="620" r="18" fill="url(#steelR)"/></g>`;
  s += `<g filter="url(#shadow)"><path d="M150 640 Q150 600 190 600 H810 Q850 600 850 640 L890 930 Q895 970 855 970 H145 Q105 970 110 930 Z" fill="${C.ecru}"/></g>`;
  s += `<path d="M150 640 Q150 600 190 600 H810 Q850 600 850 640 L890 930 Q895 970 855 970 H145 Q105 970 110 930 Z" fill="url(#weaveBig)" opacity=".5"/>`;
  s += `<rect x="190" y="690" width="620" height="16" fill="${C.terra}"/><path d="M170 750 H830" stroke="${C.navy}" stroke-width="3" stroke-dasharray="14 10"/>`;
  s += `<rect x="420" y="770" width="160" height="90" rx="10" fill="${C.navy}"/>${text('LON', 500, 830, 44, { anchor: 'middle', fill: C.mustard })}`;
  return s;
}];

scenes['guitar-strap.jpg'] = [1500, 1000, () => {
  let s = `<circle cx="420" cy="620" r="420" fill="${C.sand}"/>`;
  s += `<g transform="rotate(-18 700 560)">`;
  // neck
  s += `<rect x="760" y="520" width="900" height="86" rx="8" fill="#6B4A2E" filter="url(#shadow)"/>`;
  for (let i = 0; i < 14; i++) s += `<line x1="${840 + i * 60}" y1="522" x2="${840 + i * 60}" y2="604" stroke="${C.steel2}" stroke-width="4"/>`;
  // body
  s += `<path d="M200 560 C200 300 470 280 560 400 C620 330 820 360 830 470 L830 650 C820 760 620 790 560 720 C470 840 200 820 200 560 Z" fill="${C.mustard}" filter="url(#shadow)"/>`;
  s += `<path d="M330 560 C330 440 460 430 520 500 L700 500 L700 630 L520 630 C460 690 330 680 330 560 Z" fill="${C.paper}"/>`;
  s += `<rect x="400" y="530" width="44" height="64" rx="6" fill="#22252B"/><rect x="560" y="530" width="44" height="64" rx="6" fill="#22252B"/>`;
  for (let i = 0; i < 6; i++) s += `<line x1="300" y1="${532 + i * 12}" x2="1660" y2="${532 + i * 12}" stroke="${C.steel1}" stroke-width="2"/>`;
  s += `</g>`;
  s += strap(`M235 760 C300 180 900 60 1020 330`, 110, PAL.ecru, { cap: 'butt' });
  s += `<g transform="translate(560 235) rotate(-28)">${text('LAUNCHONNATO', 0, 12, 34, { f: 'mono', anchor: 'middle', fill: C.navy, spacing: 6 })}</g>`;
  return s;
}];

scenes['workshop-sewing.jpg'] = [1920, 1080, () => {
  let s = `<rect x="0" y="760" width="1920" height="320" fill="${C.wood}"/><rect x="0" y="760" width="1920" height="320" fill="url(#grain)"/>`;
  s += `<circle cx="1500" cy="240" r="260" fill="${C.sand}"/>`;
  // tape coming out of the machine
  s += strap(`M-40 690 H1260`, 120, PAL.navyTerra);
  s += `<line x1="-40" y1="690" x2="1180" y2="690" stroke="${C.mustard}" stroke-width="5" stroke-dasharray="18 12"/>`;
  // machine
  s += `<g filter="url(#shadow)">
    <rect x="1080" y="700" width="760" height="90" rx="20" fill="${C.navy}"/>
    <rect x="1560" y="250" width="200" height="470" rx="40" fill="${C.navy}"/>
    <rect x="1120" y="250" width="640" height="150" rx="50" fill="${C.navy}"/>
    <rect x="1100" y="290" width="140" height="300" rx="34" fill="${C.navy}"/>
    <rect x="1150" y="590" width="16" height="110" fill="url(#steel)"/><rect x="1130" y="650" width="56" height="22" rx="6" fill="url(#steel)"/>
    <circle cx="1790" cy="420" r="70" fill="url(#steelR)"/><circle cx="1790" cy="420" r="24" fill="${C.steel3}"/>
    <rect x="1300" y="285" width="220" height="80" rx="16" fill="${C.cream}"/>
  </g>`;
  s += text('LON', 1410, 340, 46, { anchor: 'middle', fill: C.terra });
  s += `<rect x="1610" y="190" width="40" height="70" rx="6" fill="${C.terra}"/><rect x="1600" y="180" width="60" height="14" rx="4" fill="url(#steel)"/>`;
  s += `<path d="M1630 190 C1560 160 1460 220 1430 285" fill="none" stroke="${C.terra}" stroke-width="3"/>`;
  // a roll of tape waiting on the table
  s += `<g filter="url(#shadow)"><circle cx="330" cy="860" r="105" fill="${C.terra}"/></g>`;
  for (let k = 1; k < 8; k++) s += `<circle cx="330" cy="860" r="${105 - k * 9}" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="1.5"/>`;
  s += `<circle cx="330" cy="860" r="34" fill="${C.sand2}"/><circle cx="330" cy="860" r="22" fill="${C.cream}"/>`;
  return s;
}];

scenes['tape-rolls.jpg'] = [900, 900, () => {
  let s = `<rect x="0" y="420" width="900" height="26" fill="${C.wood2}"/><rect x="0" y="846" width="900" height="26" fill="${C.wood2}"/>`;
  const pals = [C.navy, C.terra, C.mustard, C.ecru, C.brick, C.sky];
  pals.forEach((col, i) => {
    const cx = 160 + (i % 3) * 290, cy = 290 + Math.floor(i / 3) * 426, r = 120;
    s += `<g filter="url(#shadow)"><circle cx="${cx}" cy="${cy}" r="${r}" fill="${col}"/></g>`;
    for (let k = 1; k < 9; k++) s += `<circle cx="${cx}" cy="${cy}" r="${r - k * 9}" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="1.5"/>`;
    s += `<circle cx="${cx}" cy="${cy}" r="38" fill="${C.sand2}"/><circle cx="${cx}" cy="${cy}" r="24" fill="${C.cream}"/>`;
    s += `<path d="M${cx + r - 4} ${cy} q30 60 0 136" fill="none" stroke="${col}" stroke-width="40"/>`;
  });
  return s;
}];

scenes['thread-spools.jpg'] = [900, 900, () => {
  let s = `<rect x="0" y="700" width="900" height="200" fill="${C.wood}"/><rect x="0" y="700" width="900" height="200" fill="url(#grain)"/>`;
  const cols = [C.terra, C.navy, C.mustard, C.cream, C.brick];
  cols.forEach((col, i) => {
    const x = 90 + i * 150, h = 300 + (i % 2) * 70, y = 740 - h;
    s += `<g filter="url(#shadow)"><rect x="${x - 10}" y="${y}" width="140" height="26" rx="8" fill="${C.wood2}"/>
      <rect x="${x}" y="${y + 22}" width="120" height="${h - 44}" fill="${col}"/>
      <rect x="${x - 10}" y="${y + h - 26}" width="140" height="26" rx="8" fill="${C.wood2}"/></g>`;
    for (let k = y + 30; k < y + h - 26; k += 7) s += `<line x1="${x}" y1="${k}" x2="${x + 120}" y2="${k + 3}" stroke="#000" stroke-opacity=".12" stroke-width="1.4"/>`;
    s += `<rect x="${x + 14}" y="${y + 22}" width="16" height="${h - 44}" fill="#fff" fill-opacity=".18"/>`;
  });
  s += `<path d="M380 400 C420 600 600 650 900 610" fill="none" stroke="${C.mustard}" stroke-width="3"/>`;
  return s;
}];

scenes['og-image.jpg'] = [1200, 630, () => {
  let s = strap(`M-40 520 H1240`, 110, PAL.navyTerra);
  s += buckle(980, 520, 110) + keeper(1060, 520, 110);
  s += `<g transform="translate(90 120) scale(0.95)">${lockup().replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g>`;
  s += text('Custom straps with your logo — ready for your launch.', 92, 300, 34, { fill: C.ink });
  s += text('WATCH · CAMERA · BAG · GUITAR STRAPS', 92, 360, 22, { f: 'mono', fill: C.terra, spacing: 4 });
  return s;
}];

// ---------- write ----------
mkdirSync(IMG, { recursive: true });
mkdirSync(BRAND, { recursive: true });

for (const [name, [w, h, draw, bg]] of Object.entries(scenes)) {
  const file = join(IMG, name);
  if (existsSync(file) && !force) { console.log('skip (exists)', name); continue; }
  await sharp(Buffer.from(svg(w, h, draw(), bg))).jpeg({ quality: 82, mozjpeg: true, progressive: true }).toFile(file);
  console.log('wrote', name);
}

// logo + favicons
writeFileSync(join(BRAND, 'logo.svg'), lockup());
writeFileSync(join(BRAND, 'logo-on-dark.svg'), lockup({ dark: true }));
writeFileSync(join(BRAND, 'logo-mark.svg'), markSVG(64));
writeFileSync(join(ROOT, 'public/favicon.svg'), markSVG(64));
await sharp(Buffer.from(lockup()), { density: 300 }).png().toFile(join(BRAND, 'logo.png'));
await sharp(Buffer.from(markSVG(64)), { density: 1200 }).resize(1024, 1024).png().toFile(join(BRAND, 'logo-mark.png'));
await sharp(Buffer.from(markSVG(64)), { density: 600 }).resize(180, 180).flatten({ background: C.navy }).png().toFile(join(ROOT, 'public/apple-touch-icon.png'));
const tmp = join(BRAND, '.fav32.png');
await sharp(Buffer.from(markSVG(64)), { density: 300 }).resize(32, 32).png().toFile(tmp);
execSync(`convert "${tmp}" "${join(ROOT, 'public/favicon.ico')}"`);
unlinkSync(tmp);
console.log('wrote logo + favicons');
