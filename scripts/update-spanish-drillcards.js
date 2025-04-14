const fs = require('fs');
const path = require('path');

// Get all Spanish day pages
const dayPages = [];

// Get all semana directories
const semanas = fs.readdirSync('pages/espanol')
  .filter(file => fs.statSync(path.join('pages/espanol', file)).isDirectory());

// For each semana directory, get the day files
semanas.forEach(semana => {
  const semanaPath = path.join('pages/espanol', semana);
  const days = fs.readdirSync(semanaPath)
    .filter(file => file.startsWith('dia') && file.endsWith('.js') && !file.includes('test'))
    .map(file => path.join(semanaPath, file));
  dayPages.push(...days);
});

console.log(`Found ${dayPages.length} Spanish day pages to update`);

// Update each file
for (const file of dayPages) {
  const content = fs.readFileSync(file, 'utf8');
  
  // Update import statement
  const updatedContent = content
    .replace(/import DrillCard from.*\n/, 'import EspDrillCard from \'../../../components/EspDrillCard\';\n')
    .replace(/<DrillCard/g, '<EspDrillCard');

  // Write changes back to file
  fs.writeFileSync(file, updatedContent);
  console.log(`Updated: ${file}`);
}

console.log('All Spanish day pages have been updated to use EspDrillCard');
