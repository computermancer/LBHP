import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Sentadillasdepesocorporalconcontroldecostillas() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Sentadillas de Peso Corporal con Control de Costillas"      backButtonText="Semana 5 - Día 1"
      videoId=""
      videoStart={0}
      setup={[" Colóquese de pie con los pies separados a la altura de los hombros, con los dedos ligeramente apuntando hacia fuera."," Brazos extendidos hacia delante o manos juntas delante del pecho."]}
      instructions={[" Inhala para prepararte."," Exhala y baja las caderas hacia abajo y atrás, manteniendo las costillas alineadas sobre la pelvis."," Inhala para volver a ponerte de pie."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 10-12 repeticiones lentas y controladas","Respirar: Exhala para bajar, inhala para subir","Descanso: 30-45 segundos entre series"]}
      whatToFeel={[" Compromiso de glúteos, cuádriceps y core."," Control de las costillas y estabilidad de la pelvis en todo momento."]}
      whatToAvoid={[" Colapso del pecho o arqueamiento de la parte baja de la espalda."]}
      redFlags={[" Dolor de rodilla o lumbar."]}
      regression={[" Realice sentadillas sobre una silla o superficie elevada."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia5/ejercicio5" 
        currentDay="/espanol/semana5/dia1" 
        nextDrill="/espanol/semana5/dia1/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
