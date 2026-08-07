import fs from 'fs';
import path from 'path';

const srcDir = './src';

function walk(dir: string, callback: (filePath: string) => void) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, callback);
    } else {
      callback(filePath);
    }
  });
}

const extensionsToReplace = ['.png', '.jpg', '.jpeg'];

walk(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    extensionsToReplace.forEach(ext => {
      // Escape the dot in extension for regex
      const escapedExt = ext.replace('.', '\\.');
      const regex = new RegExp(`images/([^"\'\\s)]+)${escapedExt}`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, `images/$1.webp`);
        changed = true;
      }
    });
    
    if (changed) {
      console.log(`Updating ${filePath}...`);
      fs.writeFileSync(filePath, content);
    }
  }
});
