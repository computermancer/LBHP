import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Sentadillaconapoyoenlapared() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Sentadilla con Apoyo en la Pared"      backButtonText="Semana 1 - Día 2"
      videoId=""
      videoStart={0}
      setup={[" Colóquese de pie con la espalda apoyada en una pared, con los pies separados a la anchura de las caderas."," Deslícese hacia abajo en una sentadilla parcial con los muslos por encima del paralelo."]}
      instructions={[" Mantenga la posición en cuclillas con la columna vertebral neutra."," Presione suavemente los talones contra el suelo para activar los isquiotibiales."," Respira de forma constante durante toda la retención."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 15-30 segundos por sujeción","Respira: Mantén una respiración lenta y constante durante todo el recorrido.","Descanso: 30-40 segundos entre series"]}
      whatToFeel={[" Tensión a través de cuádriceps, isquiotibiales y glúteos."," Pelvis estable y compromiso del núcleo."]}
      whatToAvoid={[" Arquear o aplanar la parte baja de la espalda."," Desplazar el peso sobre los dedos de los pies."]}
      redFlags={[" Dolor de rodilla o espalda."]}
      regression={[" Reduzca la profundidad de la sentadilla o manténgala durante menos tiempo."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia2/ejercicio4" 
        currentDay="/espanol/semana1/dia2" 
        nextDrill="/espanol/semana1/dia3/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
