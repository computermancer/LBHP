import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Dia2() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 3 - Día 2"
        subtitle="Coordinación de Costillas y Cadera"
        prevDay="/espanol/semana3/dia1"
        currentWeek="/espanol/semana3"
        nextDay="/espanol/semana3/dia3"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Expansión de Costillas Sentado"
              description="Favorece la movilidad de la caja torácica y la expansión lateral de la respiración."
              href="/espanol/semana3/dia2/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Marcha Supina con Control del Tronco"
              description="Refuerza la estabilidad pélvica mientras mueves las piernas."
              href="/espanol/semana3/dia2/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Rotación Torácica Sentado con Extensión de Brazos"
              description="Desarrollar el control rotacional y la movilidad."
              href="/espanol/semana3/dia2/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Marcha de Isquiotibiales de Pared"
              description="Activar la cadena posterior manteniendo la estabilidad costal."
              href="/espanol/semana3/dia2/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="IR y Extensión de Cadera en Decúbito Prono"
              description="Tomar conciencia de la rotación y extensión de la cadera."
              href="/espanol/semana3/dia2/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}