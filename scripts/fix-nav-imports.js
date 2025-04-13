const fs = require('fs');
const path = require('path');

// Function to recursively find all .js files in a directory
function findFiles(dir) {
  const files = fs.readdirSync(dir);
  return files.reduce((acc, file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      return acc.concat(findFiles(fullPath));
    }
    if (stat.isFile() && path.extname(file) === '.js') {
      return acc.concat(fullPath);
    }
    return acc;
  }, []);
}

// Function to update the import statement in a file
function updateFile(file) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if file contains NavEspanol import
    if (content.includes('NavEspanol')) {
      console.log(`Processing: ${file}`);
      
      // Update the import statement
      let newContent = content.replace(/import NavEspanol from ['"]\.{3}\/components\/NavEspanol['"]/g, 'import MainEspNavbar from \'../../../components/MainEspNavbar\'');
      
      // Replace all instances of NavEspanol with MainEspNavbar
      newContent = newContent.replace(/NavEspanol/g, 'MainEspNavbar');
      
      // Write the updated content
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Updated: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
}

// Main execution
const espanolDir = path.join(__dirname, '../pages/espanol');
const files = findFiles(espanolDir);

console.log(`Found ${files.length} JavaScript files in espanol directory`);
files.forEach(updateFile);

console.log('Script completed!');
