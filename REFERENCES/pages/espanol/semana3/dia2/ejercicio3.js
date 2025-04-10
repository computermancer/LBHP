import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio3RotaciónTorácicaSentadoConAlcanceDeBrazo() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 3: Rotación Torácica Sentado con Alcance de Brazo"
      backButtonText="Semana 3 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate erguido en una silla firme, pies apoyados.",
        "Manos descansando en los muslos o cruzadas sobre el pecho."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhala y rota la parte superior del cuerpo hacia un lado, extendiendo un brazo hacia adelante.",
        "Regresa al centro y repite en el lado opuesto."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 por lado",
        "Respiración: Exhala para rotar, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Rotación torácica suave",
        "Estabilidad costal durante la rotación"
      ]}
      whatToAvoid={[
        "Torcer desde la espalda baja"
      ]}
      redFlags={[
        "Dolor o malestar durante la rotación"
      ]}
      regression={[
        "Realiza con las manos en las rodillas para apoyo."
      ]}
    />
  );
} 