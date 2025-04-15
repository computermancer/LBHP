import WeekLayout from '../../components/WeekLayout';
import MainEspNavBar from '../../components/MainEspNavBar';
import DayButtonsEsp from '../../components/DayButtonsEsp';
import Card from '../../components/Card';

export default function Semana3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavBar />
      <WeekLayout
        title="Semana 3"
        subtitle="Control Pélvico e Integración de la Respiración"
      >
        <DayButtonsEsp weekPath="/espanol/semana3" />

        <div className="h-6"></div>

        <Card title="Propósito de Esta Semana">
          <ul className="list-disc pl-5 text-lg">
            <li>Reforzar la coordinación de la pelvis y la caja torácica durante los movimientos más dinámicos.</li>
            <li>Continuar desarrollando el control en la articulación de la cadera y la movilidad de la columna vertebral.</li>
            <li>Introducir más patrones de rotación para la movilidad torácica.</li>
            <li>Mejorar la conciencia de la respiración para favorecer la estabilidad y el control.</li>
          </ul>
        </Card>

        <Card title="Objetivos para la 3ª semana">
          <ul className="list-disc pl-5 text-lg">
            <li>Aumentar la confianza en los movimientos más profundos de la cadera y la flexión/extensión de la columna vertebral.</li>
            <li>Mejorar la fuerza de rotación y la movilidad mediante la integración torácica y lumbar.</li>
            <li>Desarrollar un mayor control de la respiración mientras se realizan movimientos dinámicos.</li>
            <li>Perfeccionar la conciencia de la postura y la alineación en diferentes posiciones.</li>
          </ul>
        </Card>

        <Card title="Consejos para el éxito">
          <ul className="list-disc pl-5 text-lg">
            <li>Concéntrate en mantener la pelvis y la caja torácica estables en cada movimiento.</li>
            <li>Muévase con control: priorice la calidad sobre la cantidad.</li>
            <li>Continúa utilizando la respiración como guía para mejorar la eficacia del movimiento.</li>
            <li>Vigile cualquier asimetría entre los lados y ajuste según sea necesario.</li>
          </ul>
        </Card>
      </WeekLayout>
    </div>
  );
}
