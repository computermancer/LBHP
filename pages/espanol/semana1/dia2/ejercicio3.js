import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Bisagradecaderadepieconalcancedepared() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Bisagra de Cadera de Pie con Alcance de Pared"      backButtonText="Semana 1 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Colóquese de espaldas a una pared, con los pies separados a la anchura de las caderas."," Colóquese a unos 15 cm de la pared."]}
      instructions={[" Empuje las caderas hacia la pared manteniendo la columna neutra."," Extienda ambas manos hacia delante mientras realiza la bisagra."," Detente cuando tus caderas toquen ligeramente la pared."," Vuelva a ponerse de pie llevando las caderas hacia delante."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas y controladas","Respira: Inhala al girar, exhala al volver.","Descanso: Según sea necesario"]}
      whatToFeel={[" Los isquiotibiales y los glúteos se activan durante la bisagra."," Longitud a través de la columna vertebral y el núcleo comprometido."]}
      whatToAvoid={[" Redondear la parte baja de la espalda."," Empujar las caderas demasiado hacia atrás, causando pérdida de equilibrio."]}
      redFlags={[" Dolor o molestias en la parte baja de la espalda."]}
      regression={[" Colóquese más cerca de la pared para reducir la profundidad de las bisagras."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia2/ejercicio2" 
        currentDay="/espanol/semana1/dia2" 
        nextDrill="/espanol/semana1/dia2/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
