import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 3 - Día 3"
        subtitle="Movilidad Espinal y Control del Core"
        prevDay="/espanol/semana3/dia2"
        currentWeek="/espanol/semana3"
        nextDay="/espanol/semana3/dia4"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Gato-Vaca con Conciencia Respiratoria"
              description="Desarrolla el control de la flexión y extensión espinal."
              href="/espanol/semana3/dia3.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Balanceo Pélvico Posterior Sentado"
              description="Mejora el control pélvico y aumenta la conciencia del movimiento."
              href="/espanol/semana3/dia3.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Desplazamiento Costal 90-90 en Decúbito Supino con Respiración"
              description="Desarrolla la estabilidad del core y mejora el movimiento guiado por la respiración."
              href="/espanol/semana3/dia3.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Mantenimiento de Sentadilla con Apoyo en Pared y Alcance"
              description="Aumenta la confianza en la posición de sentadilla con movimiento de la parte superior del cuerpo."
              href="/espanol/semana3/dia3.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Torsión de Columna en Decúbito Supino con Respiración"
              description="Mejora la rotación torácica con control respiratorio."
              href="/espanol/semana3/dia3.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}