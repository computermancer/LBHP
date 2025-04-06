import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function InclinacionPelvicaPosteriorEnPared() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Inclinación Pélvica Posterior en la Pared"
      backButtonText="Semana 1 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Párate con la espalda contra una pared, los pies a unos 15-30 cm de distancia.",
        "Rodillas ligeramente flexionadas, brazos descansando a los lados."
      ]}
      instructions={[
        "Inclina suavemente la pelvis hacia atrás para que la zona lumbar se aplane contra la pared.",
        "Mantén los glúteos y los abdominales suaves; permite que el movimiento venga de la rotación pélvica.",
        "Mantén durante 3-5 segundos, luego suelta volviendo a la posición neutral.",
        "Muévete lentamente y con control."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 repeticiones lentas",
        "Respiración: Exhala al inclinar, inhala al soltar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Tensión abdominal suave.",
        "Zona lumbar aplanándose suavemente contra la pared.",
        "Respiración relajada y tensión mínima en la parte superior del cuerpo."
      ]}
      whatToAvoid={[
        "Apretar los glúteos o empujar contra el suelo.",
        "Movimientos bruscos o apresurados."
      ]}
      redFlags={[
        "Dolor agudo en la zona lumbar o las caderas.",
        "Mareos o incapacidad para respirar profundamente."
      ]}
      regression={[
        "Realiza inclinaciones pélvicas sentado en una silla firme si estar de pie es demasiado desafiante."
      ]}
    />
  );
}
