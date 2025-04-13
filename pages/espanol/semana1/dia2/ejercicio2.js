import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Rotacintorcicasentado() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Rotación Torácica Sentado"      backButtonText="Semana 1 - Día 2"
      videoId=""
      videoStart={0}
      setup={[" Siéntese erguido en una silla firme, con los pies planos y las manos cruzadas sobre el pecho."]}
      instructions={[" Inhala para prepararte."," Exhale y gire lentamente la parte superior del cuerpo hacia un lado."," Mantenga la pelvis y las caderas inmóviles, centrándose en la rotación torácica."," Vuelva al centro y repita por el otro lado."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones por lado","Respirar: Exhala durante la rotación, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Rotación suave a través de la parte superior de la espalda."," Respiración controlada guiando el movimiento."]}
      whatToAvoid={[" Rotación desde las caderas o la parte baja de la espalda."," Movimientos bruscos o precipitados."]}
      redFlags={[" Dolor o molestias en la columna vertebral."]}
      regression={[" Apoye las manos en una mesa si le resulta difícil mantener la posición."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia2/ejercicio1" 
        currentDay="/espanol/semana1/dia2" 
        nextDrill="/espanol/semana1/dia2/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
