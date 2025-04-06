import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function FlexiónExtensiónTorácicaSentado() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 3: Flexión/Extensión Torácica Sentado"
      backButtonText="Semana 2 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate erguido en una silla firme, pies apoyados, manos en el pecho."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhala y flexiona suavemente hacia adelante a través de la parte superior de la espalda.",
        "Inhala y extiende a través de la columna torácica, elevando el pecho.",
        "Muévete suavemente entre las posiciones."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 repeticiones lentas",
        "Respiración: Exhala durante la flexión, inhala para extender",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Flexión y extensión controlada a través de la columna torácica."
      ]}
      whatToAvoid={[
        "Arquear demasiado o colapsar la postura."
      ]}
      redFlags={[
        "Dolor o malestar en la columna."
      ]}
      regression={[
        "Realiza con los brazos cruzados para menos tensión."
      ]}
    />
  );
} 