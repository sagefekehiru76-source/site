# LaunchOnNato — site

Business-card site for LaunchOnNato: custom straps with the client's logo (watch straps first; camera, bag and guitar straps too).
Astro + Tailwind CSS, fully static. English at `/`, Turkish at `/tr/`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
npm run check      # type-check
```

Node 20+ (22 recommended).

## Deploy

**Netlify (recommended, because the quote form works out of the box):** connect the repo. `netlify.toml` already sets
`npm run build` → `dist`. After the first deploy, open *Forms* in the Netlify dashboard: a form named `quote` should show up.
Then set up email notifications under *Forms → Form notifications*. Uploaded logo files are stored by Netlify (up to 8 MB per request).

**Vercel:** import the repo; it detects Astro automatically. Netlify Forms don't work on Vercel, so switch the form
to Formspree in `src/config.ts` (`provider: 'formspree'` + your endpoint). Note: file uploads on Formspree need a paid plan.

## Where things live

| What | File |
| --- | --- |
| English copy | `src/i18n/en.ts` |
| Turkish copy | `src/i18n/tr.ts` |
| Email, owners (phones, addresses), legal details, social links, form backend | `src/config.ts` |
| Domain (sitemap, canonical, Open Graph) | `astro.config.mjs`, `src/config.ts`, `public/robots.txt` |
| Colours & fonts | `src/styles/global.css` (`@theme` block) |
| Page sections | `src/components/*.astro` |
| Photos | `public/images/` |

Any text in the copy files that starts with `TODO` shows on the page as a dashed placeholder chip, so nothing unfinished goes live
unnoticed. When a value is filled in, the chip disappears.

Fonts (self-hosted from Google Fonts via Fontsource, no external requests): **Young Serif** for headings,
**Instrument Sans** for text, **IBM Plex Mono** for small labels. All three cover Turkish characters.

## Photos

Placeholders in `public/images/` already have the right proportions. Replace each with your photo **under the same name**,
then run:

```bash
npm run images:fit
```

It crops/resizes anything too large to the size below and re-compresses it, so Lighthouse stays at 90+.
(To bring the placeholders back: `npm run placeholders -- --force`.)

| File | Size / ratio | What to shoot |
| --- | --- | --- |
| `hero-watch-strap.jpg` | 1200×1500 · 4:5 | Watch on a strap, the logo clearly visible — the main shot |
| `process-samples.jpg` | 1500×1000 · 3:2 | Sample straps in different colours laid out on the bench |
| `macro-logo-stitch.jpg` | 1500×1000 · 3:2 (shown 4:5 on desktop, keep the subject centred) | Macro of logo stitches on the tape |
| `logo-embroidery.jpg` | 800×800 · 1:1 | Close-up: embroidered logo |
| `logo-jacquard.jpg` | 800×800 · 1:1 | Close-up: logo woven into the tape |
| `logo-embossing.jpg` | 800×800 · 1:1 | Close-up: embossed / debossed logo |
| `logo-engraving-buckle.jpg` | 800×800 · 1:1 | Close-up: engraved buckle or keeper |
| `strap-pass-through.jpg` | 1200×900 · 4:3 | Pass-through strap on a watch |
| `strap-single-pass.jpg` | 1200×900 · 4:3 | Single-pass strap on a watch |
| `strap-two-piece.jpg` | 1200×900 · 4:3 | Two-piece strap on a watch |
| `camera-strap.jpg` | 1200×1500 · 4:5 | Camera strap on a camera |
| `bag-strap.jpg` | 1000×1000 · 1:1 | Bag strap on a bag |
| `guitar-strap.jpg` | 1500×1000 · 3:2 | Guitar strap on a guitar |
| `workshop-sewing.jpg` | 1920×1080 · 16:9 | Hands at the sewing machine (keep the bottom-left calm — the heading sits there) |
| `tape-rolls.jpg` | 900×900 · 1:1 | Rolls of tape on a shelf |
| `thread-spools.jpg` | 900×900 · 1:1 | Thread spools |
| `og-image.jpg` | 1200×630 | Image shown when the link is shared (logo + a strap works well) |

## TODO before launch

### Contacts & legal — `src/config.ts`
- [x] `contact.email` — info@natolaunch.ceo
- [x] Owners, phones, addresses — `owners` in `src/config.ts`
- [ ] `legal.companyName` (registered company name)
- [ ] `legal.taxId` (tax office + number / VAT ID)
- [ ] `legal.privacyUrl` — privacy policy / KVKK + GDPR notice (the form collects personal data and files)

### Domain
- [ ] Real domain in `astro.config.mjs` (`site`), `src/config.ts` (`site.url`) and `public/robots.txt`

### Quote form
- [ ] Netlify: enable form email notifications after the first deploy, **or**
- [ ] Vercel/other: `quoteForm.provider = 'formspree'` + `formspreeEndpoint` in `src/config.ts`
- [ ] Reply time in the form intro ("usually within X working days") — `quote.lead`

### Business numbers (both `en.ts` and `tr.ts`)
- [ ] Sample lead time — `process.facts`
- [ ] Production lead time after approval — `process.facts`
- [ ] MOQ per model / colour — `process.facts`, FAQ #1
- [ ] Sample cost and whether it's deducted from the order — FAQ #3
- [ ] Carriers, transit times, who pays customs/VAT for EU — FAQ #4
- [ ] How close you can match brand colours; MOQ for custom-dyed tape — FAQ #6

### Product specs (both languages) — `straps.types[].specs`
- [ ] Thickness for pass-through, single-pass, two-piece
- [ ] Length / fit range for each type
- [ ] Material for each type
- [ ] Confirm the logo options listed for each type
- [ ] Other straps: widths, lengths, end fittings for camera, bag, guitar — `beyond.items[].details`
- [ ] Real tape colour card (names + codes) — `custom.colours` + remove `custom.coloursNote` TODO
- [ ] PVD colours available — `custom.hardware`

### Workshop / About (both languages) — `workshop`
- [ ] 2–3 paragraphs: who you are, where the workshop is, machines, where materials come from — `workshop.body`
- [ ] Tape / thread / hardware details — `workshop.materials`

### Visuals
- [ ] All 17 photos in `public/images/` (see table above), then `npm run images:fit`
- [ ] Hero caption chip ("Pass-through · 20 mm · jacquard logo") matches the hero photo — `hero.tag`
- [ ] Real logo: replace the wordmark in `src/components/Logo.astro`, and `public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png`

### Language
- [ ] Native-speaker proofread of the Turkish copy (`src/i18n/tr.ts`)

To find everything still open: `grep -rn "TODO" src public/robots.txt astro.config.mjs`
