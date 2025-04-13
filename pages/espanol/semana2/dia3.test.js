import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 2 - Día 3"
        subtitle="Integración de Movimiento y Control"
        prevDay="/espanol/semana2/dia2"
        currentWeek="/espanol/semana2"
        nextDay="/espanol/semana2/dia4"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Respiración con Movimiento de Brazos"
              description="Coordinar la respiración con el movimiento de los brazos."
              href="/espanol/semana2/dia3.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Rotación de Tronco en Posición Sentada"
              description="Mejorar el control rotacional en posición vertical."
              href="/espanol/semana2/dia3.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Bisagra de Cadera con Rotación de Brazos"
              description="Integrar el movimiento de brazos con la bisagra de cadera."
              href="/espanol/semana2/dia3.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Plancha con Movimiento de Brazos"
              description="Mantener la estabilidad durante el movimiento de brazos."
              href="/espanol/semana2/dia3.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Rotación con Paso Lateral"
              description="Integrar la rotación con el movimiento de paso."
              href="/espanol/semana2/dia3.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}