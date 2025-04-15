import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Marchadeisquiotibialesenparedconcontroldecostillas() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Marcha de Isquiotibiales en Pared con Control de Costillas"
      backButtonText="Semana 3 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Túmbate boca arriba con los pies apoyados en la pared y las rodillas flexionadas a 90 grados.",
        "Brazos apoyados a los lados."
      ]}
      instructions={[
        "Exhale y presione ambos talones contra la pared.",
        "Levanta ligeramente un pie de la pared sin perder el control de las costillas.",
        "Vuelve y cambia de lado."
      ]}
      setsReps={[
        "Conjuntos: 2-3",
        "Repeticiones: 8-10 por lado",
        "Respira: Exhala para levantar, inhala para volver",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Activación de isquiotibiales y core.",
        "Caja torácica estable con movimiento controlado."
      ]}
      whatToAvoid={[
        "Levantar las caderas o arquear la espalda."
      ]}
      redFlags={[
        "Dolor o molestias en las caderas o la zona lumbar."
      ]}
      regression={[
        "Realice marchas más pequeñas para reducir la intensidad."
      ]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia2/ejercicio3" 
        currentDay="/espanol/semana3/dia2" 
        nextDrill="/espanol/semana3/dia2/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
