import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Posturadecaballoconcontroldecostillassujecinmslarga() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Postura de Caballo con Control de Costillas (sujeción Más Larga)"      backButtonText="Semana 5 - Día 5"
      videoId=""
      videoStart={0}
      setup={[" Colóquese de pie con los pies separados a una distancia mayor que la anchura de los hombros, con las puntas de los pies ligeramente giradas hacia fuera."," Brazos extendidos hacia delante o manos en las caderas."]}
      instructions={[" Inhala para prepararte."," Exhale y baje las caderas hasta que los muslos estén paralelos al suelo."," Mantén la posición durante 30-45 segundos mientras mantienes el control de las costillas y la pelvis."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 2-3","Respiración: Respiración constante durante todo el recorrido","Descanso: 30-45 segundos entre presiones"]}
      whatToFeel={[" Activación de muslos y glúteos."," Estabilidad de las costillas y compromiso del núcleo."]}
      whatToAvoid={[" Dejar que las rodillas se hundan hacia dentro o arquear la espalda."]}
      redFlags={[" Dolor agudo de rodilla o cadera."]}
      regression={[" Realice una postura más alta para reducir la intensidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia4/ejercicio5" 
        currentDay="/espanol/semana5/dia5" 
        nextDrill="/espanol/semana5/dia5/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
