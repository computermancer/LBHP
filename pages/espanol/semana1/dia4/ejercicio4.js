import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Desplazamientodecaderaendecbitosupinoconrespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Desplazamiento de Cadera en Decúbito Supino con Respiración"      backButtonText="Semana 1 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies planos."," Brazos apoyados a los lados."]}
      instructions={[" Inhala para prepararte."," Exhale y mueva suavemente una cadera más arriba que la otra."," Mantener el control y la alineación."," Vuelva al punto muerto antes de cambiar de lado."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones controladas por lado","Respira: Exhala durante el cambio, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Movimiento sutil a través de la pelvis y las caderas."," Compromiso del núcleo y de los estabilizadores de la cadera."]}
      whatToAvoid={[" Arquear o aplanar la parte baja de la espalda."]}
      redFlags={[" Dolor o molestias en las caderas o la columna vertebral."]}
      regression={[" Utiliza una almohada debajo de las caderas para mayor apoyo."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia4/ejercicio3" 
        currentDay="/espanol/semana1/dia4" 
        nextDrill="/espanol/semana1/dia4/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
