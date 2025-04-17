import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Day2() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 1 - Día 2"
        subtitle="Expansión Costal y Enfoque en la queque de Cadera"
        prevDay="/espanol/semana1/dia1"
        currentWeek="/espanol/semana1"
        nextDay="/espanol/semana1/dia3"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Expansión Costal Lateral"
              description="Mejorar la expansión lateral de la caja torácica y la mecánica respiratoria."
              href="/espanol/semana1/dia2/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Rotación Torácica Sentado"
              description="Aumentar la movilidad torácica y el control rotacional."
              href="/espanol/semana1/dia2/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Bisagra de Cadera de Pie con Alcance de Pared"
              description="Desarrollar la conciencia y el control de la bisagra de la cadera."
              href="/espanol/semana1/dia2/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Balance Hacia Atrás en Cuadrúpedo"
              description="Fomentar el control pélvico con la columna vertebral neutra."
              href="/espanol/semana1/dia2/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Sentadilla en Pared"
              description="Aumenta la confianza en la posición en cuclillas con apoyo en la pared."
              href="/espanol/semana1/dia2/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}
