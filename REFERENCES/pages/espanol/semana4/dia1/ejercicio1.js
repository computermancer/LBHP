import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio1DesplazamientoCostalEnDecúbitoSupinoConControlRespiratorio() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Desplazamiento Costal en Decúbito Supino con Control Respiratorio"
      backButtonText="Semana 4 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas flexionadas, pies apoyados.",
        "Manos descansando suavemente en los lados de tu caja torácica."
      ]}
      instructions={[
        "Inhala profundamente por la nariz, sintiendo cómo las costillas se expanden lateralmente.",
        "Exhala y desplaza las costillas ligeramente hacia un lado mientras mantienes el control pélvico.",
        "Regresa al centro y alterna los lados."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 repeticiones lentas por lado",
        "Respiración: Exhala para desplazar, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Caja torácica expandiéndose y desplazándose lateralmente",
        "Estabilidad pélvica mientras las costillas se mueven"
      ]}
      whatToAvoid={[
        "Perder el control pélvico",
        "Forzar el desplazamiento costal"
      ]}
      redFlags={[
        "Dolor o malestar en las costillas o la espalda baja"
      ]}
      regression={[
        "Realiza con desplazamientos costales más pequeños para mejorar el control."
      ]}
    />
  );
} 