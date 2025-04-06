import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio1ExpansiónCostalSentadoConControlRespiratorio() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Expansión Costal Sentado con Control Respiratorio"
      backButtonText="Semana 3 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate erguido en una silla firme, pies apoyados en el suelo.",
        "Manos descansando suavemente en los lados de tu caja torácica."
      ]}
      instructions={[
        "Inhala profundamente por la nariz, sintiendo cómo las costillas se expanden lateralmente.",
        "Exhala y permite que las costillas regresen a la posición neutral.",
        "Concéntrate en la expansión simétrica en ambos lados."
      ]}
      setsReps={[
        "Series: 2",
        "Repeticiones: 5-8 ciclos de respiración por serie",
        "Respiración: Inhala 3-4 segundos, exhala 4-6 segundos",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Costillas expandiéndose hacia afuera y hacia atrás",
        "Respiración constante con movimiento mínimo del pecho superior"
      ]}
      whatToAvoid={[
        "Respiración superficial o encogimiento de hombros"
      ]}
      redFlags={[
        "Mareo o malestar"
      ]}
      regression={[
        "Coloca las manos en los muslos para mayor estabilidad."
      ]}
    />
  );
} 