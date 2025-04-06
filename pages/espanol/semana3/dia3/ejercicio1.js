import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio1GatoVacaConConcienciaRespiratoria() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Gato-Vaca con Conciencia Respiratoria"
      backButtonText="Semana 3 - Día 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Comienza en posición de cuatro puntos, muñecas bajo los hombros, rodillas bajo las caderas.",
        "Mantén una columna neutral."
      ]}
      instructions={[
        "Inhala y arquea tu espalda, elevando tu pecho y coxis (Vaca).",
        "Exhala y redondea tu columna, metiendo la pelvis y la barbilla (Gato).",
        "Muévete lentamente y coordina con la respiración."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 repeticiones lentas",
        "Respiración: Inhala para extender, exhala para flexionar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Flexión y extensión espinal suave",
        "Movimiento controlado de pelvis y caja torácica"
      ]}
      whatToAvoid={[
        "Arquear o colapsar demasiado la postura"
      ]}
      redFlags={[
        "Dolor o malestar en la columna"
      ]}
      regression={[
        "Realiza movimientos más pequeños si es necesario."
      ]}
    />
  );
} 