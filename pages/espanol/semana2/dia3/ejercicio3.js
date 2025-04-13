import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Rotacindelacolumnasentadoconrespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Rotación de la Columna Sentado con Respiración"      backButtonText="Semana 2 - Día 3"
      videoId=""
      videoStart={0}
      setup={[" Siéntese erguido en una silla firme, con los pies planos y las manos sobre el pecho."]}
      instructions={[" Inhala para prepararte."," Exhale y gire la parte superior del cuerpo hacia un lado mientras mantiene el control de las costillas."," Vuelva al centro y alterne los lados."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respirar: Exhala durante la rotación, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Rotación controlada a través de la columna torácica."]}
      whatToAvoid={[" Rotación excesiva o pérdida de control del núcleo."]}
      redFlags={[" Dolor o molestias en la columna vertebral o las costillas."]}
      regression={[" Reduzca el rango de rotación si es necesario."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia3/ejercicio2" 
        currentDay="/espanol/semana2/dia3" 
        nextDrill="/espanol/semana2/dia3/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
