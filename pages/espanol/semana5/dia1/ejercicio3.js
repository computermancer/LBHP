import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio3KickstandRDLconcontroldecadera() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 3: Kickstand Rdl con Control de Cadera"      backButtonText="Semana 5 - Día 1"
      videoId=""
      videoStart={0}
      setup={[" Colóquese de pie con los pies separados a la anchura de las caderas y un pie ligeramente retrasado (posición de pata de cabra)."," Flexiona las caderas, manteniendo la espalda neutra."]}
      instructions={[" Inhala para prepararte."," Exhala y gira hacia delante, manteniendo el control de las costillas y la pelvis."," Vuelva a ponerse de pie con control."," Cambia de pierna y repite."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 por lado","Respirar: Exhala para girar, inhala para volver","Descanso: 30-45 segundos entre series"]}
      whatToFeel={[" Compromiso de glúteos e isquiotibiales."," Estabilidad pélvica y costal."]}
      whatToAvoid={[" Redondear o arquear la espalda."]}
      redFlags={[" Dolor agudo en los isquiotibiales o en la parte baja de la espalda."]}
      regression={[" Realice una bisagra más pequeña con menos amplitud de movimiento."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana5/dia1/ejercicio2" 
        currentDay="/espanol/semana5/dia1" 
        nextDrill="/espanol/semana5/dia1/ejercicio4" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
