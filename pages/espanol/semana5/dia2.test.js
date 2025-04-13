import MainEspNavbar from '../../../components/MainEspNavbar';
import EspDayLayout from '../../../components/EspDayLayout';
import DrillCard from '../../../components/DrillCard';
import Link from 'next/link';

export default function Day() {
  return (
    <>
      <MainEspNavbar />
      <EspDayLayout
        title="Semana 5 - Día 2"
        subtitle="Control de Pierna Única y Cadera"
        prevDay="/espanol/semana5/dia1"
        currentWeek="/espanol/semana5"
        nextDay="/espanol/semana5/dia3"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <DrillCard
              number="1"
              title="Sentadillas en Postura Escalonada con Estabilidad Costal"
              description="Desarrolla la carga en una sola pierna y el control pélvico."
              href="/espanol/semana5/dia2.js/ejercicio1"
            />
            <DrillCard
              number="2"
              title="Zancadas Laterales con Control Respiratorio"
              description="Mejora el control lateral de cadera y la estabilidad costal."
              href="/espanol/semana5/dia2.js/ejercicio2"
            />
            <DrillCard
              number="3"
              title="Abducción de Cadera en Decúbito Lateral con Enfoque Respiratorio"
              description="Desarrolla la fuerza lateral de cadera con control respiratorio."
              href="/espanol/semana5/dia2.js/ejercicio3"
            />
            <DrillCard
              number="4"
              title="Puente de Glúteos con Una Pierna y Estabilidad Costal"
              description="Desarrolla la fuerza de la cadena posterior y el control de cadera."
              href="/espanol/semana5/dia2.js/ejercicio4"
            />
            <DrillCard
              number="5"
              title="Desplazamiento Costal en Decúbito Supino con Activación Core"
              description="Desarrolla el control del core con desplazamiento sutil de costillas."
              href="/espanol/semana5/dia2.js/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}