import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 5 - Día 5"
        subtitle="Movilidad, Respiración y Control"
        prevDay="/espanol/semana5/dia4"
        currentWeek="/espanol/semana5"
        nextDay="null"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Postura de Caballo con Control Costal (Mantenimiento Prolongado)"
              description="Refuerza la resistencia isométrica de la parte inferior del cuerpo."
              href="/espanol/semana5/dia5.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Elevación de Talones con Control Costal y Pélvico"
              description="Fortifica las pantorrillas mientras mantienes una alineación neutral."
              href="/espanol/semana5/dia5.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Elevación Tibial con Conciencia Respiratoria"
              description="Desarrolla la fuerza anterior de la espinilla y el equilibrio."
              href="/espanol/semana5/dia5.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Expansión Costal en Decúbito Supino con Marcha"
              description="Refuerza el control del core y la respiración con marcha."
              href="/espanol/semana5/dia5.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Balanceo Pélvico en Decúbito Supino con Control Respiratorio"
              description="Mejora la movilidad pélvica y la conciencia guiada por la respiración."
              href="/espanol/semana5/dia5.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}