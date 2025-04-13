import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Dia1() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 5 - Día 1"
        subtitle="Control y Fuerza de la Parte Inferior del Cuerpo"
        prevDay="/espanol/semana4/dia5"
        currentWeek="/espanol/semana5"
        nextDay="/espanol/semana5/dia2"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Ejercicio 1: Sentadillas de peso corporal con control de costillas"
              description="Refuerza la mecánica de la sentadilla con estabilidad del core."
              href="/espanol/semana5/dia1/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Ejercicio 2: Postura de caballo (paralela al suelo)"
              description="Desarrolla fuerza isométrica y resistencia en la parte inferior del cuerpo."
              href="/espanol/semana5/dia1/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Ejercicio 3: Kickstand RDL con control de cadera"
              description="Mejora la cadena posterior y la estabilidad de cadera."
              href="/espanol/semana5/dia1/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Ejercicio 4: Sentadillas parciales con apoyo en la pared"
              description="Fortalece glúteos, cuádriceps y core en posición dividida."
              href="/espanol/semana5/dia1/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Ejercicio 5: Marcha supina con control del tronco"
              description="Refuerza la estabilidad pélvica durante el movimiento dinámico."
              href="/espanol/semana5/dia1/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}