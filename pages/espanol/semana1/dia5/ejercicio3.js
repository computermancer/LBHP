import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioDeEstabilizacionAbdominal() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 3: Ejercicio de Estabilización Abdominal"
      backButtonText="Semana 1 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas dobladas y los pies apoyados en el suelo.",
        "Coloca los brazos extendidos hacia el techo.",
        "Mantén la espalda en contacto con el suelo."
      ]}
      instructions={[
        "Inhala profundamente preparándote para el movimiento.",
        "Al exhalar, baja lentamente un brazo hacia el suelo por encima de la cabeza.",
        "Mantén el otro brazo estable y la espalda en contacto con el suelo.",
        "Regresa el brazo a la posición inicial mientras inhalas."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 por lado",
        "Duración: 3-5 segundos por repetición",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Estabilidad en la zona abdominal.",
        "Control del movimiento del brazo.",
        "Activación de los músculos centrales."
      ]}
      whatToAvoid={[
        "Arquear la espalda.",
        "Mover la pelvis durante el ejercicio.",
        "Movimientos bruscos o rápidos."
      ]}
      redFlags={[
        "Dolor en la parte baja de la espalda.",
        "Tensión excesiva en el cuello o los hombros."
      ]}
      regression={[
        "Si el ejercicio es demasiado desafiante, reduce el rango de movimiento del brazo.",
        "Realiza menos repeticiones si es necesario."
      ]}
    />
  );
}
