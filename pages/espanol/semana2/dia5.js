import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Dia5() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 2 - Día 5"
        subtitle="Integración y Progresión"
        prevDay="/espanol/semana2/dia4"
        currentWeek="/espanol/semana2"
        nextDay="/espanol/semana3/dia1"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Respiración de cocodrilo con expansión costal"
              description="Coordinar la respiración con movimientos integrados."
              href="/espanol/semana2/dia5/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Gato-vaca con enfoque rotacional"
              description="Integrar la rotación con la bisagra de cadera."
              href="/espanol/semana2/dia5/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Torsión de columna sentado con extensión de brazos"
              description="Coordinar el movimiento de extremidades."
              href="/espanol/semana2/dia5/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Marcha supina con control pélvico"
              description="Mantener la estabilidad durante movimientos complejos."
              href="/espanol/semana2/dia5/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Respiración sentada con desplazamiento de cadera"
              description="Combinar todos los elementos aprendidos."
              href="/espanol/semana2/dia5/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}