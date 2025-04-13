import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Desplazamientodecostillasendecbitosupino() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Desplazamiento de Costillas en Decúbito Supino"      backButtonText="Semana 4 - Día 1"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies planos."," Manos apoyadas suavemente a los lados de la caja torácica."]}
      instructions={[" Inhale profundamente por la nariz, sintiendo cómo las costillas se expanden lateralmente."," Exhale y desplace las costillas ligeramente hacia un lado manteniendo el control de la pelvis."," Vuelva al centro y alterne los lados."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respirar: Exhala para cambiar, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" La caja torácica se expande y se desplaza lateralmente."," Estabilidad pélvica mientras se mueven las costillas."]}
      whatToAvoid={[" Perder el control de la pelvis."," Forzar el cambio de costilla."]}
      redFlags={[" Dolor o molestias en las costillas o en la parte baja de la espalda."]}
      regression={[" Realícelo con pequeños desplazamientos de las costillas para mejorar el control."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia5/ejercicio5" 
        currentDay="/espanol/semana4/dia1" 
        nextDrill="/espanol/semana4/dia1/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
