import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function TorsiónDeColumnaSentadoConAlcanceDeBrazo() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 3: Torsión de Columna Sentado con Alcance de Brazo"
      backButtonText="Semana 2 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate erguido en una silla firme, pies apoyados, manos cruzadas sobre el pecho."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhala y rota la parte superior del cuerpo hacia un lado mientras alcanzas un brazo hacia adelante.",
        "Regresa al centro y cambia de lado."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 repeticiones lentas por lado",
        "Respiración: Exhala durante la rotación, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Rotación torácica controlada con movimiento escapular."
      ]}
      whatToAvoid={[
        "Sobrerrotar o perder el control de las costillas."
      ]}
      redFlags={[
        "Dolor o malestar en la columna."
      ]}
      regression={[
        "Realiza sin alcance de brazo si es necesario."
      ]}
    />
  );
} 