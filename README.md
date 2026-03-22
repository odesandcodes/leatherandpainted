# Leather and Paint — Astro Site

Ported from Carrd → Astro + Cloudflare Pages.

## Stack
- **Astro** (static output)
- **Cloudflare Pages** (deploy)
- **Self-hosted fonts** (Josefin Sans + Inter)
- No external form handlers — contact uses `mailto:`

---

## Local Dev Setup

```bash
# 1. Install dependencies
npm install

# 2. Download self-hosted fonts (run once)
node scripts/download-fonts.mjs

# 3. Start dev server
npm run dev
```

Open http://localhost:4321

---

## Images

Drop your images into `public/images/`:

```
public/images/
  image01.jpg              ← hero
  card.jpg                 ← OG social card (1280×800)
  favicon.png
  apple-touch-icon.png
  gallery01/
    4ba711d5.jpg           ← Wallets
    a5320bb8.jpg           ← Bags
  gallery02/
    85b393b1.jpg           ← Totes
    1a51a31c.jpg           ← Accessories
  gallery03/
    6ce736d7.jpg           ← coasters
    7e0cb916.jpg           ← prototyping
    ea426600.jpg           ← an idea
  slideshow/
    slide01.jpg            ← add as many as you like
    slide02.jpg
    slide03.jpg
    ...
```

To add more slideshow images, just drop them in `public/images/slideshow/`
and add them to the `slideshowImages` array in `src/pages/index.astro`.

---

## PayPal Link

In `src/pages/index.astro`, update the `paypalUrl` variable:

```js
const paypalUrl = 'https://www.paypal.com/paypalme/YOUR_HANDLE';
// or a full PayPal Buy Now button URL
```

---

## Deploy to Cloudflare Pages

1. Push repo to GitHub
2. In Cloudflare Pages → Create a project → Connect to GitHub
3. Build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Deploy

Custom domain: add `leatherandpainted.com` in Cloudflare Pages → Custom domains.

---

## Contact Email

Email is `2eps2gether@gmail.com` — hardcoded in `src/components/Contact.astro`.
Clicking "Send a Message" opens a modal showing the address and an "Open Email App" button.
The email link in the footer and icons also use this address directly.
