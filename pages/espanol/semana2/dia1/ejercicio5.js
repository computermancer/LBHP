import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio5Pressdetalnapoyadoenlapared() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 5: Press de Talón Apoyado en la Pared"      backButtonText="Semana 2 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con los pies apoyados en una pared, las rodillas y las caderas a 90 grados."," Brazos apoyados a los lados o sobre las costillas."]}
      instructions={[" Presiona ambos talones suavemente contra la pared."," Mantén el contacto con la pared y concéntrate en trabajar los isquiotibiales."," Mantenga durante 5-10 segundos, luego relájese."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 5-8 prensas controladas","Respirar: Exhala durante la presión, inhala para soltar","Descanso: 20-40 segundos entre series"]}
      whatToFeel={[" Activación de los isquiotibiales y compromiso sutil del tronco."]}
      whatToAvoid={[" Presionar demasiado o levantar la pelvis."]}
      redFlags={[" Calambres o molestias agudas."]}
      regression={[" Mueva los pies ligeramente hacia abajo en la pared para reducir la intensidad."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana2/dia1/ejercicio4" 
        currentDay="/espanol/semana2/dia1" 
        nextDrill="/espanol/semana2/dia2/ejercicio1" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
