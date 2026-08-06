const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const heroFiles = [
  'las-vegas-hero.png',
  'locations-hero.png',
  'los-angeles-county-hero.png',
  'los-angeles-county-long-beach-hero.png',
  'los-angeles-county-pasadena-hero.png',
  'riverside-county-hero.png',
  'riverside-county-murrieta-hero.png',
  'riverside-county-riverside-hero.png',
  'san-bernardino-county-hero.png',
  'san-bernardino-county-rancho-cucamonga-hero.png',
  'san-francisco-hero.png',
];

(async () => {
  for (const file of heroFiles) {
    const inPath = path.join(publicDir, file);
    const outPath = path.join(publicDir, file.replace(/\.png$/, '.webp'));
    if (!fs.existsSync(inPath)) {
      console.log(`SKIP (missing): ${file}`);
      continue;
    }
    const inStat = fs.statSync(inPath);
    await sharp(inPath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outPath);
    const outStat = fs.statSync(outPath);
    console.log(
      `OK: ${file} (${(inStat.size / 1024).toFixed(0)} KB) -> ${path.basename(outPath)} (${(outStat.size / 1024).toFixed(0)} KB)`,
    );
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
