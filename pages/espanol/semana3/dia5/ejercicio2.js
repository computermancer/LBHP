import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Balanceoplvicosupinoconconcentracinenlarespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Balanceo Pélvico Supino con Concentración en la Respiración"
      backButtonText="Semana 3 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo.",
        "Brazos apoyados a los lados."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhale y balancee suavemente la pelvis hacia delante y hacia atrás.",
        "Mantenga la caja torácica y la pelvis neutras en todo momento."
      ]}
      setsReps={[
        "Conjuntos: 2-3",
        "Repeticiones: 8-10 repeticiones lentas",
        "Respira: Exhala para balancearte, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Movimiento pélvico suave.",
        "Respiración controlada con cada movimiento."
      ]}
      whatToAvoid={[
        "Sobrecargar o aplanar la espalda."
      ]}
      redFlags={[
        "Dolor o molestias en la zona lumbar."
      ]}
      regression={[
        "Realícelo con las rodillas apoyadas para reducir el alcance."
      ]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia5/ejercicio1" 
        currentDay="/espanol/semana3/dia5" 
        nextDrill="/espanol/semana3/dia5/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
