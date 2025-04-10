import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioRespiratorioConMovimiento() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 4: Ejercicio Respiratorio con Movimiento"
      backButtonText="Semana 1 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate en una silla con la espalda recta.",
        "Coloca las manos en los hombros.",
        "Relaja los hombros y el cuello."
      ]}
      instructions={[
        "Inhala lentamente mientras elevas los brazos hacia arriba.",
        "Mantén los codos ligeramente doblados.",
        "Exhala lentamente mientras bajas los brazos.",
        "Coordina la respiración con el movimiento."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 5-8 respiraciones",
        "Duración: 4-6 segundos por inhalación, 4-6 segundos por exhalación",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Expansión suave del pecho durante la inhalación.",
        "Contracción suave del pecho durante la exhalación.",
        "Movimiento fluido y coordinado con la respiración."
      ]}
      whatToAvoid={[
        "Elevar los hombros durante la inhalación.",
        "Contener la respiración.",
        "Movimientos bruscos o rápidos."
      ]}
      redFlags={[
        "Mareos o sensación de desmayo.",
        "Dolor en el pecho o el abdomen."
      ]}
      regression={[
        "Si el movimiento es difícil, practica solo la respiración sin mover los brazos.",
        "Reduce la duración de las respiraciones si es necesario."
      ]}
    />
  );
}
