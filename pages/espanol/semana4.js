import WeekLayout from '../../components/WeekLayout';
import MainEspNavBar from '../../components/MainEspNavBar';
import DayButtonsEsp from '../../components/DayButtonsEsp';
import Card from '../../components/Card';

export default function Semana4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavBar />
      <WeekLayout
        title="Semana 4"
        subtitle="Estabilidad Costal y Pélvica en Movimiento"
      >
        <DayButtonsEsp weekPath="/espanol/semana4" />

        <div className="h-6"></div>

        <Card title="Propósito de Esta Semana">
          <ul className="list-disc pl-5 text-lg">
            <li>Integrar patrones de movimiento dinámicos con control de la respiración y las costillas.</li>
            <li>Reforzar la fuerza y la estabilidad durante movimientos más complejos.</li>
            <li>Desarrollar la confianza en los patrones avanzados de bisagra y sentadilla.</li>
            <li>Prepara el cuerpo para movimientos de carga más progresivos en futuros programas.</li>
          </ul>
        </Card>

        <Card title="Objetivos para la 4ª semana">
          <ul className="list-disc pl-5 text-lg">
            <li>Mejora la eficacia del movimiento combinando la respiración y el control del núcleo.</li>
            <li>Mejorar el control de las posiciones de la pelvis y la caja torácica durante los movimientos con carga.</li>
            <li>Desarrollar la fuerza en los patrones de bisagra, sentadilla y rotación.</li>
            <li>Aumentar la conciencia del equilibrio, la estabilidad y el control en condiciones dinámicas.</li>
          </ul>
        </Card>

        <Card title="Consejos para el éxito">
          <ul className="list-disc pl-5 text-lg">
            <li>Mantenga una respiración constante mientras realiza movimientos más complejos.</li>
            <li>Concéntrese en transiciones suaves y controladas entre posiciones.</li>
            <li>Utiliza la respiración para estabilizar la caja torácica y la pelvis en cada movimiento.</li>
            <li>Ten cuidado con la fatiga: la calidad del movimiento es más importante que la cantidad.</li>
          </ul>
        </Card>
      </WeekLayout>
    </div>
  );
}
