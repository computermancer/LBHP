import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Dia4() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 3 - Día 4"
        subtitle="Estabilidad de Cadera y Caja Torácica"
        prevDay="/espanol/semana3/dia3"
        currentWeek="/espanol/semana3"
        nextDay="/espanol/semana3/dia5"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Movimientos de cadera en decúbito supino con control de costillas"
              description="Desarrolla el control de los desplazamientos pélvicos mientras mantienes la estabilidad costal."
              href="/espanol/semana3/dia4/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Flexión y extensión torácica sentado"
              description="Mejora la movilidad de la columna torácica y el control postural."
              href="/espanol/semana3/dia4/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="Alcance de brazos y piernas cuadrúpedos con control"
              description="Desarrolla la estabilidad del core y los hombros mientras mantienes la columna neutral."
              href="/espanol/semana3/dia4/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Press de pared de isquiotibiales con conciencia de cadera"
              description="Refuerza la activación de los isquiotibiales y el control pélvico."
              href="/espanol/semana3/dia4/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Abducción de cadera en decúbito lateral con apoyo"
              description="Desarrolla la fuerza y estabilidad lateral de la cadera."
              href="/espanol/semana3/dia4/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}