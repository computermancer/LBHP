import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio2DesplazamientoDeCaderaSentadoConEstabilidadCostal() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 2: Desplazamiento de Cadera Sentado con Estabilidad Costal"
      backButtonText="Semana 3 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate erguido en una silla firme, pies apoyados en el suelo.",
        "Manos descansando suavemente en tus muslos."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhala y desplaza suavemente una cadera hacia adelante mientras mantienes la estabilidad costal.",
        "Regresa a la posición neutral y alterna los lados."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 repeticiones lentas por lado",
        "Respiración: Exhala para desplazar, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Desplazamiento de cadera suave y controlado",
        "Caja torácica manteniéndose neutral y estable"
      ]}
      whatToAvoid={[
        "Inclinarse o torcer el torso"
      ]}
      redFlags={[
        "Dolor o malestar en las caderas o la espalda baja"
      ]}
      regression={[
        "Realiza con desplazamientos más pequeños para un mejor control."
      ]}
    />
  );
} 