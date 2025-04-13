import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
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
              title="Reinicio Respiratorio en Posición Lateral"
              description="Promover el reinicio de la caja torácica y el diafragma a través de la respiración enfocada."
              href="/espanol/semana1/dia3.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Alcance y Rodamiento Rítmico"
              description="Mejorar el control rotacional y la coordinación."
              href="/espanol/semana1/dia3.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Patrones Respiratorios con Apoyo"
              description="Reforzar el control constante de la respiración y la conciencia costal."
              href="/espanol/semana1/dia3.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Balanceo de Columna Relajada"
              description="Fomentar el movimiento fluido a través de la pelvis y la columna."
              href="/espanol/semana1/dia3.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Balanceo Bilateral Suave"
              description="Mejorar la movilidad pélvica y la relajación."
              href="/espanol/semana1/dia3.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}