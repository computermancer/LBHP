import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Respiracinsentadaconconcienciaplvica() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Respiración Sentada con Conciencia Pélvica"      backButtonText="Semana 2 - Día 4"
      videoId=""
      videoStart={0}
      setup={[" Siéntese erguido en una silla firme, con los pies planos."," Manos suavemente sobre las costillas inferiores o la pelvis."]}
      instructions={[" Inhala profundamente hacia el vientre y las costillas."," Exhale manteniendo el control de la pelvis y las costillas."," Repita con una respiración suave y controlada."]}
      setsReps={["Conjuntos: 2","Repeticiones: 5-8 ciclos de respiración por serie","Respira: Inhala 3-4 segundos, exhala 4-6 segundos","Descanso: Entre series o según sea necesario"]}
      whatToFeel={[" Conexión entre la respiración, la pelvis y la caja torácica."]}
      whatToAvoid={[" Postura global o de colapso."]}
      redFlags={[" Dificultad para mantener el control."]}
      regression={[" Utilice una almohada para el apoyo lumbar."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia4/ejercicio4" 
        currentDay="/espanol/semana2/dia4" 
        nextDrill="/espanol/semana2/dia5/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
