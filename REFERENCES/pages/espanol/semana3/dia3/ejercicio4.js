import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio4SentadillaApoyadaEnParedConAlcance() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 4: Sentadilla Apoyada en Pared con Alcance"
      backButtonText="Semana 3 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Párate con la espalda contra la pared, pies ligeramente adelante.",
        "Brazos extendidos hacia adelante para mantener el equilibrio."
      ]}
      instructions={[
        "Exhala y baja lentamente a una sentadilla, manteniendo el control de las costillas y la pelvis.",
        "Mantén la posición durante 10-20 segundos.",
        "Inhala y regresa a la posición de pie."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 2-3 mantenimientos",
        "Respiración: Respiración constante durante todo el ejercicio",
        "Descanso: 30-60 segundos entre series"
      ]}
      whatToFeel={[
        "Activación de glúteos e isquiotibiales",
        "Estabilidad de la caja torácica durante la sentadilla"
      ]}
      whatToAvoid={[
        "Rodillas colapsando hacia adentro",
        "Perder el control de las costillas y la pelvis"
      ]}
      redFlags={[
        "Dolor agudo o malestar en las rodillas"
      ]}
      regression={[
        "Realiza una sentadilla más alta para reducir la intensidad."
      ]}
    />
  );
} 