import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Marchasupinaconcontroldecostillas() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Marcha Supina con Control de Costillas"      backButtonText="Semana 1 - Día 5"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Brazos apoyados a los lados o palmas sobre las costillas inferiores."]}
      instructions={[" Exhale y levante una rodilla hacia el pecho."," Mantenga el control de las costillas y la pelvis durante todo el recorrido."," Baje la pierna hacia el suelo con control."," Alterne los lados."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respira: Exhala para levantar, inhala para bajar","Descanso: Según sea necesario"]}
      whatToFeel={[" Compromiso del núcleo y estabilidad de las costillas."," Movimiento suave y controlado de las piernas."]}
      whatToAvoid={[" Arquear la parte baja de la espalda."," Perder el control de la pelvis y las costillas."]}
      redFlags={[" Dolor o molestias en la parte baja de la espalda."]}
      regression={[" Realice el ejercicio con los pies más cerca del suelo para reducir la intensidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia5/ejercicio3" 
        currentDay="/espanol/semana1/dia5" 
        nextDrill="/espanol/semana1/dia5/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
