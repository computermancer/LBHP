import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Movimientosdecaderaendecbitosupino() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Movimientos de Cadera en Decúbito Supino"      backButtonText="Semana 4 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies planos."," Brazos apoyados a los lados."]}
      instructions={[" Exhale y mueva una cadera ligeramente más alta que la otra."," Inhala y vuelve a la posición neutra."," Cambia de lado y repite con control."]}
      setsReps={["Conjuntos: 2-3","Repeticiones: 8-10 por lado","Respirar: Exhala para cambiar, inhala para volver","Descanso: Según sea necesario"]}
      whatToFeel={[" Sutil movimiento de cadera con estabilidad costal."," Cambios suaves y controlados."]}
      whatToAvoid={[" Perder el control de la caja torácica y la pelvis."]}
      redFlags={[" Dolor o molestias en las caderas o la columna vertebral."]}
      regression={[" Realice turnos más pequeños para mejorar el control."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana4/dia3/ejercicio5" 
        currentDay="/espanol/semana4/dia4" 
        nextDrill="/espanol/semana4/dia4/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
