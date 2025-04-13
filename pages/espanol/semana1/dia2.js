import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day2() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 1 - Día 2"
        subtitle="Expansión Costal y Enfoque en la Bisagra de Cadera"
        prevDay="/espanol/semana1/dia1"
        currentWeek="/espanol/semana1"
        nextDay="/espanol/semana1/dia3"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Expansión Lateral de las Costillas"
              description="Desarrollar conciencia de la inclinación pélvica y control lumbar."
              href="/espanol/semana1/dia2/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Rotación Torácica Sentado"
              description="Mejorar el control de la respiración y la función diafragmática."
              href="/espanol/semana1/dia2/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Bisagra de Cadera de Pie con Alcance de Pared"
              description="Aumentar la movilidad pélvica y la coordinación."
              href="/espanol/semana1/dia2/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Rock Back Cuadrúpedo con Columna Neutra"
              description="Mejorar la estabilidad del core y mantener la alineación costilla-pelvis."
              href="/espanol/semana1/dia2/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Sentadilla con Apoyo en la Pared"
              description="Activar los isquiotibiales para estabilizar la pelvis y el core."
              href="/espanol/semana1/dia2/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}
