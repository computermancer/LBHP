import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function SentadillaProfundaConApoyoEnPared() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 5: Sentadilla Profunda con Apoyo en Pared"
      backButtonText="Semana 2 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Párate frente a una pared, pies ligeramente más anchos que las caderas.",
        "Dedos de los pies apuntando ligeramente hacia afuera."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhala y baja lentamente a una sentadilla profunda manteniendo el control de las costillas y la pelvis.",
        "Mantén la posición brevemente y regresa a la posición de pie."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 5-8 repeticiones lentas",
        "Respiración: Exhala durante el descenso, inhala para levantarte",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Apertura a través de las caderas y estabilidad a través del core."
      ]}
      whatToAvoid={[
        "Colapsar el pecho o abrir las costillas."
      ]}
      redFlags={[
        "Dolor o malestar en las rodillas o las caderas."
      ]}
      regression={[
        "Realiza una sentadilla parcial si la profundidad completa es incómoda."
      ]}
    />
  );
} 