import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioDeEstabilizacionLumbar() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 2: Ejercicio de Estabilización Lumbar"
      backButtonText="Semana 1 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas dobladas y los pies apoyados en el suelo.",
        "Coloca los brazos a los lados del cuerpo.",
        "Mantén la cabeza en una posición neutral."
      ]}
      instructions={[
        "Inhala profundamente preparándote para el movimiento.",
        "Al exhalar, eleva suavemente una pierna manteniendo la rodilla doblada.",
        "Mantén la otra pierna estable y la espalda en contacto con el suelo.",
        "Baja lentamente la pierna mientras inhalas."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 por lado",
        "Duración: 3-5 segundos por repetición",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Estabilidad en la zona lumbar.",
        "Control del movimiento de la pierna.",
        "Activación de los músculos centrales."
      ]}
      whatToAvoid={[
        "Arquear la espalda.",
        "Mover la pelvis durante el ejercicio.",
        "Levantar la pierna demasiado alto."
      ]}
      redFlags={[
        "Dolor en la parte baja de la espalda.",
        "Tensión excesiva en el cuello o los hombros."
      ]}
      regression={[
        "Si el ejercicio es demasiado desafiante, reduce la altura de la elevación de la pierna.",
        "Realiza menos repeticiones si es necesario."
      ]}
    />
  );
}
