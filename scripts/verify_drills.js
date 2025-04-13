const fs = require('fs');
const path = require('path');

// Define the base directory
const baseDir = path.join(__dirname, '../pages/espanol');

// Define the TOC structure
const toc = {
  'semana1': {
    'dia1': [
      "Inclinación pélvica posterior en la pared",
      "Respiración abdominal con gancho",
      "Balanceo pélvico sentado",
      "Alcance 90-90 supino",
      "Press de pared para isquiotibiales"
    ],
    'dia2': [
      "Expansión lateral de las costillas",
      "Rotación torácica sentado",
      "Bisagra de cadera de pie con alcance de pared",
      "Rock Back cuadrúpedo con columna neutra",
      "Sentadilla con apoyo en la pared"
    ],
    // Add other days as needed
  },
  // Add other weeks as needed
};

function verifyDrillFile(filePath, expectedTitle) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Check title
  const titleMatch = content.match(/title="([^"]+)"/);
  if (!titleMatch) {
    console.error(`❌ Missing title in ${filePath}`);
    return false;
  }
  
  const actualTitle = titleMatch[1];
  const expectedFullTitle = `Ejercicio ${filePath.split('/').pop().split('.')[0].slice(-1)}: ${expectedTitle}`;
  
  if (actualTitle !== expectedFullTitle) {
    console.error(`❌ Title mismatch in ${filePath}`);
    console.error(`   Expected: ${expectedFullTitle}`);
    console.error(`   Actual: ${actualTitle}`);
    return false;
  }
  
  // Check navigation
  const prevMatch = content.match(/prevDrill="([^"]+)"/);
  const nextMatch = content.match(/nextDrill="([^"]+)"/);
  
  if (!prevMatch || !nextMatch) {
    console.error(`❌ Missing navigation links in ${filePath}`);
    return false;
  }
  
  return true;
}

function verifyWeek(weekDir) {
  const week = path.basename(weekDir);
  const weekNumber = parseInt(week.replace('semana', ''));
  
  // Get all day directories
  const dayDirs = fs.readdirSync(weekDir)
    .filter(dir => dir.startsWith('dia'))
    .map(dir => path.join(weekDir, dir));
  
  dayDirs.forEach(dayDir => {
    const day = path.basename(dayDir);
    const dayNumber = parseInt(day.replace('dia', ''));
    
    // Get all exercise files
    const exerciseFiles = fs.readdirSync(dayDir)
      .filter(file => file.startsWith('ejercicio'))
      .map(file => path.join(dayDir, file));
    
    exerciseFiles.forEach(file => {
      const exerciseNumber = parseInt(file.split('/').pop().split('.')[0].replace('ejercicio', ''));
      const expectedTitle = toc[week][day][exerciseNumber - 1];
      
      if (!expectedTitle) {
        console.error(`❌ Missing title in TOC for ${file}`);
        return;
      }
      
      const isValid = verifyDrillFile(file, expectedTitle);
      if (isValid) {
        console.log(`✅ ${file} is valid`);
      }
    });
  });
}

// Start verification
console.log('Starting drill verification...');

// Get all week directories
const weekDirs = fs.readdirSync(baseDir)
  .filter(dir => dir.startsWith('semana'))
  .map(dir => path.join(baseDir, dir));

weekDirs.forEach(weekDir => {
  verifyWeek(weekDir);
});

console.log('Verification complete!');
