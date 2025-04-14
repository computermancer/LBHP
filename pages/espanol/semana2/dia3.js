import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
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
            <EspDrillCard
              number="1"
              title="Relojes Pélvicos Hooklying"
              description="Desarrollar una conciencia y un control sutiles de la inclinación pélvica."
              href="/espanol/semana2/dia3/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Reposición Supina del Diafragma con Alcance"
              description="Perfecciona el control de la respiración con un alcance activo de la parte superior del cuerpo."
              href="/espanol/semana2/dia3/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Rotación de la Columna Sentado con Respiración"
              description="Aumentar la rotación torácica controlando la respiración."
              href="/espanol/semana2/dia3/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Abducción Lateral de Cadera con Apoyo"
              description="Mejorar la fuerza lateral de la cadera y la estabilidad pélvica."
              href="/espanol/semana2/dia3/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Sentadilla Profunda Apoyada en la Pared"
              description="Aumenta la confianza en la posición de sentadilla profunda manteniendo el control."
              href="/espanol/semana2/dia3/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}