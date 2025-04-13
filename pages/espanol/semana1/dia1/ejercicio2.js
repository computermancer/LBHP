import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Respiracinabdominalcongancho() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Respiración Abdominal con Gancho"      backButtonText="Semana 1 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Coloca una mano en el pecho y la otra en el vientre."]}
      instructions={[" Inhale suavemente por la nariz, permitiendo que el vientre se eleve sin mover el pecho."," Exhale suavemente por la boca o la nariz, dejando que el vientre caiga de forma natural."," Céntrate en minimizar el movimiento de la parte superior del pecho."]}
      setsReps={["Conjuntos: 2","Repeticiones: 5-8 ciclos de respiración por serie","Respira: Inhala 3-4 segundos, exhala 4-6 segundos","Descanso: Entre series o según sea necesario"]}
      whatToFeel={[" El vientre se eleva bajo la mano con cada inhalación."," Sensación de relajación y mínimo movimiento del pecho."]}
      whatToAvoid={[" Levantar el pecho o encoger los hombros."," Forzar o controlar en exceso la respiración."]}
      redFlags={[" Mareo o dificultad para respirar."]}
      regression={[" Levante las rodillas con una almohada si siente tensión en la zona lumbar."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia1/ejercicio1" 
        currentDay="/espanol/semana1/dia1" 
        nextDrill="/espanol/semana1/dia1/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
