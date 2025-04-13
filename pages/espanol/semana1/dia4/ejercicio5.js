import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Respiracinsentadaconcontroldecostillas() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Respiración Sentada con Control de Costillas"      backButtonText="Semana 1 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Siéntese erguido en una silla firme, con los pies planos."," Las manos apoyadas suavemente sobre las costillas."]}
      instructions={[" Inhala hacia las costillas inferiores y el vientre."," Exhale completamente, sintiendo las costillas caer hacia atrás."," Mantenga la pelvis neutra en todo momento."]}
      setsReps={["Conjuntos: 2","Repeticiones: 5-8 ciclos de respiración por serie","Respira: Inhala 3-4 segundos, exhala 4-6 segundos","Descanso: Entre series o según sea necesario"]}
      whatToFeel={[" Expansión y contracción de las costillas inferiores."," Respiración suave y relajada."]}
      whatToAvoid={[" Postura de sobreesfuerzo o de colapso."]}
      redFlags={[" Dificultad para mantener el control."]}
      regression={[" Coloque una almohada detrás de la parte inferior de la espalda para apoyarse."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia4/ejercicio4" 
        currentDay="/espanol/semana1/dia4" 
        nextDrill="/espanol/semana1/dia5/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
