import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Dia2() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 5 - Día 2"
        subtitle="Control de Pierna Única y Cadera"
        prevDay="/espanol/semana5/dia1"
        currentWeek="/espanol/semana5"
        nextDay="/espanol/semana5/dia3"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Ejercicio 1: Sentadillas escalonadas con estabilidad costal"
              description="Desarrolla la carga en una sola pierna y el control pélvico."
              href="/espanol/semana5/dia2/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Ejercicio 2: Estocadas laterales con control de la respiración"
              description="Mejora el control lateral de cadera y la estabilidad costal."
              href="/espanol/semana5/dia2/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Ejercicio 3: Abducción de cadera en decúbito lateral con concentración en la respiración"
              description="Desarrolla la fuerza lateral de cadera con control respiratorio."
              href="/espanol/semana5/dia2/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Ejercicio 4: Puente de glúteos a una pierna con estabilidad costal"
              description="Desarrolla la fuerza de la cadena posterior y el control de cadera."
              href="/espanol/semana5/dia2/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Ejercicio 5: Desplazamiento de costillas en decúbito supino con compromiso del tronco"
              description="Desarrolla el control del core con desplazamiento sutil de costillas."
              href="/espanol/semana5/dia2/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}