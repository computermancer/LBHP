import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

export default function Ejercicio1Movimientosdecaderaendecbitosupinoconcontroldecostillas() {
  return (
    <EspDrillBarTemplate
      title="Ejercicio 1: Movimientos de Cadera en Decúbito Supino con Control de Costillas"      backButtonText="Semana 3 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[" Túmbate boca arriba con las rodillas flexionadas y los pies planos."," Brazos apoyados a los lados."]}
      instructions={[" Exhale y mueva una cadera ligeramente más alta que la otra."," Inhala y vuelve a la posición neutra."," Cambia de lado y repite con control."," Conjuntos: 2-3","Repeticiones: 8-10 por lado"," Respirar: Exhala para cambiar, inhala para volver","Descanso: Según sea necesario"]}
      setsReps={[]}
      whatToFeel={[" Sutil movimiento de cadera con estabilidad costal."," Cambios suaves y controlados."]}
      whatToAvoid={[" Perder el control de la caja torácica y la pelvis."]}
      redFlags={[" Dolor o molestias en las caderas o la columna vertebral."]}
      regression={[" Realice turnos más pequeños para mejorar el control."]}
    >
      <EspDrillNavBar 
        prevDrill="/espanol/semana3/dia3/ejercicio5" 
        currentDay="/espanol/semana3/dia4" 
        nextDrill="/espanol/semana3/dia4/ejercicio2" 
        disablePrevious={false}
        disableNext={false}
      />
    </EspDrillBarTemplate>
  );
}
