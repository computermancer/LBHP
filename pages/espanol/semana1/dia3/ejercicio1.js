import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Recuperacindelarespiracinentumbadolateral() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Recuperación de la Respiración en Tumbado Lateral"      backButtonText="Semana 1 - Día 3"
      videoId=""
      videoStart={0}
      setup={[" Túmbate de lado con las rodillas flexionadas a 90 grados, la cabeza apoyada."," Coloca una mano en la parte superior de la caja torácica y la otra en el vientre."]}
      instructions={[" Inhala profundamente hacia las costillas inferiores y el vientre."," Exhale suavemente, dejando que las costillas caigan de forma natural."," Concéntrate en crear expansión en las costillas inferiores con cada respiración."]}
      setsReps={["Conjuntos: 2","Repeticiones: 5-8 ciclos de respiración por serie","Respira: Inhala 3-4 segundos, exhala 4-6 segundos","Descanso: Entre series o según sea necesario"]}
      whatToFeel={[" La parte inferior de la caja torácica se expande con cada inhalación."," Respiración relajada y controlada."]}
      whatToAvoid={[" Sobrecarga de la parte baja de la espalda."," Tensión en la parte superior del pecho o en los hombros."]}
      redFlags={[" Mareos o dificultad para respirar."]}
      regression={[" Apoye el torso con una almohada para mantener la alineación."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia2/ejercicio5" 
        currentDay="/espanol/semana1/dia3" 
        nextDrill="/espanol/semana1/dia3/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
