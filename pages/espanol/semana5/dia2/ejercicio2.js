import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Estocadaslateralesconcontroldelarespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Estocadas Laterales con Control de la Respiración"      backButtonText="Semana 5 - Día 2"
      videoId=""
      videoStart={0}
      setup={[" Colóquese de pie con los pies separados a la anchura de las caderas, las manos en las caderas o extendidas hacia delante."," Desplace el peso hacia un lado, doblando la rodilla."]}
      instructions={[" Inhala para prepararte."," Exhale y desplace el peso lateralmente, bajando en una estocada."," Inhala y vuelve al centro."," Cambia de lado y repite."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 por lado","Respirar: Exhala para bajar, inhala para volver","Descanso: 30-45 segundos entre series"]}
      whatToFeel={[" Compromiso de glúteos y aductores."," Control y equilibrio al cambiar de marcha."]}
      whatToAvoid={[" Rodillas flexionadas o inclinadas hacia delante."]}
      redFlags={[" Dolor en rodillas o caderas."]}
      regression={[" Realiza pequeños desplazamientos laterales."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia2/ejercicio1" 
        currentDay="/espanol/semana5/dia2" 
        nextDrill="/espanol/semana5/dia2/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
