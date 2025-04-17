import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Dia5() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 3 - Día 5"
        subtitle="Respiración, Movilidad y Relajación"
        prevDay="/espanol/semana3/dia4"
        currentWeek="/espanol/semana3"
        nextDay="/espanol/semana4/dia1"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Respiración de Cocodrilo con Expansión Costal"
              description="Refuerza la expansión respiratoria de todo el cuerpo."
              href="/espanol/semana3/dia5/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Balanceo Pélvico Supino"
              description="Movimiento pélvico suave con movimientos guiados por la respiración."
              href="/espanol/semana3/dia5/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Torsión de Columna Sentado con Extensión de Brazos"
              description="Mejora la rotación torácica con respiración y movimiento coordinados."
              href="/espanol/semana3/dia5/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Marcha Apoyada en la Pared con Control de Costillas"
              description="Desarrolla el control de la caja torácica y la estabilidad del tronco."
              href="/espanol/semana3/dia5/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Ir de Cadera en Decúbito Lateral y Respiración"
              description="Potenciar la rotación interna de la cadera y mejorar la coordinación de la respiración."
              href="/espanol/semana3/dia5/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}