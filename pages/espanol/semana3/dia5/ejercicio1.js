import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Respiracindecocodriloconexpansincostal() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Respiración de Cocodrilo con Expansión Costal"      backButtonText="Semana 3 - Día 5"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca abajo con la frente apoyada en las manos."," Piernas extendidas, dedos de los pies apuntando ligeramente hacia fuera."]}
      instructions={[" Inhala profundamente, sintiendo cómo tu vientre se hunde en el suelo."," Exhale suavemente, dejando que las costillas y el vientre caigan de forma natural."," Concéntrate en expandir la respiración hacia la parte posterior y los lados de la caja torácica."," Conjuntos: 2","Repeticiones: 5-8 ciclos de respiración por serie","Respira: Inhala 3-4 segundos, exhala 4-6 segundos","Descanso: Entre series o según sea necesario"]}
      setsReps={[]}
      whatToFeel={[" Presiona el vientre contra el suelo con cada inhalación."," Respiración relajada y constante."]}
      whatToAvoid={[" Respiración torácica superficial."," Mantener la tensión en la parte superior del cuerpo."]}
      redFlags={[" Mareos o malestar."]}
      regression={[" Coloque una almohada bajo el vientre para mayor comodidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia4/ejercicio5" 
        currentDay="/espanol/semana3/dia5" 
        nextDrill="/espanol/semana3/dia5/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
