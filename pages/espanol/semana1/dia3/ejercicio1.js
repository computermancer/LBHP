import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioRespiratorioDiafragmatico() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Ejercicio Respiratorio Diafragmático"
      backButtonText="Semana 1 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas dobladas y los pies apoyados en el suelo.",
        "Coloca una mano en el pecho y la otra en el abdomen.",
        "Relaja los hombros y el cuello."
      ]}
      instructions={[
        "Inhala lentamente por la nariz, sintiendo cómo el abdomen se expande.",
        "La mano en el abdomen debe moverse hacia arriba.",
        "La mano en el pecho debe permanecer relativamente quieta.",
        "Exhala lentamente por la boca, sintiendo cómo el abdomen se desinfla."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 5-8 respiraciones",
        "Duración: 4-6 segundos por inhalación, 4-6 segundos por exhalación",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Expansión suave del abdomen durante la inhalación.",
        "Relajación del abdomen durante la exhalación.",
        "Respiración controlada y rítmica."
      ]}
      whatToAvoid={[
        "Elevar los hombros o el pecho durante la inhalación.",
        "Contener la respiración.",
        "Respirar demasiado rápido o forzar la respiración."
      ]}
      redFlags={[
        "Mareos o sensación de desmayo.",
        "Dolor en el pecho o el abdomen."
      ]}
      regression={[
        "Si la respiración profunda es difícil, comienza con respiraciones más cortas y aumenta gradualmente la duración.",
        "Practica sentado si acostado es incómodo."
      ]}
    />
  );
}
