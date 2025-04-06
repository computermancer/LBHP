import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio1RespiraciónDeCocodriloConExpansiónCostal() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Respiración de Cocodrilo con Expansión Costal"
      backButtonText="Semana 3 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca abajo con la frente descansando sobre las manos.",
        "Piernas extendidas, dedos de los pies apuntando ligeramente hacia afuera."
      ]}
      instructions={[
        "Inhala profundamente, sintiendo cómo tu vientre presiona contra el suelo.",
        "Exhala suavemente, permitiendo que tus costillas y vientre caigan naturalmente.",
        "Concéntrate en expandir tu respiración hacia la espalda y los lados de tu caja torácica."
      ]}
      setsReps={[
        "Series: 2",
        "Repeticiones: 5-8 ciclos respiratorios por serie",
        "Respiración: Inhala 3-4 segundos, exhala 4-6 segundos",
        "Descanso: Entre series o según sea necesario"
      ]}
      whatToFeel={[
        "El vientre presionando contra el suelo con cada inhalación",
        "Respiración relajada y constante"
      ]}
      whatToAvoid={[
        "Respiración superficial del pecho",
        "Mantener tensión en la parte superior del cuerpo"
      ]}
      redFlags={[
        "Mareo o malestar"
      ]}
      regression={[
        "Coloca una almohada bajo tu vientre para mayor comodidad."
      ]}
    />
  );
} 