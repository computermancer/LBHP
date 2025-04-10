import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioDeMovilidadLumbar() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 2: Ejercicio de Movilidad Lumbar"
      backButtonText="Semana 1 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas dobladas y los pies apoyados en el suelo.",
        "Coloca los brazos extendidos a los lados.",
        "Mantén la cabeza y los hombros en contacto con el suelo."
      ]}
      instructions={[
        "Gira suavemente las rodillas hacia un lado.",
        "Mantén los hombros en contacto con el suelo.",
        "Regresa a la posición central.",
        "Repite el movimiento hacia el otro lado."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 por lado",
        "Duración: 3-5 segundos por rotación",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Rotación suave en la zona lumbar.",
        "Estabilidad en los hombros y la parte superior del cuerpo.",
        "Estiramiento en los músculos laterales de la espalda."
      ]}
      whatToAvoid={[
        "Forzar la rotación o movimientos bruscos.",
        "Mover los hombros o la cabeza.",
        "Tensión en el cuello o los hombros."
      ]}
      redFlags={[
        "Dolor agudo en la espalda o las caderas.",
        "Mareos o sensación de inestabilidad."
      ]}
      regression={[
        "Si la rotación es demasiado desafiante, reduce el rango de movimiento o realiza menos repeticiones."
      ]}
    />
  );
}
