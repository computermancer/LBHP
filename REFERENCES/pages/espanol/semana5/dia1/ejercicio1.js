import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio1SentadillasConPesoCorporalYControlCostal() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Sentadillas con Peso Corporal y Control Costal"
      backButtonText="Semana 5 - Día 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Párate con los pies separados al ancho de los hombros, dedos de los pies ligeramente apuntando hacia afuera.",
        "Brazos extendidos hacia adelante o manos entrelazadas frente al pecho."
      ]}
      instructions={[
        "Inhala para preparar.",
        "Exhala y baja las caderas hacia abajo y atrás, manteniendo las costillas alineadas sobre la pelvis.",
        "Inhala para regresar a la posición de pie."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 10-12 repeticiones lentas y controladas",
        "Respiración: Exhala para bajar, inhala para subir",
        "Descanso: 30-45 segundos entre series"
      ]}
      whatToFeel={[
        "Activación de glúteos, cuádriceps y core",
        "Control costal y estabilidad pélvica durante todo el ejercicio"
      ]}
      whatToAvoid={[
        "Colapsar el pecho o arquear la espalda baja"
      ]}
      redFlags={[
        "Dolor en las rodillas o espalda baja"
      ]}
      regression={[
        "Realiza sentadillas hasta una silla o superficie elevada."
      ]}
    />
  );
} 