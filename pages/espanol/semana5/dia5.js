import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Dia5() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 5 - Día 5"
        subtitle="Movilidad, Respiración y Control"
        prevDay="/espanol/semana5/dia4"
        currentWeek="/espanol/semana5"
        nextDay="/espanol/semana6/dia1"
        disableNext={true}
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Ejercicio 1: Postura de caballo con control de costillas (sujeción más larga)"
              description="Refuerza la resistencia isométrica de la parte inferior del cuerpo."
              href="/espanol/semana5/dia5/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Ejercicio 2: Elevaciones de pantorrilla con control de costillas y pelvis"
              description="Fortifica las pantorrillas mientras mantienes una alineación neutral."
              href="/espanol/semana5/dia5/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Ejercicio 3: Elevación de tibia con respiración consciente"
              description="Desarrolla la fuerza anterior de la espinilla y el equilibrio."
              href="/espanol/semana5/dia5/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Ejercicio 4: Expansión de la costilla de gancho con marcha"
              description="Refuerza el control del core y la respiración con marcha."
              href="/espanol/semana5/dia5/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Ejercicio 5: Balanceo pélvico supino con control de la respiración"
              description="Mejora la movilidad pélvica y la conciencia guiada por la respiración."
              href="/espanol/semana5/dia5/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}