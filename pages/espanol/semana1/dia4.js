import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Day4() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 1 - Día 4"
        subtitle="Control Pélvico y Costal"
        prevDay="/espanol/semana1/dia3"
        currentWeek="/espanol/semana1"
        nextDay="/espanol/semana1/dia5"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Reposición Supina del Diafragma"
              description="Establecer un control diafragmático y una relajación más profundos."
              href="/espanol/semana1/dia4/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Balanceo Pélvico Posterior Sentado"
              description="Mejorar la conciencia de la posición pélvica."
              href="/espanol/semana1/dia4/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Extensión Torácica Sentado"
              description="Fortalecer la extensión torácica y la posición de las costillas."
              href="/espanol/semana1/dia4/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Cambio de Cadera en Decúbito Supino con Respiración"
              description="Desarrollar el control de los desplazamientos pélvicos y la integración del tronco."
              href="/espanol/semana1/dia4/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Respiración Sentada con Control de Costillas"
              description="Mantenga el control de la caja torácica y la pelvis con una respiración constante."
              href="/espanol/semana1/dia4/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}
