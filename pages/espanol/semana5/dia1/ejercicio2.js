import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Posturadecaballoparalelaalsuelo() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Postura de Caballo (paralela al Suelo)"      backButtonText="Semana 5 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Colóquese de pie con los pies separados a una distancia mayor que la anchura de los hombros, con las puntas de los pies ligeramente giradas hacia fuera."," Brazos extendidos hacia delante o manos en las caderas."]}
      instructions={[" Inhala para prepararte."," Exhale y baje las caderas hasta que los muslos estén paralelos al suelo."," Mantén la posición durante 20-30 segundos mientras mantienes el control de las costillas y la pelvis."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 2-3","Respiración: Respiración constante durante todo el recorrido","Descanso: 30-45 segundos entre presiones"]}
      whatToFeel={[" Activación de muslos y glúteos."," Estabilidad de las costillas y compromiso del núcleo."]}
      whatToAvoid={[" Dejar que las rodillas se hundan hacia dentro o arquear la espalda."]}
      redFlags={[" Dolor agudo de rodilla o cadera."]}
      regression={[" Realice una postura más alta para reducir la intensidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia1/ejercicio1" 
        currentDay="/espanol/semana5/dia1" 
        nextDrill="/espanol/semana5/dia1/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
