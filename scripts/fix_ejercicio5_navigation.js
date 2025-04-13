const fs = require('fs').promises;
const path = require('path');

async function fixEjercicio5Navigation() {
  try {
    // Loop through all weeks
    for (let week = 1; week <= 5; week++) {
      // Loop through all days
      for (let day = 1; day <= 5; day++) {
        const filePath = path.join(__dirname, '../pages/espanol/semana' + week + '/dia' + day + '/ejercicio5.js');
        
        // Check if the file exists
        try {
          const content = await fs.readFile(filePath, 'utf-8');
          
          // Update the navigation path in the file
          const updatedContent = content.replace(
            /nextDrill="\/espanol\/semana\d+\/dia\d+\/ejercicio6"/,
            `nextDrill="/espanol/semana${week}/dia${day + 1}/ejercicio1"`
          );

          // Update the disablePrevious prop
          const updatedContentFinal = updatedContent.replace(
            /disablePrevious={false}/,
            `disablePrevious={${day === 1}}`
          );

          // Write the updated content back to the file
          await fs.writeFile(filePath, updatedContentFinal);
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

    console.log('All ejercicio5 navigation paths have been updated successfully!');
  } catch (error) {
    console.error('Error fixing navigation:', error);
  }
}

// Run the script
fixEjercicio5Navigation();
