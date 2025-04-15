import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Respiracindeengancheconconcienciaplvica() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Respiración de Enganche con Conciencia Pélvica"
      backButtonText="Semana 3 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo.",
        "Manos apoyadas sobre el bajo vientre y la caja torácica."
      ]}
      instructions={[
        "Inhale y sienta cómo su vientre se expande suavemente.",
        "Exhale completamente manteniendo la pelvis neutra.",
        "Concéntrate en la conciencia del movimiento pélvico con cada respiración."
      ]}
      setsReps={[
        "Conjuntos: 2",
        "Repeticiones: 5-8 ciclos de respiración por serie",
        "Respira: Inhala 3-4 segundos, exhala 4-6 segundos",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Vientre y costillas expandiéndose con la respiración.",
        "Movimiento pélvico mínimo con respiración controlada."
      ]}
      whatToAvoid={[
        "Inclinación excesiva de la pelvis o arqueamiento de la espalda."
      ]}
      redFlags={[
        "Mareos o molestias al respirar."
      ]}
      regression={[
        "Utilice una almohada debajo de las rodillas para mantener la neutralidad pélvica."
      ]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia5/ejercicio5" 
        currentDay="/espanol/semana3/dia1" 
        nextDrill="/espanol/semana3/dia1/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
