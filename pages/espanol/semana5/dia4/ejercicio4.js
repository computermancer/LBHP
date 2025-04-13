import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4RotacionDeColumnaSentadoConAlcance() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Rotación de Columna Sentado con Alcance"      backButtonText="Semana 5 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate erguido en una silla firme, pies apoyados en el suelo.",
        "Manos descansando en los muslos o cruzadas sobre el pecho."
      ]}
      instructions={[]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 repeticiones lentas por lado",
        "Respiración: Exhala durante la rotación, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Rotación torácica controlada",
        "Movimiento escapular con alcance"
      ]}
      whatToAvoid={[
        "Rotar desde las caderas o la espalda baja"
      ]}
      redFlags={[
        "Dolor o malestar durante la rotación"
      ]}
      regression={[
        "Realiza una rotación más pequeña con menos amplitud de movimiento."
      ]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia4/ejercicio3" 
        currentDay="/espanol/semana5/dia4" 
        nextDrill="/espanol/semana5/dia4/ejercicio5" 
        disablePrevious={false}
      />
    </EspDrillBarTemplate>
  );
}