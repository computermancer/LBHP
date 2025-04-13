import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5IRdecaderaendecbitolateralyrespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Ir de Cadera en Decúbito Lateral y Respiración"      backButtonText="Semana 3 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate de lado con las rodillas flexionadas a 90 grados, apiladas."," Apoya la cabeza en la parte inferior del brazo."]}
      instructions={[" Inhala para prepararte."," Exhale y gire suavemente la pierna de arriba hacia dentro sin levantar el pie."," Mantenga la posición durante 2-3 segundos y vuelva a la posición inicial."," Concéntrese en un movimiento suave y controlado."," Conjuntos: 2-3","Repeticiones: 8-10 por lado"," Respirar: Exhala para girar, inhala para volver","Descanso: Según sea necesario"]}
      setsReps={[]}
      whatToFeel={[" Rotación interna de la cadera."," Compromiso de los estabilizadores profundos de la cadera."]}
      whatToAvoid={[" Rodar la pelvis hacia atrás."]}
      redFlags={[" Dolor agudo de cadera o ingle."]}
      regression={[" Realícelo con una almohada entre las rodillas como apoyo."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia5/ejercicio4" 
        currentDay="/espanol/semana3/dia5" 
        nextDrill="/espanol/semana4/dia1/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
