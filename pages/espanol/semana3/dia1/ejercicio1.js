import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio1RespiraciónEnDecúbitoSupinoConConcienciaPélvica() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Respiración en Decúbito Supino con Conciencia Pélvica"
      backButtonText="Semana 3 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas flexionadas, pies apoyados en el suelo.",
        "Manos descansando en el abdomen inferior y la caja torácica."
      ]}
      instructions={[
        "Inhala y siente cómo tu vientre se expande suavemente.",
        "Exhala completamente mientras mantienes una pelvis neutral.",
        "Concéntrate en la conciencia del movimiento pélvico con cada respiración."
      ]}
      setsReps={[
        "Series: 2",
        "Repeticiones: 5-8 ciclos de respiración por serie",
        "Respiración: Inhala 3-4 segundos, exhala 4-6 segundos",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Vientre y costillas expandiéndose con la respiración",
        "Movimiento pélvico mínimo con respiración controlada"
      ]}
      whatToAvoid={[
        "Inclinar demasiado la pelvis o arquear la espalda"
      ]}
      redFlags={[
        "Mareo o malestar durante la respiración"
      ]}
      regression={[
        "Usa una almohada debajo de las rodillas para mantener la neutralidad pélvica."
      ]}
    />
  );
} 