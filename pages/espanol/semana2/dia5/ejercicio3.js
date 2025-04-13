import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Torsindecolumnasentadoconextensindebrazos() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Torsión de Columna Sentado con Extensión de Brazos"      backButtonText="Semana 2 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Siéntese erguido en una silla firme, con los pies planos y las manos cruzadas sobre el pecho."]}
      instructions={[" Inhala para prepararte."," Exhala y gira la parte superior del cuerpo hacia un lado mientras extiendes un brazo hacia delante."," Vuelve al centro y cambia de lado."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respirar: Exhala durante la rotación, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Rotación torácica controlada con movimiento escapular."]}
      whatToAvoid={[" Rotación excesiva o pérdida de control de las costillas."]}
      redFlags={[" Dolor o molestias en la columna vertebral."]}
      regression={[" Realícelo sin que le alcance el brazo si es necesario."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia5/ejercicio2" 
        currentDay="/espanol/semana2/dia5" 
        nextDrill="/espanol/semana2/dia5/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
