import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function RespiraciónSentadoConConcienciaPélvica() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 5: Respiración Sentado con Conciencia Pélvica"
      backButtonText="Semana 2 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate erguido en una silla firme, pies apoyados.",
        "Manos suavemente en las costillas inferiores o la pelvis."
      ]}
      instructions={[
        "Inhala profundamente en el vientre y las costillas.",
        "Exhala manteniendo el control pélvico y costal.",
        "Repite con respiración suave y controlada."
      ]}
      setsReps={[
        "Series: 2",
        "Repeticiones: 5-8 ciclos de respiración por serie",
        "Respiración: Inhala 3-4 segundos, exhala 4-6 segundos",
        "Descanso: Entre series o según sea necesario"
      ]}
      whatToFeel={[
        "Conexión entre la respiración, la pelvis y la caja torácica."
      ]}
      whatToAvoid={[
        "Arquear demasiado o colapsar la postura."
      ]}
      redFlags={[
        "Dificultad para mantener el control."
      ]}
      regression={[
        "Usa una almohada para apoyo lumbar."
      ]}
    />
  );
} 