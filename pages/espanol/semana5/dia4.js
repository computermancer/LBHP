import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Dia4() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 5 - Día 4"
        subtitle="Control de Cuerpo Superior y Core"
        prevDay="/espanol/semana5/dia3"
        currentWeek="/espanol/semana5"
        nextDay="/espanol/semana5/dia5"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Flexiones de Pared con Estabilidad Costal"
              description="Introducir el prensado de la parte superior del cuerpo."
              href="/espanol/semana5/dia4/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Flexiones en Silla con Estabilidad Pélvica"
              description="Progresa el empuje con mayor carga mientras mantienes el control."
              href="/espanol/semana5/dia4/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Flexiones de Suelo con Control de Costillas y Pelvis"
              description="Desarrolla la fuerza del cuerpo superior y core en posición de plancha."
              href="/espanol/semana5/dia4/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Rotación de la Columna Sentado con Alcance"
              description="Desarrolla la rotación torácica y el movimiento escapular."
              href="/espanol/semana5/dia4/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Ir de Cadera en Decúbito Lateral y Respiración"
              description="Mejora la movilidad de la cadera y el control de la respiración."
              href="/espanol/semana5/dia4/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}