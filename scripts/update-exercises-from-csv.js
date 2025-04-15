const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvContent = fs.readFileSync('RESOURCES/spanishdrills.csv', 'utf8');
const exercises = csvContent
  .split('\n')
  .slice(1) // Skip header
  .map(line => line.split(','))
  .filter(line => line.length >= 5)
  .map(line => ({
    semana: line[0],
    dia: line[1],
    number: line[2],
    title: line[3],
    description: line[4]
  }));

// Filter for semana1 dia1 exercises
const targetExercises = exercises.filter(ex => ex.semana === 'Semana 1' && ex.dia === 'Día 1');

console.log(`Found ${targetExercises.length} exercises to update`);

// Update each exercise file
for (const ex of targetExercises) {
  const filePath = path.join('pages', 'espanol', 'semana1', 'dia1', `ejercicio${ex.number}.js`);
  
  // Read the file
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Update the title and add description
  const updatedContent = content
    .replace(/title="[^"]*"/, `title="${ex.title}"`)
    .replace(/\s*\/>/, ` description="${ex.description}" />`)
    .replace(/<EspDrillNavBar.*\/>/, `
      <EspDrillNavBar 
        currentDay="/espanol/semana1/dia1" 
        nextDrill="/espanol/semana1/dia1/ejercicio${Number(ex.number) + 1}" 
        disablePrevious={${ex.number === '1' ? 'true' : 'false'}} 
        disableNext={false}
      />
    `)
    .replace(/description="[^"]*"\s*\/>/, ` description="${ex.description}" />`);

  // Write changes back to file
  fs.writeFileSync(filePath, updatedContent);
  console.log(`Updated: ${filePath}`);
}

console.log('All exercise files have been updated');
