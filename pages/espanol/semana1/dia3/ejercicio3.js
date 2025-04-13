import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Patrnderespiracinapoyada() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Patrón de Respiración Apoyada"      backButtonText="Semana 1 - Día 3"
      videoId=""
      videoStart={0}
      setup={[" Siéntese erguido en una silla, con los pies apoyados en el suelo."," Manos apoyadas suavemente sobre las costillas inferiores."]}
      instructions={[" Inhale profundamente hacia el vientre y las costillas inferiores."," Exhale completamente y sienta las costillas caer hacia atrás."," Respire lenta y constantemente."]}
      setsReps={["Conjuntos: 2","Repeticiones: 5-8 ciclos de respiración por serie","Respira: Inhala 3-4 segundos, exhala 4-6 segundos","Descanso: Entre series o según sea necesario"]}
      whatToFeel={[" Expansión a través de las costillas y el vientre."," Relajación con mínimo movimiento de la parte superior del pecho."]}
      whatToAvoid={[" Contener la respiración o forzar la espiración."]}
      redFlags={[" Mareo o malestar."]}
      regression={[" Inclínese ligeramente hacia delante para obtener una mejor respuesta."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia3/ejercicio2" 
        currentDay="/espanol/semana1/dia3" 
        nextDrill="/espanol/semana1/dia3/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
