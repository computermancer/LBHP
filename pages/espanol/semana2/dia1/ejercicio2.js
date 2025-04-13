import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Cambiosdecaderacongancho() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Cambios de Cadera con Gancho"      backButtonText="Semana 2 - Día 1"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Coloque las manos suavemente sobre la pelvis."]}
      instructions={[" Desplace suavemente la pelvis de lado a lado, sintiendo que cada cadera se eleva ligeramente."," Muévase despacio y dentro de una amplitud de movimiento cómoda."," Volver a punto muerto después de cada turno."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 turnos controlados","Respirar: Inhala para prepararte, exhala durante cada turno","Descanso: Según sea necesario"]}
      whatToFeel={[" Desplazamiento sutil de la pelvis."," Movimientos suaves y controlados."]}
      whatToAvoid={[" Forzar el cambio o perder el control."," Colapso o tensión excesiva."]}
      redFlags={[" Dolor o molestias en las caderas o en la parte baja de la espalda."]}
      regression={[" Reduzca la amplitud de movimiento o apoye las rodillas con una almohada."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia1/ejercicio1" 
        currentDay="/espanol/semana2/dia1" 
        nextDrill="/espanol/semana2/dia1/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
