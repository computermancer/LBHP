import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Marchadeisquiotibialesdepared() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Marcha de Isquiotibiales de Pared"      backButtonText="Semana 2 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con los pies apoyados en una pared, las rodillas y las caderas a 90 grados."]}
      instructions={[" Exhale y presione suavemente un talón contra la pared."," Levante ligeramente el pie opuesto de la pared."," Vuelva a la posición inicial y cambie de lado."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 marchas lentas por lado","Respirar: Exhala durante la elevación, inhala para regresar","Descanso: Según sea necesario"]}
      whatToFeel={[" Compromiso de los isquiotibiales y estabilidad pélvica."]}
      whatToAvoid={[" Perder el control pélvico o arquear la parte baja de la espalda."]}
      redFlags={[" Dolor o molestias en las caderas o en la parte baja de la espalda."]}
      regression={[" Mantenga ambos pies en la pared si le resulta difícil mantener la estabilidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia2/ejercicio3" 
        currentDay="/espanol/semana2/dia2" 
        nextDrill="/espanol/semana2/dia2/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
