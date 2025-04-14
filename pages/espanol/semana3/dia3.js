import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
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
            <EspDrillCard
              number="1"
              title="Gato-vaca con Conciencia de la Respiración"
              description="Desarrollar el control de la flexión y extensión de la columna vertebral."
              href="/espanol/semana3/dia3/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Balanceo Pélvico Posterior Sentado"
              description="Mejora el control pélvico y aumenta la conciencia del movimiento."
              href="/espanol/semana3/dia3/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Cambio de Costillas 90-90 Supino con Respiración"
              description="Desarrolla la estabilidad del tronco y mejora los movimientos guiados por la respiración."
              href="/espanol/semana3/dia3/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Sentadilla en Pared con Alcance"
              description="Aumentar la confianza en la posición en cuclillas con el movimiento de la parte superior del cuerpo."
              href="/espanol/semana3/dia3/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Torsión de Columna Supina con Respiración"
              description="Mejorar la rotación torácica con control de la respiración."
              href="/espanol/semana3/dia3/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}