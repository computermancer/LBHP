import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Respiracinsentadacondesplazamientodecadera() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Respiración Sentada con Desplazamiento de Cadera"      backButtonText="Semana 2 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Siéntese erguido en una silla firme, con los pies planos."," Manos apoyadas sobre la pelvis o los muslos."]}
      instructions={[" Inhale profundamente, manteniendo el control de la pelvis y las costillas."," Exhale y mueva suavemente la pelvis de lado a lado."," Vuelva al centro entre cada turno."]}
      setsReps={["Conjuntos: 2","Repeticiones: 5-8 cambios lentos por serie","Respirar: Inhala para prepararte, exhala durante el turno","Descanso: Entre series o según sea necesario"]}
      whatToFeel={[" Conexión entre la respiración, la pelvis y la caja torácica."]}
      whatToAvoid={[" Cambio excesivo o pérdida de control."]}
      redFlags={[" Dolor o molestias en las caderas o en la parte baja de la espalda."]}
      regression={[" Utilice una almohada para el apoyo lumbar."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia5/ejercicio4" 
        currentDay="/espanol/semana2/dia5" 
        nextDrill="/espanol/semana3/dia1/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
