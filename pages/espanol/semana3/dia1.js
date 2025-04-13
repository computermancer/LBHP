import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Dia1() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 3 - Día 1"
        subtitle="Control Pélvico e Integración Respiratoria"
        prevDay="/espanol/semana2/dia5"
        currentWeek="/espanol/semana3"
        nextDay="/espanol/semana3/dia2"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Respiración de enganche con conciencia pélvica"
              description="Mejora el control respiratorio y establece conciencia del movimiento pélvico."
              href="/espanol/semana3/dia1/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Desplazamiento de cadera sentado con estabilidad costal"
              description="Desarrolla el control del desplazamiento de cadera con movimiento mínimo de la caja torácica."
              href="/espanol/semana3/dia1/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Reposición supina del diafragma con alcance"
              description="Refuerza el control de la caja torácica durante los ciclos respiratorios."
              href="/espanol/semana3/dia1/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Rock Back cuadrúpedo con concentración en la respiración"
              description="Mejora la movilidad pélvica y mantiene la estabilidad del core."
              href="/espanol/semana3/dia1/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Bisagra apoyada en la pared con alcance del brazo"
              description="Desarrolla la activación de la cadena posterior mientras mantiene el control costal."
              href="/espanol/semana3/dia1/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}