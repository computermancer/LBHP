import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Desplazamientodecaderasentadoconestabilidadcostal() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Desplazamiento de Cadera Sentado con Estabilidad Costal"      backButtonText="Semana 3 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Siéntese erguido en una silla firme, con los pies apoyados en el suelo."," Manos apoyadas suavemente sobre los muslos."]}
      instructions={[" Inhala para prepararte."," Exhala y desplaza suavemente una cadera hacia delante manteniendo la estabilidad de las costillas."," Vuelva a la posición neutra y alterne los lados."," Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado"," Respirar: Exhala para cambiar, inhala para volver","Descanso: Según sea necesario"]}
      setsReps={[]}
      whatToFeel={[" Cambio de cadera suave y controlado."," La caja torácica permanece neutra y estable."]}
      whatToAvoid={[" Inclinación o torsión del torso."]}
      redFlags={[" Dolor o molestias en las caderas o la zona lumbar."]}
      regression={[" Realice con cambios más pequeños para un mejor control."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia1/ejercicio1" 
        currentDay="/espanol/semana3/dia1" 
        nextDrill="/espanol/semana3/dia1/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
