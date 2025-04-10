import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function BalanceoPelvicoSentado() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 3: Balanceo Pélvico Sentado"
      backButtonText="Semana 1 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate en una silla firme con los pies apoyados en el suelo.",
        "Mantén la espalda recta y los hombros relajados."
      ]}
      instructions={[
        "Inclina la pelvis hacia adelante, arqueando ligeramente la zona lumbar.",
        "Luego inclina la pelvis hacia atrás, aplanando la zona lumbar contra el respaldo de la silla.",
        "Muévete lentamente y con control entre estas dos posiciones.",
        "Concéntrate en sentir el movimiento en la pelvis y la zona lumbar."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 movimientos lentos",
        "Duración: 3-5 segundos por movimiento",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Movimiento suave en la pelvis y la zona lumbar.",
        "Cambio en la tensión de los músculos abdominales.",
        "Mayor conciencia de la posición pélvica."
      ]}
      whatToAvoid={[
        "Movimientos bruscos o apresurados.",
        "Tensión excesiva en los hombros o el cuello.",
        "Arquear demasiado la espalda."
      ]}
      redFlags={[
        "Dolor agudo en la zona lumbar o las caderas.",
        "Mareos o sensación de inestabilidad."
      ]}
      regression={[
        "Si el movimiento es demasiado desafiante, reduce el rango de movimiento o realiza menos repeticiones."
      ]}
    />
  );
}
