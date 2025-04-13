import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio2Bajadadepiernas9090supinaconrespiracin() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 2: Bajada de Piernas 90-90 Supina con Respiración"      backButtonText="Semana 4 - Día 2"
      videoId=""
      videoStart={0}
      setup={[" Túmbate boca arriba con las caderas y las rodillas a 90 grados."," Brazos apoyados a los lados."]}
      instructions={[" Inhala para prepararte."," Exhale y baje lentamente una pierna hacia el suelo manteniendo el control de las costillas."," Inhala para volver a la posición inicial y alterna los lados."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 por lado","Respirar: Exhala para bajar, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Compromiso del núcleo mientras se mantiene el control de las costillas."," Movimiento suave de las piernas con un arqueo mínimo."]}
      whatToAvoid={[" Arquear la parte baja de la espalda."]}
      redFlags={[" Dolor o molestias en la zona lumbar."]}
      regression={[" Limite la amplitud de movimiento para un mejor control."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia2/ejercicio1" 
        currentDay="/espanol/semana4/dia2" 
        nextDrill="/espanol/semana4/dia2/ejercicio3" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
