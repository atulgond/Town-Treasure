const fs = require('fs');
const path = require('path');
const https = require('https');

const data1Path = path.join(__dirname, 'client', 'src', 'assets', 'data1.jsx');
const destDir = path.join(__dirname, 'client', 'src', 'assets', 'states');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let content = fs.readFileSync(data1Path, 'utf8');

// The pattern to match names and URLs
// We match name: 'State Name' and image: 'https://...'
const regex = /name:\s*'([^']+)'[\s\S]*?image:\s*['"](https:\/\/[^'"]+)['"]/g;

let match;
const downloads = [];

while ((match = regex.exec(content)) !== null) {
  const stateName = match[1];
  const url = match[2];
  
  // Format state name to filename: "Himachal Pradesh" -> "state_himachal_pradesh.jpg"
  const fileName = 'state_' + stateName.toLowerCase().replace(/[^a-z0-9]/g, '_') + '.jpg';
  const destPath = path.join(destDir, fileName);
  
  downloads.push({ stateName, url, fileName, destPath });
}

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log(`Found ${downloads.length} images to download...`);
  
  for (const item of downloads) {
    console.log(`Downloading ${item.stateName}...`);
    try {
      await downloadFile(item.url, item.destPath);
    } catch (e) {
      console.error(`Failed to download ${item.stateName}: ${e}`);
    }
  }
  
  // Now we need to update data1.jsx to use these local images
  let newData1Content = fs.readFileSync(data1Path, 'utf8');
  
  // Find the highest existing img index
  // import img0 from ...
  const existingImportsMatch = [...newData1Content.matchAll(/import img(\d+) from/g)];
  let maxIndex = -1;
  for (const m of existingImportsMatch) {
    const idx = parseInt(m[1], 10);
    if (idx > maxIndex) maxIndex = idx;
  }
  
  let nextIndex = maxIndex + 1;
  let newImports = '';
  
  for (const item of downloads) {
    const imgVar = `img${nextIndex}`;
    nextIndex++;
    
    newImports += `import ${imgVar} from './states/${item.fileName}';\n`;
    
    const replaceRegex = new RegExp(`name:\\s*['"]${item.stateName}['"]([\\s\\S]*?)image:\\s*['"]https:\/\/[^'"]+['"]`, 'g');
    newData1Content = newData1Content.replace(replaceRegex, `name: '${item.stateName}'$1image: ${imgVar}`);
  }
  
  // Add new imports after the existing ones
  // We can just put them at the top of the file
  if (newImports) {
    // Find where the last import ends
    const lastImportIndex = newData1Content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfLastImport = newData1Content.indexOf('\n', lastImportIndex);
      newData1Content = newData1Content.slice(0, endOfLastImport + 1) + newImports + newData1Content.slice(endOfLastImport + 1);
    } else {
      newData1Content = newImports + '\n' + newData1Content;
    }
  }
  
  fs.writeFileSync(data1Path, newData1Content);
  console.log('All done! data1.jsx updated with local image imports.');
}

main();
