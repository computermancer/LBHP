import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 4 - Día 2"
        subtitle="Estabilidad del Core y Pélvica en Acción"
        prevDay="/espanol/semana4/dia1"
        currentWeek="/espanol/semana4"
        nextDay="/espanol/semana4/dia3"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Flexión y Extensión Torácica Sentado"
              description="Mejora la movilidad torácica mientras mantienes el control pélvico."
              href="/espanol/semana4/dia2.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Descenso de Piernas 90-90 en Decúbito Supino con Respiración"
              description="Refuerza el control del core mientras bajas las piernas con estabilidad."
              href="/espanol/semana4/dia2.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Rotación de Columna Sentado con Alcance de Brazo"
              description="Desarrolla el control rotacional y la movilidad torácica."
              href="/espanol/semana4/dia2.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Marcha de Isquiotibiales en Pared con Estabilidad Costal"
              description="Desarrolla el control de la cadena posterior mientras mantienes el control costal."
              href="/espanol/semana4/dia2.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Rotación Interna y Extensión de Cadera en Decúbito Prono con Control"
              description="Desarrolla la conciencia de la rotación y extensión de cadera."
              href="/espanol/semana4/dia2.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}