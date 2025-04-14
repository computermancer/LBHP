import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Dia4() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 4 - Día 4"
        subtitle="Control de Cadera y Costillas bajo Carga"
        prevDay="/espanol/semana4/dia3"
        currentWeek="/espanol/semana4"
        nextDay="/espanol/semana4/dia5"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Movimientos de Cadera en Decúbito Supino con Conciencia de Las Costillas"
              description="Desarrollar la movilidad lateral de la cadera manteniendo la estabilidad de las costillas."
              href="/espanol/semana4/dia4/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Alcance de Brazos y Piernas Cuadrúpedos con Mando"
              description="Mejora el equilibrio y la estabilidad con movimientos controlados."
              href="/espanol/semana4/dia4/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Press de Pared de Isquiotibiales con Concentración en la Respiración"
              description="Refuerce el compromiso de los isquiotibiales y el control del tronco."
              href="/espanol/semana4/dia4/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Abducción Lateral de Cadera con Apoyo"
              description="Desarrolla la fuerza y estabilidad lateral de cadera."
              href="/espanol/semana4/dia4/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Torsión de Columna Sentado con Extensión de Brazos"
              description="Desarrollar la rotación y el control torácicos."
              href="/espanol/semana4/dia4/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}