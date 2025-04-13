import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5RockBackcuadrpedoconenfoquedealcance() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Rock Back Cuadrúpedo con Enfoque de Alcance"      backButtonText="Semana 4 - Día 1"
      videoId=""
      videoStart={0}
      setup={[" Comience sobre manos y rodillas, muñecas debajo de los hombros, rodillas debajo de las caderas."," Mantenga la columna vertebral y la pelvis neutras."]}
      instructions={[" Inhala para prepararte."," Exhale y mueva lentamente las caderas hacia atrás, hacia los talones, mientras estira un brazo hacia delante."," Inhale y vuelva a la posición inicial."," Cambia de brazo y repite."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respira: Exhala para retroceder, inhala para regresar","Descanso: Según sea necesario"]}
      whatToFeel={[" Movimiento pélvico suave con control del núcleo."," Estabilidad de las costillas durante el alcance."]}
      whatToAvoid={[" Colapso de la parte baja de la espalda o la pelvis."]}
      redFlags={[" Dolor en las rodillas o en la parte baja de la espalda."]}
      regression={[" Realizar con las manos elevadas sobre una superficie para reducir la carga."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia1/ejercicio4" 
        currentDay="/espanol/semana4/dia1" 
        nextDrill="/espanol/semana4/dia2/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
