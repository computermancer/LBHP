import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Marchaapoyadaenlaparedconcontroldecostillas() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Marcha Apoyada en la Pared con Control de Costillas"      backButtonText="Semana 3 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con los pies apoyados en la pared, las rodillas a 90 grados."," Brazos apoyados a los lados."]}
      instructions={[" Exhale y presione suavemente los talones contra la pared."," Levante ligeramente un pie de la pared manteniendo el control de las costillas."," Vuelva a la posición inicial y alterne los lados."," Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respira: Exhala para levantar, inhala para volver","Descanso: Según sea necesario"]}
      setsReps={[]}
      whatToFeel={[" Activación del núcleo y estabilidad de las costillas."," Movimiento suave y controlado de las piernas."]}
      whatToAvoid={[" Arquear la parte baja de la espalda."]}
      redFlags={[" Dolor o molestias en la zona lumbar."]}
      regression={[" Realice marchas más pequeñas para reducir la intensidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia5/ejercicio3" 
        currentDay="/espanol/semana3/dia5" 
        nextDrill="/espanol/semana3/dia5/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
