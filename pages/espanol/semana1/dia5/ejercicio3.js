import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Torsindecolumnasentadoconrespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Torsión de Columna Sentado con Respiración"      backButtonText="Semana 1 - Día 5"
      videoId=""
      videoStart={0}
      setup={[" Siéntese erguido en una silla firme, con los pies apoyados en el suelo."," Manos apoyadas suavemente en las rodillas o cruzadas sobre el pecho."]}
      instructions={[" Inhala para prepararte."," Exhale y gire la parte superior del cuerpo hacia un lado."," Vuelva al centro antes de girar al otro lado."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respirar: Exhala durante la rotación, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Rotación controlada a través de la columna torácica."," Compromiso del núcleo y los oblicuos."]}
      whatToAvoid={[" Rotación desde las caderas o la parte baja de la espalda."," Movimientos bruscos o precipitados."]}
      redFlags={[" Dolor o molestias durante la rotación."]}
      regression={[" Agárrese al lateral de la silla para mayor estabilidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia5/ejercicio2" 
        currentDay="/espanol/semana1/dia5" 
        nextDrill="/espanol/semana1/dia5/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
