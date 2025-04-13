import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';

export default function Ejercicio1Inclinacinplvicaposteriorenlapared() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Inclinación Pélvica Posterior en la Pared"
      backButtonText="Semana 1 - Día 1"
      videoId=""
      videoStart={0}
      setup={[" Colócate de pie con la espalda apoyada en una pared, con los pies a una distancia de entre 15 y 20 centímetros."," Rodillas ligeramente flexionadas, brazos apoyados a los lados."]}
      instructions={[" Incline suavemente la pelvis hacia atrás para que la parte baja de la espalda se aplane contra la pared."," Mantenga los glúteos y abdominales suaves; permita que el movimiento provenga de la rotación pélvica."," Mantén la posición durante 3-5 segundos y vuelve a la posición neutra."," Muévete despacio y con control."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas","Respira: Exhala en la inclinación, inhala en la liberación","Descanso: Según sea necesario"]}
      whatToFeel={[" Tensión abdominal suave."," La parte baja de la espalda se aplasta suavemente contra la pared."," Respiración relajada y mínima tensión en la parte superior del cuerpo."]}
      whatToAvoid={[" Apretar los glúteos o empujar hacia el suelo."," Movimientos bruscos o precipitados."]}
      redFlags={[" Dolor agudo en la parte baja de la espalda o en las caderas."," Mareos o incapacidad para respirar profundamente."]}
      regression={[" Realice inclinaciones pélvicas sentado en una silla firme si estar de pie le resulta demasiado difícil."]}
      nextDrill="/espanol/semana1/dia1/ejercicio2"
      disablePrevious={false}
      disableNext={false}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia1/ejercicio0" 
        currentDay="/espanol/semana1/dia1" 
        nextDrill="/espanol/semana1/dia1/ejercicio2" 
        disablePrevious={true}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
