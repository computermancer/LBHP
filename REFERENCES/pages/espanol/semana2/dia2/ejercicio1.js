import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function AlcanceEnPosicionCuadrupeda() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Alcance en Posición Cuadrúpeda con Control Costal"
      backButtonText="Semana 2 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Comienza en posición cuadrúpeda, manos bajo los hombros, rodillas bajo las caderas.",
        "Mantén una columna neutral con las costillas alineadas."
      ]}
      instructions={[
        "Inhala para prepararte.",
        "Exhala y extiende lentamente un brazo hacia adelante manteniendo el control de las costillas.",
        "Regresa a la posición inicial y alterna los lados."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 repeticiones lentas por lado",
        "Respiración: Exhala durante el alcance, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Estabilidad a través de las costillas y el core.",
        "Movimiento suave y controlado sin abrir las costillas."
      ]}
      whatToAvoid={[
        "Perder el control de las costillas o arquear la espalda baja."
      ]}
      redFlags={[
        "Dolor o malestar en los hombros o la espalda baja."
      ]}
      regression={[
        "Reduce el rango de movimiento si el control es difícil."
      ]}
    />
  );
} 