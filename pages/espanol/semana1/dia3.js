import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Day3() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 1 - Día 3"
        subtitle="Control Respiratorio y Movimiento Rítmico"
        prevDay="/espanol/semana1/dia2"
        currentWeek="/espanol/semana1"
        nextDay="/espanol/semana1/dia4"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Restablecimiento de la Respiración en Decúbito Lateral"
              description="Fomenta el restablecimiento de la caja torácica y el diafragma mediante la respiración concentrada."
              href="/espanol/semana1/dia3/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Alcanzar y Rodar Rítmicamente"
              description="Mejorar el control rotacional y la coordinación."
              href="/espanol/semana1/dia3/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Patrones de Respiración Asistida"
              description="Refuerza el control de la respiración y la conciencia de las costillas."
              href="/espanol/semana1/dia3/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Balanceo Relajado de la Columna Vertebral"
              description="Favorecer el movimiento fluido de la pelvis y la columna vertebral."
              href="/espanol/semana1/dia3/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Suave Balanceo Bilateral"
              description="Mejorar la movilidad pélvica y la relajación."
              href="/espanol/semana1/dia3/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}
