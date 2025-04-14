import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Dia5() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 2 - Día 5"
        subtitle="Integración y Progresión"
        prevDay="/espanol/semana2/dia4"
        currentWeek="/espanol/semana2"
        nextDay="/espanol/semana3/dia1"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Respiración de Cocodrilo con Expansión Costal"
              description="Refuerce la expansión diafragmática completa de la respiración."
              href="/espanol/semana2/dia5/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Gato-vaca con Enfoque Rotacional"
              description="Mejorar la flexión/extensión de la columna vertebral e incorporar la rotación."
              href="/espanol/semana2/dia5/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Torsión de Columna Sentado con Extensión de Brazos"
              description="Aumentar el control rotacional y la movilidad escapular."
              href="/espanol/semana2/dia5/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Marcha Supina con Control Pélvico"
              description="Refuerza la coordinación costilla-pelvis y el control del tronco."
              href="/espanol/semana2/dia5/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Respiración Sentada con Cambios de Cadera"
              description="Aumentar la conciencia de los desplazamientos pélvicos manteniendo el control de la respiración."
              href="/espanol/semana2/dia5/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}