import WeekLayout from '../../components/WeekLayout';
import MainEspNavbar from '../../components/MainEspNavbar';
import DayButtonsEsp from '../../components/DayButtonsEsp';
import Card from '../../components/Card';

export default function Week1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavbar />
      <WeekLayout
        title="Semana 1"
        subtitle="Conciencia y Activación"
      >
        <DayButtonsEsp weekPath="/espanol/semana1" />

        <div className="h-6"></div>

        <Card title="Propósito de Esta Semana">
          <ul className="list-disc pl-5 text-lg">
            <li>Introducir la conciencia de la pelvis, costillas y diafragma.</li>
            <li>Desarrollar control fundamental sobre la flexión y extensión lumbar.</li>
            <li>Aumentar la conciencia interoceptiva y mejorar el control de la respiración.</li>
            <li>Comenzar a construir confianza en el posicionamiento de la pelvis y la caja torácica.</li>
          </ul>
        </Card>

        <Card title="Objetivos para la Semana 1">
          <ul className="list-disc pl-5 text-lg">
            <li>Desarrollar conciencia de la inclinación pélvica posterior y anterior.</li>
            <li>Controlar los patrones de respiración mientras se mantiene la pelvis y las costillas neutrales.</li>
            <li>Mejorar el feedback sensorial a través de movimientos lentos y controlados.</li>
            <li>Establecer una base para sentadillas y bisagras seguras y sin dolor.</li>
          </ul>
        </Card>

        <Card title="Consejos para el Éxito">
          <ul className="list-disc pl-5 text-lg">
            <li>Muévete lenta y deliberadamente—calidad sobre cantidad.</li>
            <li>Concéntrate en la conciencia y el control de la respiración.</li>
            <li>Toma descansos si te sientes fatigado o pierdes el enfoque.</li>
            <li>Presta atención a cómo tu cuerpo responde a diferentes movimientos.</li>
          </ul>
        </Card>
      </WeekLayout>
    </div>
  );
}
