import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Day5() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 1 - Día 5"
        subtitle="Respiración, Flexión Espinal y Control del Core"
        prevDay="/espanol/semana1/dia4"
        currentWeek="/espanol/semana1"
        nextDay="/espanol/semana2/dia1"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Respiración Diafragmática en Posición de Cocodrilo"
              description="Fomente la expansión completa de la respiración en 3D."
              href="/espanol/semana1/dia5/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Gato-Vaca con Concentración en la Respiración"
              description="Desarrollar la conciencia de flexión y extensión de la columna vertebral."
              href="/espanol/semana1/dia5/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Torsión de Columna Sentado con Respiración"
              description="Mejorar la rotación torácica con una respiración controlada."
              href="/espanol/semana1/dia5/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Marcha Supina con Control de Costillas"
              description="Refuerce la estabilidad pélvica y costal con el movimiento de las piernas."
              href="/espanol/semana1/dia5/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Respiración Sentada y Conciencia Pélvica"
              description="Aumentar la conciencia de la respiración y la posición pélvica."
              href="/espanol/semana1/dia5/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}
