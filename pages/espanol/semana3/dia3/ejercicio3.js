import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3Cambiodecostillas9090supinoconrespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Cambio de Costillas 90-90 Supino con Respiración"      backButtonText="Semana 3 - Día 3"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las caderas y las rodillas a 90 grados."," Brazos extendidos hacia el techo."]}
      instructions={[" Inhala para prepararte."," Exhale y desplace suavemente las costillas lateralmente hacia un lado."," Vuelva al centro y alterne los lados."," Conjuntos: 2-3","Repeticiones: 8-10 por lado"," Respirar: Exhala para cambiar, inhala para volver","Descanso: Según sea necesario"]}
      setsReps={[]}
      whatToFeel={[" Movimiento controlado de las costillas."," Estabilidad del núcleo en todo momento."]}
      whatToAvoid={[" Desplazamiento excesivo o arqueo de la espalda."]}
      redFlags={[" Dolor o molestias en las costillas o en la parte baja de la espalda."]}
      regression={[" Realícelo con los pies apoyados para mayor estabilidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia3/ejercicio2" 
        currentDay="/espanol/semana3/dia3" 
        nextDrill="/espanol/semana3/dia3/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
