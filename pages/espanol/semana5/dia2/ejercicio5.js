import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Desplazamientodecostillasendecbitosupino() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Desplazamiento de Costillas en Decúbito Supino"      backButtonText="Semana 5 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies planos."," Manos apoyadas en la caja torácica."]}
      instructions={[" Inhala para prepararte."," Exhale y desplace las costillas ligeramente hacia un lado."," Inhala y vuelve al centro."," Cambia de lado y repite."]}
      setsReps={["Conjuntos: 2","Repeticiones: 8-10 por lado","Respirar: Exhala para cambiar, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Activación sutil del núcleo y control de las costillas."]}
      whatToAvoid={[" Cambio excesivo o pérdida de control."]}
      redFlags={[" Molestias agudas en las costillas o la columna vertebral."]}
      regression={[" Limitar la amplitud de movimiento de las costillas."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia2/ejercicio4" 
        currentDay="/espanol/semana5/dia2" 
        nextDrill="/espanol/semana5/dia3/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
