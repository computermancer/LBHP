import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Dia3() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 2 - Día 3"
        subtitle="Integración de Movimiento y Control"
        prevDay="/espanol/semana2/dia2"
        currentWeek="/espanol/semana2"
        nextDay="/espanol/semana2/dia4"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Enganchar los relojes pélvicos"
              description="Coordinar la respiración con el movimiento de los brazos."
              href="/espanol/semana2/dia3/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Reposición supina del diafragma con alcance"
              description="Mejorar el control rotacional en posición vertical."
              href="/espanol/semana2/dia3/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Rotación de la columna sentado con respiración"
              description="Integrar el movimiento de brazos con la bisagra de cadera."
              href="/espanol/semana2/dia3/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Abducción de cadera en decúbito lateral con apoyo"
              description="Mantener la estabilidad durante el movimiento de brazos."
              href="/espanol/semana2/dia3/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Sentadilla profunda apoyada en la pared"
              description="Integrar la rotación con el movimiento de paso."
              href="/espanol/semana2/dia3/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}