import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Torsindecolumnasentadoconextensindebrazos() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Torsión de Columna Sentado con Extensión de Brazos"      backButtonText="Semana 4 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Siéntese erguido en una silla firme, con los pies planos."," Manos apoyadas en los muslos o cruzadas sobre el pecho."]}
      instructions={[" Inhala para prepararte."," Exhale y gire la parte superior del cuerpo hacia un lado, extendiendo un brazo hacia delante."," Vuelva al centro y repita en el lado opuesto."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 por lado","Respirar: Exhala para girar, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Rotación torácica suave."," Estabilidad de las costillas al girar."]}
      whatToAvoid={[" Torsión de la parte inferior de la espalda."]}
      redFlags={[" Dolor o molestias durante la rotación."]}
      regression={[" Realizar con las manos en las rodillas para apoyo."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia4/ejercicio4" 
        currentDay="/espanol/semana4/dia4" 
        nextDrill="/espanol/semana4/dia5/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
