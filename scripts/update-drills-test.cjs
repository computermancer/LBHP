const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvPath = path.join(__dirname, '../RESOURCES/spanishdrills.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');
const lines = csvContent.split('\n');

// Create a lookup table for Semana 1 Dia 2
const drills = {};
for (const line of lines) {
    const [semana, dia, num, ejercicio, descripcion] = line.split(',');
    if (semana === 'Semana 1' && dia === 'Día 2') {
        drills[num] = {
            title: ejercicio,
            description: descripcion
        };
    }
}

// Read the day file
const dayFilePath = path.join(__dirname, '../pages/espanol/semana1/dia2.js');
const content = fs.readFileSync(dayFilePath, 'utf-8');

// Update each DrillCard
let updatedContent = content;
for (let i = 1; i <= 5; i++) {
    const drill = drills[i];
    if (drill) {
        // Find the DrillCard for this number
        const drillCardPattern = new RegExp(`<DrillCard\s+number=\"${i}\"\s+title=\"[^"]+\"\s+description=\"[^"]+\"\s+href=\"[^"]+\"\s*\/?>`, 'g');
        const drillCardMatch = updatedContent.match(drillCardPattern);
        
        if (drillCardMatch) {
            const drillCard = drillCardMatch[0];
            
            // Update title
            const titlePattern = /title="[^"]+"/;
            const titleReplacement = `title="${drill.title}"`;
            
            // Update description
            const descPattern = /description="[^"]+"/;
            const descReplacement = `description="${drill.description}"`;
            
            // Replace in the specific DrillCard
            const updatedCard = drillCard
                .replace(titlePattern, titleReplacement)
                .replace(descPattern, descReplacement);
            
            // Replace the old DrillCard with the updated one
            updatedContent = updatedContent.replace(drillCard, updatedCard);
        } else {
            console.log(`Warning: Could not find DrillCard for number ${i}`);
        }
    }
}

// Verify changes
console.log('=== Changes to be made ===');
for (let i = 1; i <= 5; i++) {
    const drill = drills[i];
    console.log(`\nDrill ${i}:`);
    console.log(`Title: ${drill.title}`);
    console.log(`Description: ${drill.description}`);
}

// Ask for confirmation
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('\nProceed with updates? (y/n): ', (answer) => {
    if (answer.toLowerCase() === 'y') {
        // Write changes
        fs.writeFileSync(dayFilePath, updatedContent, 'utf-8');
        console.log('\nUpdates applied successfully!');
    } else {
        console.log('\nUpdates cancelled.');
    }
    readline.close();
});
