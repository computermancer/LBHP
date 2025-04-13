import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5EjerciciodeIRyextensindecaderaendecbitoprono() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Ejercicio de Ir y Extensión de Cadera en Decúbito Prono"      backButtonText="Semana 3 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca abajo con los brazos apoyados bajo la frente."," Piernas extendidas y dedos de los pies apuntando ligeramente hacia fuera."]}
      instructions={[" Inhala para prepararte."," Exhale y rote una cadera internamente sin levantar la pierna."," Inhala y vuelve a la posición neutra."," Realice la extensión de cadera levantando ligeramente la pierna del suelo."," Conjuntos: 2-3","Repeticiones: 8-10 por lado"," Respirar: Espira durante el movimiento, inspira para volver","Descanso: Según sea necesario"]}
      setsReps={[]}
      whatToFeel={[" Rotación de cadera y activación de glúteos."," Control a través de la pelvis."]}
      whatToAvoid={[" Arquear la parte baja de la espalda."]}
      redFlags={[" Dolor en las caderas o en la parte baja de la espalda."]}
      regression={[" Realícelo con una almohada debajo de las caderas como apoyo."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia2/ejercicio4" 
        currentDay="/espanol/semana3/dia2" 
        nextDrill="/espanol/semana3/dia3/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
