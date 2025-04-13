import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 3 - Día 1"
        subtitle="Control Pélvico e Integración Respiratoria"
        prevDay="null"
        currentWeek="/espanol/semana3"
        nextDay="/espanol/semana3/dia2"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Respiración en Decúbito Supino con Conciencia Pélvica"
              description="Mejora el control respiratorio y establece conciencia del movimiento pélvico."
              href="/espanol/semana3/dia1.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Desplazamiento de Cadera Sentado con Estabilidad Costal"
              description="Desarrolla el control del desplazamiento de cadera con movimiento mínimo de la caja torácica."
              href="/espanol/semana3/dia1.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Reinicio del Diafragma en Decúbito Supino con Alcance"
              description="Refuerza el control de la caja torácica durante los ciclos respiratorios."
              href="/espanol/semana3/dia1.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Balanceo Hacia Atrás en Posición Cuadrúpeda con Enfoque Respiratorio"
              description="Mejora la movilidad pélvica y mantiene la estabilidad del core."
              href="/espanol/semana3/dia1.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Bisagra de Cadera con Apoyo en Pared y Alcance de Brazo"
              description="Desarrolla la activación de la cadena posterior mientras mantiene el control costal."
              href="/espanol/semana3/dia1.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}