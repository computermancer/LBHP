import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Dia2() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 3 - Día 2"
        subtitle="Coordinación de Costillas y Cadera"
        prevDay="/espanol/semana3/dia1"
        currentWeek="/espanol/semana3"
        nextDay="/espanol/semana3/dia3"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Expansión costal sentado con control de la respiración"
              description="Promueve la movilidad de la caja torácica y la expansión lateral de la respiración."
              href="/espanol/semana3/dia2/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Marcha supina con control del tronco"
              description="Refuerza la estabilidad pélvica mientras mueves las piernas."
              href="/espanol/semana3/dia2/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Rotación torácica sentado con alcance de brazos"
              description="Desarrolla el control y la movilidad rotacional."
              href="/espanol/semana3/dia2/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Marcha de isquiotibiales en pared con control de costillas"
              description="Activa la cadena posterior mientras mantienes la estabilidad costal."
              href="/espanol/semana3/dia2/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Ejercicio de IR y extensión de cadera en decúbito prono"
              description="Desarrolla conciencia de la rotación de cadera y la extensión de cadera."
              href="/espanol/semana3/dia2/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}