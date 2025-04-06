import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio2BalanceoPélvicoEnDecúbitoSupinoConEnfoqueRespiratorio() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 2: Balanceo Pélvico en Decúbito Supino con Enfoque Respiratorio"
      backButtonText="Semana 3 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas flexionadas, pies apoyados en el suelo.",
        "Brazos descansando a los lados."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhala y balancea suavemente tu pelvis hacia atrás y adelante.",
        "Mantén una caja torácica y pelvis neutral durante todo el movimiento."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 repeticiones lentas",
        "Respiración: Exhala para balancear, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Movimiento suave de la pelvis",
        "Respiración controlada con cada movimiento"
      ]}
      whatToAvoid={[
        "Arquear o aplanar demasiado la espalda"
      ]}
      redFlags={[
        "Dolor o malestar en la espalda baja"
      ]}
      regression={[
        "Realiza con las rodillas apoyadas para reducir el rango de movimiento."
      ]}
    />
  );
} 