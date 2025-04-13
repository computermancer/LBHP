import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Balanceoplvicoposteriorsentado() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Balanceo Pélvico Posterior Sentado"      backButtonText="Semana 1 - Día 4"
      videoId=""
      videoStart={0}
      setup={[" Siéntese erguido en una silla firme, con los pies apoyados en el suelo."," Manos apoyadas suavemente sobre los muslos."]}
      instructions={[" Incline la pelvis hacia atrás (aplanando la parte baja de la espalda) y luego hacia delante (arqueando la parte baja de la espalda)."," Muévase lenta y suavemente entre las posiciones."," Utiliza la respiración para guiar el ritmo."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-12 repeticiones controladas","Respira: Inhala hacia delante, exhala hacia atrás","Descanso: Según sea necesario"]}
      whatToFeel={[" Suave movimiento de balanceo a través de la pelvis."," Coordinación de la respiración con el movimiento."]}
      whatToAvoid={[" Postura excesivamente arqueada o colapsada."]}
      redFlags={[" Dolor o molestias en la parte baja de la espalda."]}
      regression={[" Utiliza las manos en las caderas para aumentar la conciencia corporal."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia4/ejercicio1" 
        currentDay="/espanol/semana1/dia4" 
        nextDrill="/espanol/semana1/dia4/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
