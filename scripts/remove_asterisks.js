const fs = require('fs').promises;

async function removeAsterisks() {
    const baseDir = './pages/espanol';
    
    // Process all exercise files
    for (let week = 1; week <= 5; week++) {
        for (let day = 1; day <= 5; day++) {
            for (let exercise = 1; exercise <= 5; exercise++) {
                const filePath = `${baseDir}/semana${week}/dia${day}/ejercicio${exercise}.js`;
                try {
                    let content = await fs.readFile(filePath, 'utf-8');
                    
                    // Remove asterisks from all content
                    content = content.replace(/\*\s*/g, '');
                    
                    // Write the updated content back to the file
                    await fs.writeFile(filePath, content);
                    console.log(`Removed asterisks from ${filePath}`);
                } catch (error) {
                    console.error(`Error processing ${filePath}: ${error.message}`);
                }
            }
        }
    }
    console.log('All asterisks have been removed successfully!');
}

removeAsterisks().catch(console.error);
