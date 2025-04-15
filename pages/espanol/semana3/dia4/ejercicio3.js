import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Alcancedebrazosypiernascuadrpedosconcontrol() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Alcance de Brazos y Piernas Cuadrúpedos con Control"
      backButtonText="Semana 3 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Comience sobre manos y rodillas, muñecas debajo de los hombros, rodillas debajo de las caderas.",
        "Mantenga la columna vertebral y la pelvis neutras."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhale y extienda un brazo y la pierna opuesta sin perder el control de la pelvis.",
        "Inhale y vuelva a la posición inicial.",
        "Cambia de lado y repite."
      ]}
      setsReps={[
        "Conjuntos: 2-3",
        "Repeticiones: 8-10 por lado",
        "Respirar: Exhala para extender, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Estabilidad y equilibrio del tronco.",
        "Extensión controlada con columna neutra."
      ]}
      whatToAvoid={[
        "Arquear la espalda o perder el equilibrio."
      ]}
      redFlags={[
        "Dolor en la parte baja de la espalda o en los hombros."
      ]}
      regression={[
        "Realice con movimientos más pequeños para un mejor control."
      ]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia4/ejercicio2" 
        currentDay="/espanol/semana3/dia4" 
        nextDrill="/espanol/semana3/dia4/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
