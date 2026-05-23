import { chromium } from 'playwright-core';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'Assets', 'chess-lobby');
const baseUrl = 'https://thechesslobby.com';

const themes = [
  { id: 'default', filePrefix: 'ember' },
  { id: 'bento', filePrefix: 'bento' },
  { id: 'brutal', filePrefix: 'brutal' },
  { id: 'atelier', filePrefix: 'atelier' },
];

const pages = [
  { path: '/', suffix: 'landing' },
  { path: '/login', suffix: 'login' },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
});

for (const { id, filePrefix } of themes) {
  for (const { path: pagePath, suffix } of pages) {
    const page = await context.newPage();
    await page.addInitScript((themeId) => {
      localStorage.setItem('chess-lobby:theme', themeId);
    }, id);

    const url = `${baseUrl}${pagePath === '/' ? '' : pagePath}`;
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(2000);

    const file = path.join(outDir, `${filePrefix}-${suffix}.png`);
    await page.screenshot({ path: file, fullPage: false });
    console.log('Saved', path.basename(file));
    await page.close();
  }
}

await browser.close();
