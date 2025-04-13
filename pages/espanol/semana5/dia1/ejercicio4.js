import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Sentadillasparcialesconapoyoenlapared() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Sentadillas Parciales con Apoyo en la Pared"      backButtonText="Semana 5 - Día 1"
      videoId=""
      videoStart={0}
      setup={[" Colóquese de espaldas a una pared, con un pie adelantado y el otro apoyado en la pared."," Baje a una posición de sentadilla dividida."]}
      instructions={[" Inhala para prepararte."," Exhale y mantenga la posición inferior de la sentadilla dividida."," Mantenga el control de las costillas y la pelvis durante todo el agarre."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 20-30 segundos por lado","Respiración: Respiración constante durante todo el recorrido","Descanso: 30-45 segundos entre presiones"]}
      whatToFeel={[" Compromiso de glúteos, cuádriceps y core."," Estabilidad en la pelvis y las costillas."]}
      whatToAvoid={[" Permitir que la rodilla se hunda hacia dentro."]}
      redFlags={[" Dolor en la parte delantera de la rodilla o la cadera."]}
      regression={[" Realice una sentadilla dividida más alta para reducir la intensidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia1/ejercicio3" 
        currentDay="/espanol/semana5/dia1" 
        nextDrill="/espanol/semana5/dia1/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
