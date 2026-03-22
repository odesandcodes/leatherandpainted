#!/usr/bin/env node
// run once: node scripts/download-fonts.mjs
// Downloads Josefin Sans + Inter woff2 files for self-hosting

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const FONT_DIR = join(process.cwd(), 'public', 'fonts');
mkdirSync(FONT_DIR, { recursive: true });

// Google Fonts CSS2 API URLs for woff2 subset
const fonts = [
  // Josefin Sans
  {
    url: 'https://fonts.gstatic.com/s/josefinsans/v32/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_LjQbMZhKSbpUVzEEQ.woff2',
    file: 'JosefinSans-Light.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/josefinsans/v32/Qw3FZQNVED7rKGKxtqIqX5EUCGZ5dL1OekLFnmlAvpDvaFQUVzEEQ.woff2',
    file: 'JosefinSans-LightItalic.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/josefinsans/v32/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMZhKSbpUVzEEQ.woff2',
    file: 'JosefinSans-Regular.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/josefinsans/v32/Qw3FZQNVED7rKGKxtqIqX5EUCGZ5dL1OekiCnmlAvpDvaFQUVzEEQ.woff2',
    file: 'JosefinSans-Italic.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/josefinsans/v32/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_ArRbMZhKSbpUVzEEQ.woff2',
    file: 'JosefinSans-SemiBold.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/josefinsans/v32/Qw3FZQNVED7rKGKxtqIqX5EUCGZ5dL1OekvAnmlAvpDvaFQUVzEEQ.woff2',
    file: 'JosefinSans-SemiBoldItalic.woff2'
  },
  // Inter
  {
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
    file: 'Inter-Light.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2',
    file: 'Inter-SemiBold.woff2'
  },
];

for (const font of fonts) {
  try {
    const res = await fetch(font.url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    writeFileSync(join(FONT_DIR, font.file), Buffer.from(buf));
    console.log(`✓ ${font.file}`);
  } catch (e) {
    console.error(`✗ ${font.file}: ${e.message}`);
  }
}
console.log('\nDone. Files in public/fonts/');
