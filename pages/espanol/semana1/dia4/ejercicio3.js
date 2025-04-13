import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Extensintorcicasentado() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Extensión Torácica Sentado"      backButtonText="Semana 1 - Día 4"
      videoId=""
      videoStart={0}
      setup={[" Siéntate en una silla firme, con los pies planos y las manos detrás de la cabeza."]}
      instructions={[" Inhala para prepararte."," Exhale y extienda suavemente la parte superior de la espalda."," Mantener el contacto entre las costillas inferiores y la pelvis."," Vuelva al punto muerto y repita."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas y controladas","Respirar: Exhala durante la extensión, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Apertura a través del pecho y la parte superior de la espalda."," Compromiso de los músculos de la parte superior de la espalda."]}
      whatToAvoid={[" Espalda baja arqueada o costillas ensanchadas."]}
      redFlags={[" Dolor o molestias en la columna vertebral."]}
      regression={[" Realizar con los brazos cruzados si la movilidad es limitada."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia4/ejercicio2" 
        currentDay="/espanol/semana1/dia4" 
        nextDrill="/espanol/semana1/dia4/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
