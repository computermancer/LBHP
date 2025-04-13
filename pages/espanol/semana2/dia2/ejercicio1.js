import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Alcancecuadrpedoconcontroldecostillas() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Alcance Cuadrúpedo con Control de Costillas"      backButtonText="Semana 2 - Día 2"
      videoId=""
      videoStart={0}
      setup={[" Comienza en posición cuadrúpeda, con las manos bajo los hombros y las rodillas bajo las caderas."," Mantenga una columna vertebral neutra con las costillas alineadas."]}
      instructions={[" Inhala para prepararte."," Exhale y lentamente extienda un brazo hacia adelante mientras mantiene el control de las costillas."," Vuelva a la posición inicial y alterne los lados."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respira: Exhala durante el alcance, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Estabilidad a través de las costillas y el núcleo."," Movimiento suave y controlado, sin que se ensanchen las costillas."]}
      whatToAvoid={[" Perder el control de las costillas o arquear la parte baja de la espalda."]}
      redFlags={[" Dolor o molestias en los hombros o en la parte baja de la espalda."]}
      regression={[" Reducir la amplitud de movimiento si el control es difícil."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia1/ejercicio5" 
        currentDay="/espanol/semana2/dia2" 
        nextDrill="/espanol/semana2/dia2/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
