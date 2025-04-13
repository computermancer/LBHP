const fs = require('fs').promises;
const path = require('path');

async function updateExercises() {
  try {
    // Read content files
    const weekFiles = [
      'Week 1 Spanish.txt',
      'Week 2 Spanish.txt',
      'Week 3 Spanish.txt',
      'Week 4 Spanish.txt',
      'Week 5 Spanish.txt'
    ];

    const exercises = [];

    // Parse content files
    for (const file of weekFiles) {
      const content = await fs.readFile(path.join(__dirname, '../CONTENT', file), 'utf-8');
      const exercisesInFile = parseContent(content, file);
      exercises.push(...exercisesInFile);
    }

    // Update/create exercise files
    for (const exercise of exercises) {
      await createOrUpdateExerciseFile(exercise);
    }

    console.log('All exercises have been updated successfully!');
  } catch (error) {
    console.error('Error updating exercises:', error);
  }
}

function parseContent(content, fileName) {
  const exercises = [];
  const lines = content.split('\n');
  let currentExercise = null;
  let currentSection = null;
  let week = null;
  let day = null;

  // Extract week number from filename
  const weekMatch = fileName.match(/Week (\d+)/);
  if (weekMatch) {
    week = weekMatch[1];
  }

  let currentExerciseNumber = 1; // Track exercise number for fallback

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Match day header
    if (line.startsWith('Semana') && line.includes('Día')) {
      const dayMatch = line.match(/Semana (\d+) - Día (\d+)/);
      if (dayMatch) {
        day = dayMatch[2];
        currentExerciseNumber = 1; // Reset exercise number for new day
      }
    }

    // Skip the special case line
    if (line === 'Ejercicio de IR y extensión de cadera en decúbito prono') {
      continue;
    }

    // Match exercise header
    if (line.startsWith('Ejercicio')) {
      if (currentExercise) {
        exercises.push(currentExercise);
      }

      // Try to parse exercise number from title
      const match = line.match(/Ejercicio (\d+): (.+)/);
      if (match) {
        currentExerciseNumber = parseInt(match[1]);
        currentExercise = {
          title: line,
          setup: [],
          instructions: [],
          setsReps: [],
          whatToFeel: [],
          whatToAvoid: [],
          redFlags: [],
          regression: [],
          week,
          day
        };
      } else {
        // Fallback for invalid titles
        currentExercise = {
          title: `Ejercicio ${currentExerciseNumber}: ${line.replace('Ejercicio', '').trim()}`,
          setup: [],
          instructions: [],
          setsReps: [],
          whatToFeel: [],
          whatToAvoid: [],
          redFlags: [],
          regression: [],
          week,
          day
        };
      }
      currentSection = null;
    }

    // Match section headers
    if (currentExercise) {
      if (line.startsWith('Configuración:')) {
        currentSection = 'setup';
      } else if (line.startsWith('Instrucciones:')) {
        currentSection = 'instructions';
        currentExercise.instructions = []; // Clear instructions section
      } else if (line.startsWith('Conjuntos:')) {
        currentSection = 'setsReps';
      } else if (line.startsWith('Qué sentir:')) {
        currentSection = 'whatToFeel';
      } else if (line.startsWith('Lo que hay que evitar:')) {
        currentSection = 'whatToAvoid';
      } else if (line.startsWith('Banderas rojas:')) {
        currentSection = 'redFlags';
      } else if (line.startsWith('Regresión:')) {
        currentSection = 'regression';
      } else if (line.startsWith('Semana')) {
        // Stop parsing regression when we reach the Semana line
        if (currentSection === 'regression') {
          currentSection = null;
        }
      }

      // Add content to current section
      if (currentSection && line && !line.startsWith('Ejercicio')) {
        // Skip section headers for most sections
        if (currentSection !== 'setsReps' && 
            (line === 'Configuración:' || 
             line === 'Instrucciones:' || 
             line === 'Qué sentir:' || 
             line === 'Lo que hay que evitar:' || 
             line === 'Banderas rojas:' || 
             line === 'Regresión:')) {
          continue;
        }

        // Remove asterisks from content
        const cleanedLine = line.replace(/\*/g, '');

        // For regression, skip the header and line
        if (currentSection === 'regression' && cleanedLine !== 'Regresión:' && cleanedLine !== '________________') {
          currentExercise[currentSection].push(cleanedLine);
        } else if (currentSection === 'setsReps') {
          // Keep the labels for setsReps section and format them properly
          const parts = cleanedLine.split(':');
          if (parts.length === 2) {
            const label = parts[0].trim();
            const value = parts[1].trim();
            currentExercise[currentSection].push(`${label}: ${value}`);
          } else {
            currentExercise[currentSection].push(cleanedLine);
          }
        } else if (currentSection !== 'regression') {
          // Stop copying instructions when we encounter Semana
          if (currentSection === 'instructions' && cleanedLine.startsWith('Semana')) {
            break;
          }
          currentExercise[currentSection].push(cleanedLine);
        }
      }
    }
  }

  if (currentExercise) {
    exercises.push(currentExercise);
  }

  return exercises;
}

async function createOrUpdateExerciseFile(exercise) {
  // Extract exercise number from title
  const match = exercise.title.match(/Ejercicio (\d+): (.+)/);
  if (!match) {
    console.error('Invalid exercise title:', exercise.title);
    return;
  }

  const [_, number, title] = match;
  const exerciseNumber = parseInt(number);

  // Create function name
  const functionName = `Ejercicio${exerciseNumber}${title.replace(/[^a-zA-Z0-9]/g, '')}`;

  // Create file content
  const fileContent = `import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function ${functionName}() {
  return (
    <EspDrillBarTemplate
      title="${exercise.title}"
      backButtonText="Semana ${exercise.week} - Día ${exercise.day}"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={${JSON.stringify(exercise.setup)}}
      instructions={${JSON.stringify(exercise.instructions)}}
      setsReps={${JSON.stringify(exercise.setsReps)}}
      whatToFeel={${JSON.stringify(exercise.whatToFeel)}}
      whatToAvoid={${JSON.stringify(exercise.whatToAvoid)}}
      redFlags={${JSON.stringify(exercise.redFlags)}}
      regression={${JSON.stringify(exercise.regression)}}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana${exercise.week}/dia${exercise.day}/ejercicio${exerciseNumber - 1}" 
        currentDay="/espanol/semana${exercise.week}/dia${exercise.day}" 
        nextDrill="/espanol/semana${exercise.week}/dia${exercise.day}/ejercicio${exerciseNumber + 1}" 
        disablePrevious={${exerciseNumber === 1}}
        disableNext={${exerciseNumber === 5}}
      />
    </EspDrillBarTemplate>
  );
}
`;

  // Create file path
  const filePath = path.join(__dirname, '../pages/espanol/semana' + exercise.week + '/dia' + exercise.day + '/ejercicio' + exerciseNumber + '.js');

  // Create directories if they don't exist
  await fs.mkdir(path.dirname(filePath), { recursive: true });

  // Write file
  await fs.writeFile(filePath, fileContent, 'utf-8');
  console.log('Updated', filePath);
}

// Run the script
updateExercises();
