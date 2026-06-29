import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src', 'assets', 'images');
const destDir = path.join(process.cwd(), 'public', 'src', 'assets', 'images');

function copyFolderRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyFolderRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${entry.name}`);
    }
  }
}

try {
  console.log('Copying src/assets/images to public/src/assets/images for production compatibility...');
  copyFolderRecursive(srcDir, destDir);
  console.log('Assets copied successfully!');
} catch (error) {
  console.error('Error copying assets:', error);
}
