import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 4 - Día 5"
        subtitle="Integración de Movimientos y Control Respiratorio"
        prevDay="/espanol/semana4/dia4"
        currentWeek="/espanol/semana4"
        nextDay="null"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Bisagra de Cadera con Control Costal"
              description="Desarrolla la bisagra de cadera mientras mantienes el control costal y pélvico."
              href="/espanol/semana4/dia5.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Sentadilla con Control Respiratorio"
              description="Mejora la sentadilla con enfoque en la respiración y el control del core."
              href="/espanol/semana4/dia5.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Rotación de Columna con Alcance"
              description="Desarrolla la rotación torácica con control pélvico."
              href="/espanol/semana4/dia5.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Marcha de Isquiotibiales con Estabilidad"
              description="Refuerza la cadena posterior mientras mantienes la estabilidad del core."
              href="/espanol/semana4/dia5.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Respiración Diafragmática con Movimiento"
              description="Integra la respiración diafragmática con movimientos dinámicos."
              href="/espanol/semana4/dia5.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}