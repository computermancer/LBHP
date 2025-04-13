import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Expansindelacostilladeganchoconmarcha() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Expansión de la Costilla de Gancho con Marcha"      backButtonText="Semana 5 - Día 5"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Manos apoyadas en la caja torácica."]}
      instructions={[" Inhale profundamente, sintiendo como las costillas se expanden lateralmente."," Exhale y levante un pie del suelo, manteniendo el control de las costillas."," Vuelva a la posición inicial y alterne los lados."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respirar: Inhala para prepararte, exhala para elevarte","Descanso: Según sea necesario"]}
      whatToFeel={[" Compromiso del núcleo y las costillas."," Movimiento controlado con la respiración."]}
      whatToAvoid={[" Arquear la espalda o perder el control del tronco."]}
      redFlags={[" Dolor o molestias en la zona lumbar."]}
      regression={[" Realiza marchas más pequeñas para mantener el control."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia5/ejercicio3" 
        currentDay="/espanol/semana5/dia5" 
        nextDrill="/espanol/semana5/dia5/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
