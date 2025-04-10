const fs = require('fs');
const path = require('path');

// Function to update a single drill page
function updateDrillPage(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Update the layout structure
  const updatedContent = content.replace(
    /<div className="min-h-screen bg-zinc-900">\s*<main className="px-8 text-gray-200 font-sans pt-6 pb-8">\s*<div className="max-w-[500px] mx-auto">/g,
    '<div className="min-h-screen bg-zinc-900">\n      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">\n        <div className="max-w-[500px] mx-auto">'
  );

  // Update the DrillNavBar component
  const updatedContent2 = updatedContent.replace(
    /<DrillNavBar\s+prevDrill="[^"]+"\s+currentDay="[^"]+"\s+nextDrill="[^"]+"\s*\/>/g,
    (match) => {
      const [prevDrill, currentDay, nextDrill] = match
        .split(/\s+/)
        .filter(part => part.startsWith('prevDrill') || part.startsWith('currentDay') || part.startsWith('nextDrill'))
        .map(part => part.split('=')[1].replace(/"/g, ''));
      
      return `<DrillNavBar 
            prevDrill="${prevDrill}" 
            currentDay="${currentDay}" 
            nextDrill="${nextDrill}"
          />`;
    }
  );

  // Update the spacing
  const finalContent = updatedContent2.replace(
    /<div className="h-8">\s*<div className="space-y-6">\s*<div className="space-y-4">\s*<div>/g,
    '<div className="h-8"></div>\n          <div className="space-y-6">\n            <div className="space-y-4">\n              <div>'
  );

  fs.writeFileSync(filePath, finalContent);
}

// Find all drill pages
const drillPages = [];
const walk = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.startsWith('drill') && file.endsWith('.js')) {
      drillPages.push(fullPath);
    }
  }
};

walk(path.join(__dirname, 'pages'));

// Update each drill page
for (const page of drillPages) {
  updateDrillPage(page);
  console.log(`Updated: ${page}`);
}

console.log('All drill pages updated!');
