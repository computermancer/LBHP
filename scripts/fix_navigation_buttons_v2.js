const fs = require('fs');
const path = require('path');

// Base directory
const baseDir = path.join(__dirname, '../pages/espanol');

// Function to get the previous/next day's exercise path
function getExercisePath(week, day, exercise) {
  return `/espanol/semana${week}/dia${day}/ejercicio${exercise}`;
}

// Function to get the first exercise of the next week
function getNextWeekFirstExercise(week) {
  return `/espanol/semana${week + 1}/dia1/ejercicio1`;
}

// Function to get the last exercise of the previous week
function getLastExerciseOfPreviousWeek(week) {
  return `/espanol/semana${week - 1}/dia5/ejercicio5`;
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
        .replace(/prevDrill="\/espanol\/semana\d+\/dia\d+\/ejercicio\d+"/, 'prevDrill="/espanol/semana1/dia1/ejercicio0"');
      fs.writeFileSync(filePath, updatedContent);
      return;
    }
    
    // Special case: first day of a week (dia1)
    if (day === 1) {
      const lastExerciseOfPreviousWeek = getLastExerciseOfPreviousWeek(week);
      const updatedContent = content
        .replace(/disablePrevious={true}/, 'disablePrevious={false}')
        .replace(/prevDrill="\/espanol\/semana\d+\/dia\d+\/ejercicio\d+"/, `prevDrill="${lastExerciseOfPreviousWeek}"`)
        .replace(/prevDrill="\/espanol\/semana\d+\/dia0\/ejercicio\d+"/, `prevDrill="${lastExerciseOfPreviousWeek}"`);
      
      fs.writeFileSync(filePath, updatedContent);
      return;
    }
    
    // Regular case: set prevDrill to point to the last exercise of the previous day
    const prevDrillPath = getExercisePath(week, day - 1, 5);
    const updatedContent = content
      .replace(/disablePrevious={true}/, 'disablePrevious={false}')
      .replace(/prevDrill="\/espanol\/semana\d+\/dia\d+\/ejercicio\d+"/, `prevDrill="${prevDrillPath}"`)
      .replace(/prevDrill="\/espanol\/semana\d+\/dia0\/ejercicio\d+"/, `prevDrill="${prevDrillPath}"`);
    
    fs.writeFileSync(filePath, updatedContent);
  }
  
  // For ejercicio5: fix next drill
  if (exercise === 5) {
    // Special case: last exercise of the last day
    if (week === 5 && day === 5) {
      const updatedContent = content
        .replace(/disableNext={false}/, 'disableNext={true}')
        .replace(/nextDrill="\/espanol\/semana\d+\/dia\d+\/ejercicio\d+"/, 'nextDrill="/espanol/semana6/dia1/ejercicio1"')
        .replace(/nextDrill="\/espanol\/semana\d+\/dia6\/ejercicio\d+"/, 'nextDrill="/espanol/semana6/dia1/ejercicio1"');
      fs.writeFileSync(filePath, updatedContent);
      return;
    }
    
    // Special case: last exercise of a week (dia5)
    if (day === 5) {
      const nextWeekFirstExercise = getNextWeekFirstExercise(week);
      const updatedContent = content
        .replace(/disableNext={true}/, 'disableNext={false}')
        .replace(/nextDrill="\/espanol\/semana\d+\/dia\d+\/ejercicio\d+"/, `nextDrill="${nextWeekFirstExercise}"`)
        .replace(/nextDrill="\/espanol\/semana\d+\/dia6\/ejercicio\d+"/, `nextDrill="${nextWeekFirstExercise}"`);
      
      fs.writeFileSync(filePath, updatedContent);
      return;
    }
    
    // Regular case: set nextDrill to point to the first exercise of the next day
    const nextDrillPath = getExercisePath(week, day + 1, 1);
    const updatedContent = content
      .replace(/disableNext={true}/, 'disableNext={false}')
      .replace(/nextDrill="\/espanol\/semana\d+\/dia\d+\/ejercicio\d+"/, `nextDrill="${nextDrillPath}"`)
      .replace(/nextDrill="\/espanol\/semana\d+\/dia6\/ejercicio\d+"/, `nextDrill="${nextDrillPath}"`);
    
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
