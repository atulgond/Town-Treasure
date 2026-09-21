const fs = require('fs');
const fileContent = fs.readFileSync('client/src/assets/data.jsx', 'utf8');

// Using regex to replace objects. We can just add state: 'Uttar Pradesh' to each object.
const updatedContent = fileContent.replace(/name:\s*['"]([^'"]+)['"]/g, (match, name) => {
  return match + ',\n        state: \'Uttar Pradesh\'';
});

fs.writeFileSync('client/src/assets/data.jsx', updatedContent);
console.log('Updated data.jsx');
