import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Marchasupinaconcontroldeltronco() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Marcha Supina con Control del Tronco"
      backButtonText="Semana 3 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Túmbate boca arriba con las rodillas flexionadas y los pies planos.",
        "Brazos apoyados a los lados."
      ]}
      instructions={[
        "Exhale y levante una rodilla hacia el pecho.",
        "Inhale y vuelva a la posición inicial.",
        "Alterne los lados manteniendo el control de las costillas y la pelvis."
      ]}
      setsReps={[
        "Conjuntos: 2-3",
        "Repeticiones: 8-10 repeticiones por lado",
        "Respira: Exhala para levantar, inhala para volver",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Compromiso del núcleo y estabilidad de las costillas.",
        "Movimiento suave y controlado de las piernas."
      ]}
      whatToAvoid={[
        "Arquear la parte baja de la espalda."
      ]}
      redFlags={[
        "Dolor o molestias en la zona lumbar."
      ]}
      regression={[
        "Realícelo con los pies más cerca del suelo para reducir la intensidad."
      ]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia2/ejercicio1" 
        currentDay="/espanol/semana3/dia2" 
        nextDrill="/espanol/semana3/dia2/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
