import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 2 - Día 4"
        subtitle="Estabilidad y Control Dinámico"
        prevDay="/espanol/semana2/dia3"
        currentWeek="/espanol/semana2"
        nextDay="/espanol/semana2/dia5"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Respiración con Movimiento de Piernas"
              description="Coordinar la respiración con el movimiento de las piernas."
              href="/espanol/semana2/dia4.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Rotación de Cadera en Posición de Pie"
              description="Mejorar el control rotacional en posición vertical."
              href="/espanol/semana2/dia4.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Bisagra de Cadera con Movimiento de Piernas"
              description="Integrar el movimiento de piernas con la bisagra de cadera."
              href="/espanol/semana2/dia4.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Plancha con Movimiento de Piernas"
              description="Mantener la estabilidad durante el movimiento de piernas."
              href="/espanol/semana2/dia4.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Rotación con Paso Adelante"
              description="Integrar la rotación con el movimiento de paso adelante."
              href="/espanol/semana2/dia4.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}