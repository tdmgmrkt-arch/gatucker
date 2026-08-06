const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const mapping = [
  ['src/app/locations/riverside-county/page.tsx', '/riverside-county-hero.webp'],
  ['src/app/locations/riverside-county/murrieta/page.tsx', '/riverside-county-murrieta-hero.webp'],
  ['src/app/locations/riverside-county/riverside/page.tsx', '/riverside-county-riverside-hero.webp'],
  ['src/app/locations/los-angeles-county/page.tsx', '/los-angeles-county-hero.webp'],
  ['src/app/locations/los-angeles-county/long-beach/page.tsx', '/los-angeles-county-long-beach-hero.webp'],
  ['src/app/locations/los-angeles-county/pasadena/page.tsx', '/los-angeles-county-pasadena-hero.webp'],
  ['src/app/locations/san-bernardino-county/page.tsx', '/san-bernardino-county-hero.webp'],
  ['src/app/locations/san-bernardino-county/rancho-cucamonga/page.tsx', '/san-bernardino-county-rancho-cucamonga-hero.webp'],
  ['src/app/locations/san-francisco/page.tsx', '/san-francisco-hero.webp'],
  ['src/app/locations/las-vegas/page.tsx', '/las-vegas-hero.webp'],
];

for (const [relPath, imgPath] of mapping) {
  const full = path.join(root, relPath);
  let src = fs.readFileSync(full, 'utf8');

  if (src.includes('heroImage:')) {
    console.log(`SKIP (already wired): ${relPath}`);
    continue;
  }

  const replaced = src.replace(
    /(\n\s*lastUpdated:\s*"[^"]+",)/,
    `$1\n  heroImage: "${imgPath}",`,
  );

  if (replaced === src) {
    console.log(`FAIL (no lastUpdated match): ${relPath}`);
    continue;
  }

  fs.writeFileSync(full, replaced, 'utf8');
  console.log(`OK: ${relPath} -> ${imgPath}`);
}
