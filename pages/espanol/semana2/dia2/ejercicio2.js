import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Bisagradecaderasentadaconrespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Bisagra de Cadera Sentada con Respiración"      backButtonText="Semana 2 - Día 2"
      videoId=""
      videoStart={0}
      setup={[" Siéntese en una silla firme, con los pies planos y las manos apoyadas en los muslos."]}
      instructions={[" Inhala para prepararte."," Exhala y gira las caderas hacia delante manteniendo la columna neutra."," Vuelva a la posición inicial con control."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones controladas","Respirar: Exhala para girar, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Estiramiento en los isquiotibiales y compromiso a través del núcleo."]}
      whatToAvoid={[" Redondear o arquear la espalda."]}
      redFlags={[" Dolor o molestias en la parte baja de la espalda."]}
      regression={[" Coloque las manos sobre una mesa para un apoyo adicional."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia2/ejercicio1" 
        currentDay="/espanol/semana2/dia2" 
        nextDrill="/espanol/semana2/dia2/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
