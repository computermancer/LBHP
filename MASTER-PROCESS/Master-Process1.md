# Master Process 1 - Exercise File Updates

This process outlines the steps to update exercise files using the master template and content from the content file.

## 1. Reference the Master Template
- Use `master_ejercicio_template.js` as the base structure
- Ensure consistent imports and component usage

## 2. Set Up Core Structure
```javascript
import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';
```
- Implement `EspDrillBarTemplate` component
- Add `EspDrillNavBar` for navigation

## 3. Configure Navigation
- Set up paths:
  - Previous drill
  - Current day
  - Next drill
- Verify sequence correctness

## 4. Video Settings
- Use consistent video ID: "wn0IyvGBeUI"
- Use consistent start time: 2248
- Ensure uniformity across files

## 5. Function Standardization
- Name all functions as `EjercicioTemplate`

## 6. Spanish Content Verification
Check `Week 2 Spanish.txt` for:
- Exercise Semana - Dia (e.g., "Semana 2 - Día 2")
- Exercise title (e.g., "Ejercicio X: Marcha de isquiotibiales de pared")
- Configuración (Setup)
- Instrucciones (Instructions)
- Conjuntos (Sets)
- Repeticiones (Reps)
- Respirar (Breathing)
- Descanso (Rest)
- Qué sentir (What to feel)
- Lo que hay que evitar (What to avoid)
- Banderas rojas (Red flags)
- Regresión (Regression)
- Verify exact Spanish formatting and terminology

## 7. Label Formatting
Format labels with bold text and orange color:
```javascript
setsReps={[
  <span className="remove-bullets"><span className="font-bold text-orange-300">Conjuntos:</span> 2-3</span>,
  <span className="remove-bullets"><span className="font-bold text-orange-300">Repeticiones:</span> 8-10 repeticiones lentas por lado</span>,
  <span className="remove-bullets"><span className="font-bold text-orange-300">Respira:</span> Exhala durante la elevación, inhala para regresar</span>,
  <span className="remove-bullets"><span className="font-bold text-orange-300">Descanso:</span> Según sea necesario</span>
]}
```
Ensure labels match card title styling:
Same font size
Same color (orange-300)
Consistent spacing

Remove bullet points from labels:
After setting up the array, ensure no bullet points appear before these labels:
Conjuntos:
Repeticiones:
Respira:
Descanso:

## 8. Card Grouping
Group cards as follows:
1. Setup and Instructions in one card:
   - Configuración
   - Instrucciones
2. What to Feel, What to Avoid, and Red Flags in one card:
   - Qué sentir
   - Lo que hay que evitar
   - Banderas rojas
3. Separate cards for:
   - Conjuntos y Repeticiones
   - Regresión

## 9. Line-by-Line Review
- Compare each section with the content file
- Ensure no content is missed
- Verify exact Spanish terminology
- Check formatting consistency

## Notes
- Always verify the content file for exact Spanish terminology
- Maintain consistency across all exercise files
- Ensure proper navigation paths between exercises
