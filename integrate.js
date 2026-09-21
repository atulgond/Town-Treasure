const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\gonda\\.gemini\\antigravity-ide\\brain\\c166ebd4-aa66-4828-affd-2c4de9126982';
const destDir = 'client/src/assets/states';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
const imageMap = {};

for (const file of files) {
  if (file.startsWith('state_') && file.endsWith('.jpg')) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    // extract state name from filename: state_andhra_pradesh_123.jpg -> Andhra Pradesh
    const parts = file.split('_');
    // pop the timestamp.jpg
    parts.pop(); 
    // remove 'state'
    parts.shift();
    const stateName = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
    imageMap[stateName] = file;
  }
}

let data1Content = fs.readFileSync('client/src/assets/data1.jsx', 'utf8');

// We need to inject imports at the top
const imports = Object.entries(imageMap).map(([state, file], index) => {
  return `import img${index} from './states/${file}';`;
}).join('\n');

// Replace image url with imported variable
for (const [state, file] of Object.entries(imageMap)) {
  const index = Object.keys(imageMap).indexOf(state);
  const regex = new RegExp(`name:\\s*['"]${state}['"]([\\s\\S]*?)image:\\s*['"][^'"]+['"]`, 'g');
  data1Content = data1Content.replace(regex, `name: '${state}'$1image: img${index}`);
}

// Write the imports at the top
data1Content = imports + '\n\n' + data1Content;

fs.writeFileSync('client/src/assets/data1.jsx', data1Content);
console.log('Successfully copied images and updated data1.jsx');
