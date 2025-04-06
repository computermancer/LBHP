import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function PresionDeTalonConApoyoEnPared() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 5: Presión de Talón con Apoyo en Pared"
      backButtonText="Semana 2 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Apoya la espalda contra la pared.",
        "Flexiona las rodillas ligeramente.",
        "Mantén los pies separados al ancho de los hombros."
      ]}
      instructions={[
        "Inhala y expande las costillas.",
        "Al exhalar, presiona los talones contra el suelo.",
        "Mantén la tensión en los isquiotibiales."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 por serie",
        "Tempo: 3 segundos por fase",
        "Descanso: 30-60 segundos entre series"
      ]}
      whatToFeel={[
        "Activación de los isquiotibiales.",
        "Estabilidad en la zona pélvica."
      ]}
      whatToAvoid={[
        "Arquear la espalda baja.",
        "Movimientos bruscos o rápidos."
      ]}
      redFlags={[
        "Dolor en la zona lumbar o rodillas.",
        "Pérdida de control del movimiento."
      ]}
      regression={[
        "Reduce el ángulo de flexión de rodillas.",
        "Añade una almohada entre la espalda y la pared."
      ]}
    />
  );
} 