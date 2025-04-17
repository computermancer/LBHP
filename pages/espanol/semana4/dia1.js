import MainEspNavBar from '../../../components/MainEspNavBar';
import EspDayLayout from '../../../components/EspDayLayout';
import EspDrillCard from '../../../components/EspDrillCard';
import Link from 'next/link';

export default function Dia1() {
  return (
    <>
      <MainEspNavBar />
      <EspDayLayout
        title="Semana 4 - Día 1"
        subtitle="Estabilidad Costal y Pélvica en Movimiento"
        prevDay="/espanol/semana3/dia5"
        currentWeek="/espanol/semana4"
        nextDay="/espanol/semana4/dia2"
      >
        <div className="max-w-[500px] mx-auto">
          <div className="space-y-4">
            <EspDrillCard
              number="1"
              title="Desplazamiento Costal Supino"
              description="Control lateral de las costillas."
              href="/espanol/semana4/dia1/ejercicio1"
            />
            
            <EspDrillCard
              number="2"
              title="Movimientos de Cadera Sentado"
              description="Control pélvico y conciencia de cadera en posiciones sentadas."
              href="/espanol/semana4/dia1/ejercicio2"
            />
            
            <EspDrillCard
              number="3"
              title="Expansión de Las Costillas con Marcha"
              description="Estabilidad del tronco y las costillas."
              href="/espanol/semana4/dia1/ejercicio3"
            />
            
            <EspDrillCard
              number="4"
              title="Bisagra de Pared con Brazo Extensible"
              description="Fortalece la cadena posterior mientras mantienes el control de la caja torácica."
              href="/espanol/semana4/dia1/ejercicio4"
            />
            
            <EspDrillCard
              number="5"
              title="Balance Hacia Atrás en Cuadrúpedo"
              description="Movilidad pélvica controlando las costillas."
              href="/espanol/semana4/dia1/ejercicio5"
            />
          </div>
        </div>
      </EspDayLayout>
    </>
  );
}