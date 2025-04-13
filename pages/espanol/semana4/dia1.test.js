import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 4 - Día 1"
        subtitle="Estabilidad Costal y Pélvica en Movimiento"
        prevDay="null"
        currentWeek="/espanol/semana4"
        nextDay="/espanol/semana4/dia2"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Desplazamiento Costal en Decúbito Supino con Control Respiratorio"
              description="Desarrolla el control lateral de las costillas mientras mantienes la estabilidad pélvica."
              href="/espanol/semana4/dia1.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Desplazamientos de Cadera Sentado con Conciencia Respiratoria"
              description="Refuerza el control pélvico y la conciencia de cadera en posiciones sentadas."
              href="/espanol/semana4/dia1.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Expansión Costal en Decúbito Supino con Marcha"
              description="Desarrolla la estabilidad del core y las costillas mientras agregas movimiento dinámico."
              href="/espanol/semana4/dia1.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Bisagra Apoyada en Pared con Alcance de Brazo"
              description="Fortalece la cadena posterior mientras mantienes el control de la caja torácica."
              href="/espanol/semana4/dia1.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Balanceo Hacia Atrás en Cuatro Puntos con Enfoque en Alcance"
              description="Mejora la movilidad pélvica con control costal y conciencia respiratoria."
              href="/espanol/semana4/dia1.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}