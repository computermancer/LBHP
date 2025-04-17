import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Dia2() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 4 - Día 2"
        subtitle="Estabilidad del Core y Pélvica en Acción"
        prevDay="/espanol/semana4/dia1"
        currentWeek="/espanol/semana4"
        nextDay="/espanol/semana4/dia3"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Flexión y Extensión Torácica Sentado"
              description="Mejorar la movilidad torácica manteniendo el control de la pelvis."
              href="/espanol/semana4/dia2/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Supino 90-90 Bajada de Piernas con Respiración"
              description="Refuerce el control del tronco mientras baja las piernas con estabilidad."
              href="/espanol/semana4/dia2/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Rotación de la Columna Sentado"
              description="Control rotacional y movilidad torácica."
              href="/espanol/semana4/dia2/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Marcha de Isquiotibiales en Pared"
              description="Control de la cadena posterior."
              href="/espanol/semana4/dia2/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="IR y Extensión de Cadera en Decúbito Prono"
              description="Conciencia de la rotación y extensión de la cadera."
              href="/espanol/semana4/dia2/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}