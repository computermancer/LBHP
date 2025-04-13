import WeekLayout from '../../components/WeekLayout';
import MainEspNavbar from '../../components/MainEspNavbar';
import DayButtonsEsp from '../../components/DayButtonsEsp';
import Card from '../../components/Card';

export default function Semana4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavbar />
      <WeekLayout
        title="Semana 4"
        subtitle="Estabilidad Costal y Pélvica en Movimiento"
      >
        <DayButtonsEsp weekPath="/espanol/semana4" />

        <div className="h-6"></div>

        <Card title="Propósito de Esta Semana">
          <ul className="list-disc pl-5 text-lg">
            <li>Integrar patrones de movimiento dinámico con el control respiratorio y costal.</li>
            <li>Reforzar la fuerza y estabilidad durante movimientos más complejos.</li>
            <li>Desarrollar confianza en patrones avanzados de bisagra y sentadilla.</li>
            <li>Preparar el cuerpo para movimientos más progresivos con carga en programas futuros.</li>
          </ul>
        </Card>

        <Card title="Objetivos para la Semana 4">
          <ul className="list-disc pl-5 text-lg">
            <li>Mejorar la eficiencia del movimiento combinando la respiración y el control del core.</li>
            <li>Mejorar el control de las posiciones pélvicas y costales durante movimientos con carga.</li>
            <li>Desarrollar fuerza en patrones de bisagra, sentadilla y rotación.</li>
            <li>Aumentar la conciencia del equilibrio, estabilidad y control bajo condiciones dinámicas.</li>
          </ul>
        </Card>

        <Card title="Consejos para el Éxito">
          <ul className="list-disc pl-5 text-lg">
            <li>Mantén una respiración constante mientras realizas movimientos más complejos.</li>
            <li>Concéntrate en transiciones suaves y controladas entre posiciones.</li>
            <li>Usa la respiración para estabilizar la caja torácica y la pelvis durante cada movimiento.</li>
            <li>Ten en cuenta la fatiga—la calidad del movimiento es más importante que la cantidad.</li>
          </ul>
        </Card>
      </WeekLayout>
    </div>
  );
}
