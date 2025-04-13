import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Reposicinsupinadeldiafragmaconalcance() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Reposición Supina del Diafragma con Alcance"      backButtonText="Semana 2 - Día 3"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Brazos estirados hacia el techo."]}
      instructions={[" Inhale profundamente en las costillas."," Exhale y extienda suavemente los brazos hacia el techo manteniendo el control de las costillas."," Vuelva a la posición inicial."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas","Respirar: Exhala durante el alcance, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Activación de la estabilidad del núcleo y la caja torácica."]}
      whatToAvoid={[" Ensanchamiento de las costillas o arqueamiento de la espalda."]}
      redFlags={[" Dolor o molestias en los hombros o las costillas."]}
      regression={[" Reduzca la amplitud de movimiento si es necesario."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia3/ejercicio1" 
        currentDay="/espanol/semana2/dia3" 
        nextDrill="/espanol/semana2/dia3/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
