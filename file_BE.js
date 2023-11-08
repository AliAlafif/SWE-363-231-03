const fs = require('fs');
const path = require('path');

const sourceDir = process.argv[2];
const targetDir = process.argv[3];

if (!fs.existsSync(sourceDir)) {
  console.error('Source directory does not exist.');
  process.exit(1);
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

const files = fs.readdirSync(sourceDir);

const filteredFiles = files.filter(file => {
  const ext = path.extname(file);
  return ext === '.txt' || ext === '.jpg';
});

for (const file of filteredFiles) {
  const sourcePath = path.join(sourceDir, file);
  const targetPath = path.join(targetDir, file);
  fs.copyFileSync(sourcePath, targetPath);
}

console.log('Successfully copied files to target directory.');