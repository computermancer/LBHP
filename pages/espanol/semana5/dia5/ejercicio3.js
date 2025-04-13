import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Elevacindetibiaconrespiracinconsciente() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Elevación de Tibia con Respiración Consciente"      backButtonText="Semana 5 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Colóquese de pie con los pies separados a la anchura de las caderas, las manos en las caderas o una pared como apoyo."," Mantener la alineación de las costillas y la pelvis."]}
      instructions={[" Inhala para prepararte."," Exhale y levante los dedos de los pies del suelo, trasladando el peso a los talones."," Mantenga brevemente, luego vuelva a la posición inicial."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 10-12 repeticiones","Respira: Exhala para levantar, inhala para bajar","Descanso: 30-45 segundos entre series"]}
      whatToFeel={[" Compromiso del tibial anterior."," Movimiento controlado con estabilidad de las costillas."]}
      whatToAvoid={[" Inclinarse hacia atrás o perder el equilibrio."]}
      redFlags={[" Dolor en espinillas o tobillos."]}
      regression={[" Realice elevaciones más pequeñas para el control."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia5/ejercicio2" 
        currentDay="/espanol/semana5/dia5" 
        nextDrill="/espanol/semana5/dia5/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
