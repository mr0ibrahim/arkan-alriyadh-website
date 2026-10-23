import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root = process.cwd();
const required = ['index.html', '404.html', 'robots.txt', 'services/sheeboard/index.html', 'services/parquet/index.html', 'services/fiber-skirting/index.html', 'services/foam-mouldings/index.html', 'services/painting/index.html'];
let errors = [];
for (const file of required) {
  if (!existsSync(join(root, 'dist', file))) errors.push(`ملف مفقود: ${file}`);
}
for (const file of required.filter(f => f.endsWith('.html'))) {
  const html = readFileSync(join(root, 'dist', file), 'utf8');
  if (!html.includes('lang="ar"') || !html.includes('dir="rtl"')) errors.push(`إعداد اللغة غير صحيح: ${file}`);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`عنوان مفقود: ${file}`);
  for (const match of html.matchAll(/(?:src|href)="(\/[^"?#]+)"/g)) {
    const target = match[1];
    if (target.startsWith('//')) continue;
    const local = join(root, 'dist', target.slice(1));
    if (!existsSync(local) && !existsSync(join(local, 'index.html'))) errors.push(`رابط محلي مكسور في ${file}: ${target}`);
  }
}
const robot = readFileSync(join(root, 'dist', 'robots.txt'), 'utf8');
if (process.env.EXPECT_PRODUCTION === '1') {
  if (!robot.includes('Sitemap:')) errors.push('Sitemap غير مفعلة للإنتاج');
  if (!existsSync(join(root, 'dist', 'sitemap.xml'))) errors.push('sitemap.xml مفقودة');
} else if (!robot.includes('Disallow: /')) errors.push('الفهرسة التجريبية يجب أن تكون مغلقة');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('PASS: الصفحات والروابط المحلية واللغة وإعدادات الفهرسة الأساسية صحيحة.');
