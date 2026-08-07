import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = './public/images';
const files = fs.readdirSync(dir);

async function convert() {
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const inputPath = path.join(dir, file);
      const fileName = path.parse(file).name;
      const outputPath = path.join(dir, `${fileName}.webp`);
      
      console.log(`Converting ${file}...`);
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
        
        const oldSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        console.log(`  Done: ${(oldSize / 1024).toFixed(2)} KB -> ${(newSize / 1024).toFixed(2)} KB`);
      } catch (err) {
        console.error(`  Error converting ${file}:`, err);
      }
    }
  }
}

convert();
