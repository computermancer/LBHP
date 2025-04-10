import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio5TorsiónEspinalSupinaConRespiración() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 5: Torsión Espinal Supina con Respiración"
      backButtonText="Semana 3 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas flexionadas, pies apoyados en el suelo.",
        "Brazos extendidos hacia los lados."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhala y baja suavemente las rodillas hacia un lado.",
        "Inhala y regresa al centro.",
        "Alterna los lados con control."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 por lado",
        "Respiración: Exhala para rotar, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Rotación espinal suave",
        "Movimiento controlado con la respiración"
      ]}
      whatToAvoid={[
        "Torsión desde la espalda baja"
      ]}
      redFlags={[
        "Dolor o malestar durante la rotación"
      ]}
      regression={[
        "Limita el rango de movimiento para menor intensidad."
      ]}
    />
  );
} 