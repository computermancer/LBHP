import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Torsindecolumnasupinaconrespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Torsión de Columna Supina con Respiración"      backButtonText="Semana 4 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Brazos extendidos a los lados."]}
      instructions={[" Inhala para prepararte."," Exhale y baje suavemente las rodillas hacia un lado."," Inhala y vuelve al centro."," Alterne los lados con control."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 por lado","Respirar: Exhala para girar, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Rotación suave de la columna vertebral."," Movimiento controlado con la respiración."]}
      whatToAvoid={[" Torsión de la parte inferior de la espalda."]}
      redFlags={[" Dolor o molestias durante la rotación."]}
      regression={[" Limite la amplitud de movimiento para una menor intensidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia3/ejercicio4" 
        currentDay="/espanol/semana4/dia3" 
        nextDrill="/espanol/semana4/dia4/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
