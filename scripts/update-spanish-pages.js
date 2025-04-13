const fs = require('fs');
const path = require('path');

// Function to update a single page
function updatePage(sourcePath, targetPath) {
  try {
    // Read the reference content
    const referenceContent = fs.readFileSync(sourcePath, 'utf8');
    
    // Extract the content between the main tags
    const contentMatch = referenceContent.match(/<main.*?>(.*?)<\/main>/s);
    if (!contentMatch) {
      console.error(`Could not find main content in ${sourcePath}`);
      return;
    }
    const mainContent = contentMatch[1];
    
    // Extract the title and subtitle
    const titleMatch = mainContent.match(/<h1.*?>(.*?)<\/h1>/);
    const subtitleMatch = mainContent.match(/<h2.*?>(.*?)<\/h2>/);
    
    if (!titleMatch || !subtitleMatch) {
      console.error(`Could not find title or subtitle in ${sourcePath}`);
      return;
    }
    
    const title = titleMatch[1];
    const subtitle = subtitleMatch[1];
    
    // Extract the exercises
    const exercises = mainContent.match(/<div.*?>\s*<Link.*?>\s*<button.*?>(.*?)<\/button>.*?<\/Link>\s*<p.*?>(.*?)<\/p>\s*<\/div>/g);
    if (!exercises) {
      console.error(`Could not find exercises in ${sourcePath}`);
      return;
    }
    
    // Create the new content structure
    let newContent = `import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="${title}"
        subtitle="${subtitle}"
        prevDay="${getPrevDay(targetPath)}"
        currentWeek="${getCurrentWeek(targetPath)}"
        nextDay="${getNextDay(targetPath)}"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">`;

    // Convert exercises to DrillCard format
    exercises.forEach((exercise, index) => {
      const exerciseMatch = exercise.match(/<button.*?>(.*?)<\/button>.*?<p.*?>(.*?)<\/p>/s);
      if (exerciseMatch) {
        const title = exerciseMatch[1];
        const description = exerciseMatch[2];
        const href = getExerciseHref(targetPath, index + 1);
        
        newContent += `
            <DrillCard
              number="${index + 1}"
              title="${title}"
              description="${description}"
              href="${href}"
            />`;
      }
    });

    newContent += `
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}`;

    // Write the new content
    fs.writeFileSync(targetPath, newContent, 'utf8');
    console.log(`Updated: ${targetPath}`);
  } catch (error) {
    console.error(`Error processing ${sourcePath}:`, error);
  }
}

// Helper functions
function getPrevDay(currentPath) {
  const parts = currentPath.split('/');
  const dayNum = parseInt(parts[parts.length - 1].replace('dia', ''));
  if (dayNum === 1) return null;
  return parts.slice(0, -1).join('/') + `/dia${dayNum - 1}`;
}

function getNextDay(currentPath) {
  const parts = currentPath.split('/');
  const dayNum = parseInt(parts[parts.length - 1].replace('dia', ''));
  const maxDays = 5;
  if (dayNum === maxDays) return null;
  return parts.slice(0, -1).join('/') + `/dia${dayNum + 1}`;
}

function getCurrentWeek(currentPath) {
  const parts = currentPath.split('/');
  const weekNum = parseInt(parts[parts.length - 2].replace('semana', ''));
  return parts.slice(0, -2).join('/') + `/semana${weekNum}`;
}

function getExerciseHref(currentPath, exerciseNum) {
  const parts = currentPath.split('/');
  return parts.slice(0, -1).join('/') + `/ejercicio${exerciseNum}`;
}

// Main execution
function main() {
  // Get all Spanish day pages
  const espanolDir = path.join(__dirname, '../pages/espanol');
  const files = findFiles(espanolDir);
  
  // Process each file
  files.forEach(file => {
    const relativePath = path.relative(espanolDir, file);
    const referencePath = path.join(__dirname, '../REFERENCES', relativePath);
    
    if (fs.existsSync(referencePath)) {
      updatePage(referencePath, file);
    }
  });
}

// Helper function to find files
function findFiles(dir) {
  const files = fs.readdirSync(dir);
  return files.reduce((acc, file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      return acc.concat(findFiles(fullPath));
    }
    if (stat.isFile() && path.extname(file) === '.js' && file.startsWith('dia')) {
      return acc.concat(fullPath);
    }
    return acc;
  }, []);
}

// Run the script
main();
