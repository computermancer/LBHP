import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 3 - Día 4"
        subtitle="Estabilidad de Cadera y Caja Torácica"
        prevDay="/espanol/semana3/dia3"
        currentWeek="/espanol/semana3"
        nextDay="/espanol/semana3/dia5"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Desplazamientos de Cadera en Decúbito Supino con Control Costal"
              description="Desarrolla el control de los desplazamientos pélvicos mientras mantienes la estabilidad costal."
              href="/espanol/semana3/dia4.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Flexión y Extensión Torácica Sentado"
              description="Mejora la movilidad de la columna torácica y el control postural."
              href="/espanol/semana3/dia4.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Alcance de Brazo y Pierna en Cuatro Puntos con Control"
              description="Desarrolla la estabilidad del core y los hombros mientras mantienes la columna neutral."
              href="/espanol/semana3/dia4.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Presión de Isquiotibiales en Pared con Conciencia de Cadera"
              description="Refuerza la activación de los isquiotibiales y el control pélvico."
              href="/espanol/semana3/dia4.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Abducción de Cadera en Decúbito Lateral con Apoyo"
              description="Desarrolla la fuerza y estabilidad lateral de la cadera."
              href="/espanol/semana3/dia4.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}