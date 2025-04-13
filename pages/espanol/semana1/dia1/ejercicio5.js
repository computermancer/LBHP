import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Pressdeparedparaisquiotibiales() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Press de Pared Para Isquiotibiales"      backButtonText="Semana 1 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con los pies apoyados en la pared, las rodillas y las caderas a 90 grados."," Brazos apoyados a los lados o palmas sobre las costillas inferiores."]}
      instructions={[" Presione suavemente ambos talones contra la pared como si intentara deslizarla hacia abajo."," Evite levantar las caderas; deje que los isquiotibiales se enganchen y estabilicen la pelvis."," Respira de forma constante durante todo el recorrido."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: pulsaciones de 5-10 segundos","Respiración: Respiración lenta y constante durante cada pulsación","Descanso: 20-40 segundos entre series"]}
      whatToFeel={[" Tensión suave de los isquiotibiales."," Sutil compromiso del núcleo como anclaje de la pelvis."]}
      whatToAvoid={[" Empujando a través de los dedos de los pies."," Contener la respiración o apretar excesivamente los glúteos."]}
      redFlags={[" Calambres o molestias agudas."," Sacudirse o bracear excesivamente."]}
      regression={[" Mueva los pies ligeramente hacia abajo en la pared para reducir la intensidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana1/dia1/ejercicio4" 
        currentDay="/espanol/semana1/dia1" 
        nextDrill="/espanol/semana1/dia2/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
