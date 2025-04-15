import WeekLayout from '../../components/WeekLayout';
import MainEspNavBar from '../../components/MainEspNavBar';
import DayButtonsEsp from '../../components/DayButtonsEsp';
import Card from '../../components/Card';

export default function Semana5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavBar />
      <WeekLayout
        title="Semana 5"
        subtitle="Progresión de Fuerza y Control"
      >
        <DayButtonsEsp weekPath="/espanol/semana5" />

        <div className="h-6"></div>

        <Card title="Propósito de Esta Semana">
          <ul className="list-disc pl-5 text-lg">
            <li>Integrar el trabajo de fuerza fundamental utilizando movimientos de peso corporal.</li>
            <li>Refuerce el equilibrio, el control y la estabilidad de la pelvis y las costillas durante las posturas más difíciles.</li>
            <li>Preparar al organismo para tolerar la progresión de la carga en el futuro.</li>
          </ul>
        </Card>

        <Card title="Objetivos para la 5ª semana">
          <ul className="list-disc pl-5 text-lg">
            <li>Desarrollar la fuerza y la resistencia en las posturas y estocadas de la parte inferior del cuerpo.</li>
            <li>Fortalezca la cadena posterior mediante variaciones del puente de glúteos.</li>
            <li>Introducir variaciones progresivas de empuje de la parte superior del cuerpo.</li>
            <li>Mejore el equilibrio y el control de una sola pierna mediante posturas escalonadas y estocadas.</li>
            <li>Reforzar la estabilidad costal y pélvica durante movimientos más complejos.</li>
          </ul>
        </Card>

        <Card title="Consejos para el éxito">
          <ul className="list-disc pl-5 text-lg">
            <li>Centrarse en el movimiento controlado por encima de la velocidad.</li>
            <li>Mantenga el control de la respiración y la estabilidad del tronco durante todo el ejercicio.</li>
            <li>Progresa gradualmente: escucha a tu cuerpo.</li>
            <li>Haga hincapié en la calidad del movimiento a medida que aumenta la intensidad.</li>
          </ul>
        </Card>
      </WeekLayout>
    </div>
  );
}
