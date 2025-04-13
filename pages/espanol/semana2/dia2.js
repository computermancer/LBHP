import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Dia2() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 2 - Día 2"
        subtitle="Control Rotacional y Estabilidad"
        prevDay="/espanol/semana2/dia1"
        currentWeek="/espanol/semana2"
        nextDay="/espanol/semana2/dia3"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Alcance cuadrúpedo con control de costillas"
              description="Mejorar la movilidad y control de la rotación torácica."
              href="/espanol/semana2/dia2/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Bisagra de cadera sentada con respiración"
              description="Desarrollar estabilidad pélvica durante el movimiento."
              href="/espanol/semana2/dia2/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Desplazamiento posterior del peso de pie"
              description="Mejorar el control rotacional y la estabilidad de la cadera."
              href="/espanol/semana2/dia2/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Marcha de isquiotibiales de pared"
              description="Reforzar la estabilidad del core durante la rotación."
              href="/espanol/semana2/dia2/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Ejercicio de IR y extensión de cadera en decúbito prono"
              description="Integrar la rotación con el movimiento de bisagra de cadera."
              href="/espanol/semana2/dia2/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}