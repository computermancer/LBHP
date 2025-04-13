import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
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
              title="Expansión Costal en Posición Lateral"
              description="Mejorar la expansión lateral de la caja torácica y la mecánica respiratoria."
              href="/espanol/semana1/dia2.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Rotación Torácica Sentado"
              description="Aumentar la movilidad torácica y el control rotacional."
              href="/espanol/semana1/dia2.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Bisagra de Cadera de Pie con Alcance a la Pared"
              description="Desarrollar conciencia y control de la bisagra de cadera."
              href="/espanol/semana1/dia2.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Balanceo Hacia Atrás en Cuadrupedia con Columna Neutral"
              description="Promover el control pélvico con columna neutral."
              href="/espanol/semana1/dia2.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Sostén de Sentadilla con Apoyo en la Pared"
              description="Construir confianza en la posición de sentadilla con apoyo en la pared."
              href="/espanol/semana1/dia2.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}