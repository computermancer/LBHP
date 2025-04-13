import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 3 - Día 5"
        subtitle="Respiración, Movilidad y Relajación"
        prevDay="/espanol/semana3/dia4"
        currentWeek="/espanol/semana3"
        nextDay="null"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Respiración de Cocodrilo con Expansión Costal"
              description="Refuerza la expansión respiratoria de todo el cuerpo."
              href="/espanol/semana3/dia5.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Balanceo Pélvico en Decúbito Supino con Enfoque Respiratorio"
              description="Desarrolla un movimiento pélvico suave guiado por la respiración."
              href="/espanol/semana3/dia5.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Torsión de Columna Sentado con Alcance de Brazo"
              description="Mejora la rotación torácica con respiración y movimiento coordinados."
              href="/espanol/semana3/dia5.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Marcha Apoyada en Pared con Control Costal"
              description="Desarrolla el control de la caja torácica y la estabilidad del core."
              href="/espanol/semana3/dia5.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Rotación Interna de Cadera y Respiración en Decúbito Lateral"
              description="Mejora la rotación interna de cadera y la coordinación respiratoria."
              href="/espanol/semana3/dia5.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}