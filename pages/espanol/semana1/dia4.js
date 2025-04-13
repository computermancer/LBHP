import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day4() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 1 - Día 4"
        subtitle="Control Pélvico y Costal"
        prevDay="/espanol/semana1/dia3"
        currentWeek="/espanol/semana1"
        nextDay="/espanol/semana1/dia5"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Reposición Supina del Diafragma"
              description="Desarrollar conciencia de la inclinación pélvica y control lumbar."
              href="/espanol/semana1/dia4/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Balanceo Pélvico Posterior Sentado"
              description="Mejorar el control de la respiración y la función diafragmática."
              href="/espanol/semana1/dia4/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Extensión Torácica Sentado"
              description="Aumentar la movilidad pélvica y la coordinación."
              href="/espanol/semana1/dia4/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Desplazamiento de Cadera en Decúbito Supino con Respiración"
              description="Mejorar la estabilidad del core y mantener la alineación costilla-pelvis."
              href="/espanol/semana1/dia4/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Respiración Sentada con Control de Costillas"
              description="Activar los isquiotibiales para estabilizar la pelvis y el core."
              href="/espanol/semana1/dia4/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}
