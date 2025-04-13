import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Desplazamientoposteriordelpesodepie() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Desplazamiento Posterior del Peso de Pie"      backButtonText="Semana 2 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Colóquese de pie con los pies separados a la anchura de las caderas y las rodillas ligeramente flexionadas."]}
      instructions={[" Exhale y desplace el peso ligeramente hacia atrás, hacia los talones."," Mantenga la columna vertebral neutra mientras se desplaza."," Vuelve al centro con control."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 turnos lentos","Respira: Exhala durante el cambio, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Compromiso de los isquiotibiales y de la cadena posterior."]}
      whatToAvoid={[" Inclinarse demasiado hacia atrás o perder el equilibrio."]}
      redFlags={[" Dolor o molestias en rodillas o espalda."]}
      regression={[" Realícelo cerca de una pared para mayor equilibrio."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia2/ejercicio2" 
        currentDay="/espanol/semana2/dia2" 
        nextDrill="/espanol/semana2/dia2/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
