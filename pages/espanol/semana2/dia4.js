import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
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
            <EspDrillCard
              number="1"
              title="Desplazamiento de Costillas en Decúbito Supino con Respiración"
              description="Mejorar la conciencia de la caja torácica y el control de la respiración asimétrica."
              href="/espanol/semana2/dia4/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Balanceo Pélvico Posterior Sentado"
              description="Mantener la conciencia pélvica y mejorar el ritmo pélvico."
              href="/espanol/semana2/dia4/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Flexión/extensión Torácica Sentado"
              description="Desarrollar la conciencia de la flexión y extensión de la columna vertebral."
              href="/espanol/semana2/dia4/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Movimientos de Cadera en Decúbito Supino con Estabilidad Costal"
              description="Desarrolla la estabilidad del tronco y la cadera mediante patrones de cambio."
              href="/espanol/semana2/dia4/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Respiración Sentada con Conciencia Pélvica"
              description="Reforzar la respiración y el control de la posición pélvica."
              href="/espanol/semana2/dia4/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}