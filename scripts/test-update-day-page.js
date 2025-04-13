const fs = require('fs');
const path = require('path');

// Function to update a single day page
function updateDayPage(sourcePath, targetPath) {
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
    const exercises = mainContent.match(/<div>\s*<Link.*?>\s*(.*?)\s*<\/Link>\s*<p.*?>(.*?)<\/p>\s*<\/div>/g);
    if (!exercises) {
      console.error(`Could not find exercises in ${sourcePath}`);
      return;
    }

    // Create the new content structure
    let newContent = `import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
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
      const exerciseMatch = exercise.match(/<Link.*?>\s*(.*?)\s*<\/Link>\s*<p.*?>(.*?)<\/p>/s);
      if (exerciseMatch) {
        const title = exerciseMatch[1].trim();
        const description = exerciseMatch[2].trim();
        const href = getExerciseHref(targetPath, index + 1);
        
        // Extract the exercise number from the title
        const numberMatch = title.match(/Ejercicio (\d+)/);
        const number = numberMatch ? numberMatch[1] : (index + 1).toString();
        
        // Remove "Ejercicio X:" from the title
        const cleanTitle = title.replace(/Ejercicio \d+:\s*/i, '');
        
        newContent += `
            <DrillCard
              number="${number}"
              title="${cleanTitle}"
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

    // Write the new content to a test file
    const testPath = targetPath.replace('.js', '.test.js');
    fs.writeFileSync(testPath, newContent, 'utf8');
    console.log(`Created test file: ${testPath}`);
    
    // Compare the original and test files
    const originalContent = fs.readFileSync(targetPath, 'utf8');
    const testContent = fs.readFileSync(testPath, 'utf8');
    
    // Check if the content matches
    if (originalContent === testContent) {
      console.log('✅ Test passed: Content matches exactly');
    } else {
      console.log('❌ Test failed: Content differs');
      // Show differences
      const originalLines = originalContent.split('\n');
      const testLines = testContent.split('\n');
      
      for (let i = 0; i < Math.max(originalLines.length, testLines.length); i++) {
        if (originalLines[i] !== testLines[i]) {
          console.log(`Line ${i + 1} differs:`);
          console.log('Original:', originalLines[i]);
          console.log('Test:    ', testLines[i]);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing ${sourcePath}:`, error);
  }
}

// Helper functions
function getPrevDay(currentPath) {
  const parts = currentPath.split('/');
  const dayNum = parseInt(parts[parts.length - 1].replace('dia', ''));
  if (dayNum === 1) return null;
  return `/espanol/${parts[parts.length - 2]}/dia${dayNum - 1}`;
}

function getNextDay(currentPath) {
  const parts = currentPath.split('/');
  const dayNum = parseInt(parts[parts.length - 1].replace('dia', ''));
  const maxDays = 5;
  if (dayNum === maxDays) return null;
  return `/espanol/${parts[parts.length - 2]}/dia${dayNum + 1}`;
}

function getCurrentWeek(currentPath) {
  const parts = currentPath.split('/');
  return `/espanol/${parts[parts.length - 2]}`;
}

function getExerciseHref(currentPath, exerciseNum) {
  const parts = currentPath.split('/');
  return `/espanol/${parts[parts.length - 2]}/${parts[parts.length - 1]}/ejercicio${exerciseNum}`;
}

// Run the test
function runTest() {
  // Process all semana1-5 dia1-5 pages
  for (let semana = 1; semana <= 5; semana++) {
    for (let dia = 1; dia <= 5; dia++) {
      const testPath = path.join(__dirname, `../pages/espanol/semana${semana}/dia${dia}.js`);
      const referencePath = path.join(__dirname, `../REFERENCES/pages/espanol/semana${semana}/dia${dia}.js`);
      
      if (!fs.existsSync(testPath)) {
        console.error('Test file not found:', testPath);
        continue;
      }
      
      if (!fs.existsSync(referencePath)) {
        console.error('Reference file not found:', referencePath);
        continue;
      }
      
      console.log('Running test on:', testPath);
      updateDayPage(referencePath, testPath);
    }
  }
}

// Execute the test
runTest();
