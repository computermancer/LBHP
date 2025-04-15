import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Flexionesdesueloconcontroldecostillasypelvis() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Flexiones de Suelo con Control de Costillas y Pelvis"
      backButtonText="Semana 5 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Empiece en posición de plancha, con las manos ligeramente más abiertas que la anchura de los hombros.",
        "Mantener el control de las costillas y la pelvis."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhale y baje el pecho hasta el suelo.",
        "Inhala y vuelve a la posición inicial."
      ]}
      setsReps={[
        "Conjuntos: 2-3",
        "Repeticiones: 6-8 repeticiones",
        "Respira: Exhala para empujar, inhala para bajar",
        "Descanso: 45-60 segundos entre series"
      ]}
      whatToFeel={[
        "Pecho, tríceps y tronco comprometidos.",
        "Posición estable de las costillas y la pelvis."
      ]}
      whatToAvoid={[
        "Colapso a través de los hombros o arqueando la espalda."
      ]}
      redFlags={[
        "Dolor en hombros o muñecas."
      ]}
      regression={[
        "Realizar de rodillas o con alcance reducido."
      ]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia4/ejercicio2" 
        currentDay="/espanol/semana5/dia4" 
        nextDrill="/espanol/semana5/dia4/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
