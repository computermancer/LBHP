import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Expansindelacostilladeganchoconmarcha() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Expansión de la Costilla de Gancho con Marcha"      backButtonText="Semana 4 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies planos."," Manos apoyadas a los lados de las costillas."]}
      instructions={[" Inhala profundamente, expandiendo las costillas."," Exhale y levante una rodilla hacia el pecho mientras mantiene el control de las costillas."," Vuelva a la posición inicial y alterne los lados."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respira: Exhala para levantar, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Compromiso del núcleo y estabilidad de las costillas."," Movimiento suave y controlado de las piernas."]}
      whatToAvoid={[" Arquear la parte baja de la espalda."]}
      redFlags={[" Dolor o molestias en la zona lumbar."]}
      regression={[" Realícelo con los pies más cerca del suelo para reducir la intensidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia1/ejercicio2" 
        currentDay="/espanol/semana4/dia1" 
        nextDrill="/espanol/semana4/dia1/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
