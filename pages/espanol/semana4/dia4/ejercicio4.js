import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Abduccindecaderaendecbitolateralconapoyo() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Abducción de Cadera en Decúbito Lateral con Apoyo"      backButtonText="Semana 4 - Día 4"
      videoId=""
      videoStart={0}
      setup={[" Túmbate de lado con las rodillas ligeramente flexionadas."," Cabeza apoyada en el brazo."]}
      instructions={[" Inhala para prepararte."," Exhale y levante ligeramente la pierna de arriba sin rotar la pelvis."," Mantenga durante 2-3 segundos, luego volver."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 por lado","Respira: Exhala para levantar, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Activación de los glúteos y control de la cadera."," Estabilidad pélvica en todo momento."]}
      whatToAvoid={[" Rodar la pelvis o subir la cadera."]}
      redFlags={[" Dolor en las caderas o en la parte baja de la espalda."]}
      regression={[" Realícelo con una almohada entre las rodillas como apoyo."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia4/ejercicio3" 
        currentDay="/espanol/semana4/dia4" 
        nextDrill="/espanol/semana4/dia4/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
