import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function ExpansionCostalSupinaConRespiración() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Expansión Costal Supina con Respiración"
      backButtonText="Semana 2 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo.",
        "Coloca las manos suavemente en las costillas inferiores."
      ]}
      instructions={[
        "Inhala profundamente hacia las costillas inferiores, sintiendo la expansión lateral.",
        "Exhala suavemente, permitiendo que las costillas caigan naturalmente.",
        "Mantén respiraciones lentas y controladas durante todo el ejercicio."
      ]}
      setsReps={[
        "Series: 2",
        "Repeticiones: 5-8 ciclos de respiración por serie",
        "Respiración: Inhala 3-4 segundos, exhala 4-6 segundos",
        "Descanso: Entre series o según sea necesario"
      ]}
      whatToFeel={[
        "Expansión de las costillas durante la inhalación.",
        "Patrón de respiración relajado con mínima elevación del pecho."
      ]}
      whatToAvoid={[
        "Respirar solo en la parte superior del pecho.",
        "Colapsar la caja torácica o perder el control."
      ]}
      redFlags={[
        "Mareos o malestar con el control de la respiración."
      ]}
      regression={[
        "Coloca una almohada bajo las rodillas para reducir la tensión en la zona lumbar."
      ]}
    />
  );
} 