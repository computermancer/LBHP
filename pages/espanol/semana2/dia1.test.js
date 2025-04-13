import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 2 - Día 1"
        subtitle="Expansión Costal y Control de Cadera"
        prevDay="null"
        currentWeek="/espanol/semana2"
        nextDay="/espanol/semana2/dia2"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Expansión Costal Supina con Respiración"
              description="Aumentar la conciencia de la caja torácica y el control diafragmático."
              href="/espanol/semana2/dia1.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Desplazamientos de Cadera en Decúbito Supino"
              description="Desarrollar control y conciencia de los patrones de desplazamiento de cadera."
              href="/espanol/semana2/dia1.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Rotación Interna de Cadera en Decúbito Lateral con Respiración"
              description="Mejorar la rotación interna de cadera y la coordinación respiratoria."
              href="/espanol/semana2/dia1.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Descenso de Piernas 90-90 en Decúbito Supino"
              description="Reforzar la estabilidad del core y la alineación costilla-pelvis."
              href="/espanol/semana2/dia1.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Presión de Talón con Apoyo en Pared"
              description="Activar los isquiotibiales para estabilizar la pelvis y reforzar el control."
              href="/espanol/semana2/dia1.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}