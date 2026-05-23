import { chromium } from 'playwright-core';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'Assets', 'chess-lobby');
const baseUrl = 'https://thechesslobby.com';

const PUBLIC_USER_ID = 'kh70rf4bzqnxjxmyepy2s9s08h879fpn';
const PUBLIC_GAME_ID = 'k973wfk61yxbzhyy2hthvs7hdd8798ba';

const themes = [
  { id: 'default', filePrefix: 'ember', featureAnchor: '#features' },
  { id: 'bento', filePrefix: 'bento', featureAnchor: '#features' },
  { id: 'brutal', filePrefix: 'brutal', featureAnchor: '#features' },
  { id: 'atelier', filePrefix: 'atelier', featureAnchor: '#collection' },
];

const captures = [
  {
    suffix: 'landing',
    path: '/',
    waitMs: 2000,
  },
  {
    suffix: 'features',
    path: '/',
    waitMs: 1000,
    scrollToFeatureAnchor: true,
  },
  {
    suffix: 'login',
    path: '/login',
    waitMs: 2000,
  },
  {
    suffix: 'signup',
    path: '/login',
    waitMs: 1000,
    openSignUp: true,
  },
  {
    suffix: 'profile',
    path: `/player/${PUBLIC_USER_ID}`,
    waitMs: 3000,
  },
  {
    suffix: 'game',
    path: `/game/${PUBLIC_GAME_ID}?spectate=1`,
    waitMs: 4000,
  },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
});

for (const { id, filePrefix, featureAnchor } of themes) {
  for (const capture of captures) {
    const page = await context.newPage();
    await page.addInitScript((themeId) => {
      localStorage.setItem('chess-lobby:theme', themeId);
    }, id);

    const url = `${baseUrl}${capture.path}`;
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });

    if (capture.scrollToFeatureAnchor) {
      await page.locator(featureAnchor).scrollIntoViewIfNeeded();
    }

    if (capture.openSignUp) {
      await page.getByRole('button', { name: /sign up/i }).click();
    }

    await page.waitForTimeout(capture.waitMs);

    const file = path.join(outDir, `${filePrefix}-${capture.suffix}.png`);
    await page.screenshot({ path: file, fullPage: false });
    console.log('Saved', path.basename(file));
    await page.close();
  }
}

await browser.close();
