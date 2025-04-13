import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 2 - Día 2"
        subtitle="Control Rotacional y Estabilidad"
        prevDay="/espanol/semana2/dia1"
        currentWeek="/espanol/semana2"
        nextDay="/espanol/semana2/dia3"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Rotación Torácica en Decúbito Lateral"
              description="Mejorar la movilidad y control de la rotación torácica."
              href="/espanol/semana2/dia2.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Puente con Marcha"
              description="Desarrollar estabilidad pélvica durante el movimiento."
              href="/espanol/semana2/dia2.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Rotación de Cadera en Posición Cuadrúpeda"
              description="Mejorar el control rotacional y la estabilidad de la cadera."
              href="/espanol/semana2/dia2.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Plancha con Rotación"
              description="Reforzar la estabilidad del core durante la rotación."
              href="/espanol/semana2/dia2.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Bisagra de Cadera con Rotación"
              description="Integrar la rotación con el movimiento de bisagra de cadera."
              href="/espanol/semana2/dia2.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}