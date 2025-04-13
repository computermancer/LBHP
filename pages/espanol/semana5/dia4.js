import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
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
            <DrillCard
              number="1"
              title="Ejercicio 1: Flexiones de pared con estabilidad costal"
              description="Introduce el empuje del cuerpo superior mientras mantienes el control del core."
              href="/espanol/semana5/dia4/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Ejercicio 2: Flexiones en silla con estabilidad pélvica"
              description="Progresa el empuje con mayor carga mientras mantienes el control."
              href="/espanol/semana5/dia4/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Ejercicio 3: Flexiones de suelo con control de costillas y pelvis"
              description="Desarrolla la fuerza del cuerpo superior y core en posición de plancha."
              href="/espanol/semana5/dia4/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Ejercicio 4: Rotación de columna sentado con alcance"
              description="Desarrolla la rotación torácica y el movimiento escapular."
              href="/espanol/semana5/dia4/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Ejercicio 5: IR de cadera en decúbito lateral y respiración"
              description="Mejora la movilidad de cadera y el control respiratorio."
              href="/espanol/semana5/dia4/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}