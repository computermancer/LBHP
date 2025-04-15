import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Pressdepareddeisquiotibialesconconcienciadecadera() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Press de Pared de Isquiotibiales con Conciencia de Cadera"
      backButtonText="Semana 3 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Túmbate boca arriba con los pies apoyados en la pared, las rodillas a 90 grados.",
        "Brazos apoyados a los lados."
      ]}
      instructions={[
        "Exhale y presione suavemente los talones contra la pared.",
        "Mantén la posición durante 5-8 segundos mientras mantienes el control pélvico.",
        "Inhala y relájate."
      ]}
      setsReps={[
        "Conjuntos: 2-3",
        "Repeticiones: 5-8 segundos",
        "Respiración: Respiración constante durante todo el recorrido",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Activación de los isquiotibiales y estabilidad de la pelvis.",
        "Presión controlada sin arqueamiento."
      ]}
      whatToAvoid={[
        "Empujar con los dedos de los pies o levantar las caderas."
      ]}
      redFlags={[
        "Dolor agudo o calambres."
      ]}
      regression={[
        "Mueva los pies ligeramente más abajo en la pared para reducir la intensidad."
      ]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia4/ejercicio3" 
        currentDay="/espanol/semana3/dia4" 
        nextDrill="/espanol/semana3/dia4/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
