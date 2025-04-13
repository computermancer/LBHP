const fs = require('fs').promises;
const path = require('path');

// Words that should not be capitalized in titles (except when they are the first or last word)
const lowercaseWords = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'from', 'in', 'nor', 'of',
  'on', 'or', 'per', 'the', 'to', 'up', 'via', 'vs', 'with', 'y', 'de', 'el',
  'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'en', 'con', 'por', 'que',
  'se', 'su', 'sus', 'al', 'del', 'a', 'e', 'i', 'o', 'u', 'de', 'la', 'las',
  'los', 'un', 'una', 'unos', 'unas', 'el', 'los', 'las', 'un', 'una', 'unos', 'unas'
]);

function toTitleCase(str) {
  return str.split(' ').map((word, index) => {
    // Always capitalize the first and last word
    if (index === 0 || index === str.split(' ').length - 1) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    // Capitalize if it's not in our lowercase list
    if (!lowercaseWords.has(word.toLowerCase())) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    // Keep lowercase if it's in our list
    return word.toLowerCase();
  }).join(' ');
}

async function fixTitleCase() {
  try {
    // Loop through all weeks
    for (let week = 1; week <= 5; week++) {
      // Loop through all days
      for (let day = 1; day <= 5; day++) {
        // Loop through all exercises
        for (let exercise = 1; exercise <= 5; exercise++) {
          const filePath = path.join(__dirname, '../pages/espanol/semana' + week + '/dia' + day + '/ejercicio' + exercise + '.js');
          
          try {
            const content = await fs.readFile(filePath, 'utf-8');
            
            // Extract the title
            const titleMatch = content.match(/title="([^"]+)"/);
            if (titleMatch) {
              const title = titleMatch[1];
              
              // Extract the exercise name (everything after the colon)
              const exerciseName = title.split(':')[1].trim();
              
              // Convert to title case
              const subtitle = toTitleCase(exerciseName);
              
              // Update the title to use the subtitle
              const newTitle = `Ejercicio ${exercise}: ${subtitle}`;
              
              // Replace the old title with the new title
              let updatedContent = content.replace(
                `title="${title}"`,
                `title="${newTitle}"`
              );
              
              // Remove the subtitle parameter if it exists
              updatedContent = updatedContent.replace(/\s*subtitle="[^"]+"\n?/, '');
              
              // For the last day of each week, disable the next day button
              if (day === 5) {
                const navBarMatch = updatedContent.match(/<EspDrillNavBar\s+([^>]+)>/);
                if (navBarMatch) {
                  const navBarContent = navBarMatch[1];
                  const updatedNavBar = navBarContent.replace(
                    /disableNext={false}/,
                    'disableNext={true}'
                  );
                  updatedContent = updatedContent.replace(
                    `<EspDrillNavBar ${navBarContent}>`,
                    `<EspDrillNavBar ${updatedNavBar}>`
                  );
                }
              }
              
              await fs.writeFile(filePath, updatedContent);
              console.log(`Updated title in ${filePath}: ${title} → ${newTitle}`);
            }
          } catch (error) {
            if (error.code === 'ENOENT') {
              continue;
            }
            console.error(`Error processing ${filePath}:`, error);
          }
        }
      }
    }
    console.log('All titles have been updated with proper title case!');
  } catch (error) {
    console.error('Error updating title case:', error);
  }
}

// Run the script
fixTitleCase();
