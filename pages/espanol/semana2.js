import WeekLayout from '../../components/WeekLayout';
import MainEspNavBar from '../../components/MainEspNavBar';
import DayButtonsEsp from '../../components/DayButtonsEsp';
import Card from '../../components/Card';

export default function Semana2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavBar />
      <WeekLayout
        title="Semana 2"
        subtitle="Control de Las Costillas e Integración de la Cadera"
      >
        <DayButtonsEsp weekPath="/espanol/semana2" />

        <div className="h-6"></div>

        <Card title="Propósito de Esta Semana">
          <ul className="list-disc pl-5 text-lg">
            <li>Aumentar el control de la pelvis y la caja torácica mediante posturas dinámicas.</li>
            <li>Introducir movimientos básicos de rotación y refinar la conexión costilla-pelvis.</li>
            <li>Desarrollar la comodidad con la articulación de la cadera y mejorar la extensión torácica.</li>
            <li>Reforzar el control de la respiración y la retroalimentación interoceptiva.</li>
          </ul>
        </Card>

        <Card title="Objetivos para la segunda semana">
          <ul className="list-disc pl-5 text-lg">
            <li>Afinar la conciencia de la alineación pélvica y torácica durante el movimiento.</li>
            <li>Mejorar el control rotacional a través de la columna torácica.</li>
            <li>Mejora la estabilidad y el control en posiciones de transición.</li>
            <li>Desarrollar una mejor coordinación entre la respiración y el movimiento.</li>
          </ul>
        </Card>

        <Card title="Consejos para el éxito">
          <ul className="list-disc pl-5 text-lg">
            <li>Concéntrese en mantener la pelvis neutra y la alineación de las costillas durante el movimiento.</li>
            <li>Muévase deliberadamente y evite las prisas en los ejercicios.</li>
            <li>Preste atención a las asimetrías entre los lados.</li>
            <li>Dar prioridad al control de la respiración y a la coordinación de los tiempos.</li>
          </ul>
        </Card>
      </WeekLayout>
    </div>
  );
}
