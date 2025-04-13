import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Estocadashaciadelanteconcontroldecostillas() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Estocadas Hacia Delante con Control de Costillas"      backButtonText="Semana 5 - Día 3"
      videoId=""
      videoStart={0}
      setup={[" Colóquese de pie con los pies separados a la altura de los hombros."," Manos en las caderas o extendidas hacia delante para mantener el equilibrio."]}
      instructions={[" Inhala para prepararte."," Exhale y dé un paso adelante en una estocada, bajando la rodilla trasera hacia el suelo."," Inhala y vuelve a la posición inicial."," Cambia de lado y repite."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 por lado","Respira: Exhala para embestir, inhala para regresar","Descanso: 30-45 segundos entre series"]}
      whatToFeel={[" Compromiso de glúteos, cuádriceps y core."," Estabilidad de las costillas y la pelvis."]}
      whatToAvoid={[" Las rodillas se hunden hacia dentro o se arquea la espalda."]}
      redFlags={[" Dolor en rodillas o caderas."]}
      regression={[" Realice estocadas más pequeñas para reducir la intensidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia3/ejercicio1" 
        currentDay="/espanol/semana5/dia3" 
        nextDrill="/espanol/semana5/dia3/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
