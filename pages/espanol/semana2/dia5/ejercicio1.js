import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Respiracindecocodriloconexpansincostal() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Respiración de Cocodrilo con Expansión Costal"      backButtonText="Semana 2 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca abajo con la frente apoyada en las manos."," Piernas extendidas, dedos de los pies apuntando ligeramente hacia fuera."]}
      instructions={[" Inhale profundamente, sintiendo que su vientre presiona el suelo."," Exhale suavemente, permitiendo que las costillas se relajen y caigan."," Concéntrese en la expansión lateral de las costillas durante la inhalación."]}
      setsReps={["Conjuntos: 2","Repeticiones: 5-8 ciclos de respiración por serie","Respira: Inhala 3-4 segundos, exhala 4-6 segundos","Descanso: Entre series o según sea necesario"]}
      whatToFeel={[" Expansión de las costillas inferiores y del vientre."]}
      whatToAvoid={[" Respiración torácica superficial o tensión."]}
      redFlags={[" Mareos o malestar."]}
      regression={[" Coloca una almohada debajo del vientre para apoyarte."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia4/ejercicio5" 
        currentDay="/espanol/semana2/dia5" 
        nextDrill="/espanol/semana2/dia5/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
