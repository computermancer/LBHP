const fs = require('fs');
const path = require('path');

// Function to update a single file
function updateFile(espanolFile) {
  const espanolContent = fs.readFileSync(espanolFile, 'utf-8');

  // Update the layout to match English version
  let newContent = espanolContent;

  // Replace NavEspanol with MainEspNavBar if needed
  if (newContent.includes('NavEspanol')) {
    newContent = newContent
      .replace(/import NavEspanol from ['"]..\/..\/components\/NavEspanol['"]/g, 'import MainEspNavBar from "../../components/MainEspNavBar"')
      .replace(/<NavEspanol\s*\/?>/g, '<MainEspNavBar />');
  }

  // Add MainEspNavBar if not present
  if (!newContent.includes('import MainEspNavBar')) {
    newContent = newContent.replace('import WeekLayout', 'import WeekLayout\nimport MainEspNavBar from "../../components/MainEspNavBar";');
  }

  // Wrap content in fragment if not already wrapped
  if (!newContent.includes('<>')) {
    newContent = newContent.replace(/<WeekLayout/, '<>\n      <MainEspNavBar />\n      <WeekLayout');
    newContent = newContent.replace(/<\/WeekLayout>/, '    </WeekLayout>\n  </>');
  }

  // Write changes if any were made
  if (newContent !== espanolContent) {
    fs.writeFileSync(espanolFile, newContent, 'utf-8');
    console.log(`Updated: ${espanolFile}`);
  }
}

// Main function
function main() {
  const espanolDir = path.join(__dirname, '..', 'pages', 'espanol');
  const mainPages = [
    'comentarios.js',
    'comousar.js',
    'contenido.js',
    'descargar.js',
    'enprogreso.js',
    'glosario.js',
    'index.js',
    'mateobravo.js',
    'sobreLBHP.js'
  ];
  
  try {
    mainPages.forEach(file => {
      const espanolFile = path.join(espanolDir, file);
      if (fs.existsSync(espanolFile)) {
        updateFile(espanolFile);
      }
    });
    
    console.log('Layout updates completed!');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the script
main();
