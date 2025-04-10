import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioRespiratorioCombinado() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 3: Ejercicio Respiratorio Combinado"
      backButtonText="Semana 1 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas dobladas y los pies apoyados en el suelo.",
        "Coloca una mano en el abdomen y la otra en la caja torácica.",
        "Relaja los hombros y el cuello."
      ]}
      instructions={[
        "Inhala lentamente, expandiendo primero el abdomen y luego la caja torácica.",
        "Siente cómo el aire llena el abdomen y luego sube hacia la caja torácica.",
        "Exhala lentamente, contrayendo primero la caja torácica y luego el abdomen.",
        "Mantén un ritmo suave y controlado."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 5-8 respiraciones",
        "Duración: 4-6 segundos por inhalación, 4-6 segundos por exhalación",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Expansión secuencial del abdomen y la caja torácica durante la inhalación.",
        "Contracción secuencial de la caja torácica y el abdomen durante la exhalación.",
        "Respiración fluida y coordinada."
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
        "Si la respiración combinada es difícil, practica primero la respiración diafragmática y costal por separado.",
        "Reduce la duración de las respiraciones si es necesario."
      ]}
    />
  );
}
