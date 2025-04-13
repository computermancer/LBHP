import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 1 - Día 5"
        subtitle="Respiración, Flexión Espinal y Control del Core"
        prevDay="/espanol/semana1/dia4"
        currentWeek="/espanol/semana1"
        nextDay="null"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Respiración Diafragmática en Posición de Cocodrilo"
              description="Fomentar la expansión respiratoria completa en 3D."
              href="/espanol/semana1/dia5.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Gato-Vaca con Enfoque en la Respiración"
              description="Desarrollar conciencia de la flexión y extensión espinal."
              href="/espanol/semana1/dia5.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Torsión de Columna Sentada con Respiración"
              description="Mejorar la rotación torácica con respiración controlada."
              href="/espanol/semana1/dia5.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Marcha en Posición Supina con Control Costal"
              description="Reforzar la estabilidad pélvica y costal con movimiento de piernas."
              href="/espanol/semana1/dia5.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Respiración Sentada y Conciencia Pélvica"
              description="Aumentar la conciencia de la respiración y la posición pélvica."
              href="/espanol/semana1/dia5.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}