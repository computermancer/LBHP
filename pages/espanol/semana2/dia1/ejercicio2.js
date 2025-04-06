import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function DesplazamientosDeCaderaEnDecubitoSupino() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 2: Desplazamientos de Cadera en Decúbito Supino"
      backButtonText="Semana 2 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo.",
        "Coloca las manos a los lados del cuerpo."
      ]}
      instructions={[
        "Inhala y siente la expansión de las costillas.",
        "Al exhalar, inclina la pelvis posteriormente.",
        "Mantén el control durante todo el movimiento."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 por serie",
        "Tempo: 3 segundos por fase",
        "Descanso: 30-60 segundos entre series"
      ]}
      whatToFeel={[
        "Control suave de la inclinación pélvica.",
        "Estabilidad en la zona lumbar."
      ]}
      whatToAvoid={[
        "Movimientos bruscos o rápidos.",
        "Arquear la espalda baja."
      ]}
      redFlags={[
        "Dolor en la zona lumbar.",
        "Pérdida de control del movimiento."
      ]}
      regression={[
        "Reduce el rango de movimiento.",
        "Añade una almohada bajo las rodillas."
      ]}
    />
  );
} 