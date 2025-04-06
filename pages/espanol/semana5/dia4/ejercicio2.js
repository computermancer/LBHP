import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio2FlexionesEnSillaConEstabilidadPelvica() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 2: Flexiones en Silla con Estabilidad Pélvica"
      backButtonText="Semana 5 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Coloca las manos en el borde de una silla resistente, pies extendidos detrás en posición de plancha.",
        "Mantén una línea recta desde la cabeza hasta los talones."
      ]}
      instructions={[
        "Inhala para preparar.",
        "Exhala y baja el pecho hacia la silla, manteniendo las costillas alineadas.",
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
        "Movimiento controlado con estabilidad costal"
      ]}
      whatToAvoid={[
        "Permitir que las caderas se hundan o arquear la espalda"
      ]}
      redFlags={[
        "Dolor o malestar en los hombros"
      ]}
      regression={[
        "Realiza flexiones contra una superficie más alta."
      ]}
    />
  );
} 