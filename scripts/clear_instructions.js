const fs = require('fs').promises;
const path = require('path');

async function clearInstructions() {
  try {
    // Get all exercise files
    const exerciseFiles = [];
    
    // Search through all weeks and days
    for (let week = 1; week <= 5; week++) {
      for (let day = 1; day <= 5; day++) {
        for (let exercise = 1; exercise <= 5; exercise++) {
          const filePath = path.join(
            __dirname, 
            '../pages/espanol/semana' + week + '/dia' + day + '/ejercicio' + exercise + '.js'
          );
          exerciseFiles.push(filePath);
        }
      }
    }

    // Process each file
    for (const filePath of exerciseFiles) {
      try {
        // Read the file
        const content = await fs.readFile(filePath, 'utf8');
        
        // Clear the instructions array
        const newContent = content.replace(
          /instructions={\[.*?\]}/s,
          'instructions={[]}'
        );

        // Write the updated content
        await fs.writeFile(filePath, newContent, 'utf8');
        console.log('Cleared instructions in:', filePath);
      } catch (error) {
        console.error('Error processing', filePath, ':', error);
      }
    }

    console.log('All files processed successfully!');
  } catch (error) {
    console.error('Error clearing instructions:', error);
  }
}

// Run the script
clearInstructions();
