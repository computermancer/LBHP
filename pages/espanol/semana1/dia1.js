import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Day1() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 1 - Día 1"
        subtitle="Trabajo Base y Conciencia"
        prevDay={null}
        currentWeek="/espanol/semana1"
        nextDay="/espanol/semana1/dia2"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Inclinación Pélvica Posterior en la Pared"
              description="Desarrollar la conciencia de la inclinación pélvica y el control lumbar."
              href="/espanol/semana1/dia1/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Respiración Ventral con Gancho"
              description="Mejorar el control de la respiración y la función diafragmática."
              href="/espanol/semana1/dia1/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Balanceo Pélvico Sentado"
              description="Aumentar la movilidad y la coordinación pélvicas."
              href="/espanol/semana1/dia1/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Alcance 90-90 Supino"
              description="Mejore la estabilidad central y mantenga la alineación costilla-pelvis."
              href="/espanol/semana1/dia1/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Press de Pared para Isquiotibiales"
              description="Active los isquiotibiales para estabilizar la pelvis y el tronco."
              href="/espanol/semana1/dia1/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}
