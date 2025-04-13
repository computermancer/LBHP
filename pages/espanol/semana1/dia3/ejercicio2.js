import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Alcanzaryrodarrtmicamente() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Alcanzar y Rodar Rítmicamente"      backButtonText="Semana 1 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con los brazos extendidos por encima de la cabeza."," Rodillas flexionadas, pies apoyados en el suelo."]}
      instructions={[" Extiende un brazo hacia arriba y a lo largo del cuerpo como si te estuvieras dando la vuelta."," Deja que la cabeza y la parte superior de la espalda sigan el movimiento."," Vuelva a la posición inicial."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas por lado","Respira: Inhala antes del alcance, exhala al rodar","Descanso: Según sea necesario"]}
      whatToFeel={[" Movimiento suave y fluido a través de la columna vertebral."," Estiramiento suave de la parte superior de la espalda y las costillas."]}
      whatToAvoid={[" Movimientos bruscos o precipitados."," Perder el control del movimiento de balanceo."]}
      redFlags={[" Dolor en la columna vertebral o en los hombros."]}
      regression={[" Doble las rodillas más cerca del pecho para mayor control."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia3/ejercicio1" 
        currentDay="/espanol/semana1/dia3" 
        nextDrill="/espanol/semana1/dia3/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
