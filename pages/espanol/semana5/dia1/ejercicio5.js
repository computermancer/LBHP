import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Marchasupinaconcontroldeltronco() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Marcha Supina con Control del Tronco"      backButtonText="Semana 5 - Día 1"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Brazos apoyados a los lados."]}
      instructions={[" Inhala para prepararte."," Exhale y levante un pie del suelo, manteniendo la estabilidad del tronco."," Inhala para volver y alterna los lados."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respira: Exhala para levantar, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Control y estabilidad del núcleo."," Movimiento suave y controlado de las piernas."]}
      whatToAvoid={[" Arquear la parte baja de la espalda."]}
      redFlags={[" Dolor o molestias en la zona lumbar."]}
      regression={[" Realice marchas más pequeñas para reducir la intensidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia1/ejercicio4" 
        currentDay="/espanol/semana5/dia1" 
        nextDrill="/espanol/semana5/dia2/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
