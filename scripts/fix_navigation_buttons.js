const fs = require('fs');
const path = require('path');

// Base directory
const baseDir = path.join(__dirname, '../pages/espanol');

// Function to get the previous/next day's exercise path
function getExercisePath(week, day, exercise) {
  return `/espanol/semana${week}/dia${day}/ejercicio${exercise}`;
}

// Function to process a single file
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract week, day, and exercise numbers from the path
  const match = filePath.match(/semana(\d+)\/dia(\d+)\/ejercicio(\d+)\.js/);
  if (!match) return;
  
  const [, week, day, exercise] = match.map(Number);
  
  // For ejercicio1: fix previous drill
  if (exercise === 1) {
    // Special case: first exercise of the first day
    if (week === 1 && day === 1) {
      const updatedContent = content
        .replace(/disablePrevious={true}/, 'disablePrevious={true}')
        .replace(/prevDrill="\/espanol\/semana\d+\/dia\d+\/ejercicio0"/, 'prevDrill="/espanol/semana1/dia1/ejercicio0"');
      fs.writeFileSync(filePath, updatedContent);
      return;
    }
    
    const prevDrillPath = getExercisePath(week, day - 1, 5);
    const updatedContent = content
      .replace(/disablePrevious={true}/, 'disablePrevious={false}')
      .replace(/prevDrill="\/espanol\/semana\d+\/dia\d+\/ejercicio0"/, `prevDrill="${prevDrillPath}"`);
    
    fs.writeFileSync(filePath, updatedContent);
  }
  
  // For ejercicio5: fix next drill
  if (exercise === 5) {
    // Special case: last exercise of the last day
    if (week === 5 && day === 5) {
      const updatedContent = content
        .replace(/disableNext={false}/, 'disableNext={true}')
        .replace(/nextDrill="\/espanol\/semana\d+\/dia\d+\/ejercicio\d+"/, 'nextDrill="/espanol/semana6/dia1/ejercicio1"');
      fs.writeFileSync(filePath, updatedContent);
      return;
    }
    
    const nextDrillPath = getExercisePath(week, day + 1, 1);
    const updatedContent = content
      .replace(/disableNext={true}/, 'disableNext={false}')
      .replace(/nextDrill="\/espanol\/semana\d+\/dia\d+\/ejercicio\d+"/, `nextDrill="${nextDrillPath}"`);
    
    fs.writeFileSync(filePath, updatedContent);
  }
}

// Process all exercise files
function processAllFiles() {
  const exerciseFiles = fs.readdirSync(baseDir, { recursive: true })
    .filter(file => file.endsWith('.js') && /ejercicio[1-5]\.js$/.test(file))
    .map(file => path.join(baseDir, file));

  exerciseFiles.forEach(file => {
    try {
      processFile(file);
      console.log(`Processed: ${file}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  });
}

// Run the script
processAllFiles();
