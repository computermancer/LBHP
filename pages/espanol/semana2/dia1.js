import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Dia1() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 2 - Día 1"
        subtitle="Expansión Costal y Control de Cadera"
        prevDay="/espanol/semana1/dia5"
        currentWeek="/espanol/semana2"
        nextDay="/espanol/semana2/dia2"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Expansión Costal Supina con Respiración"
              description="Aumentar la conciencia de la caja torácica y el control diafragmático."
              href="/espanol/semana2/dia1/ejercicio1"
            />
            
            <DrillCard
              number="2"
              title="Cambios de Cadera con Gancho"
              description="Desarrollar control y conciencia de los patrones de desplazamiento de cadera."
              href="/espanol/semana2/dia1/ejercicio2"
            />
            
            <DrillCard
              number="3"
              title="IR de Cadera en Decúbito Lateral con Respiración"
              description="Mejorar la rotación interna de cadera y la coordinación respiratoria."
              href="/espanol/semana2/dia1/ejercicio3"
            />
            
            <DrillCard
              number="4"
              title="Descenso de Piernas 90-90 en Decúbito Supino"
              description="Reforzar la estabilidad del core y la alineación costilla-pelvis."
              href="/espanol/semana2/dia1/ejercicio4"
            />
            
            <DrillCard
              number="5"
              title="Press de Talón Apoyado en la Pared"
              description="Activar los isquiotibiales para estabilizar la pelvis y reforzar el control."
              href="/espanol/semana2/dia1/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}