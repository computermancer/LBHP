import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio3FlexionesEnSueloConControlCostalYPelvico() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 3: Flexiones en Suelo con Control Costal y Pélvico"
      backButtonText="Semana 5 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Comienza en posición de plancha, manos ligeramente más anchas que los hombros.",
        "Mantén el control costal y pélvico."
      ]}
      instructions={[
        "Inhala para preparar.",
        "Exhala y baja el pecho hacia el suelo.",
        "Inhala y empuja para regresar a la posición inicial."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 6-8 repeticiones",
        "Respiración: Exhala para empujar, inhala para bajar",
        "Descanso: 45-60 segundos entre series"
      ]}
      whatToFeel={[
        "Pecho, tríceps y core activados",
        "Posición estable de costillas y pelvis"
      ]}
      whatToAvoid={[
        "Colapsar los hombros o arquear la espalda"
      ]}
      redFlags={[
        "Dolor en hombros o muñecas"
      ]}
      regression={[
        "Realiza sobre las rodillas o con rango de movimiento reducido."
      ]}
    />
  );
} 