import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function EjercicioTemplate() {
  return (
    <EspDrillBarTemplate
      title="Alcance cuadrúpedo con control de costillas"
      backButtonText="Volver a Día 2"
      videoId="" // TODO: Add appropriate video ID
      videoStart={0}
      setup={[
        "Comienza en posición cuadrúpeda, con las manos bajo los hombros y las rodillas bajo las caderas.",
        "Mantenga una columna vertebral neutra con las costillas alineadas."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhale y lentamente extienda un brazo hacia adelante mientras mantiene el control de las costillas.",
        "Vuelva a la posición inicial y alterne los lados.",
        "Mantenga una respiración lenta y controlada."
      ]}
      setsReps={[
        "Conjuntos: 2-3",
        "Repeticiones: 8-10 repeticiones lentas por lado",
        "Respira: Exhala durante el alcance, inhala para volver",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Estabilidad a través de las costillas y el núcleo.",
        "Movimiento suave y controlado, sin que se ensanchen las costillas."
      ]}
      whatToAvoid={[
        "Perder el control de las costillas o arquear la parte baja de la espalda."
      ]}
      redFlags={[
        "Dolor o molestias en los hombros o en la parte baja de la espalda."
      ]}
      regression={[
        "Reducir la amplitud de movimiento si el control es difícil."
      ]}
    >
      <EspDrillNavBar 
        prevDrill="/s2d2e0" // TODO: Update with correct previous drill path
        currentDay="/s2d2" // TODO: Update with correct current day path
        nextDrill="/s2d2e2" // TODO: Update with correct next drill path
        disablePrevious={false}
      />
    </EspDrillBarTemplate>
  );
}
