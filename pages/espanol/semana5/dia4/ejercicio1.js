import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Flexionesdeparedconestabilidadcostal() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Flexiones de Pared con Estabilidad Costal"      backButtonText="Semana 5 - Día 4"
      videoId=""
      videoStart={0}
      setup={[" Colóquese de pie frente a una pared, con las manos ligeramente más abiertas que la anchura de los hombros."," Los pies separados a la anchura de las caderas, el cuerpo en línea recta."]}
      instructions={[" Inhala para prepararte."," Exhale y baje el pecho hacia la pared, manteniendo el control de las costillas y la pelvis."," Inhala y vuelve a la posición inicial."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones","Respira: Exhala para empujar, inhala para bajar","Descanso: 30-45 segundos entre series"]}
      whatToFeel={[" Pecho, hombros y tronco comprometidos."," Alineación mantenida de costilla y pelvis."]}
      whatToAvoid={[" Arquear la zona lumbar o perder el control del tronco."]}
      redFlags={[" Dolor en hombros o muñecas."]}
      regression={[" Realícelo con una inclinación mayor (más cerca de la pared)."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia3/ejercicio5" 
        currentDay="/espanol/semana5/dia4" 
        nextDrill="/espanol/semana5/dia4/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
