import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function DesplazamientoDeCostillasEnDecúbitoSupinoConRespiración() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Desplazamiento de Costillas en Decúbito Supino con Respiración"
      backButtonText="Semana 2 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas flexionadas, pies apoyados en el suelo.",
        "Coloca las manos en las costillas inferiores para retroalimentación."
      ]}
      instructions={[
        "Inhala profundamente, expandiendo las costillas lateralmente.",
        "Exhala y desplaza suavemente las costillas de lado a lado.",
        "Regresa al centro antes de cambiar de lado."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 desplazamientos lentos por lado",
        "Respiración: Exhala durante el desplazamiento, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Movimiento sutil a través de las costillas con esfuerzo mínimo."
      ]}
      whatToAvoid={[
        "Arquear la espalda o tensar el cuello."
      ]}
      redFlags={[
        "Dolor o malestar en las costillas o la columna."
      ]}
      regression={[
        "Reduce el rango de movimiento si es necesario."
      ]}
    />
  );
} 