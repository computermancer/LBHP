import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2CatCowconconcentracinenlarespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Cat-cow con Concentración en la Respiración"      backButtonText="Semana 1 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Comience sobre manos y rodillas, muñecas debajo de los hombros, rodillas debajo de las caderas."]}
      instructions={[" Inhala y arquea la espalda, levantando el pecho y el coxis (Vaca)."," Exhala y redondea la columna, metiendo la pelvis y la barbilla (Gato)."," Muévase suavemente entre las posiciones con control."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas","Respira: Inhala para extender, exhala para flexionar","Descanso: Según sea necesario"]}
      whatToFeel={[" Transición suave entre flexión y extensión."," Coordinación de la respiración y el movimiento de la columna vertebral."]}
      whatToAvoid={[" Apurando el movimiento."," Postura global o de colapso."]}
      redFlags={[" Dolor o molestias en la columna vertebral."]}
      regression={[" Realice movimientos más pequeños si la movilidad es limitada."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia5/ejercicio1" 
        currentDay="/espanol/semana1/dia5" 
        nextDrill="/espanol/semana1/dia5/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
