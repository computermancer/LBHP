import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Gatovacaconexpansindecostillas() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Gato-vaca con Expansión de Costillas"      backButtonText="Semana 4 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Comience sobre manos y rodillas, muñecas debajo de los hombros, rodillas debajo de las caderas."," Mantenga la columna vertebral neutra."]}
      instructions={[" Inhala y arquea la espalda, levantando el pecho y el coxis (Vaca)."," Exhala y redondea la columna, metiendo la pelvis y la barbilla (Gato)."," Coordina el movimiento con la respiración."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas","Respira: Inhala para extender, exhala para flexionar","Descanso: Según sea necesario"]}
      whatToFeel={[" Flexión y extensión suaves de la columna vertebral."," Movimiento controlado de la pelvis y la caja torácica."]}
      whatToAvoid={[" Postura global o de colapso."]}
      redFlags={[" Dolor o molestias en la columna vertebral."]}
      regression={[" Realice movimientos más pequeños si es necesario."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia2/ejercicio5" 
        currentDay="/espanol/semana4/dia3" 
        nextDrill="/espanol/semana4/dia3/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
