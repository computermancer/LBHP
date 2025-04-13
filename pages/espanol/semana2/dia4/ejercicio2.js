import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Balanceoplvicoposteriorsentado() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Balanceo Pélvico Posterior Sentado"      backButtonText="Semana 2 - Día 4"
      videoId=""
      videoStart={0}
      setup={[" Siéntese erguido en una silla firme, con los pies planos y las manos sobre los muslos."]}
      instructions={[" Inhala para prepararte."," Exhale y balancee la pelvis hacia atrás (inclinación posterior), luego hacia delante (inclinación anterior)."," Muévase con suavidad y mantenga el control."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas","Respirar: Exhala durante el balanceo, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Movimiento suave a través de la pelvis y la columna lumbar."]}
      whatToAvoid={[" Movimientos bruscos o precipitados."]}
      redFlags={[" Dolor o molestias en la zona lumbar."]}
      regression={[" Coloque las manos en las caderas para obtener más información."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia4/ejercicio1" 
        currentDay="/espanol/semana2/dia4" 
        nextDrill="/espanol/semana2/dia4/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
