import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function PresionDeIsquiotibialesEnPared() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 5: Presión de Isquiotibiales en la Pared"
      backButtonText="Semana 1 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba cerca de una pared.",
        "Flexiona las rodillas y coloca los pies contra la pared."
      ]}
      instructions={[
        "Presiona suavemente los talones contra la pared, activando los isquiotibiales.",
        "Mantén la zona lumbar en contacto con el suelo.",
        "Sostén la contracción durante 3-5 segundos.",
        "Relaja y repite."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10",
        "Duración: 3-5 segundos por contracción",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Activación suave de los isquiotibiales.",
        "Estabilidad en la zona lumbar.",
        "Control al presionar contra la pared."
      ]}
      whatToAvoid={[
        "Arquear la zona lumbar.",
        "Movimientos bruscos o apresurados.",
        "Tensión excesiva en los músculos."
      ]}
      redFlags={[
        "Dolor agudo en la zona lumbar o las caderas.",
        "Dificultad para mantener la posición."
      ]}
      regression={[
        "Si es demasiado desafiante, reduce la intensidad de la presión o el tiempo de contracción."
      ]}
    />
  );
}
