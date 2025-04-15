import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Flexinyextensintorcicasentado() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Flexión y Extensión Torácica Sentado"
      backButtonText="Semana 3 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntese erguido en una silla firme, con los pies planos.",
        "Manos apoyadas en los muslos o cruzadas sobre el pecho."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhale y flexione la columna torácica suavemente hacia delante.",
        "Inhale y extienda la columna vertebral hasta la posición neutra."
      ]}
      setsReps={[
        "Conjuntos: 2-3",
        "Repeticiones: 8-10 repeticiones lentas",
        "Respira: Exhala para flexionar, inhala para extender",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Movimiento torácico suave.",
        "Compromiso del núcleo durante la flexión y la extensión."
      ]}
      whatToAvoid={[
        "Sobrepasar o colapsar la columna vertebral."
      ]}
      redFlags={[
        "Dolor agudo o malestar."
      ]}
      regression={[
        "Realice movimientos más pequeños para un mejor control."
      ]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia4/ejercicio1" 
        currentDay="/espanol/semana3/dia4" 
        nextDrill="/espanol/semana3/dia4/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
