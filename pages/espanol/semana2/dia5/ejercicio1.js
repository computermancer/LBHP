import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function RespiraciónDeCocodriloConExpansiónCostal() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Respiración de Cocodrilo con Expansión Costal"
      backButtonText="Semana 2 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca abajo con la frente descansando en tus manos.",
        "Piernas extendidas, dedos de los pies apuntando ligeramente hacia afuera."
      ]}
      instructions={[
        "Inhala profundamente, sintiendo tu vientre presionar contra el suelo.",
        "Exhala suavemente, permitiendo que las costillas se relajen y caigan.",
        "Concéntrate en la expansión lateral de las costillas durante la inhalación."
      ]}
      setsReps={[
        "Series: 2",
        "Repeticiones: 5-8 ciclos de respiración por serie",
        "Respiración: Inhala 3-4 segundos, exhala 4-6 segundos",
        "Descanso: Entre series o según sea necesario"
      ]}
      whatToFeel={[
        "Expansión de las costillas inferiores y el vientre."
      ]}
      whatToAvoid={[
        "Respiración superficial del pecho o tensión."
      ]}
      redFlags={[
        "Mareo o malestar."
      ]}
      regression={[
        "Coloca una almohada debajo del vientre para apoyo."
      ]}
    />
  );
} 