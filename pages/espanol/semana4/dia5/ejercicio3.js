import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Concienciaplvicaposteriorsentado() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Conciencia Pélvica Posterior Sentado"      backButtonText="Semana 4 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Siéntese erguido en una silla firme, con los pies apoyados en el suelo."," Manos apoyadas en los muslos."]}
      instructions={[" Inhala para prepararte."," Exhale y balancee suavemente la pelvis hacia delante y hacia atrás."," Mantén la conciencia de tu pelvis moviéndose en punto muerto."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas","Respira: Exhala para balancearte, inhala para regresar","Descanso: Según sea necesario"]}
      whatToFeel={[" Control pélvico suave."," Conciencia de la posición neutra de la pelvis."]}
      whatToAvoid={[" Postura global o de colapso."]}
      redFlags={[" Dolor agudo o malestar."]}
      regression={[" Limita la amplitud de movimiento para un mejor control."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia5/ejercicio2" 
        currentDay="/espanol/semana4/dia5" 
        nextDrill="/espanol/semana4/dia5/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
