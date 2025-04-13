import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Sentadillasescalonadasconestabilidadcostal() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Sentadillas Escalonadas con Estabilidad Costal"      backButtonText="Semana 5 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Ponte de pie con los pies escalonados, un pie ligeramente por delante del otro."," Brazos extendidos hacia delante o manos en las caderas."]}
      instructions={[" Inhala para prepararte."," Exhale y baje en cuclillas, manteniendo las costillas alineadas con la pelvis."," Inhala y vuelve a ponerte de pie."," Cambia de lado y repite."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 por lado","Respirar: Exhala para bajar, inhala para subir","Descanso: 30-45 segundos entre series"]}
      whatToFeel={[" Compromiso de glúteos, cuádriceps y core."," Estabilidad en la pelvis y la caja torácica."]}
      whatToAvoid={[" Las rodillas se hunden hacia dentro o se arquea la espalda."]}
      redFlags={[" Dolor agudo o molestias en las rodillas."]}
      regression={[" Realiza una menor amplitud de movimiento."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia1/ejercicio5" 
        currentDay="/espanol/semana5/dia2" 
        nextDrill="/espanol/semana5/dia2/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
