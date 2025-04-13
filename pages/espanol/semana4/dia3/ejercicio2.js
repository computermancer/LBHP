import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Balanceoplvicoposteriorsentado() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Balanceo Pélvico Posterior Sentado"      backButtonText="Semana 4 - Día 3"
      videoId=""
      videoStart={0}
      setup={[" Siéntese erguido en una silla firme, con los pies apoyados en el suelo."," Manos apoyadas en los muslos."]}
      instructions={[" Inhala para prepararte."," Exhale y balancee suavemente la pelvis hacia atrás, aplanando la parte baja de la espalda."," Inhala y vuelve a la posición neutra."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas","Respira: Exhala para balancearte, inhala para regresar","Descanso: Según sea necesario"]}
      whatToFeel={[" Movimiento pélvico suave."," Compromiso del núcleo durante el movimiento."]}
      whatToAvoid={[" Sobrepasar o colapsar la columna vertebral."]}
      redFlags={[" Dolor agudo o malestar."]}
      regression={[" Limite la amplitud de movimiento para un mejor control."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia3/ejercicio1" 
        currentDay="/espanol/semana4/dia3" 
        nextDrill="/espanol/semana4/dia3/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
