import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Dia2() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 5 - Día 2"
        subtitle="Control de Pierna Única y Cadera"
        prevDay="/espanol/semana5/dia1"
        currentWeek="/espanol/semana5"
        nextDay="/espanol/semana5/dia3"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Sentadillas Escalonadas"
              description="Desarrolla la carga en una sola pierna y el control pélvico."
              href="/espanol/semana5/dia2/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Estocadas Laterales con Control de la Respiración"
              description="Mejora el control lateral de cadera y la estabilidad costal."
              href="/espanol/semana5/dia2/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Abducción de Cadera en Decúbito Lateral"
              description="Desarrolla la fuerza lateral de la cadera controlando la respiración."
              href="/espanol/semana5/dia2/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Puente de Glúteos a Una Pierna con Estabilidad Costal"
              description="Desarrolla la fuerza de la cadena posterior y el control de cadera."
              href="/espanol/semana5/dia2/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Desplazamiento de Costillas en Decúbito Supino"
              description="Desarrolla el control del tronco con un sutil desplazamiento de las costillas."
              href="/espanol/semana5/dia2/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}