import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Bisagraapoyadaenlaparedconalcancedelbrazo() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Bisagra Apoyada en la Pared con Alcance del Brazo"      backButtonText="Semana 3 - Día 1"
      videoId=""
      videoStart={0}
      setup={[" Colóquese de pie con los pies separados a la anchura de las caderas, mirando hacia la pared."," Caderas ligeramente flexionadas, brazos extendidos al frente."]}
      instructions={[" Inhala para prepararte."," Exhala y gira las caderas, manteniendo la columna neutra."," Extiende los brazos hacia delante manteniendo el control de las costillas."," Vuelva a ponerse de pie con control."," Conjuntos: 2-3","Repeticiones: 8-10 repeticiones"," Respirar: Exhala para girar, inhala para volver","Descanso: Según sea necesario"]}
      setsReps={[]}
      whatToFeel={[" Glúteos e isquiotibiales activos."," Mantenimiento de la estabilidad del núcleo y las costillas."]}
      whatToAvoid={[" Arquear o redondear la parte baja de la espalda."]}
      redFlags={[" Dolor o molestias en la zona lumbar."]}
      regression={[" Realice con una bisagra más pequeña para reducir el alcance."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia1/ejercicio4" 
        currentDay="/espanol/semana3/dia1" 
        nextDrill="/espanol/semana3/dia2/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
