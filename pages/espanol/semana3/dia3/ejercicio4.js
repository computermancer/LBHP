import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Sentadillaapoyadaenlaparedconalcance() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Sentadilla Apoyada en la Pared con Alcance"
      backButtonText="Semana 3 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Colóquese de pie con la espalda apoyada en la pared y los pies ligeramente adelantados.",
        "Brazos extendidos hacia delante para mantener el equilibrio."
      ]}
      instructions={[
        "Exhale y baje lentamente en cuclillas, manteniendo el control de las costillas y la pelvis.",
        "Mantenga durante 10-20 segundos.",
        "Inhala y vuelve a ponerte de pie."
      ]}
      setsReps={[
        "Conjuntos: 2-3",
        "Repeticiones: 2-3",
        "Respiración: Respiración constante durante todo el recorrido",
        "Descanso: 30-60 segundos entre series"
      ]}
      whatToFeel={[
        "Activación de glúteos e isquiotibiales.",
        "Estabilidad de la caja torácica mientras se mantiene la sentadilla."
      ]}
      whatToAvoid={[
        "Las rodillas se hunden hacia dentro.",
        "Perder el control de las costillas y la pelvis."
      ]}
      redFlags={[
        "Dolor agudo o molestias en las rodillas."
      ]}
      regression={[
        "Realiza una sentadilla más alta para reducir la intensidad."
      ]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia3/ejercicio3" 
        currentDay="/espanol/semana3/dia3" 
        nextDrill="/espanol/semana3/dia3/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
