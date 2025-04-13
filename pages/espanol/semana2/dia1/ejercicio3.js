import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3IRdecaderaendecbitolateralconrespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Ir de Cadera en Decúbito Lateral con Respiración"      backButtonText="Semana 2 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate de lado con las rodillas flexionadas y apiladas."," Apoya la cabeza en una almohada o en el brazo."]}
      instructions={[" Exhale y gire la rodilla superior hacia dentro manteniendo la pelvis estable."," Inhale para volver a la posición inicial."," Muévase lentamente y mantenga el control durante todo el recorrido."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respirar: Exhala durante la rotación, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Rotación interna de la cadera."," Pelvis estable con movimiento controlado."]}
      whatToAvoid={[" Girar la pelvis hacia delante o hacia atrás."," Forzar la amplitud de movimiento."]}
      redFlags={[" Dolor agudo o malestar."]}
      regression={[" Coloque una almohada entre las rodillas para mayor apoyo."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia1/ejercicio2" 
        currentDay="/espanol/semana2/dia1" 
        nextDrill="/espanol/semana2/dia1/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
