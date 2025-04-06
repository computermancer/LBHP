import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function RespiraciónAbdominalEnPosiciónAcostada() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 2: Respiración Abdominal en Posición Acostada"
      backButtonText="Semana 1 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo.",
        "Coloca una mano en el pecho y otra en el abdomen."
      ]}
      instructions={[
        "Inhala lentamente por la nariz, sintiendo cómo el abdomen se expande.",
        "Exhala lentamente por la boca, sintiendo cómo el abdomen se contrae.",
        "Mantén el pecho relativamente quieto, permitiendo que el diafragma haga la mayor parte del trabajo.",
        "Concéntrate en la sensación de expansión y contracción del abdomen."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 10-15 respiraciones lentas",
        "Duración: 3-5 minutos",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Expansión suave del abdomen al inhalar.",
        "Contracción suave del abdomen al exhalar.",
        "Relajación general del cuerpo.",
        "Mayor conciencia de la respiración."
      ]}
      whatToAvoid={[
        "Respiración superficial o rápida.",
        "Tensión en los hombros o el cuello.",
        "Movimiento excesivo del pecho."
      ]}
      redFlags={[
        "Mareos o aturdimiento.",
        "Dificultad para respirar o sensación de falta de aire."
      ]}
      regression={[
        "Si la respiración abdominal es demasiado desafiante, comienza con respiraciones más cortas y superficiales."
      ]}
    />
  );
}
