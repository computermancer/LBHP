import WeekLayout from '../../components/WeekLayout';
import MainEspNavbar from '../../components/MainEspNavbar';
import DayButtonsEsp from '../../components/DayButtonsEsp';
import Card from '../../components/Card';

export default function Semana2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavbar />
      <WeekLayout
        title="Semana 2"
        subtitle="Control Costal e Integración de Cadera"
      >
        <DayButtonsEsp weekPath="/espanol/semana2" />

        <div className="h-6"></div>

        <Card title="Propósito de Esta Semana">
          <ul className="list-disc pl-5 text-lg">
            <li>Aumentar el control pélvico y costal a través de posiciones dinámicas.</li>
            <li>Introducir movimientos rotacionales básicos y refinar la conexión costilla-pelvis.</li>
            <li>Desarrollar comodidad con la bisagra de cadera y mejorar la extensión torácica.</li>
            <li>Reforzar el control de la respiración y el feedback interoceptivo.</li>
          </ul>
        </Card>

        <Card title="Objetivos para la Semana 2">
          <ul className="list-disc pl-5 text-lg">
            <li>Refinar la conciencia de la alineación pélvica y torácica durante el movimiento.</li>
            <li>Mejorar el control rotacional a través de la columna torácica.</li>
            <li>Mejorar la estabilidad y el control en posiciones transicionales.</li>
            <li>Desarrollar una mejor coordinación entre la respiración y el movimiento.</li>
          </ul>
        </Card>

        <Card title="Consejos para el Éxito">
          <ul className="list-disc pl-5 text-lg">
            <li>Concéntrate en mantener la pelvis y las costillas neutrales durante el movimiento.</li>
            <li>Muévete deliberadamente y evita apresurarte en los ejercicios.</li>
            <li>Presta atención a cualquier asimetría entre los lados.</li>
            <li>Prioriza el control de la respiración y la coordinación del tiempo.</li>
          </ul>
        </Card>
      </WeekLayout>
    </div>
  );
}
