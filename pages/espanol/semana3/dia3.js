import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Dia3() {
  return (
    <>
      <MainEspNavBar />
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
              title="Gato-vaca con conciencia de la respiración"
              description="Desarrolla el control de la flexión y extensión espinal."
              href="/espanol/semana3/dia3/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Balanceo pélvico posterior sentado"
              description="Mejora el control pélvico y aumenta la conciencia del movimiento."
              href="/espanol/semana3/dia3/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Cambio de costillas 90-90 supino con respiración"
              description="Desarrolla la estabilidad del core y mejora el movimiento guiado por la respiración."
              href="/espanol/semana3/dia3/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Sentadilla apoyada en la pared con alcance"
              description="Aumenta la confianza en la posición de sentadilla con movimiento de la parte superior del cuerpo."
              href="/espanol/semana3/dia3/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Torsión de columna supina con respiración"
              description="Mejora la rotación torácica con control respiratorio."
              href="/espanol/semana3/dia3/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}