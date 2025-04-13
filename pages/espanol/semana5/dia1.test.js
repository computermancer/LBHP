import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 5 - Día 1"
        subtitle="Control y Fuerza de la Parte Inferior del Cuerpo"
        prevDay="null"
        currentWeek="/espanol/semana5"
        nextDay="/espanol/semana5/dia2"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Sentadillas con Peso Corporal y Control Costal"
              description="Refuerza la mecánica de la sentadilla con estabilidad del core."
              href="/espanol/semana5/dia1.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Mantenimiento de Postura de Caballo (Paralelo al Suelo)"
              description="Desarrolla fuerza isométrica y resistencia en la parte inferior del cuerpo."
              href="/espanol/semana5/dia1.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="RDL con Apoyo y Control de Cadera"
              description="Mejora la cadena posterior y la estabilidad de cadera."
              href="/espanol/semana5/dia1.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Mantenimiento de Sentadilla Dividida Apoyada en Pared"
              description="Fortalece glúteos, cuádriceps y core en posición dividida."
              href="/espanol/semana5/dia1.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Marcha en Decúbito Supino con Control del Core"
              description="Refuerza la estabilidad pélvica durante el movimiento dinámico."
              href="/espanol/semana5/dia1.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}