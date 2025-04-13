import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Rotacindelacolumnasentadoconalcancedebrazos() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Rotación de la Columna Sentado con Alcance de Brazos"      backButtonText="Semana 4 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Siéntese erguido en una silla firme, con los pies apoyados en el suelo."," Manos apoyadas en los muslos o cruzadas sobre el pecho."]}
      instructions={[" Inhala para prepararte."," Exhale y gire la parte superior del cuerpo hacia un lado, extendiendo un brazo hacia delante."," Vuelva al centro antes de girar al otro lado."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respirar: Exhala durante la rotación, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Rotación torácica controlada."," Movimiento escapular con alcance."]}
      whatToAvoid={[" Rotación desde las caderas o la parte baja de la espalda."]}
      redFlags={[" Dolor o molestias durante la rotación."]}
      regression={[" Realizar con las manos en las rodillas para apoyo."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia2/ejercicio2" 
        currentDay="/espanol/semana4/dia2" 
        nextDrill="/espanol/semana4/dia2/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
