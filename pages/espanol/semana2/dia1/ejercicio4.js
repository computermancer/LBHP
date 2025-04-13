import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Descensodepiernas9090endecbitosupino() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Descenso de Piernas 90-90 en Decúbito Supino"      backButtonText="Semana 2 - Día 1"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las caderas y las rodillas flexionadas a 90 grados."," Brazos apoyados a los lados o colocados suavemente sobre las costillas."]}
      instructions={[" Exhale y baje lentamente una pierna hacia el suelo."," Mantenga estables la pierna contraria y la pelvis."," Inhale para volver a la posición inicial."," Alterne los lados con control."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respirar: Exhala para bajar, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Control y estabilidad del núcleo."," Movimiento suave de las piernas sin desplazamiento de la pelvis."]}
      whatToAvoid={[" Arquear la parte inferior de la espalda o perder el compromiso del núcleo."]}
      redFlags={[" Lumbalgia o inestabilidad."]}
      regression={[" Baje menos las piernas si le resulta difícil mantener el control."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia1/ejercicio3" 
        currentDay="/espanol/semana2/dia1" 
        nextDrill="/espanol/semana2/dia1/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
