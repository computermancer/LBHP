const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
import ora from 'ora';

const report = {
    totalFiles: 0,
    filesProcessed: 0,
    descriptionsRemoved: 0,
    errors: []
};

// Function to process a single file
async function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const ast = parser.parse(content, {
            sourceType: 'module',
            plugins: ['jsx']
        });

        // Traverse the AST to find and modify the components
        traverse(ast, {
            JSXOpeningElement(path) {
                const componentName = path.node.name.name;
                
                if (componentName === 'EspDrillNavBar' || componentName === 'EspDrillBarTemplate') {
                    const originalAttributes = path.node.attributes;
                    
                    // Filter out description attributes
                    path.node.attributes = path.node.attributes.filter(
                        attr => attr.name && attr.name.name !== 'description'
                    );
                    
                    // Count removed descriptions
                    const descriptionsRemoved = originalAttributes.length - path.node.attributes.length;
                    report.descriptionsRemoved += descriptionsRemoved;
                }
            }
        });

        // Generate the modified code
        const output = generate(ast, { retainLines: true }).code;
        
        // Only write if changes were made
        if (report.descriptionsRemoved > 0) {
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
    const spinner = ora('Finding exercise files...').start();
    const exerciseFiles = await findExerciseFiles();
    spinner.succeed(`Found ${report.totalFiles} exercise files`);

    spinner.start('Processing files...');
    for (const file of exerciseFiles) {
        await processFile(file);
    }
    spinner.succeed('Processing complete');

    // Generate report
    console.log('\n=== CLEANING REPORT ===');
    console.log(`Total files: ${report.totalFiles}`);
    console.log(`Files processed: ${report.filesProcessed}`);
    console.log(`Descriptions removed: ${report.descriptionsRemoved}`);
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
