import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio3AbduccionDeCaderaEnDecubitoLateralConEnfoqueRespiratorio() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 3: Abducción de Cadera en Decúbito Lateral con Enfoque Respiratorio"
      backButtonText="Semana 5 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate de lado con las rodillas ligeramente flexionadas, apoyando la cabeza con el brazo.",
        "Mano superior descansando en la cadera o al frente para mantener el equilibrio."
      ]}
      instructions={[
        "Inhala para preparar.",
        "Exhala y levanta la pierna superior mientras mantienes la estabilidad de la pelvis.",
        "Inhala para regresar a la posición inicial."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 por lado",
        "Respiración: Exhala para levantar, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Activación de glúteos y cadera",
        "Estabilidad en la pelvis durante el movimiento"
      ]}
      whatToAvoid={[
        "Rodar la pelvis hacia atrás"
      ]}
      redFlags={[
        "Dolor agudo en la cadera o espalda baja"
      ]}
      regression={[
        "Realiza elevaciones más pequeñas para mejor control."
      ]}
    />
  );
} 