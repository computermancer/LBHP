const fs = require('fs');
const path = require('path');
const report = {
    totalFiles: 0,
    filesProcessed: 0,
    errors: []
};

// Function to process a single file
async function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split('\n');
        
        // Find the EspDrillNavBar component and remove its description line
        let cleanedLines = lines;
        let inNavBar = false;
        
        cleanedLines = lines.map((line, index) => {
            if (line.includes('<EspDrillNavBar')) {
                inNavBar = true;
            }
            if (line.includes('description="')) {
                if (inNavBar) {
                    return '';
                }
            }
            if (line.includes('/>')) {
                inNavBar = false;
            }
            return line;
        }).filter(line => line.trim() !== '');
        
        // Join the lines back together
        const output = cleanedLines.join('\n');
        
        // Only write if changes were made
        if (content !== output) {
            fs.writeFileSync(filePath, output, 'utf-8');
            report.filesProcessed++;
        }
    } catch (error) {
        report.errors.push(`Error processing ${filePath}: ${error.message}`);
    }
}

// Function to find all exercise files
async function findExerciseFiles() {
    const exerciseFiles = [];
    const baseDir = path.join(__dirname, '../pages/espanol');

    // Walk through all directories
    for (let week = 1; week <= 5; week++) {
        for (let day = 1; day <= 5; day++) {
            const weekDir = path.join(baseDir, `semana${week}`);
            const dayDir = path.join(weekDir, `dia${day}`);
            
            if (fs.existsSync(dayDir)) {
                const files = fs.readdirSync(dayDir);
                for (const file of files) {
                    if (file.startsWith('ejercicio') && file.endsWith('.js')) {
                        exerciseFiles.push(path.join(dayDir, file));
                        report.totalFiles++;
                    }
                }
            }
        }
    }

    return exerciseFiles;
}

// Main function
async function main() {
    console.log('Finding exercise files...');
    const exerciseFiles = await findExerciseFiles();
    console.log(`Found ${report.totalFiles} exercise files`);

    console.log('Processing files...');
    for (const file of exerciseFiles) {
        await processFile(file);
    }
    console.log('Processing complete');

    // Generate report
    console.log('\n=== CLEANING REPORT ===');
    console.log(`Total files: ${report.totalFiles}`);
    console.log(`Files processed: ${report.filesProcessed}`);
    console.log(`Errors: ${report.errors.length}`);

    if (report.errors.length > 0) {
        console.log('\n=== ERRORS ===');
        report.errors.forEach(error => console.log(`- ${error}`));
    }
}

// Run the script
main().catch(error => {
    console.error('Script failed:', error);
    process.exit(1);
});
