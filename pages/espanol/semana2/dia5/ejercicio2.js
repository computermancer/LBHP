import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Gatovacaconenfoquerotacional() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Gato-vaca con Enfoque Rotacional"      backButtonText="Semana 2 - Día 5"
      videoId=""
      videoStart={0}
      setup={[" Empiece en posición cuadrúpeda, con las muñecas bajo los hombros y las rodillas bajo las caderas."]}
      instructions={[" Inhala y arquea la espalda, levantando el pecho (Vaca)."," Exhala y redondea la columna, metiendo la pelvis y la barbilla (Gato)."," Añada una suave rotación torácica extendiendo un brazo hacia el techo a cada lado."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas","Respira: Inhala para extender, exhala para flexionar","Descanso: Según sea necesario"]}
      whatToFeel={[" Movimiento fluido a través de la columna vertebral y aumento de la rotación."]}
      whatToAvoid={[" Postura global o de colapso."]}
      redFlags={[" Dolor o molestias en la columna vertebral."]}
      regression={[" Limitar la rotación si el control es difícil."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia5/ejercicio1" 
        currentDay="/espanol/semana2/dia5" 
        nextDrill="/espanol/semana2/dia5/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
