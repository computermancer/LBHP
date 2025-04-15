import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Dia5() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 4 - Día 5"
        subtitle="Integración de Movimientos y Control Respiratorio"
        prevDay="/espanol/semana4/dia4"
        currentWeek="/espanol/semana4"
        nextDay="/espanol/semana5/dia1"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Respiración de Cocodrilo con Expansión Costal"
              description="Refuerce la expansión respiratoria de todo el cuerpo."
              href="/espanol/semana4/dia5/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Balanceo Pélvico Supino con Concentración en la Respiración"
              description="Desarrolla un movimiento pélvico suave con movimientos guiados por la respiración."
              href="/espanol/semana4/dia5/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Conciencia Pélvica Posterior Sentado"
              description="Mejorar el control de la posición de la pelvis en posición sentada."
              href="/espanol/semana4/dia5/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Marcha Apoyada en la Pared con Estabilidad Costal"
              description="Refuerce el control del tronco y las costillas durante los movimientos dinámicos."
              href="/espanol/semana4/dia5/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Ir de Cadera en Decúbito Lateral y Respiración"
              description="Mejora la movilidad de la cadera y el control de la respiración."
              href="/espanol/semana4/dia5/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}