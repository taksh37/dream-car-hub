// Script to fix image paths from /src/assets/cars/ to /cars/
// Run with: node scripts/fix-image-paths.js

const fs = require('fs');
const path = require('path');

const files = [
  'src/data/luxury-cars.ts',
  'src/data/mid-luxury-cars.ts',
  'src/data/semi-luxury-cars.ts',
  'src/data/indian-cars.ts'
];

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace all occurrences
  content = content.replace(/\/src\/assets\/cars\//g, '/cars/');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Fixed ${file}`);
});

console.log('\n✅ All image paths updated successfully!');
