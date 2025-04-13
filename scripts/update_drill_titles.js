const fs = require('fs');
const path = require('path');

// Parse the TOC file
function parseTOC() {
  const tocPath = path.join(__dirname, '../CONTENT/spanishTOC.txt');
  const tocContent = fs.readFileSync(tocPath, 'utf-8');
  const tocLines = tocContent.split('\n');
  
  const toc = {};
  let currentWeek;
  let currentDay;
  
  console.log('Parsing TOC...');
  
  for (let line of tocLines) {
    line = line.trim();
    console.log(`Processing line: ${line}`);
    
    // Skip empty lines and headers
    if (!line || line.startsWith('Programa') || line.startsWith('__')) {
      continue;
    }
    
    // Check for week header (starts with "Semana" and has a number, but no "Día")
    if (line.match(/^Semana \d+/) && !line.includes('Día')) {
      currentWeek = line;
      toc[currentWeek] = {};
      console.log(`Found week: ${currentWeek}`);
    }
    // Check for day header (starts with "Semana" and has "Día")
    else if (line.match(/^Semana \d+ - Día \d+/)) {
      currentDay = line;
      toc[currentWeek][currentDay] = [];
      console.log(`Found day: ${currentDay}`);
    }
    // Check for exercise line (starts with "Ejercicio")
    else if (line.startsWith('Ejercicio')) {
      const title = line.replace('Ejercicio ', '').trim();
      console.log(`Found exercise: ${title}`);
      toc[currentWeek][currentDay].push(title);
    }
  }
  
  console.log('TOC parsed successfully');
  return toc;
}

// Update drill titles in a day page
function updateDayPage(filePath, toc) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Get the week and day from the file path
  const weekDir = path.basename(path.dirname(filePath));
  const dayFile = path.basename(filePath, '.js');
  
  // Get the titles from TOC
  const titles = toc[weekDir][dayFile];
  
  // Update each DrillCard
  let newContent = content;
  for (let i = 0; i < titles.length; i++) {
    const oldTitle = newContent.match(new RegExp(`title="([^"]+)"`, 'm'))[1];
    const newTitle = capitalizeTitle(titles[i]);
    
    // Replace the title
    newContent = newContent.replace(
      new RegExp(`title="${oldTitle}"`, 'm'),
      `title="${newTitle}"`
    );
  }
  
  // Write the updated content
  fs.writeFileSync(filePath, newContent);
  console.log(`Updated ${filePath}`);
}

// Main function to update all day pages
function updateAllDayPages() {
  const toc = parseTOC();
  const baseDir = path.join(__dirname, '../pages/espanol');
  
  // Get all week directories
  const weekDirs = fs.readdirSync(baseDir)
    .filter(dir => dir.startsWith('semana') && !dir.endsWith('.js'))
    .map(dir => path.join(baseDir, dir));
  
  // Process each week
  weekDirs.forEach(weekDir => {
    // Get all day files
    const dayFiles = fs.readdirSync(weekDir)
      .filter(file => file.startsWith('dia') && file.endsWith('.js'))
      .map(file => path.join(weekDir, file));
    
    // Process each day file
    dayFiles.forEach(dayFile => {
      updateDayPage(dayFile, toc);
    });
  });
}

// Run the script
updateAllDayPages();

// Helper function to capitalize titles
function capitalizeTitle(title) {
  return title
    .split(' ')
    .map(word => {
      // Don't capitalize articles unless they're the first word
      if (['el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'de', 'del', 'y', 'con'].includes(word.toLowerCase()) && 
          title.split(' ').indexOf(word) !== 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}