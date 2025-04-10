import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioDeMovilidadEscapular() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 4: Ejercicio de Movilidad Escapular"
      backButtonText="Semana 1 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate en una silla con la espalda recta.",
        "Mantén los hombros relajados.",
        "Coloca las manos en los muslos."
      ]}
      instructions={[
        "Eleva suavemente los hombros hacia las orejas.",
        "Mantén la posición por un momento.",
        "Baja los hombros hacia abajo.",
        "Repite el movimiento."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10",
        "Duración: 3-5 segundos por elevación",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Movimiento suave en los hombros.",
        "Estabilidad en la parte superior del cuerpo.",
        "Activación de los músculos escapulares."
      ]}
      whatToAvoid={[
        "Forzar el movimiento o elevaciones bruscas.",
        "Mover la cabeza o el cuello.",
        "Tensión en el cuello o los hombros."
      ]}
      redFlags={[
        "Dolor agudo en los hombros o el cuello.",
        "Mareos o sensación de inestabilidad."
      ]}
      regression={[
        "Si la elevación es demasiado desafiante, reduce el rango de movimiento o realiza menos repeticiones."
      ]}
    />
  );
}
