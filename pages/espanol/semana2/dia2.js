import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Dia2() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 2 - Día 2"
        subtitle="Control Rotacional y Estabilidad"
        prevDay="/espanol/semana2/dia1"
        currentWeek="/espanol/semana2"
        nextDay="/espanol/semana2/dia3"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Alcance Cuadrúpedo con Control de Costillas"
              description="Desarrollar la rotación torácica con un control estable de la caja torácica."
              href="/espanol/semana2/dia2/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Bisagra de Cadera Sentada con Respiración"
              description="Mejorar el patrón de articulación y mantener el control del núcleo."
              href="/espanol/semana2/dia2/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Desplazamiento posterior del peso de pie"
              description="Desarrollar el desplazamiento posterior del peso para control de la cadera."
              href="/espanol/semana2/dia2/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Marcha de Isquiotibiales de Pared"
              description="Reforzar la activación de la cadena posterior y el control pélvico."
              href="/espanol/semana2/dia2/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="IR y Extensión de Cadera en Decúbito Prono"
              description="Tomar conciencia de la rotación y extensión de la cadera."
              href="/espanol/semana2/dia2/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}