import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Expansinlateraldelascostillas() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Expansión Lateral de las Costillas"      backButtonText="Semana 1 - Día 2"
      videoId=""
      videoStart={0}
      setup={[" Túmbate de lado con las rodillas flexionadas a 90 grados y apiladas."," Apoya el brazo de abajo debajo de la cabeza."]}
      instructions={[" Inhale profundamente en la parte inferior de las costillas."," Siente cómo las costillas se expanden lateralmente al inspirar."," Exhala lentamente y deja que las costillas caigan de forma natural."," Concéntrate en dirigir la respiración hacia la parte inferior de la caja torácica."]}
      setsReps={["Conjuntos: 2","Repeticiones: 5-8 ciclos de respiración por serie","Respira: Inhala 3-4 segundos, exhala 4-6 segundos","Descanso: Entre series o según sea necesario"]}
      whatToFeel={[" Expansión de las costillas inferiores."," Respiración controlada y relajada sin dominancia del pecho."]}
      whatToAvoid={[" Respirar sólo en la parte superior del pecho."," Colapso o pérdida de la posición de las costillas."]}
      redFlags={[" Mareos o dificultad para mantener la posición."]}
      regression={[" Apoya el torso en una almohada para mayor comodidad y estabilidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia1/ejercicio5" 
        currentDay="/espanol/semana1/dia2" 
        nextDrill="/espanol/semana1/dia2/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
