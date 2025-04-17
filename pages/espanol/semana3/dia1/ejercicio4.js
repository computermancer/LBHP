import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4RockBackcuadrpedoconconcentracinenlarespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Balance Hacia Atrás en Cuadrúpedo con Enfoque en la Respiración"
      backButtonText="Semana 3 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Comience sobre manos y rodillas, muñecas debajo de los hombros, rodillas debajo de las caderas.",
        "Mantenga la columna vertebral y la pelvis neutras."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhale y desplace lentamente las caderas hacia los talones.",
        "Inhale y vuelva a la posición inicial."
      ]}
      setsReps={[
        "Conjuntos: 2-3",
        "Repeticiones: 8-10 repeticiones lentas",
        "Respira: Exhala para retroceder, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Movimiento pélvico suave con control del núcleo.",
        "Arqueamiento o redondeo mínimo de la columna vertebral."
      ]}
      whatToAvoid={[
        "Colapso de la parte baja de la espalda o la pelvis."
      ]}
      redFlags={[
        "Dolor en las rodillas o en la parte baja de la espalda."
      ]}
      regression={[
        "Realizar con las manos elevadas sobre una superficie para reducir la carga."
      ]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia1/ejercicio3" 
        currentDay="/espanol/semana3/dia1" 
        nextDrill="/espanol/semana3/dia1/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
