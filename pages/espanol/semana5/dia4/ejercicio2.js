import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Flexionesensillaconestabilidadplvica() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Flexiones en Silla con Estabilidad Pélvica"      backButtonText="Semana 5 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Coloque las manos en el borde de una silla robusta, los pies extendidos hacia atrás en posición de tabla."," Mantenga una línea recta desde la cabeza hasta los talones."]}
      instructions={[" Inhala para prepararte."," Exhale y baje el pecho hacia la silla, manteniendo las costillas alineadas."," Inhala y empuja hacia atrás para empezar."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones","Respira: Exhala para empujar, inhala para bajar","Descanso: 30-45 segundos entre series"]}
      whatToFeel={[" Pecho, hombros y tronco comprometidos."," Movimiento controlado con estabilidad de las costillas."]}
      whatToAvoid={[" Dejar caer las caderas o arquear la espalda."]}
      redFlags={[" Dolor o molestias en los hombros."]}
      regression={[" Realiza flexiones contra una superficie más alta."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia4/ejercicio1" 
        currentDay="/espanol/semana5/dia4" 
        nextDrill="/espanol/semana5/dia4/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
