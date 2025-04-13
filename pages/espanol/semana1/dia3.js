import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day3() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 1 - Día 3"
        subtitle="Control Respiratorio y Movimiento Rítmico"
        prevDay="/espanol/semana1/dia2"
        currentWeek="/espanol/semana1"
        nextDay="/espanol/semana1/dia4"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Restablecimiento de la Respiración en Tumbado Lateral"
              description="Desarrollar conciencia de la inclinación pélvica y control lumbar."
              href="/espanol/semana1/dia3/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Alcanzar y Rodar Rítmicamente"
              description="Mejorar el control de la respiración y la función diafragmática."
              href="/espanol/semana1/dia3/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Patrón de Respiración con Apoyo"
              description="Aumentar la movilidad pélvica y la coordinación."
              href="/espanol/semana1/dia3/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Balanceo Relajado de la Columna Vertebral"
              description="Mejorar la estabilidad del core y mantener la alineación costilla-pelvis."
              href="/espanol/semana1/dia3/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Balanceo Bilateral Suave"
              description="Activar los isquiotibiales para estabilizar la pelvis y el core."
              href="/espanol/semana1/dia3/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}
