import WeekLayout from '../../components/WeekLayout';
import MainEspNavBar from '../../components/MainEspNavBar';
import DayButtonsEsp from '../../components/DayButtonsEsp';
import Card from '../../components/Card';

export default function Week1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavBar />
      <WeekLayout
        title="Semana 1"
        subtitle="Sensibilización y Activación"
      >
        <DayButtonsEsp weekPath="/espanol/semana1" />

        <div className="h-6"></div>

        <Card title="Propósito de Esta Semana">
          <ul className="list-disc pl-5 text-lg">
            <li>Introducir la conciencia de la pelvis, las costillas y el diafragma.</li>
            <li>Desarrollar el control básico de la flexión y extensión lumbar.</li>
            <li>Aumentar la conciencia interoceptiva y mejorar el control de la respiración.</li>
            <li>Empezar a adquirir confianza en la posición de la pelvis y la caja torácica.</li>
          </ul>
        </Card>

        <Card title="Objetivos para la Semana 1">
          <ul className="list-disc pl-5 text-lg">
            <li>Desarrollar la conciencia de la inclinación pélvica posterior y anterior.</li>
            <li>Controla los patrones respiratorios mientras mantienes la pelvis y las costillas neutras.</li>
            <li>Mejorar la respuesta sensorial mediante movimientos lentos y controlados.</li>
            <li>Establezca una base para realizar sentadillas y flexiones seguras y sin dolor.</li>
          </ul>
        </Card>

        <Card title="Consejos para el Éxito">
          <ul className="list-disc pl-5 text-lg">
            <li>Muévase lenta y deliberadamente: la calidad por encima de la cantidad.</li>
            <li>Concéntrate en la conciencia y el control de la respiración.</li>
            <li>Tómate descansos si te sientes fatigado o pierdes la concentración.</li>
            <li>Presta atención a cómo responde tu cuerpo a los distintos movimientos.</li>
          </ul>
        </Card>
      </WeekLayout>
    </div>
  );
}
