# Master Process for Updating Exercise Files

## Program Structure
- 5 weeks
- 5 days per week
- 5 drills per day
- File structure: `/pages/espanol/semana[1-5]/dia[1-5]/ejercicio[1-5].js`

## 1. File Structure
- Use `EspDrillBarTemplate` as the main component
- Import required components:
  ```javascript
  import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
  import EspDrillNavBar from '../../../../components/EspDrillNavBar';
  import VideoCard from '../../../../components/VideoCard';
  import Link from 'next/link';
  ```

## 2. Function Name
- Always use `EjercicioTemplate` as the function name
- Export as default

## 3. Navigation
- Use `EspDrillNavBar` with proper props:
  ```javascript
  <EspDrillNavBar 
    prevDrill="[previous-exercise-path]" 
    currentDay="[current-day-path]" 
    nextDrill="[next-exercise-path]" 
    disablePrevious={false}
  />
  ```
- For first exercise of a day:
  - `prevDrill`: Last exercise of previous day
  - `disablePrevious`: `false`
- For last exercise of a day:
  - `nextDrill`: First exercise of next day
  - `disablePrevious`: `false`

## 4. Content Structure
- Use exact Spanish content from content file
- Format sections consistently:
  - `title`: "Ejercicio [number]: [exercise name]"
    - Note: The exercise name should match exactly as it appears in the content file
  - `backButtonText`: "Semana [number] - Día [number]"
  - `videoId`: "wn0IyvGBeUI"
  - `videoStart`: 2248

## 5. Content Verification
- Use the exact Spanish content from the content file
- Do not make any changes to the terminology unless explicitly stated in the process
- Verify exact Spanish formatting and terminology, including accents
- Check for proper spacing and formatting
- Ensure section titles match exactly:
  - "Qué sentir"
  - "Lo que hay que evitar"
  - "Banderas rojas"
  - "Regresión"

## 6. Sets and Reps Formatting
- Use plain strings for the sets and reps array:
  ```javascript
  setsReps={[
    "Conjuntos: [value]",
    "Repeticiones: [value]",
    "Respira: [value]",
    "Descanso: [value]"
  ]}
  ```
- The template will automatically handle the styling (bold orange labels and bullet removal)

## 7. Card Grouping
- Group related sections into cards:
  - Setup and Instructions in one card
  - What to Feel, What to Avoid, and Red Flags in one card
  - Separate cards for Sets/Reps and Regression

## 8. Testing
- Test navigation between exercises
- Verify proper spacing and layout
- Check that all content displays correctly

## Notes
- Always verify the content file for exact Spanish terminology and accents
- Do not modify content unless explicitly stated in the process
- Maintain consistent formatting across all sections
