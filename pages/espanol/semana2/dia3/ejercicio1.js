import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Engancharlosrelojesplvicos() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Enganchar los Relojes Pélvicos"      backButtonText="Semana 2 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Manos apoyadas en la pelvis para retroalimentación."]}
      instructions={[" Inhala para prepararte."," Exhale e incline lentamente la pelvis hacia delante y hacia atrás."," Muévase suavemente como si trazara la esfera de un reloj con la pelvis."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas","Respirar: Espira durante el movimiento, inspira para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Movimiento suave y controlado de la pelvis."]}
      whatToAvoid={[" Movimientos bruscos o forzados."]}
      redFlags={[" Dolor o molestias en la parte baja de la espalda."]}
      regression={[" Reduzca la amplitud de movimiento si es necesario."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia2/ejercicio5" 
        currentDay="/espanol/semana2/dia3" 
        nextDrill="/espanol/semana2/dia3/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
