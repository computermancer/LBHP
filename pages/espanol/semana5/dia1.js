import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Dia1() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 5 - Día 1"
        subtitle="Control y Fuerza de la Parte Inferior del Cuerpo"
        prevDay="/espanol/semana4/dia5"
        currentWeek="/espanol/semana5"
        nextDay="/espanol/semana5/dia2"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Sentadillas de Peso Corporal con Control de Costillas"
              description="Refuerza la mecánica de la sentadilla con estabilidad central."
              href="/espanol/semana5/dia1/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Postura de Caballo (paralela al Suelo)"
              description="Desarrolla fuerza isométrica y resistencia en la parte inferior del cuerpo."
              href="/espanol/semana5/dia1/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Kickstand Rdl con Control de Cadera"
              description="Mejora la cadena posterior y la estabilidad de cadera."
              href="/espanol/semana5/dia1/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Sentadilla Partida Apoyada en la Pared"
              description="Fortalece los glúteos, los cuádriceps y el tronco en una postura dividida."
              href="/espanol/semana5/dia1/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Marcha Supina con Control del Tronco"
              description="Refuerza la estabilidad pélvica durante el movimiento dinámico."
              href="/espanol/semana5/dia1/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}