import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 1 - Día 4"
        subtitle="Control Pélvico y Costal"
        prevDay="/espanol/semana1/dia3"
        currentWeek="/espanol/semana1"
        nextDay="/espanol/semana1/dia5"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Reinicio Diafragmático en Posición Supina"
              description="Establecer un control diafragmático más profundo y relajación."
              href="/espanol/semana1/dia4.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Balanceo Pélvico Posterior Sentado"
              description="Mejorar la conciencia de la posición pélvica."
              href="/espanol/semana1/dia4.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Extensión Torácica Sentada"
              description="Fortalecer la extensión torácica y la posición costal."
              href="/espanol/semana1/dia4.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Desplazamiento de Cadera en Posición Supina con Respiración"
              description="Desarrollar control de los desplazamientos pélvicos e integración del core."
              href="/espanol/semana1/dia4.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Respiración Sentada con Control Costal"
              description="Mantener el control de la caja torácica y la pelvis con respiración constante."
              href="/espanol/semana1/dia4.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}