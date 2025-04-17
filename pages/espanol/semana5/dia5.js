import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
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
            <EspDrillCard
              number="1"
              title="Postura del Caballo con Control de Las Costillas"
              description="Refuerza la resistencia isométrica de la parte inferior del cuerpo."
              href="/espanol/semana5/dia5/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Elevaciones de Pantorrilla con Control de Costillas"
              description="Fortifica las pantorrillas mientras mantienes una alineación neutral."
              href="/espanol/semana5/dia5/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Subida de Tiburón con Respiración Consciente"
              description="Desarrollar la fuerza y el equilibrio de la tibia anterior."
              href="/espanol/semana5/dia5/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Expansión de Las Costillas con Marcha"
              description="Refuerza el control del core y la respiración con marcha."
              href="/espanol/semana5/dia5/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Balanceo Pélvico Supino"
              description="Mejora la movilidad pélvica y la conciencia guiada por la respiración."
              href="/espanol/semana5/dia5/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}