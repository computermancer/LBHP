import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioRespiratorioCostal() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 2: Ejercicio Respiratorio Costal"
      backButtonText="Semana 1 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate en una silla con la espalda recta.",
        "Coloca las manos alrededor de la caja torácica.",
        "Relaja los hombros y el cuello."
      ]}
      instructions={[
        "Inhala lentamente, sintiendo cómo la caja torácica se expande en todas direcciones.",
        "Las manos deben moverse hacia afuera con la expansión.",
        "Mantén el abdomen relativamente estable.",
        "Exhala lentamente, sintiendo cómo la caja torácica se contrae."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 5-8 respiraciones",
        "Duración: 4-6 segundos por inhalación, 4-6 segundos por exhalación",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Expansión suave de la caja torácica durante la inhalación.",
        "Contracción suave de la caja torácica durante la exhalación.",
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
        "Si la respiración costal es difícil, comienza con respiraciones más cortas y aumenta gradualmente la duración.",
        "Practica acostado si sentado es incómodo."
      ]}
    />
  );
}
