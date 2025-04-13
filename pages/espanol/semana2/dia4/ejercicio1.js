import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Desplazamientodecostillasendecbitosupinoconrespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Desplazamiento de Costillas en Decúbito Supino con Respiración"      backButtonText="Semana 2 - Día 4"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Coloque las manos en las costillas inferiores para obtener información."]}
      instructions={[" Inhala profundamente, expandiendo las costillas lateralmente."," Exhale y mueva suavemente las costillas de lado a lado."," Vuelva al centro antes de cambiar de lado."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 desplazamientos lentos por lado","Respirar: Exhala durante el cambio, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Movimiento sutil a través de las costillas con mínimo esfuerzo."]}
      whatToAvoid={[" Arquear la espalda o tensar el cuello."]}
      redFlags={[" Dolor o molestias en las costillas o la columna vertebral."]}
      regression={[" Reduzca la amplitud de movimiento si es necesario."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia3/ejercicio5" 
        currentDay="/espanol/semana2/dia4" 
        nextDrill="/espanol/semana2/dia4/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
