import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Dia1() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 3 - Día 1"
        subtitle="Control Pélvico e Integración Respiratoria"
        prevDay="/espanol/semana2/dia5"
        currentWeek="/espanol/semana3"
        nextDay="/espanol/semana3/dia2"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Respiración con Gancho y Conciencia Pélvica"
              description="Mejorar el control de la respiración y tomar conciencia de los movimientos pélvicos."
              href="/espanol/semana3/dia1/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Desplazamiento de Cadera Sentado"
              description="Control del desplazamiento de cadera con movimiento mínimo de la caja torácica."
              href="/espanol/semana3/dia1/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Reposición Supina del Diafragma con Alcance"
              description="Refuerza el control de la caja torácica durante los ciclos respiratorios."
              href="/espanol/semana3/dia1/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Balance Hacia Atrás en Cuadrúpedo con Enfoque "
              description="Mejore la movilidad pélvica y mantenga la estabilidad central."
              href="/espanol/semana3/dia1/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Bisagra de Pared con Brazo Extensible"
              description="Activación de la cadena posterior mientras mantiene el control de las costillas."
              href="/espanol/semana3/dia1/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}