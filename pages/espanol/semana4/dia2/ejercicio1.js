import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Flexinyextensintorcicasentado() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Flexión y Extensión Torácica Sentado"      backButtonText="Semana 4 - Día 2"
      videoId=""
      videoStart={0}
      setup={[" Siéntese erguido en una silla firme, con los pies apoyados en el suelo."," Manos apoyadas en los muslos o cruzadas sobre el pecho."]}
      instructions={[" Inhala para prepararte."," Exhale y flexione suavemente la columna torácica hacia delante."," Inhale y extienda la columna vertebral hasta la posición neutra."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas","Respira: Exhala para flexionar, inhala para extender","Descanso: Según sea necesario"]}
      whatToFeel={[" Movimiento torácico suave."," Compromiso del núcleo durante la flexión y la extensión."]}
      whatToAvoid={[" Sobrepasar o colapsar la columna vertebral."]}
      redFlags={[" Dolor agudo o malestar."]}
      regression={[" Realice movimientos más pequeños para un mejor control."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia1/ejercicio5" 
        currentDay="/espanol/semana4/dia2" 
        nextDrill="/espanol/semana4/dia2/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
