import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Balanceoplvicosupinoconcontroldelarespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Balanceo Pélvico Supino con Control de la Respiración"
      backButtonText="Semana 5 - Día 5"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Manos apoyadas en las costillas inferiores."]}
      instructions={[" Inhala para prepararte."," Exhale y balancee suavemente la pelvis hacia delante y hacia atrás."," Concéntrese en un movimiento suave y en mantener el control de las costillas."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas","Respira: Exhala para balancearte, inhala para regresar","Descanso: Según sea necesario"]}
      whatToFeel={[" Movimiento pélvico suave."," Compromiso del núcleo con respiración controlada."]}
      whatToAvoid={[" Postura global o de colapso."]}
      redFlags={[" Dolor agudo o malestar."]}
      regression={[" Realice movimientos más pequeños para un mejor control."]}
      disableNext={true}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia5/ejercicio4" 
        currentDay="/espanol/semana5/dia5" 
        disablePrevious={false}
        disableNext={true}
      />
    </EspDrillBarTemplate>
  );
}
