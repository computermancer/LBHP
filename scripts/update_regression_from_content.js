const fs = require('fs').promises;

async function updateRegressionFromContent() {
    const baseDir = './pages/espanol';
    const contentDir = './CONTENT';
    
    // Process all exercise files
    for (let week = 1; week <= 5; week++) {
        for (let day = 1; day <= 5; day++) {
            for (let exercise = 1; exercise <= 5; exercise++) {
                const contentPath = `${contentDir}/semana${week}/dia${day}/ejercicio${exercise}.txt`;
                const targetPath = `${baseDir}/semana${week}/dia${day}/ejercicio${exercise}.js`;
                
                try {
                    // Read the content file
                    const content = await fs.readFile(contentPath, 'utf-8');
                    
                    // Split content into lines
                    const lines = content.split('\n');
                    
                    // Find the line containing "semana"
                    const semanaIndex = lines.findIndex(line => line.toLowerCase().includes('semana'));
                    
                    if (semanaIndex > 0) {
                        // Get the regression content up to but not including the "semana" line
                        const regressionContent = lines.slice(0, semanaIndex).join('\n');
                        
                        // Read the target file
                        const targetContent = await fs.readFile(targetPath, 'utf-8');
                        
                        // Find the regression array
                        const regressionMatch = targetContent.match(/regression=\[\s*"([^"]+)"\s*(?:,\s*"([^"]+)"\s*)*\]/g);
                        if (regressionMatch) {
                            // Get the first match (there should only be one)
                            const oldRegressionArray = regressionMatch[0];
                            
                            // Format the new regression content as an array
                            const newRegressionArray = `regression=[\n  "${regressionContent.split('\n').map(line => line.trim()).filter(line => line).join('",\n  "')}"]`;
                            
                            // Replace the old array with the new one
                            const updatedContent = targetContent.replace(oldRegressionArray, newRegressionArray);
                            
                            // Write the updated content back to the file
                            await fs.writeFile(targetPath, updatedContent);
                            console.log(`Updated regression in ${targetPath}`);
                        }
                    }
                } catch (error) {
                    console.error(`Error processing ${contentPath}: ${error.message}`);
                }
            }
        }
    }
    console.log('All regression content has been updated successfully!');
}

updateRegressionFromContent().catch(console.error);
