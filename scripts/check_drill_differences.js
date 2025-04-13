const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const PAGES_DIR = path.join(ROOT_DIR, 'pages');
const REFERENCES_DIR = path.join(ROOT_DIR, 'REFERENCES', 'pages');

function getDrillFiles(directory) {
    const drills = [];
    const weeks = fs.readdirSync(directory);
    
    for (const week of weeks) {
        // Skip non-week directories
        if (!week.startsWith('week')) continue;
        
        const weekPath = path.join(directory, week);
        const days = fs.readdirSync(weekPath);
        
        for (const day of days) {
            // Skip non-day directories
            if (!day.startsWith('day')) continue;
            
            const dayPath = path.join(weekPath, day);
            const drillFiles = fs.readdirSync(dayPath)
                .filter(file => file.startsWith('drill') && file.endsWith('.js'));
            
            for (const file of drillFiles) {
                drills.push({
                    week,
                    day,
                    file,
                    path: path.join(dayPath, file)
                });
            }
        }
    }
    return drills;
}

function readDrillContent(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content;
}

function hasContentDifferences(currentContent, referenceContent) {
    // Extract important content sections
    const currentSections = extractSections(currentContent);
    const referenceSections = extractSections(referenceContent);
    
    // Compare sections for differences
    for (const section of Object.keys(currentSections)) {
        if (currentSections[section] !== referenceSections[section]) {
            return true;
        }
    }
    return false;
}

function extractSections(content) {
    const sections = {
        title: '',
        setup: [],
        instructions: [],
        whatToFeel: [],
        whatToAvoid: [],
        redFlags: [],
        regression: []
    };

    // Extract title
    const titleMatch = content.match(/title="([^"]+)"/);
    if (titleMatch) {
        sections.title = titleMatch[1];
    }

    // Extract sections using regex
    const sectionRegex = /(?<section>setup|instructions|whatToFeel|whatToAvoid|redFlags|regression)=\[\[(?:"[^"]+"(?:,\s*"[^"]+")*)?\]\]/g;
    let match;
    
    while ((match = sectionRegex.exec(content)) !== null) {
        const sectionName = match.groups.section;
        const items = content
            .match(new RegExp(`${sectionName}=\[\[(?:"([^"]+)"(?:,\s*"[^"]+")*)?\]\]`, 'g'))[0]
            .match(/"([^"]+)"/g)
            .map(item => item.replace(/"/g, ''));
        sections[sectionName] = items;
    }

    return sections;
}

function getRegressionContent(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const regressionStart = content.indexOf('regression=[');
    const regressionEnd = content.indexOf(']', regressionStart);
    
    if (regressionStart === -1 || regressionEnd === -1) {
        return null;
    }
    
    const regressionStr = content.substring(regressionStart + 10, regressionEnd);
    return regressionStr.trim();
}

function compareRegression(current, reference) {
    // Remove whitespace and quotes for comparison
    const cleanCurrent = current.replace(/\s+/g, '').replace(/['"]+/g, '');
    const cleanReference = reference.replace(/\s+/g, '').replace(/['"]+/g, '');
    
    return cleanCurrent === cleanReference;
}

function main() {
    const currentDrills = getDrillFiles(PAGES_DIR);
    const referenceDrills = getDrillFiles(REFERENCES_DIR);

    const drillsWithDifferences = [];

    for (const currentDrill of currentDrills) {
        const referenceDrill = referenceDrills.find(
            ref => ref.week === currentDrill.week && 
                   ref.day === currentDrill.day && 
                   ref.file === currentDrill.file
        );

        if (referenceDrill) {
            const currentContent = readDrillContent(currentDrill.path);
            const referenceContent = readDrillContent(referenceDrill.path);

            if (hasContentDifferences(currentContent, referenceContent)) {
                drillsWithDifferences.push({
                    week: currentDrill.week,
                    day: currentDrill.day,
                    drill: currentDrill.file
                });
            }
        }
    }

    // Write results to a file
    const resultsPath = path.join(ROOT_DIR, 'drill_differences.txt');
    fs.writeFileSync(resultsPath, 'Drills with Content Differences:\n\n');

    drillsWithDifferences.forEach(drill => {
        fs.appendFileSync(resultsPath, `Week ${drill.week}, Day ${drill.day}, ${drill.drill}\n`);
    });

    console.log(`Found ${drillsWithDifferences.length} drills with content differences.`);
    console.log(`Results written to ${resultsPath}`);

    // Compare regression sections
    const drillFiles = [];

    // Scan weeks directory
    for (let week = 1; week <= 12; week++) {
        const weekDir = path.join(PAGES_DIR, 'week' + week);
        if (fs.existsSync(weekDir)) {
            // Scan days directory
            for (let day = 1; day <= 5; day++) {
                const dayDir = path.join(weekDir, 'day' + day);
                if (fs.existsSync(dayDir)) {
                    // Scan drill files
                    for (let drill = 1; drill <= 5; drill++) {
                        const drillFile = path.join(dayDir, 'drill' + drill + '.js');
                        if (fs.existsSync(drillFile)) {
                            const referenceFile = path.join(REFERENCES_DIR, 'week' + week, 'day' + day, 'drill' + drill + '.js');
                            if (fs.existsSync(referenceFile)) {
                                drillFiles.push({
                                    current: drillFile,
                                    reference: referenceFile
                                });
                            }
                        }
                    }
                }
            }
        }
    }

    const differences = [];

    drillFiles.forEach(filePair => {
        const currentRegression = getRegressionContent(filePair.current);
        const referenceRegression = getRegressionContent(filePair.reference);
        
        if (currentRegression && referenceRegression && !compareRegression(currentRegression, referenceRegression)) {
            differences.push({
                path: filePair.current.replace(PAGES_DIR, '').replace(/\\/g, '/'),
                current: currentRegression,
                reference: referenceRegression
            });
        }
    });

    // Write report
    const report = differences.map(diff => (
        `\n${diff.path}:
Current: ${diff.current}
Reference: ${diff.reference}
`
    )).join('');

    if (differences.length === 0) {
        console.log('No differences found in regression sections.');
    } else {
        console.log('Differences found in the following drill files:');
        console.log(report);
    }

    fs.writeFileSync(path.join(ROOT_DIR, 'drill_differences_report.txt'), report);
}

main();
