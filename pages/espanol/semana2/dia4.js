import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Dia4() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 2 - Día 4"
        subtitle="Estabilidad y Control Dinámico"
        prevDay="/espanol/semana2/dia3"
        currentWeek="/espanol/semana2"
        nextDay="/espanol/semana2/dia5"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Desplazamiento de costillas en decúbito supino con respiración"
              description="Coordinar la respiración con el movimiento de las piernas."
              href="/espanol/semana2/dia4/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Balanceo pélvico posterior sentado"
              description="Mejorar el control rotacional en posición vertical."
              href="/espanol/semana2/dia4/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Flexión/Extensión torácica sentado"
              description="Integrar el movimiento de piernas con la bisagra de cadera."
              href="/espanol/semana2/dia4/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Flexiones de cadera en decúbito supino con estabilidad costal"
              description="Mantener la estabilidad durante el movimiento de piernas."
              href="/espanol/semana2/dia4/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Respiración sentada con conciencia pélvica"
              description="Integrar la rotación con el movimiento de paso adelante."
              href="/espanol/semana2/dia4/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}