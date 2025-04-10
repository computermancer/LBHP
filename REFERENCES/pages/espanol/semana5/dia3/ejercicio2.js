import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio2ZancadasAdelanteConControlCostal() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 2: Zancadas Adelante con Control Costal"
      backButtonText="Semana 5 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Párate con los pies separados al ancho de los hombros.",
        "Manos en las caderas o extendidas hacia adelante para mantener el equilibrio."
      ]}
      instructions={[
        "Inhala para preparar.",
        "Exhala y da un paso adelante a una zancada, bajando la rodilla trasera hacia el suelo.",
        "Inhala y empuja para regresar a la posición inicial.",
        "Cambia de lado y repite."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 por lado",
        "Respiración: Exhala para zancada, inhala para regresar",
        "Descanso: 30-45 segundos entre series"
      ]}
      whatToFeel={[
        "Activación de glúteos, cuádriceps y core",
        "Estabilidad costal y pélvica"
      ]}
      whatToAvoid={[
        "Rodillas colapsando hacia adentro o arquear la espalda"
      ]}
      redFlags={[
        "Dolor en rodillas o caderas"
      ]}
      regression={[
        "Realiza zancadas más pequeñas para reducir la intensidad."
      ]}
    />
  );
} 