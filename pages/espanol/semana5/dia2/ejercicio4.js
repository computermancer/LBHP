import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4Puentedeglteosaunapiernaconestabilidadcostal() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Puente de Glúteos a una Pierna con Estabilidad Costal"      backButtonText="Semana 5 - Día 2"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo."," Brazos apoyados a los lados."]}
      instructions={[" Inhala para prepararte."," Exhale y levante las caderas mientras extiende una pierna."," Manténgalo pulsado brevemente y vuelva a la posición inicial."," Cambia de pierna y repite."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 por lado","Respira: Exhala para levantar, inhala para bajar","Descanso: 30-45 segundos entre series"]}
      whatToFeel={[" Glúteos y core comprometidos."," Estabilidad de la pelvis y la caja torácica."]}
      whatToAvoid={[" Arquear la parte baja de la espalda."]}
      redFlags={[" Dolor en la parte baja de la espalda o las caderas."]}
      regression={[" Realiza un puente bilateral de glúteos."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia2/ejercicio3" 
        currentDay="/espanol/semana5/dia2" 
        nextDrill="/espanol/semana5/dia2/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
