import fs from 'fs';
import path from 'path';

const dir = './public/images';
const files = fs.readdirSync(dir);

files.forEach(file => {
  const ext = path.extname(file).toLowerCase();
  // Delete original files only if a .webp version exists
  if (['.png', '.jpg', '.jpeg'].includes(ext)) {
    const webpPath = path.join(dir, `${path.parse(file).name}.webp`);
    if (fs.existsSync(webpPath)) {
      console.log(`Deleting original ${file}...`);
      fs.unlinkSync(path.join(dir, file));
    }
  }
});
