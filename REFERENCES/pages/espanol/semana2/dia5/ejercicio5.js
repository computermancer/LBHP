import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function RespiraciónSentadoConDesplazamientosDeCadera() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 5: Respiración Sentado con Desplazamientos de Cadera"
      backButtonText="Semana 2 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate erguido en una silla firme, pies apoyados.",
        "Manos descansando en tu pelvis o muslos."
      ]}
      instructions={[
        "Inhala profundamente, manteniendo el control pélvico y costal.",
        "Exhala y desplaza suavemente la pelvis de lado a lado.",
        "Regresa al centro entre cada desplazamiento."
      ]}
      setsReps={[
        "Series: 2",
        "Repeticiones: 5-8 desplazamientos lentos por serie",
        "Respiración: Inhala para preparar, exhala durante el desplazamiento",
        "Descanso: Entre series o según sea necesario"
      ]}
      whatToFeel={[
        "Conexión entre la respiración, la pelvis y la caja torácica."
      ]}
      whatToAvoid={[
        "Desplazar demasiado o perder el control."
      ]}
      redFlags={[
        "Dolor o malestar en las caderas o la espalda baja."
      ]}
      regression={[
        "Usa una almohada para apoyo lumbar."
      ]}
    />
  );
} 