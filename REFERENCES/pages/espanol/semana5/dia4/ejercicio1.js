import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio1FlexionesEnParedConEstabilidadCostal() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Flexiones en Pared con Estabilidad Costal"
      backButtonText="Semana 5 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Párate frente a una pared, manos colocadas ligeramente más anchas que los hombros.",
        "Pies separados al ancho de las caderas, cuerpo en línea recta."
      ]}
      instructions={[
        "Inhala para preparar.",
        "Exhala y baja el pecho hacia la pared, manteniendo el control costal y pélvico.",
        "Inhala y empuja para regresar a la posición inicial."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 repeticiones",
        "Respiración: Exhala para empujar, inhala para bajar",
        "Descanso: 30-45 segundos entre series"
      ]}
      whatToFeel={[
        "Pecho, hombros y core activados",
        "Alineación mantenida de costillas y pelvis"
      ]}
      whatToAvoid={[
        "Arquear la espalda baja o perder el control del core"
      ]}
      redFlags={[
        "Dolor en hombros o muñecas"
      ]}
      regression={[
        "Realiza con una inclinación más alta (más cerca de la pared)."
      ]}
    />
  );
} 