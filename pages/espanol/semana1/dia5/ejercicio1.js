import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioDeEstabilizacionPelvica() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Ejercicio de Estabilización Pélvica"
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
        "Al exhalar, presiona suavemente la parte baja de la espalda contra el suelo.",
        "Mantén la posición por 3-5 segundos.",
        "Regresa lentamente a la posición inicial mientras inhalas."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 10-12",
        "Duración: 3-5 segundos por repetición",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Activación de los músculos abdominales profundos.",
        "Estabilidad en la zona lumbar.",
        "Control del movimiento pélvico."
      ]}
      whatToAvoid={[
        "Arquear excesivamente la espalda.",
        "Contener la respiración.",
        "Movimientos bruscos o rápidos."
      ]}
      redFlags={[
        "Dolor en la parte baja de la espalda.",
        "Tensión excesiva en el cuello o los hombros."
      ]}
      regression={[
        "Si el ejercicio es demasiado desafiante, reduce el tiempo de mantención.",
        "Realiza menos repeticiones si es necesario."
      ]}
    />
  );
}
