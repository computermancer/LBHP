import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Expansincostalsupinaconrespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Expansión Costal Supina con Respiración"      backButtonText="Semana 2 - Día 1"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Coloque las manos suavemente sobre las costillas inferiores."]}
      instructions={[" Inhale profundamente en las costillas inferiores, sintiendo la expansión lateral."," Exhale suavemente, dejando que las costillas caigan de forma natural."," Mantenga una respiración lenta y controlada."]}
      setsReps={["Conjuntos: 2","Repeticiones: 5-8 ciclos de respiración por serie","Respira: Inhala 3-4 segundos, exhala 4-6 segundos","Descanso: Entre series o según sea necesario"]}
      whatToFeel={[" Expansión de las costillas durante la inspiración."," Patrón de respiración relajado con mínima elevación del pecho."]}
      whatToAvoid={[" Respirar sólo en la parte superior del pecho."," Colapso de la caja torácica o pérdida de control."]}
      redFlags={[" Mareos o molestias al controlar la respiración."]}
      regression={[" Coloque una almohada debajo de las rodillas para reducir la tensión en la zona lumbar."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia5/ejercicio5" 
        currentDay="/espanol/semana2/dia1" 
        nextDrill="/espanol/semana2/dia1/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
