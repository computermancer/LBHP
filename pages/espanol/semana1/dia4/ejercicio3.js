import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioDeMovilidadCervical() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 3: Ejercicio de Movilidad Cervical"
      backButtonText="Semana 1 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate en una silla con la espalda recta.",
        "Mantén los hombros relajados.",
        "Coloca las manos en los muslos."
      ]}
      instructions={[
        "Gira suavemente la cabeza hacia un lado.",
        "Mantén la mirada al nivel de los hombros.",
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
        "Rotación suave en el cuello.",
        "Estabilidad en los hombros y la parte superior del cuerpo.",
        "Estiramiento en los músculos laterales del cuello."
      ]}
      whatToAvoid={[
        "Forzar la rotación o movimientos bruscos.",
        "Mover los hombros o inclinar la cabeza.",
        "Tensión en los hombros o el cuello."
      ]}
      redFlags={[
        "Dolor agudo en el cuello o los hombros.",
        "Mareos o sensación de inestabilidad."
      ]}
      regression={[
        "Si la rotación es demasiado desafiante, reduce el rango de movimiento o realiza menos repeticiones."
      ]}
    />
  );
}
