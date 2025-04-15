# New Spanish Drills Update Process

## Purpose
To update drill titles and descriptions in day pages (dia1.js, dia2.js, etc.) to match exactly with the information in the CSV file located in RESOURCES/spanishdrills.csv. This process ensures consistency and accuracy across all exercise information.

## Prerequisites
1. Ensure RESOURCES/spanishdrills.csv is up to date
2. Verify all day pages (dia1.js, dia2.js, etc.) exist for each week
3. Confirm all DrillCard components in day pages are properly formatted

## Process Steps

### 1. Data Preparation
- Load RESOURCES/spanishdrills.csv into a data structure
- Verify CSV format: [Semana, Día, Ejercicio #, Ejercicio, Descripción]
- Create a lookup table for quick reference

### 2. File Processing
For each week (1-5):
1. Navigate to week directory (e.g., pages/espanol/semana1)
2. For each day (1-5):
   a. Open day file (e.g., dia1.js)
   b. For each DrillCard component:
      - Extract current number attribute
      - Look up corresponding drill in CSV using:
        * Week number
        * Day number
        * Exercise number
      - Update title attribute with exact text from CSV's "Ejercicio" column
      - Update description attribute with exact text from CSV's "Descripción" column
      - Preserve all other attributes (number, href, etc.)

### 3. Verification
For each updated file:
1. Compare each DrillCard's title and description with CSV
2. Ensure exact match (no variations, translations, or modifications)
3. Check for any formatting issues
4. Verify all DrillCards are updated

### 4. Error Handling
- Log any files that fail to update
- Record any mismatches between file structure and CSV
- Document any formatting issues

## Example Update
Before:
```jsx
<DrillCard
  number="1"
  title="Inclinación Pélvica Posterior en la Pared"
  description="Desarrollar la conciencia de la inclinación pélvica y el control lumbar."
  href="/espanol/semana1/dia1/ejercicio1"
/>
```

After (if CSV data changes):
```jsx
<DrillCard
  number="1"
  title="Inclinación Pélvica Posterior en la Pared"
  description="Desarrollar la conciencia de la inclinación pélvica y el control lumbar."
  href="/espanol/semana1/dia1/ejercicio1"
/>
```

## Important Notes
1. **Exact Match Required**: Titles and descriptions must match CSV text exactly
2. **No Modifications**: Do not translate, modify, or improve text
3. **Preserve Other Attributes**: Maintain all other DrillCard attributes
4. **Case Sensitive**: Ensure exact capitalization and accents match CSV
5. **Special Characters**: Preserve all special characters and accents from CSV

## Verification Checklist
- [ ] All day pages processed
- [ ] All DrillCards updated
- [ ] Exact matches verified
- [ ] No formatting issues
- [ ] Error log reviewed
- [ ] Backup created before updates
