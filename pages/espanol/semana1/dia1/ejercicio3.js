import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Balanceoplvicosentado() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Balanceo Pélvico Sentado"      backButtonText="Semana 1 - Día 1"
      videoId=""
      videoStart={0}
      setup={[" Siéntese en una silla firme, con los pies planos y las manos apoyadas en los muslos."]}
      instructions={[" Incline lentamente la pelvis hacia delante (arqueando la parte baja de la espalda) y hacia atrás (aplanando la parte baja de la espalda)."," Deja que la respiración guíe el ritmo de tus movimientos."," Mantenga la parte superior del cuerpo quieta y relajada."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-12 repeticiones controladas","Respira: Inhala al inclinarte hacia delante, exhala al inclinarte hacia atrás","Descanso: Según sea necesario"]}
      whatToFeel={[" Movimiento suave a través de la pelvis y la parte baja de la espalda."," Facilidad y ritmo con la respiración."]}
      whatToAvoid={[" Tensar los hombros o la parte superior de la espalda."," Postura arqueada o colapsada."]}
      redFlags={[" Dolor durante cualquier parte del movimiento."," Incapacidad para aislar el movimiento pélvico."]}
      regression={[" Coloque las manos en las caderas para obtener retroalimentación si no está seguro de dónde proviene el movimiento."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia1/ejercicio2" 
        currentDay="/espanol/semana1/dia1" 
        nextDrill="/espanol/semana1/dia1/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
