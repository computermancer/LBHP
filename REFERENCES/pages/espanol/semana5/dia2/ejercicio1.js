import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio1SentadillasEnPosturaEscalonadaConEstabilidadCostal() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Sentadillas en Postura Escalonada con Estabilidad Costal"
      backButtonText="Semana 5 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Párate con los pies escalonados, un pie ligeramente adelante del otro.",
        "Brazos extendidos hacia adelante o manos en las caderas."
      ]}
      instructions={[
        "Inhala para preparar.",
        "Exhala y baja a una sentadilla, manteniendo las costillas alineadas con la pelvis.",
        "Inhala y regresa a la posición de pie.",
        "Cambia de lado y repite."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 por lado",
        "Respiración: Exhala para bajar, inhala para subir",
        "Descanso: 30-45 segundos entre series"
      ]}
      whatToFeel={[
        "Activación de glúteos, cuádriceps y core",
        "Estabilidad en la pelvis y caja torácica"
      ]}
      whatToAvoid={[
        "Rodillas colapsando hacia adentro o arquear la espalda"
      ]}
      redFlags={[
        "Dolor agudo o malestar en las rodillas"
      ]}
      regression={[
        "Realiza un rango de movimiento más pequeño."
      ]}
    />
  );
} 