import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio2BalanceoPélvicoPosteriorSentado() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 2: Balanceo Pélvico Posterior Sentado"
      backButtonText="Semana 3 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate erguido en una silla firme, pies apoyados en el suelo.",
        "Manos descansando en los muslos."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhala y balancea suavemente tu pelvis hacia atrás, aplanando la espalda baja.",
        "Inhala y regresa a la posición neutral."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 repeticiones lentas",
        "Respiración: Exhala para balancear, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Movimiento suave de la pelvis",
        "Activación del core durante el movimiento"
      ]}
      whatToAvoid={[
        "Arquear o colapsar demasiado la columna"
      ]}
      redFlags={[
        "Dolor agudo o malestar"
      ]}
      regression={[
        "Limita el rango de movimiento para mejor control."
      ]}
    />
  );
} 