import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Bisagraapoyadaenlaparedconalcancedelbrazo() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Bisagra Apoyada en la Pared con Alcance del Brazo"      backButtonText="Semana 4 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Colóquese de pie con los pies separados a la anchura de las caderas, mirando hacia la pared."," Caderas ligeramente flexionadas, brazos extendidos al frente."]}
      instructions={[" Inhala para prepararte."," Exhala y gira las caderas, manteniendo la columna neutra."," Extiende los brazos hacia delante manteniendo el control de las costillas."," Vuelva a ponerse de pie con control."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones","Respirar: Exhala para girar, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Glúteos e isquiotibiales activos."," Mantenimiento de la estabilidad del núcleo y las costillas."]}
      whatToAvoid={[" Arquear o redondear la parte baja de la espalda."]}
      redFlags={[" Dolor o molestias en la zona lumbar."]}
      regression={[" Realizar con una bisagra más pequeña para reducir el alcance."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia1/ejercicio3" 
        currentDay="/espanol/semana4/dia1" 
        nextDrill="/espanol/semana4/dia1/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
