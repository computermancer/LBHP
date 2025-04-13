import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Reposicinsupinadeldiafragma() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Reposición Supina del Diafragma"      backButtonText="Semana 1 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Coloca una mano sobre el vientre y la otra sobre el pecho."]}
      instructions={[" Inhale profundamente por la nariz, permitiendo que el vientre se expanda."," Exhala suavemente, sintiendo cómo cae el vientre."," Concéntrate en relajar las costillas y el diafragma."]}
      setsReps={["Conjuntos: 2","Repeticiones: 5-8 ciclos de respiración por serie","Respira: Inhala 3-4 segundos, exhala 4-6 segundos","Descanso: Entre series o según sea necesario"]}
      whatToFeel={[" Expansión del vientre y de las costillas inferiores."," Respiración relajada y controlada."]}
      whatToAvoid={[" Dominancia torácica o respiración superficial."]}
      redFlags={[" Mareo o dificultad para mantener la posición."]}
      regression={[" Apoya las rodillas con una almohada para reducir la tensión."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia3/ejercicio5" 
        currentDay="/espanol/semana1/dia4" 
        nextDrill="/espanol/semana1/dia4/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
