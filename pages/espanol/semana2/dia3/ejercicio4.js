import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Abduccindecaderaendecbitolateralconapoyo() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Abducción de Cadera en Decúbito Lateral con Apoyo"      backButtonText="Semana 2 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate de lado con las rodillas ligeramente flexionadas y apiladas."," Apoya la cabeza en una almohada o en el brazo."]}
      instructions={[" Exhale y levante ligeramente la pierna de arriba manteniendo la estabilidad pélvica."," Inhale para volver a la posición inicial."," Muévase lentamente y mantenga el control durante todo el recorrido."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respirar: Exhala durante la elevación, inhala para regresar","Descanso: Según sea necesario"]}
      whatToFeel={[" Activación de los músculos laterales de la cadera."]}
      whatToAvoid={[" Girar la pelvis hacia delante o hacia atrás."]}
      redFlags={[" Dolor o molestias en las caderas."]}
      regression={[" Coloque una almohada entre las rodillas para mayor apoyo."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia3/ejercicio3" 
        currentDay="/espanol/semana2/dia3" 
        nextDrill="/espanol/semana2/dia3/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
