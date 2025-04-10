import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioDeEstabilizacionAvanzada() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 5: Ejercicio de Estabilización Avanzada"
      backButtonText="Semana 1 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas dobladas y los pies apoyados en el suelo.",
        "Extiende los brazos hacia el techo.",
        "Mantén la espalda en una posición neutral."
      ]}
      instructions={[
        "Inhala profundamente preparándote para el movimiento.",
        "Al exhalar, baja un brazo por encima de la cabeza mientras elevas la pierna opuesta.",
        "Mantén la estabilidad central y la espalda en contacto con el suelo.",
        "Regresa a la posición inicial mientras inhalas."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 por lado",
        "Duración: 3-5 segundos por repetición",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Estabilidad en todo el cuerpo.",
        "Control del movimiento coordinado.",
        "Activación de los músculos centrales."
      ]}
      whatToAvoid={[
        "Arquear la espalda.",
        "Perder la estabilidad central.",
        "Movimientos bruscos o rápidos."
      ]}
      redFlags={[
        "Dolor en la parte baja de la espalda.",
        "Tensión excesiva en el cuello o los hombros."
      ]}
      regression={[
        "Si el ejercicio es demasiado desafiante, practica primero los movimientos por separado.",
        "Reduce el rango de movimiento si es necesario."
      ]}
    />
  );
}
