const fs = require('fs');
const path = require('path');

// Function to recursively find all .js files
function findJsFiles(dir) {
  const files = fs.readdirSync(dir);
  const jsFiles = [];

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      jsFiles.push(...findJsFiles(fullPath));
    } else if (stat.isFile() && file.endsWith('.js')) {
      jsFiles.push(fullPath);
    }
  });

  return jsFiles;
}

// Function to update a single file
function updateFile(file) {
  const content = fs.readFileSync(file, 'utf-8');
  
  // Replace import statement
  let newContent = content
    .replace(/import NavEspanol from ['"]..\/..\/components\/NavEspanol['"]/g, 'import MainEspNavBar from "../../components/MainEspNavBar"');

  // Replace component usage
  newContent = newContent
    .replace(/<NavEspanol\s*\/?>/g, '<MainEspNavBar />');

  // Only write if changes were made
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf-8');
    console.log(`Updated: ${file}`);
  }
}

// Main function
function main() {
  const espanolDir = path.join(__dirname, '..', 'pages', 'espanol');
  
  try {
    const files = findJsFiles(espanolDir);
    console.log(`Found ${files.length} JavaScript files to process.`);
    
    files.forEach(file => {
      updateFile(file);
    });
    
    console.log('Navigation bar updates completed!');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the script
main();
