import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day1() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 1 - Día 1"
        subtitle="Trabajo Base y Conciencia"
        prevDay={null}
        currentWeek="/espanol/semana1"
        nextDay="/espanol/semana1/dia2"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Inclinación Pélvica Posterior en la Pared"
              description="Desarrollar conciencia de la inclinación pélvica y control lumbar."
              href="/espanol/semana1/dia1/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Respiración Abdominal con Gancho"
              description="Mejorar el control de la respiración y la función diafragmática."
              href="/espanol/semana1/dia1/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Balanceo Pélvico Sentado"
              description="Aumentar la movilidad pélvica y la coordinación."
              href="/espanol/semana1/dia1/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Alcance 90-90 Supino"
              description="Mejorar la estabilidad del core y mantener la alineación costilla-pelvis."
              href="/espanol/semana1/dia1/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Press de Pared para Isquiotibiales"
              description="Activar los isquiotibiales para estabilizar la pelvis y el core."
              href="/espanol/semana1/dia1/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}
