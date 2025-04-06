import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioRespiratorioAvanzado() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 5: Ejercicio Respiratorio Avanzado"
      backButtonText="Semana 1 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate en una silla con la espalda recta.",
        "Coloca las manos en las costillas laterales.",
        "Relaja los hombros y el cuello."
      ]}
      instructions={[
        "Inhala lentamente, expandiendo las costillas en todas direcciones.",
        "Mantén el abdomen relativamente estable.",
        "Exhala lentamente, contrayendo las costillas.",
        "Coordina la respiración con el movimiento de las manos."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 5-8 respiraciones",
        "Duración: 4-6 segundos por inhalación, 4-6 segundos por exhalación",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Expansión suave de las costillas durante la inhalación.",
        "Contracción suave de las costillas durante la exhalación.",
        "Respiración controlada y rítmica."
      ]}
      whatToAvoid={[
        "Elevar los hombros durante la inhalación.",
        "Contener la respiración.",
        "Respirar demasiado rápido o forzar la respiración."
      ]}
      redFlags={[
        "Mareos o sensación de desmayo.",
        "Dolor en el pecho o el abdomen."
      ]}
      regression={[
        "Si la respiración avanzada es difícil, practica primero la respiración básica.",
        "Reduce la duración de las respiraciones si es necesario."
      ]}
    />
  );
}
