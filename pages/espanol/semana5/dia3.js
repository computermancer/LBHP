import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
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
            <EspDrillCard
              number="1"
              title="Staggered Stance RDL con Conciencia de la Cadera"
              description="Mejora la fuerza de la cadena posterior y el control de una sola pierna."
              href="/espanol/semana5/dia3/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Estocadas Hacia Delante con Control de Costillas"
              description="Desarrolla fuerza y estabilidad en patrones de zancada hacia adelante."
              href="/espanol/semana5/dia3/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Press de Pared de Isquiotibiales con Estabilidad Costal"
              description="Estimula los isquiotibiales y refuerza el control del tronco."
              href="/espanol/semana5/dia3/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Puente Bilateral de Glúteos con Control de Costillas y Pelvis"
              description="Refuerza la extensión de la cadera y la estabilidad del tronco."
              href="/espanol/semana5/dia3/ejercicio4"
            />
            
            <EspDrillCard
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