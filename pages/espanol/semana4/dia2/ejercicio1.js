import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio1FlexiónYExtensiónTorácicaSentado() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Flexión y Extensión Torácica Sentado"
      backButtonText="Semana 4 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate erguido en una silla firme, pies apoyados en el suelo.",
        "Manos descansando en los muslos o cruzadas sobre el pecho."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhala y flexiona suavemente la columna torácica hacia adelante.",
        "Inhala y extiende la columna de vuelta a la posición neutral."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 repeticiones lentas",
        "Respiración: Exhala para flexionar, inhala para extender",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Movimiento torácico suave",
        "Activación del core durante la flexión y extensión"
      ]}
      whatToAvoid={[
        "Arquear o colapsar la columna"
      ]}
      redFlags={[
        "Dolor agudo o malestar"
      ]}
      regression={[
        "Realiza movimientos más pequeños para mejor control."
      ]}
    />
  );
} 