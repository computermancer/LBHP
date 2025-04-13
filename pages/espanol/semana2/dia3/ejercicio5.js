import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Sentadillaprofundaapoyadaenlapared() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Sentadilla Profunda Apoyada en la Pared"      backButtonText="Semana 2 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Colóquese de pie frente a una pared, con los pies ligeramente más abiertos que la anchura de la cadera."," Los dedos de los pies apuntan ligeramente hacia fuera."]}
      instructions={[" Inhala para prepararte."," Exhale y baje lentamente hasta una sentadilla profunda manteniendo el control de las costillas y la pelvis."," Mantenga la posición brevemente y vuelva a ponerse de pie."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 5-8 repeticiones lentas","Respirar: Exhala durante el descenso, inhala para subir","Descanso: Según sea necesario"]}
      whatToFeel={[" Apertura a través de las caderas y estabilidad a través del núcleo."]}
      whatToAvoid={[" Colapso del tórax o ensanchamiento de las costillas."]}
      redFlags={[" Dolor o molestias en rodillas o caderas."]}
      regression={[" Realice una sentadilla parcial si la profundidad total le resulta incómoda."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia3/ejercicio4" 
        currentDay="/espanol/semana2/dia3" 
        nextDrill="/espanol/semana2/dia4/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
