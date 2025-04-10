import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function ExpansionCostalEnPosicionLateral() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Expansión Costal en Posición Lateral"
      backButtonText="Semana 1 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate de lado con las rodillas flexionadas a 90 grados y apiladas.",
        "Descansa el brazo inferior bajo tu cabeza para apoyo."
      ]}
      instructions={[
        "Inhala profundamente hacia el lado inferior de tus costillas.",
        "Siente cómo las costillas se expanden lateralmente al inhalar.",
        "Exhala lentamente y deja que las costillas caigan naturalmente.",
        "Concéntrate en dirigir la respiración hacia la parte inferior de la caja torácica."
      ]}
      setsReps={[
        "Series: 2",
        "Repeticiones: 5-8 ciclos de respiración por serie",
        "Respiración: Inhala 3-4 segundos, exhala 4-6 segundos",
        "Descanso: Entre series o según sea necesario"
      ]}
      whatToFeel={[
        "Expansión de las costillas inferiores.",
        "Respiración controlada y relajada sin dominancia del pecho."
      ]}
      whatToAvoid={[
        "Respirar solo en la parte superior del pecho.",
        "Colapsar o perder la posición de las costillas."
      ]}
      redFlags={[
        "Mareos o dificultad para mantener la posición."
      ]}
      regression={[
        "Apoya tu torso con una almohada para mayor comodidad y estabilidad."
      ]}
    />
  );
}
