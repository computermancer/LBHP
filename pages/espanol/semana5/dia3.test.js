import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 5 - Día 3"
        subtitle="Cadena Posterior y Control de Cadera"
        prevDay="/espanol/semana5/dia2"
        currentWeek="/espanol/semana5"
        nextDay="/espanol/semana5/dia4"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="RDL en Postura Escalonada con Conciencia de Cadera"
              description="Mejora la fuerza de la cadena posterior y el control de una sola pierna."
              href="/espanol/semana5/dia3.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Zancadas Adelante con Control Costal"
              description="Desarrolla fuerza y estabilidad en patrones de zancada hacia adelante."
              href="/espanol/semana5/dia3.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Presión de Isquiotibiales en Pared con Estabilidad Costal"
              description="Activa los isquiotibiales y refuerza el control del core."
              href="/espanol/semana5/dia3.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Puente de Glúteos Bilateral con Control Costal y Pélvico"
              description="Refuerza la extensión de cadera y la estabilidad del core."
              href="/espanol/semana5/dia3.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Torsión de Columna en Decúbito Supino con Respiración"
              description="Mejora la rotación torácica con respiración controlada."
              href="/espanol/semana5/dia3.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}