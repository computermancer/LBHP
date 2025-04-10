import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function BisagraDeCaderaConPeso() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 5: Bisagra de Cadera con Peso"
      backButtonText="Semana 1 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Sostén un peso ligero (como una mancuerna o kettlebell) con ambas manos.",
        "Párate con los pies separados al ancho de los hombros.",
        "Mantén los brazos extendidos frente al cuerpo."
      ]}
      instructions={[
        "Empuja las caderas hacia atrás mientras inclinas el torso hacia adelante.",
        "Mantén la espalda recta y el pecho elevado.",
        "Baja el peso a lo largo de las piernas.",
        "Regresa a la posición inicial empujando las caderas hacia adelante."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10",
        "Duración: 3-5 segundos por repetición",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Activación de los glúteos y los músculos posteriores del muslo.",
        "Estiramiento en la parte posterior de las piernas.",
        "Mantenimiento de la alineación de la columna."
      ]}
      whatToAvoid={[
        "Doblar la espalda o inclinar los hombros hacia adelante.",
        "Dejar que las rodillas se doblen demasiado.",
        "Movimientos bruscos o pérdida de control del peso."
      ]}
      redFlags={[
        "Dolor en la parte baja de la espalda o las rodillas.",
        "Pérdida de equilibrio o tensión excesiva."
      ]}
      regression={[
        "Si el peso es demasiado pesado, usa un peso más ligero o elimínalo.",
        "Reduce el rango de movimiento si es necesario."
      ]}
    />
  );
}
