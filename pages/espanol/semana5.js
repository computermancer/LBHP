import WeekLayout from '../../components/WeekLayout';
import MainEspNavbar from '../../components/MainEspNavbar';
import DayButtonsEsp from '../../components/DayButtonsEsp';
import Card from '../../components/Card';

export default function Semana5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavbar />
      <WeekLayout
        title="Semana 5"
        subtitle="Progresión de Fuerza y Control"
      >
        <DayButtonsEsp weekPath="/espanol/semana5" />

        <div className="h-6"></div>

        <Card title="Propósito de Esta Semana">
          <ul className="list-disc pl-5 text-lg">
            <li>Integrar trabajo de fuerza fundamental usando movimientos con peso corporal.</li>
            <li>Reforzar el equilibrio, control y estabilidad pélvica/costal durante posiciones más desafiantes.</li>
            <li>Preparar el cuerpo para tolerar futura progresión de carga.</li>
          </ul>
        </Card>

        <Card title="Objetivos para la Semana 5">
          <ul className="list-disc pl-5 text-lg">
            <li>Desarrollar fuerza y resistencia en posturas y zancadas de la parte inferior del cuerpo.</li>
            <li>Construir fuerza en la cadena posterior a través de variaciones de puente de glúteos.</li>
            <li>Introducir variaciones progresivas de empuje de la parte superior del cuerpo.</li>
            <li>Mejorar el equilibrio y control de una sola pierna a través de postura escalonada y zancadas.</li>
            <li>Reforzar la estabilidad costal y pélvica durante movimientos más complejos.</li>
          </ul>
        </Card>

        <Card title="Consejos para el Éxito">
          <ul className="list-disc pl-5 text-lg">
            <li>Concéntrate en el movimiento controlado sobre la velocidad.</li>
            <li>Mantén el control respiratorio y la estabilidad del core durante todo el ejercicio.</li>
            <li>Progresa gradualmente—escucha a tu cuerpo.</li>
            <li>Enfatiza la calidad del movimiento a medida que aumenta la intensidad.</li>
          </ul>
        </Card>
      </WeekLayout>
    </div>
  );
}
