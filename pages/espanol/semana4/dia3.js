import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
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
            <DrillCard
              number="1"
              title="Gato-Vaca con Expansión Costal"
              description="Desarrolla la flexión y extensión espinal con control respiratorio."
              href="/espanol/semana4/dia3/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Balanceo Pélvico Posterior Sentado"
              description="Mejora la conciencia del movimiento pélvico en posiciones sentadas."
              href="/espanol/semana4/dia3/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Desplazamiento Costal 90-90 en Decúbito Supino con Respiración"
              description="Desarrolla la coordinación costal y pélvica durante la respiración."
              href="/espanol/semana4/dia3/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Sentadilla Profunda Apoyada en Pared con Alcance"
              description="Aumenta la estabilidad en la sentadilla con conciencia costal y pélvica."
              href="/espanol/semana4/dia3/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Torsión Espinal en Decúbito Supino con Respiración"
              description="Mejora la rotación torácica con respiración controlada."
              href="/espanol/semana4/dia3/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}