import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Expansincostalsentadoconcontroldelarespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Expansión Costal Sentado con Control de la Respiración"      backButtonText="Semana 3 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Siéntese erguido en una silla firme, con los pies apoyados en el suelo."," Manos apoyadas suavemente a los lados de la caja torácica."]}
      instructions={[" Inhale profundamente por la nariz, sintiendo cómo las costillas se expanden lateralmente."," Exhala y deja que las costillas vuelvan a su posición neutra."," Concéntrese en la expansión simétrica en ambos lados."," Conjuntos: 2","Repeticiones: 5-8 ciclos de respiración por serie","Respira: Inhala 3-4 segundos, exhala 4-6 segundos","Descanso: Según sea necesario"]}
      setsReps={[]}
      whatToFeel={[" Costillas expandiéndose hacia fuera y hacia atrás."," Respiración constante con mínimo movimiento de la parte superior del pecho."]}
      whatToAvoid={[" Respiración superficial o encogimiento de hombros."]}
      redFlags={[" Mareos o malestar."]}
      regression={[" Coloque las manos sobre los muslos para mayor estabilidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia1/ejercicio5" 
        currentDay="/espanol/semana3/dia2" 
        nextDrill="/espanol/semana3/dia2/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
