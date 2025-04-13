import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Pressdepareddeisquiotibiales() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Press de Pared de Isquiotibiales"      backButtonText="Semana 4 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con los pies apoyados en la pared, las rodillas a 90 grados."," Brazos apoyados a los lados."]}
      instructions={[" Exhale y presione suavemente los talones contra la pared."," Mantén la posición durante 5-8 segundos mientras mantienes el control pélvico."," Inhala y relájate."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 5-8 segundos","Respiración: Respiración constante durante todo el recorrido","Descanso: 30 segundos entre series"]}
      whatToFeel={[" Activación de los isquiotibiales y estabilidad de la pelvis."," Presión controlada sin arqueamiento."]}
      whatToAvoid={[" Empujar con los dedos de los pies o levantar las caderas."]}
      redFlags={[" Dolor agudo o calambres."]}
      regression={[" Mueva los pies ligeramente más abajo en la pared para reducir la intensidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia4/ejercicio2" 
        currentDay="/espanol/semana4/dia4" 
        nextDrill="/espanol/semana4/dia4/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
