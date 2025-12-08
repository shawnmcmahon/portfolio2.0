/**
 * Asset Setup Script
 * Copies assets from src/Assets to public/Assets for Next.js
 * Run with: node scripts/setup-assets.js
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const srcAssets = path.join(rootDir, 'src', 'Assets');
const publicAssets = path.join(rootDir, 'public', 'Assets');

// Check if source exists
if (!fs.existsSync(srcAssets)) {
  console.log('Source assets folder not found, skipping copy...');
  process.exit(0);
}

// Check if already copied
if (fs.existsSync(publicAssets)) {
  console.log('Assets already copied to public/Assets');
  process.exit(0);
}

// Copy directory recursively
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('Copying assets to public/Assets...');
copyDir(srcAssets, publicAssets);
console.log('Assets copied successfully!');
