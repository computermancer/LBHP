import WeekLayout from '../../components/WeekLayout';
import MainEspNavbar from '../../components/MainEspNavbar';
import DayButtonsEsp from '../../components/DayButtonsEsp';
import Card from '../../components/Card';

export default function Semana3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavbar />
      <WeekLayout
        title="Semana 3"
        subtitle="Control Pélvico e Integración Respiratoria"
      >
        <DayButtonsEsp weekPath="/espanol/semana3" />

        <div className="h-6"></div>

        <Card title="Propósito de Esta Semana">
          <ul className="list-disc pl-5 text-lg">
            <li>Reforzar la coordinación pélvica y costal durante movimientos más dinámicos.</li>
            <li>Continuar desarrollando el control en la bisagra de cadera y la movilidad espinal.</li>
            <li>Introducir patrones rotacionales adicionales para la movilidad torácica.</li>
            <li>Mejorar la conciencia respiratoria para apoyar la estabilidad y el control.</li>
          </ul>
        </Card>

        <Card title="Objetivos para la Semana 3">
          <ul className="list-disc pl-5 text-lg">
            <li>Construir confianza en movimientos más profundos de cadera y flexión/extensión espinal.</li>
            <li>Mejorar la fuerza y movilidad rotacional a través de la integración torácica y lumbar.</li>
            <li>Desarrollar un mayor control de la respiración mientras se realizan movimientos dinámicos.</li>
            <li>Refinar la conciencia de la postura y alineación en diferentes posiciones.</li>
          </ul>
        </Card>

        <Card title="Consejos para el Éxito">
          <ul className="list-disc pl-5 text-lg">
            <li>Concéntrate en mantener una pelvis y caja torácica estables durante cada movimiento.</li>
            <li>Muévete con control—prioriza la calidad sobre la cantidad.</li>
            <li>Continúa usando la respiración como guía para mejorar la eficiencia del movimiento.</li>
            <li>Monitorea cualquier asimetría entre los lados y ajusta según sea necesario.</li>
          </ul>
        </Card>
      </WeekLayout>
    </div>
  );
}
