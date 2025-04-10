import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function BisagraDeCaderaConBanda() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 4: Bisagra de Cadera con Banda"
      backButtonText="Semana 1 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Coloca una banda de resistencia alrededor de tus muslos, justo encima de las rodillas.",
        "Párate con los pies separados al ancho de los hombros.",
        "Mantén una ligera tensión en la banda."
      ]}
      instructions={[
        "Empuja las caderas hacia atrás mientras mantienes la espalda recta.",
        "Siente la resistencia de la banda ayudando a activar los glúteos.",
        "Inclina el torso hacia adelante manteniendo el pecho elevado.",
        "Regresa a la posición inicial empujando las caderas hacia adelante."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 10-12",
        "Duración: 3-5 segundos por repetición",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Activación de los glúteos y los músculos posteriores del muslo.",
        "Resistencia constante de la banda durante el movimiento.",
        "Mantenimiento de la alineación de la columna."
      ]}
      whatToAvoid={[
        "Doblar la espalda o inclinar los hombros hacia adelante.",
        "Dejar que las rodillas se doblen demasiado.",
        "Movimientos bruscos o pérdida de control."
      ]}
      redFlags={[
        "Dolor en la parte baja de la espalda o las rodillas.",
        "Pérdida de equilibrio o tensión excesiva en la banda."
      ]}
      regression={[
        "Si la banda es demasiado resistente, usa una banda más ligera o elimínala.",
        "Reduce el rango de movimiento si es necesario."
      ]}
    />
  );
}
