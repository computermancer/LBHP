import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Dia3() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 5 - Día 3"
        subtitle="Cadena Posterior y Control de Cadera"
        prevDay="/espanol/semana5/dia2"
        currentWeek="/espanol/semana5"
        nextDay="/espanol/semana5/dia4"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Ejercicio 1: Staggered Stance RDL con conciencia de cadera"
              description="Mejora la fuerza de la cadena posterior y el control de una sola pierna."
              href="/espanol/semana5/dia3/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Ejercicio 2: Estocadas hacia delante con control de costillas"
              description="Desarrolla fuerza y estabilidad en patrones de zancada hacia adelante."
              href="/espanol/semana5/dia3/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Ejercicio 3: Press de pared de isquiotibiales con estabilidad costal"
              description="Activa los isquiotibiales y refuerza el control del core."
              href="/espanol/semana5/dia3/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Ejercicio 4: Puente bilateral de glúteos con control de costillas y pelvis"
              description="Refuerza la extensión de cadera y la estabilidad del core."
              href="/espanol/semana5/dia3/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Ejercicio 5: Torsión de columna supina con respiración"
              description="Mejora la rotación torácica con respiración controlada."
              href="/espanol/semana5/dia3/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}