import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio2ZancadasLateralesConControlRespiratorio() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 2: Zancadas Laterales con Control Respiratorio"
      backButtonText="Semana 5 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Párate con los pies separados al ancho de las caderas, manos en las caderas o extendidas hacia adelante.",
        "Desplaza el peso hacia un lado, flexionando la rodilla."
      ]}
      instructions={[
        "Inhala para preparar.",
        "Exhala y desplaza el peso lateralmente, bajando a una zancada.",
        "Inhala y regresa al centro.",
        "Cambia de lado y repite."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 por lado",
        "Respiración: Exhala para bajar, inhala para regresar",
        "Descanso: 30-45 segundos entre series"
      ]}
      whatToFeel={[
        "Activación de glúteos y aductores",
        "Control y equilibrio durante el desplazamiento"
      ]}
      whatToAvoid={[
        "Rodillas colapsando o inclinarse hacia adelante"
      ]}
      redFlags={[
        "Dolor en rodillas o caderas"
      ]}
      regression={[
        "Realiza desplazamientos laterales más pequeños."
      ]}
    />
  );
} 