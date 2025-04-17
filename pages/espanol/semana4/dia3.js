import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Dia3() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 4 - Día 3"
        subtitle="Control Espinal y Movilidad de Cadera"
        prevDay="/espanol/semana4/dia2"
        currentWeek="/espanol/semana4"
        nextDay="/espanol/semana4/dia4"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Gato-vaca con Expansión de Costillas"
              description="Flexión y extensión de la columna vertebral controlando la respiración."
              href="/espanol/semana4/dia3/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Balanceo Pélvico Posterior Sentado"
              description="Mejora la conciencia del movimiento pélvico en posiciones sentadas."
              href="/espanol/semana4/dia3/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Cambio de Costillas 90-90 Supino con Respiración"
              description="Desarrolla la coordinación de las costillas y la pelvis mientras respiras."
              href="/espanol/semana4/dia3/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Sentadilla Profunda Apoyada en Pared con Alcance"
              description="Aumenta la estabilidad en la sentadilla con conciencia costal y pélvica."
              href="/espanol/semana4/dia3/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Torsión de Columna Supina con Respiración"
              description="Mejora la rotación torácica con respiración controlada."
              href="/espanol/semana4/dia3/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}