// Two jobs:
//   npm run placeholders      → creates labelled placeholder photos in public/images
//                               (existing files are kept; add -- --force to overwrite)
//   npm run images:fit        → after you drop in real photos: resizes anything larger than
//                               the size below and re-compresses it, so the site stays fast.
// Keep the file names. Photos should roughly match the aspect ratio listed for each file.
import sharp from 'sharp';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'public/images');
const force = process.argv.includes('--force');
const fit = process.argv.includes('--fit');

const images = [
  ['hero-watch-strap.jpg', 1200, 1500, 'Watch on wrist, strap with client logo in focus'],
  ['macro-logo-stitch.jpg', 1500, 1000, 'Macro: logo stitches on the tape'],
  ['process-samples.jpg', 1500, 1000, 'Sample straps laid out on the bench'],
  ['logo-embroidery.jpg', 800, 800, 'Close-up: embroidered logo'],
  ['logo-jacquard.jpg', 800, 800, 'Close-up: logo woven into the tape'],
  ['logo-embossing.jpg', 800, 800, 'Close-up: embossed / debossed logo'],
  ['logo-engraving-buckle.jpg', 800, 800, 'Close-up: engraved buckle or keeper'],
  ['strap-pass-through.jpg', 1200, 900, 'Pass-through strap on a watch'],
  ['strap-single-pass.jpg', 1200, 900, 'Single-pass strap on a watch'],
  ['strap-two-piece.jpg', 1200, 900, 'Two-piece strap on a watch'],
  ['camera-strap.jpg', 1200, 1500, 'Camera strap on a camera'],
  ['bag-strap.jpg', 1000, 1000, 'Bag strap on a bag'],
  ['guitar-strap.jpg', 1500, 1000, 'Guitar strap on a guitar'],
  ['workshop-sewing.jpg', 1920, 1080, 'Hands at the sewing machine'],
  ['tape-rolls.jpg', 900, 900, 'Rolls of strap tape on the shelf'],
  ['thread-spools.jpg', 900, 900, 'Thread spools'],
  ['og-image.jpg', 1200, 630, 'Social share image (Open Graph)'],
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function svg(name, w, h, caption) {
  const g = (a, b) => (b ? g(b, a % b) : a);
  const d = g(w, h);
  const ratio = `${w / d}:${h / d}`;
  const band = Math.round(h * 0.09);
  const stripes = ['#1D2433', '#A9472A', '#D6A137', '#F3ECE0', '#A9472A', '#1D2433'];
  const sw = band / stripes.length;
  const fs = Math.round(Math.min(w, h) * 0.05);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <pattern id="weave" width="12" height="12" patternUnits="userSpaceOnUse">
      <rect width="12" height="12" fill="#E9E0D0"/>
      <path d="M0 3h6M6 9h6" stroke="#DDD2BF" stroke-width="3"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#weave)"/>
  ${stripes.map((c, i) => `<rect x="0" y="${(h - band) / 2 + i * sw}" width="${w}" height="${sw + 0.5}" fill="${c}"/>`).join('')}
  <g font-family="DejaVu Sans Mono, monospace" fill="#1D2433" text-anchor="middle">
    <text x="${w / 2}" y="${h / 2 - band / 2 - fs * 1.4}" font-size="${fs}" font-weight="bold">${esc(name)}</text>
    <text x="${w / 2}" y="${h / 2 - band / 2 - fs * 0.5}" font-size="${fs * 0.6}">${w}×${h} · ${ratio}</text>
    <text x="${w / 2}" y="${h / 2 + band / 2 + fs * 1.2}" font-size="${fs * 0.6}">${esc(caption)}</text>
    <text x="${w / 2}" y="${h / 2 + band / 2 + fs * 2.1}" font-size="${fs * 0.5}" fill="#A9472A">TODO: replace with your photo</text>
  </g>
</svg>`;
}

if (fit) {
  for (const [name, w, h] of images) {
    const file = join(OUT, name);
    if (!existsSync(file)) continue;
    const input = readFileSync(file);
    const meta = await sharp(input).metadata();
    const out = await sharp(input)
      .rotate() // respect EXIF orientation
      .resize({ width: w, height: h, fit: 'cover', withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true, progressive: true })
      .toBuffer();
    if (out.length < input.length || (meta.width ?? 0) > w) {
      writeFileSync(file, out);
      console.log(`fitted ${name}: ${meta.width}×${meta.height}, ${Math.round(input.length / 1024)} KB → ${Math.round(out.length / 1024)} KB`);
    }
  }
  process.exit(0);
}

mkdirSync(OUT, { recursive: true });
for (const [name, w, h, caption] of images) {
  const file = join(OUT, name);
  if (existsSync(file) && !force) continue;
  await sharp(Buffer.from(svg(name, w, h, caption))).jpeg({ quality: 72, mozjpeg: true }).toFile(file);
  console.log('wrote', name);
}
