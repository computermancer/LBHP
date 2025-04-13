import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3FlexinExtensintorcicasentado() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Flexión/extensión Torácica Sentado"      backButtonText="Semana 2 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Siéntese erguido en una silla firme, con los pies planos y las manos sobre el pecho."]}
      instructions={[" Inhala para prepararte."," Exhale y flexione suavemente hacia delante la parte superior de la espalda."," Inhale y extienda la columna torácica, levantando el pecho."," Muévete suavemente entre posiciones."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas","Respiración: Espira durante la flexión, inspira para extender","Descanso: Según sea necesario"]}
      whatToFeel={[" Flexión y extensión controladas de la columna torácica."]}
      whatToAvoid={[" Postura global o de colapso."]}
      redFlags={[" Dolor o molestias en la columna vertebral."]}
      regression={[" Realícelo con los brazos cruzados para reducir la tensión."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia4/ejercicio2" 
        currentDay="/espanol/semana2/dia4" 
        nextDrill="/espanol/semana2/dia4/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
