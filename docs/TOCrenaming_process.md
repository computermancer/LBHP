# TOC Renaming Process

This document outlines the manual process for renaming drill titles across all day pages to match the Spanish TOC exactly.

## Prerequisites
- Access to the project repository
- Text editor or IDE
- TOC file (spanishTOC.txt)

## Step-by-Step Process

### 1. Open Files
1. Open the TOC file (spanishTOC.txt) in your text editor
2. Open the day page file you want to update (e.g., semana1/dia1.js)

### 2. Verify Structure
1. Confirm you're in the correct week and day section of the TOC
2. Count the number of exercises in the TOC for that day
3. Count the number of DrillCard components in the day page
4. Ensure both numbers match

### 3. Update Titles
For each DrillCard in the day page:

1. Find the corresponding exercise in the TOC
   - Look for "Ejercicio X:" where X matches the DrillCard number
   - The title follows the number (e.g., "Ejercicio 1: Inclinación pélvica posterior en la pared")

2. Copy the exact title from the TOC
   - Include ALL text after "Ejercicio X:" exactly as it appears
   - Include all special characters (á, é, í, ó, ú, ñ)
   - Maintain exact spacing
   - DO NOT make ANY modifications, adjustments, or additions
   - DO NOT add subtitles or additional information
   - DO NOT change capitalization or punctuation

3. Paste the title into the DrillCard's title prop
   - Replace the existing title exactly
   - Ensure the quotes match (" or ')
   - Verify the text matches the TOC word-for-word

### 4. Save and Verify
1. Save the changes to the day page
2. Open the page in your browser to verify:
   - All titles display correctly
   - All DrillCards are clickable
   - Navigation works properly
   - Titles match the TOC exactly

### 5. Final Reporting
1. After completing all changes for a week:
   - Create a report in title_changes_report.md
   - Include the following information for each changed title:
     - Week Number
     - Day Number
     - Drill Number
     - Original Title (from day page)
     - New Title (from TOC)
     - Reason for Change ("Updated to match TOC")
   - Save the report

## Important Notes
- Always use the exact text from the TOC
- Never modify or adjust titles
- Never add subtitles or additional information
- Never change capitalization or punctuation
- If a title in the day page doesn't match the TOC exactly, update it to match
- If you notice any discrepancies, report them but do not make adjustments

## File Structure Reference
The files follow this pattern:
- /pages/espanol/semana[1-5]/dia[1-5]/ejercicio[1-5].js
- Each exercise file should follow the master process exactly

## Example

### Before
```javascript
<DrillCard
  number="1"
  title="Inclinación Pélvica Posterior en la Pared"
  description="..."
  href="/espanol/semana1/dia1/ejercicio1"
/>
```

### After
```javascript
<DrillCard
  number="1"
  title="Inclinación Pélvica Posterior en la Pared"
  description="..."
  href="/espanol/semana1/dia1/ejercicio1"
/>
```

## Final Steps

1. After completing all updates:
   - Stage all modified files
   - Create a commit with message: "chore: update drill titles to match TOC"
   - Push changes to the repository
   - Share the title changes report with the team

2. Document any exceptions or special cases in this process document
