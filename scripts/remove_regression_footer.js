const fs = require('fs').promises;

async function removeRegressionContent() {
    const baseDir = './pages/espanol';
    
    // Process all exercise files
    for (let week = 1; week <= 5; week++) {
        for (let day = 1; day <= 5; day++) {
            for (let exercise = 1; exercise <= 5; exercise++) {
                const filePath = `${baseDir}/semana${week}/dia${day}/ejercicio${exercise}.js`;
                try {
                    let content = await fs.readFile(filePath, 'utf-8');
                    
                    // Find the regression array
                    const regressionMatch = content.match(/regression=\[\s*"([^"]+)"\s*(?:,\s*"([^"]+)"\s*)*\]/g);
                    if (regressionMatch) {
                        // Get the first match (there should only be one)
                        const regressionArray = regressionMatch[0];
                        
                        // Split the array into lines
                        const lines = regressionArray.split(',\n  "');
                        
                        // Keep only the first two lines (the actual regression instruction)
                        const newLines = lines.slice(0, 2);
                        
                        // Reconstruct the array with the remaining lines
                        const newRegressionArray = newLines.join(',\n  "') + ']';
                        
                        // Replace the old array with the new one
                        content = content.replace(regressionArray, newRegressionArray);
                        
                        // Write the updated content back to the file
                        await fs.writeFile(filePath, content);
                        console.log(`Updated regression in ${filePath}`);
                    }
                } catch (error) {
                    console.error(`Error processing ${filePath}: ${error.message}`);
                }
            }
        }
    }
    console.log('All regression content has been updated successfully!');
}

removeRegressionContent().catch(console.error);
