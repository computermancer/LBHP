import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Reposicinsupinadeldiafragmaconalcance() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Reposición Supina del Diafragma con Alcance"
      backButtonText="Semana 3 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo.",
        "Brazos extendidos hacia el techo."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhale y extienda ambos brazos hacia el techo, sintiendo que las costillas se aplanan.",
        "Inhale y vuelva a la posición inicial."
      ]}
      setsReps={[
        "Conjuntos: 2-3",
        "Repeticiones: 8-10 repeticiones",
        "Respirar: Exhala para llegar, inhala para volver",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Compromiso del núcleo y control de la caja torácica.",
        "Alcance del brazo suave y controlado."
      ]}
      whatToAvoid={[
        "Costillas ensanchadas o espalda baja arqueada."
      ]}
      redFlags={[
        "Dolor o molestias en los hombros o en la parte baja de la espalda."
      ]}
      regression={[
        "Realícelo con las rodillas apoyadas en una almohada."
      ]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia1/ejercicio2" 
        currentDay="/espanol/semana3/dia1" 
        nextDrill="/espanol/semana3/dia1/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
