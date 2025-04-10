import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioDeEstabilizacionGlobal() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 4: Ejercicio de Estabilización Global"
      backButtonText="Semana 1 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas dobladas y los pies apoyados en el suelo.",
        "Coloca los brazos a los lados del cuerpo.",
        "Mantén la espalda en una posición neutral."
      ]}
      instructions={[
        "Inhala profundamente preparándote para el movimiento.",
        "Al exhalar, eleva suavemente la cadera del suelo.",
        "Mantén los hombros y la cabeza en contacto con el suelo.",
        "Baja lentamente la cadera mientras inhalas."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 10-12",
        "Duración: 3-5 segundos por repetición",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Activación de los glúteos y músculos centrales.",
        "Estabilidad en la zona lumbar.",
        "Control del movimiento de la cadera."
      ]}
      whatToAvoid={[
        "Arquear excesivamente la espalda.",
        "Elevar demasiado la cadera.",
        "Movimientos bruscos o rápidos."
      ]}
      redFlags={[
        "Dolor en la parte baja de la espalda.",
        "Tensión excesiva en el cuello o los hombros."
      ]}
      regression={[
        "Si el ejercicio es demasiado desafiante, reduce la altura de la elevación.",
        "Realiza menos repeticiones si es necesario."
      ]}
    />
  );
}
