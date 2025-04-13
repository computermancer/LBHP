import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5EjerciciodeIRyextensindecaderaendecbitoprono() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Ejercicio de Ir y Extensión de Cadera en Decúbito Prono"      backButtonText="Semana 2 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca abajo con las piernas estiradas."]}
      instructions={[" Inhala para prepararte."," Exhale y gire suavemente una pierna hacia dentro (rotación interna de la cadera)."," Inhala para volver a la posición neutra y cambia de lado."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respirar: Exhala durante la rotación, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Activación sutil en las caderas y la pelvis."]}
      whatToAvoid={[" Rotación excesiva o pérdida de control."]}
      redFlags={[" Dolor o molestias en las caderas."]}
      regression={[" Coloque una almohada debajo de la pelvis para apoyarse."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia2/ejercicio4" 
        currentDay="/espanol/semana2/dia2" 
        nextDrill="/espanol/semana2/dia3/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
