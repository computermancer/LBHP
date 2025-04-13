const fs = require('fs').promises;
const path = require('path');

// Define navigation rules
function getNavigationPaths(week, day, exercise) {
  const totalWeeks = 5;
  const totalDays = 5;
  const totalExercises = 5;

  // Previous exercise
  let prevDrill;
  let disablePrevious = false;
  
  // First exercise of the week
  if (exercise === 1 && day === 1) {
    // Point to last exercise of previous week
    prevDrill = `/espanol/semana${week - 1}/dia${totalDays}/ejercicio${totalExercises}`;
    disablePrevious = week === 1;
  }
  // First exercise of the day
  else if (exercise === 1) {
    // Point to last exercise of previous day
    prevDrill = `/espanol/semana${week}/dia${day - 1}/ejercicio${totalExercises}`;
  }
  // Other exercises
  else {
    // Point to previous exercise in same day
    prevDrill = `/espanol/semana${week}/dia${day}/ejercicio${exercise - 1}`;
  }

  // Next exercise
  let nextDrill;
  
  // Last exercise of the week
  if (exercise === totalExercises && day === totalDays) {
    // Point to first exercise of next week
    nextDrill = `/espanol/semana${week + 1}/dia1/ejercicio1`;
  }
  // Last exercise of the day
  else if (exercise === totalExercises) {
    // Point to first exercise of next day
    nextDrill = `/espanol/semana${week}/dia${day + 1}/ejercicio1`;
  }
  // Other exercises
  else {
    // Point to next exercise in same day
    nextDrill = `/espanol/semana${week}/dia${day}/ejercicio${exercise + 1}`;
  }

  // Current day path
  const currentDay = `/espanol/semana${week}/dia${day}`;

  return {
    prevDrill,
    currentDay,
    nextDrill,
    disablePrevious
  };
}

async function fixAllNavigation() {
  try {
    // Loop through all weeks
    for (let week = 1; week <= 5; week++) {
      // Loop through all days
      for (let day = 1; day <= 5; day++) {
        // Loop through all exercises
        for (let exercise = 1; exercise <= 5; exercise++) {
          const filePath = path.join(__dirname, '../pages/espanol/semana' + week + '/dia' + day + '/ejercicio' + exercise + '.js');
          
          // Check if the file exists
          try {
            const content = await fs.readFile(filePath, 'utf-8');
            
            // Get navigation paths
            const { prevDrill, currentDay, nextDrill, disablePrevious } = getNavigationPaths(week, day, exercise);

            // Update the navigation paths in the file
            let updatedContent = content;

            // Update previous drill path
            updatedContent = updatedContent.replace(/prevDrill="[^"]*"/, `prevDrill="${prevDrill}"`);
            
            // Update current day path
            updatedContent = updatedContent.replace(/currentDay="[^"]*"/, `currentDay="${currentDay}"`);
            
            // Update next drill path
            updatedContent = updatedContent.replace(/nextDrill="[^"]*"/, `nextDrill="${nextDrill}"`);
            
            // Update disablePrevious prop
            updatedContent = updatedContent.replace(/disablePrevious={.*}/, `disablePrevious={${disablePrevious}}`);

            // Write the updated content back to the file
            await fs.writeFile(filePath, updatedContent);
            console.log(`Updated navigation for ${filePath}`);
          } catch (error) {
            if (error.code === 'ENOENT') {
              // File doesn't exist, which is fine
              continue;
            }
            console.error(`Error processing ${filePath}:`, error);
          }
        }
      }
    }

    console.log('All navigation paths have been updated successfully!');
  } catch (error) {
    console.error('Error fixing navigation:', error);
  }
}

// Run the script
fixAllNavigation();
