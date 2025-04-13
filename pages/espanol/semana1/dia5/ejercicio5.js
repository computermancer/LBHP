import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Respiracinsentadayconcienciaplvica() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Respiración Sentada y Conciencia Pélvica"      backButtonText="Semana 1 - Día 5"
      videoId=""
      videoStart={0}
      setup={[" Siéntese erguido en una silla firme, con los pies apoyados en el suelo."," Manos apoyadas suavemente sobre el vientre y las costillas inferiores."]}
      instructions={[" Inhale profundamente hacia el vientre y las costillas."," Exhale completamente manteniendo la pelvis neutra."," Mantener la conciencia de la posición de las costillas y la pelvis en todo momento."]}
      setsReps={["Conjuntos: 2","Repeticiones: 5-8 ciclos de respiración por serie","Respira: Inhala 3-4 segundos, exhala 4-6 segundos","Descanso: Entre series o según sea necesario"]}
      whatToFeel={[" Conciencia de la expansión de las costillas y control pélvico."," Respiración suave y constante con mínima implicación de la parte superior del tórax."]}
      whatToAvoid={[" Postura de sobreesfuerzo o de colapso."," Respiración torácica superficial."]}
      redFlags={[" Dificultad para mantener el control de la respiración."]}
      regression={[" Coloque una almohada detrás de la parte inferior de la espalda para mayor apoyo."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia5/ejercicio4" 
        currentDay="/espanol/semana1/dia5" 
        nextDrill="/espanol/semana2/dia1/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
