import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Balanceobilateralsuave() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Balanceo Bilateral Suave"      backButtonText="Semana 1 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Los brazos descansan cómodamente a los lados."]}
      instructions={[" Mece suavemente ambas rodillas de lado a lado."," Muévase dentro de una amplitud de movimiento cómoda."," Vuelva al centro antes de cambiar de lado."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 rocas lentas por lado","Respira: Inhala en el centro, exhala mientras te meces","Descanso: Según sea necesario"]}
      whatToFeel={[" Movilidad suave de la pelvis y la zona lumbar."," Movimiento relajado con control."]}
      whatToAvoid={[" Forzar demasiado las rodillas."," Tensión a través de la columna vertebral."]}
      redFlags={[" Dolor agudo o malestar."]}
      regression={[" Reduzca la amplitud de movimiento si es necesario."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia3/ejercicio4" 
        currentDay="/espanol/semana1/dia3" 
        nextDrill="/espanol/semana1/dia4/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
