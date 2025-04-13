import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Flexionesdesueloconcontroldecostillasypelvis() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Flexiones de Suelo con Control de Costillas y Pelvis"      backButtonText="Semana 5 - Día 4"
      videoId=""
      videoStart={0}
      setup={[" Empiece en posición de plancha, con las manos ligeramente más abiertas que la anchura de los hombros."," Mantener el control de las costillas y la pelvis."," Siéntese erguido en una silla firme, con los pies apoyados en el suelo."," Manos apoyadas en los muslos o cruzadas sobre el pecho."]}
      instructions={[" Inhala para prepararte."," Exhale y gire la parte superior del cuerpo hacia un lado, extendiendo un brazo hacia delante."," Vuelva al centro antes de girar al otro lado."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 6-8 repeticiones","Respira: Exhala para empujar, inhala para bajar","Descanso: 45-60 segundos entre series","Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respirar: Exhala durante la rotación, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Pecho, tríceps y tronco comprometidos."," Posición estable de las costillas y la pelvis."," Rotación torácica controlada."," Movimiento escapular con alcance."]}
      whatToAvoid={[" Colapso a través de los hombros o arqueando la espalda."," Rotación desde las caderas o la parte baja de la espalda."]}
      redFlags={[" Dolor en hombros o muñecas."," Dolor o molestias durante la rotación."]}
      regression={[" Realizar de rodillas o con alcance reducido."," Realizar con las manos en las rodillas para apoyo."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia4/ejercicio2" 
        currentDay="/espanol/semana5/dia4" 
        nextDrill="/espanol/semana5/dia4/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
