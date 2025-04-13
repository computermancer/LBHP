import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 5 - Día 4"
        subtitle="Control de Cuerpo Superior y Core"
        prevDay="/espanol/semana5/dia3"
        currentWeek="/espanol/semana5"
        nextDay="/espanol/semana5/dia5"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Flexiones en Pared con Estabilidad Costal"
              description="Introduce el empuje del cuerpo superior mientras mantienes el control del core."
              href="/espanol/semana5/dia4.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Flexiones en Silla con Estabilidad Pélvica"
              description="Progresa el empuje con mayor carga mientras mantienes el control."
              href="/espanol/semana5/dia4.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Flexiones en Suelo con Control Costal y Pélvico"
              description="Desarrolla la fuerza del cuerpo superior y core en posición de plancha."
              href="/espanol/semana5/dia4.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Rotación de Columna Sentado con Alcance"
              description="Desarrolla la rotación torácica y el movimiento escapular."
              href="/espanol/semana5/dia4.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Rotación Interna de Cadera y Respiración en Decúbito Lateral"
              description="Mejora la movilidad de cadera y el control respiratorio."
              href="/espanol/semana5/dia4.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}