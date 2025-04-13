const fs = require('fs').promises;

async function fixAllRegressionContent() {
    const baseDir = './pages/espanol';
    
    // Process all exercise files
    for (let week = 1; week <= 5; week++) {
        for (let day = 1; day <= 5; day++) {
            for (let exercise = 1; exercise <= 5; exercise++) {
                const filePath = `${baseDir}/semana${week}/dia${day}/ejercicio${exercise}.js`;
                
                try {
                    // Read the file content
                    const content = await fs.readFile(filePath, 'utf-8');
                    
                    // Find the regression array
                    const regressionMatch = content.match(/regression=\[\s*"([^"]+)"\s*(?:,\s*"([^"]+)"\s*)*\]/g);
                    if (regressionMatch) {
                        // Get the first match (there should only be one)
                        const regressionArray = regressionMatch[0];
                        
                        // Split the array into lines
                        const lines = regressionArray.split(',\n  "');
                        
                        // Find the line that contains the actual regression instruction
                        const instructionLine = lines.find(line => {
                            const trimmedLine = line.trim();
                            return !trimmedLine.includes('Regresión:') && 
                                   !trimmedLine.includes('Semana') && 
                                   !trimmedLine.includes('________________');
                        });
                        
                        if (instructionLine) {
                            // Create the new regression array with just the instruction
                            const newRegressionArray = `regression=[\n  "${instructionLine.trim()}"
]`;
                            
                            // Replace the old array with the new one
                            const updatedContent = content.replace(regressionArray, newRegressionArray);
                            
                            // Write the updated content back to the file
                            await fs.writeFile(filePath, updatedContent);
                            console.log(`Updated regression in ${filePath}`);
                        }
                    }
                } catch (error) {
                    console.error(`Error processing ${filePath}: ${error.message}`);
                }
            }
        }
    }
    console.log('All regression content has been fixed successfully!');
}

fixAllRegressionContent().catch(console.error);
