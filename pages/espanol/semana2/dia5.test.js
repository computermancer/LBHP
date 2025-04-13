import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 2 - Día 5"
        subtitle="Integración y Progresión"
        prevDay="/espanol/semana2/dia4"
        currentWeek="/espanol/semana2"
        nextDay="null"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Respiración con Movimiento Completo"
              description="Coordinar la respiración con movimientos integrados."
              href="/espanol/semana2/dia5.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Rotación con Bisagra de Cadera"
              description="Integrar la rotación con la bisagra de cadera."
              href="/espanol/semana2/dia5.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Movimiento de Brazos y Piernas"
              description="Coordinar el movimiento de extremidades."
              href="/espanol/semana2/dia5.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Plancha con Movimiento Completo"
              description="Mantener la estabilidad durante movimientos complejos."
              href="/espanol/semana2/dia5.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Integración de Movimientos"
              description="Combinar todos los elementos aprendidos."
              href="/espanol/semana2/dia5.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}