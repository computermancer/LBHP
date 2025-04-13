import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Abduccindecaderaendecbitolateral() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Abducción de Cadera en Decúbito Lateral"      backButtonText="Semana 5 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate de lado con las rodillas ligeramente flexionadas, apoyando la cabeza con el brazo."," La mano superior apoyada en la cadera o delante para mantener el equilibrio."]}
      instructions={[" Inhala para prepararte."," Exhale y levante la pierna de arriba manteniendo la estabilidad de la pelvis."," Inhala para volver al inicio."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 por lado","Respira: Exhala para levantar, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Compromiso de glúteos y cadera."," Estabilidad de la pelvis durante el movimiento."]}
      whatToAvoid={[" Rodar la pelvis hacia atrás."]}
      redFlags={[" Dolor agudo en la cadera o en la parte baja de la espalda."]}
      regression={[" Realice elevaciones más pequeñas para el control."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia2/ejercicio2" 
        currentDay="/espanol/semana5/dia2" 
        nextDrill="/espanol/semana5/dia2/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
