import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Balanceorelajadodelacolumnavertebral() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Balanceo Relajado de la Columna Vertebral"      backButtonText="Semana 1 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Empiece en posición cuadrúpeda, con las manos bajo los hombros y las rodillas bajo las caderas."]}
      instructions={[" Balancéese suavemente hacia delante y hacia atrás, dejando que la columna vertebral se mueva con naturalidad."," Concéntrese en mantener un movimiento suave y rítmico."," Respira de forma constante durante todo el movimiento."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-12 rocas lentas","Respira: Inhala al balancearte hacia delante, exhala al balancearte hacia atrás","Descanso: Según sea necesario"]}
      whatToFeel={[" Estiramiento suave de las caderas y la zona lumbar."," Movimiento relajado y fluido."]}
      whatToAvoid={[" Tensar los hombros o bracear en exceso."]}
      redFlags={[" Dolor o molestias en la parte baja de la espalda."]}
      regression={[" Utiliza una toalla doblada bajo las rodillas para mayor comodidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia3/ejercicio3" 
        currentDay="/espanol/semana1/dia3" 
        nextDrill="/espanol/semana1/dia3/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
