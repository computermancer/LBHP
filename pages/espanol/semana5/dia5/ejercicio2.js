import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Elevacionesdepantorrillaconcontroldecostillasypelvis() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Elevaciones de Pantorrilla con Control de Costillas y Pelvis"      backButtonText="Semana 5 - Día 5"
      videoId=""
      videoStart={0}
      setup={[" Colóquese de pie con los pies separados a la anchura de las caderas, las manos en las caderas o una pared como apoyo."," Mantener la alineación de las costillas y la pelvis."]}
      instructions={[" Inhala para prepararte."," Exhale y levante los talones del suelo."," Mantenga brevemente, luego vuelva a la posición inicial."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 10-12 repeticiones","Respira: Exhala para levantar, inhala para bajar","Descanso: 30-45 segundos entre series"]}
      whatToFeel={[" Compromiso de la pantorrilla y el pie."," Estabilidad de las costillas y la pelvis."]}
      whatToAvoid={[" Arcos colapsados o pérdida de alineación."]}
      redFlags={[" Dolor en pantorrillas o tobillos."]}
      regression={[" Realice una amplitud de movimiento menor."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia5/ejercicio1" 
        currentDay="/espanol/semana5/dia5" 
        nextDrill="/espanol/semana5/dia5/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
