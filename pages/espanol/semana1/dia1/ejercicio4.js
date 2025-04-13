import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Alcance9090supino() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Alcance 90-90 Supino"      backButtonText="Semana 1 - Día 1"
      videoId=""
      videoStart={0}
      setup={[" Túmbese boca arriba con las caderas y las rodillas flexionadas a 90 grados (pies separados del suelo)."," Brazos estirados hacia el techo."]}
      instructions={[" Exhale y extienda los brazos hacia el techo mientras presiona suavemente la parte baja de la espalda contra el suelo."," Mantén una posición de piernas de 90-90; no dejes que las rodillas se desplacen ni que el pecho se levante."," Inhale y devuelva los brazos a la posición inicial sin perder el control del tronco."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 5-8 repeticiones lentas y controladas","Respira: Exhala durante el alcance, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Activación suave del tronco con la espalda baja en el suelo."," Tensión a través de los abdominales sin refuerzo."]}
      whatToAvoid={[" Costillas ensanchadas o espalda baja arqueada."," Alcanzar desde los hombros o forzar el cuello."]}
      redFlags={[" Dolor de cuello o tensión excesiva."," Pérdida de la posición o del control de la respiración."]}
      regression={[" Coloque los pies sobre una silla o un banco si mantener la posición 90-90 le resulta demasiado difícil."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia1/ejercicio3" 
        currentDay="/espanol/semana1/dia1" 
        nextDrill="/espanol/semana1/dia1/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
