import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
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
            <EspDrillCard
              number="1"
              title="Movimientos de Cadera en Decúbito Supino"
              description="Control de los desplazamientos pélvicos."
              href="/espanol/semana3/dia4/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Flexión y Extensión Torácica Sentado"
              description="Mejora la movilidad de la columna torácica y el control postural."
              href="/espanol/semana3/dia4/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Alcance de Brazos y Piernas Cuadrúpedos con Mando"
              description="Estabilidad del tronco y los hombros."
              href="/espanol/semana3/dia4/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Press de Pared de Isquiotibiales con Conciencia de Cadera"
              description="Reforzar la activación de los isquiotibiales y el control de la pelvis."
              href="/espanol/semana3/dia4/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Abducción Lateral de Cadera con Apoyo"
              description="Desarrollar la fuerza y la estabilidad lateral de la cadera."
              href="/espanol/semana3/dia4/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}