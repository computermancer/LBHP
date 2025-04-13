import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Marchasupinaconcontrolplvico() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Marcha Supina con Control Pélvico"      backButtonText="Semana 2 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies planos."," Manos apoyadas a los lados o en las costillas inferiores."]}
      instructions={[" Exhale y levante una rodilla hacia el pecho manteniendo el control de las costillas y la pelvis."," Vuelva a la posición inicial y cambie de lado."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respirar: Exhala durante la elevación, inhala para regresar","Descanso: Según sea necesario"]}
      whatToFeel={[" Control del tronco y la pelvis con un movimiento suave de las piernas."]}
      whatToAvoid={[" Arquear la espalda o perder el control pélvico."]}
      redFlags={[" Dolor o molestias en las caderas o en la parte baja de la espalda."]}
      regression={[" Limite la altura de elevación de las piernas si es necesario."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia5/ejercicio3" 
        currentDay="/espanol/semana2/dia5" 
        nextDrill="/espanol/semana2/dia5/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
