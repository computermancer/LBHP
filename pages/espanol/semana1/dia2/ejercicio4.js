import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio4RockBackcuadrpedoconcolumnaneutra() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 4: Rock Back Cuadrúpedo con Columna Neutra"      backButtonText="Semana 1 - Día 2"
      videoId=""
      videoStart={0}
      setup={[" Empiece sobre manos y rodillas, muñecas bajo los hombros, rodillas bajo las caderas."," Mantenga una posición neutra de la columna vertebral."]}
      instructions={[" Inhala para prepararte."," Exhale y desplace lentamente las caderas hacia los talones."," Mantenga la alineación de la columna vertebral mientras se mueve."," Vuelva a la posición inicial."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 repeticiones lentas","Respiración: Inhala para prepararte, exhala durante el balanceo hacia atrás","Descanso: Según sea necesario"]}
      whatToFeel={[" Estiramiento a través de las caderas y la parte baja de la espalda."," El tronco se contrae suavemente para mantener la posición."]}
      whatToAvoid={[" Colapso de la parte baja de la espalda."," Redondeo o arqueamiento excesivo."]}
      redFlags={[" Dolor agudo o malestar."]}
      regression={[" Coloque una toalla doblada debajo de las rodillas para mayor comodidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia2/ejercicio3" 
        currentDay="/espanol/semana1/dia2" 
        nextDrill="/espanol/semana1/dia2/ejercicio5" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
