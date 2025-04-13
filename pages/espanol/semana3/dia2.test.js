import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
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
              title="Expansión Costal Sentado con Control Respiratorio"
              description="Promueve la movilidad de la caja torácica y la expansión lateral de la respiración."
              href="/espanol/semana3/dia2.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Marcha en Decúbito Supino con Control del Core"
              description="Refuerza la estabilidad pélvica mientras mueves las piernas."
              href="/espanol/semana3/dia2.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Rotación Torácica Sentado con Alcance de Brazo"
              description="Desarrolla el control y la movilidad rotacional."
              href="/espanol/semana3/dia2.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Marcha de Isquiotibiales en Pared con Control Costal"
              description="Activa la cadena posterior mientras mantienes la estabilidad costal."
              href="/espanol/semana3/dia2.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Ejercicio de Rotación Interna y Extensión de Cadera en Decúbito Prono"
              description="Desarrolla conciencia de la rotación de cadera y la extensión de cadera."
              href="/espanol/semana3/dia2.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}