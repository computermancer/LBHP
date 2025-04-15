import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Dia1() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 2 - Día 1"
        subtitle="Expansión Costal y Control de Cadera"
        prevDay="/espanol/semana1/dia5"
        currentWeek="/espanol/semana2"
        nextDay="/espanol/semana2/dia2"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Expansión Costal Supina con Respiración"
              description="Aumentar la conciencia de la caja torácica y el control diafragmático."
              href="/espanol/semana2/dia1/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Cambios de Cadera con Gancho"
              description="Desarrollar el control y la conciencia de los patrones de desplazamiento de la cadera."
              href="/espanol/semana2/dia1/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Ir de Cadera Tumbado de Lado con Respiración"
              description="Mejorar la rotación interna de la cadera y la coordinación de la respiración."
              href="/espanol/semana2/dia1/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Bajada de Piernas 90-90 Supina"
              description="Refuerce la estabilidad central y la alineación costilla-pelvis."
              href="/espanol/semana2/dia1/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Prensa de Talón Apoyada en la Pared"
              description="Activar los isquiotibiales para estabilizar la pelvis y reforzar el control."
              href="/espanol/semana2/dia1/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}