import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const paths = [
  '/',
  '/services/sheeboard/',
  '/services/parquet/',
  '/services/fiber-skirting/',
  '/services/foam-mouldings/',
  '/services/painting/',
];

for (const path of paths) {
  test(`page health ${path}`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));
    const response = await page.goto(path, { waitUntil: 'networkidle' });
    expect(response?.status(), `${path}: HTTP status`).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.locator('h1').first()).toBeVisible();
    expect(errors, `${path}: JS errors`).toEqual([]);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 3);
    expect(overflow, `${path}: horizontal overflow`).toBe(false);
    // Trigger lazy loading without scrolling hidden/lightbox images.
    // A hidden gallery image can never satisfy scrollIntoViewIfNeeded().
    const imageResults = await page.evaluate(async () => {
      const candidates = [...document.images].filter(img =>
        img.getAttribute('src') || img.getAttribute('srcset')
      );
      for (const img of candidates) img.loading = 'eager';
      return await Promise.all(candidates.map(async img => {
        const source = img.currentSrc || img.src || '(empty src)';
        if (!img.complete) {
          await Promise.race([
            new Promise(resolve => {
              img.addEventListener('load', resolve, { once: true });
              img.addEventListener('error', resolve, { once: true });
            }),
            new Promise(resolve => setTimeout(resolve, 12000)),
          ]);
        }
        return { source, loaded: img.complete && img.naturalWidth > 0 };
      }));
    });
    expect(imageResults.filter(result => !result.loaded),
      `${path}: images failed to load`).toEqual([]);
    const internalLinks = await page.locator('a[href]').evaluateAll(nodes => nodes.map(a => a.getAttribute('href')).filter(h => h && h.startsWith('/')));
    for (const link of [...new Set(internalLinks)]) {
      if (link.startsWith('//')) continue;
      const dest = link.split('#')[0] || '/';
      const r = await page.request.get(dest, { failOnStatusCode: false });
      expect(r.ok(), `${path}: broken link ${link}`).toBeTruthy();
    }
  });
}

test('home content and contact links', async ({ page }) => {
  await page.goto('/');
  const visibleText = await page.locator('body').innerText();
  for (const service of ['الشيبورد', 'باركيه', 'الفايبر', 'الفوم', 'الدهانات']) {
    expect(visibleText, `missing service: ${service}`).toContain(service);
  }
  const links = await page.locator('a[href]').evaluateAll(a => a.map(x => x.href));
  expect(links.some(h => h.startsWith('https://wa.me/966533340982'))).toBe(true);
  expect(links.some(h => h.startsWith('tel:+966533340982'))).toBe(true);
});

test('automated accessibility checks home', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations.map(v => `${v.id}: ${v.help} (${v.nodes.length})`)).toEqual([]);
});
