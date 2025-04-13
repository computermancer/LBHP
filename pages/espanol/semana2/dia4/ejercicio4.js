import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Flexionesdecaderaendecbitosupinoconestabilidadcostal() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Flexiones de Cadera en Decúbito Supino con Estabilidad Costal"      backButtonText="Semana 2 - Día 4"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies planos."," Brazos apoyados a los lados o sobre las costillas para retroalimentarse."]}
      instructions={[" Exhale y mueva suavemente la pelvis de lado a lado."," Mantenga la caja torácica y la pelvis alineadas en todo momento."," Volver al centro después de cada turno."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respirar: Exhala durante el cambio, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Control sutil a través de las caderas y el núcleo."]}
      whatToAvoid={[" Perder el control de las costillas o cambiar de marcha en exceso."]}
      redFlags={[" Dolor o molestias en las caderas o en la parte baja de la espalda."]}
      regression={[" Limitar la amplitud de movimiento si es necesario."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia4/ejercicio3" 
        currentDay="/espanol/semana2/dia4" 
        nextDrill="/espanol/semana2/dia4/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
