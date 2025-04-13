import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Puentebilateraldeglteosconcontroldecostillasypelvis() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Puente Bilateral de Glúteos con Control de Costillas y Pelvis"      backButtonText="Semana 5 - Día 3"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Brazos apoyados a los lados."]}
      instructions={[" Inhala para prepararte."," Exhale y levante las caderas hacia el techo mientras mantiene el control de las costillas."," Mantenga brevemente y vuelva a la posición inicial."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones","Respira: Exhala para levantar, inhala para bajar","Descanso: 30-45 segundos entre series"]}
      whatToFeel={[" Glúteos, isquiotibiales y core comprometidos."," Se mantiene la estabilidad de la pelvis y las costillas."]}
      whatToAvoid={[" Sobrecarga de la zona lumbar."]}
      redFlags={[" Dolor en la parte baja de la espalda o las caderas."]}
      regression={[" Realiza una menor amplitud de movimiento."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia3/ejercicio3" 
        currentDay="/espanol/semana5/dia3" 
        nextDrill="/espanol/semana5/dia3/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
