import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 4 - Día 4"
        subtitle="Control de Cadera y Costillas bajo Carga"
        prevDay="/espanol/semana4/dia3"
        currentWeek="/espanol/semana4"
        nextDay="/espanol/semana4/dia5"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Desplazamientos de Cadera en Decúbito Supino con Conciencia Costal"
              description="Desarrolla la movilidad lateral de cadera mientras mantienes la estabilidad costal."
              href="/espanol/semana4/dia4.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Alcance de Brazo y Pierna en Cuatro Puntos con Control"
              description="Mejora el equilibrio y la estabilidad con movimiento controlado."
              href="/espanol/semana4/dia4.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Presión de Isquiotibiales en Pared con Enfoque Respiratorio"
              description="Refuerza la activación de isquiotibiales y el control del core."
              href="/espanol/semana4/dia4.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Abducción de Cadera en Decúbito Lateral con Apoyo"
              description="Desarrolla la fuerza y estabilidad lateral de cadera."
              href="/espanol/semana4/dia4.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Torsión de Columna Sentado con Alcance de Brazo"
              description="Desarrolla la rotación torácica y el control."
              href="/espanol/semana4/dia4.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}