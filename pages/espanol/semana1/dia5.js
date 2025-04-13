import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day5() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 1 - Día 5"
        subtitle="Respiración, Flexión Espinal y Control del Core"
        prevDay="/espanol/semana1/dia4"
        currentWeek="/espanol/semana1"
        nextDay="/espanol/semana2/dia1"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Respiración Diafragmática en Posición de Cocodrilo"
              description="Desarrollar conciencia de la inclinación pélvica y control lumbar."
              href="/espanol/semana1/dia5/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Gato-Vaca con Concentración en la Respiración"
              description="Mejorar el control de la respiración y la función diafragmática."
              href="/espanol/semana1/dia5/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Torsión de Columna Sentado con Respiración"
              description="Aumentar la movilidad pélvica y la coordinación."
              href="/espanol/semana1/dia5/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Marcha Supina con Control de Costillas"
              description="Mejorar la estabilidad del core y mantener la alineación costilla-pelvis."
              href="/espanol/semana1/dia5/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Respiración Sentada y Conciencia Pélvica"
              description="Activar los isquiotibiales para estabilizar la pelvis y el core."
              href="/espanol/semana1/dia5/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}
