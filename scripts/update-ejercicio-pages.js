const fs = require('fs');
const path = require('path');

// Template for EspDrillBar component
const espDrillBarTemplate = `
  return (
    <>
      <MainEspNavBar />
      <EspDrillBar
        title="{TITLE}"
        backButtonText="{BACK_BUTTON_TEXT}"
        videoId="{VIDEO_ID}"
        videoStart={VIDEO_START}
        setup={SETUP}
        instructions={INSTRUCTIONS}
        setsReps={SETS_REPS}
        whatToFeel={WHAT_TO_FEEL}
        whatToAvoid={WHAT_TO_AVOID}
        redFlags={RED_FLAGS}
        regression={REGRESSION}
      />
    </>
  );`;

// Function to get exercise info from file path
function getExerciseInfo(filePath) {
  const parts = filePath.split(path.sep);
  const ejercicio = parts[parts.length - 1];
  const dia = parts[parts.length - 2];
  const semana = parts[parts.length - 3];
  
  const exerciseNumber = ejercicio.match(/\d+/)[0];
  const dayNumber = dia.match(/\d+/)[0];
  const weekNumber = semana.match(/\d+/)[0];
  
  return {
    exerciseNumber,
    dayNumber,
    weekNumber
  };
}

// Function to update a single file
function updateFile(filePath) {
  try {
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');

    // Add MainEspNavBar import at the top (if not already present)
    if (!content.includes('import MainEspNavBar')) {
      content = content.replace(
        'import EspDrillBar',
        'import MainEspNavBar from \"../../../../components/MainEspNavBar\";\nimport EspDrillBar'
      );
    }

    // Replace DrillTemplateEspanol with EspDrillBar
    content = content.replace('DrillTemplateEspanol', 'EspDrillBar');

    // Get exercise info from file path
    const { exerciseNumber, dayNumber, weekNumber } = getExerciseInfo(filePath);
    
    // Get the function name
    const functionContent = content.split('export default function')[1];
    const functionName = functionContent.split('(')[0].trim();
    
    // Create the title
    const exerciseName = functionName.replace(/\d+/, '');
    const title = `Ejercicio ${exerciseNumber}: ${exerciseName}`;
    const backButtonText = `Semana ${weekNumber} - Día ${dayNumber}`;

    // Get the props from the content
    const videoId = content.match(/videoId:.*?,/);
    const videoStart = content.match(/videoStart:.*?,/);
    const setup = content.match(/setup:.*?,/);
    const instructions = content.match(/instructions:.*?,/);
    const setsReps = content.match(/setsReps:.*?,/);
    const whatToFeel = content.match(/whatToFeel:.*?,/);
    const whatToAvoid = content.match(/whatToAvoid:.*?,/);
    const redFlags = content.match(/redFlags:.*?,/);
    const regression = content.match(/regression:.*?,/);

    // Set default values if props are not found
    const videoIdValue = videoId ? videoId[0].replace('videoId:', '').trim() : '';
    const videoStartValue = videoStart ? videoStart[0].replace('videoStart:', '').trim() : '0';
    const setupValue = setup ? setup[0].replace('setup:', '').trim() : '[]';
    const instructionsValue = instructions ? instructions[0].replace('instructions:', '').trim() : '[]';
    const setsRepsValue = setsReps ? setsReps[0].replace('setsReps:', '').trim() : '[]';
    const whatToFeelValue = whatToFeel ? whatToFeel[0].replace('whatToFeel:', '').trim() : '[]';
    const whatToAvoidValue = whatToAvoid ? whatToAvoid[0].replace('whatToAvoid:', '').trim() : '[]';
    const redFlagsValue = redFlags ? redFlags[0].replace('redFlags:', '').trim() : '[]';
    const regressionValue = regression ? regression[0].replace('regression:', '').trim() : '[]';

    // Update the template with the correct values
    const updatedTemplate = espDrillBarTemplate
      .replace('{TITLE}', title)
      .replace('{BACK_BUTTON_TEXT}', backButtonText)
      .replace('{VIDEO_ID}', videoIdValue)
      .replace('{VIDEO_START}', videoStartValue)
      .replace('{SETUP}', setupValue)
      .replace('{INSTRUCTIONS}', instructionsValue)
      .replace('{SETS_REPS}', setsRepsValue)
      .replace('{WHAT_TO_FEEL}', whatToFeelValue)
      .replace('{WHAT_TO_AVOID}', whatToAvoidValue)
      .replace('{RED_FLAGS}', redFlagsValue)
      .replace('{REGRESSION}', regressionValue);

    // Replace the return statement
    content = content.replace(/return.*\);\n\}/, updatedTemplate);

    // Write the updated content back to the file
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
  } catch (error) {
    console.error(`Error updating ${filePath}: ${error.message}`);
  }
}

// Function to find all ejercicio files
function findEjercicioFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      files.push(...findEjercicioFiles(fullPath));
    } else if (item.startsWith('ejercicio') && item.endsWith('.js')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
const ejercicioFiles = findEjercicioFiles(path.join(__dirname, '../pages/espanol'));
console.log(`Found ${ejercicioFiles.length} ejercicio files`);

// Update each file
ejercicioFiles.forEach(file => updateFile(file));

console.log('Script execution completed');
