import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioDeMovilidadToracica() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 1: Ejercicio de Movilidad Torácica"
      backButtonText="Semana 1 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate de lado con las rodillas dobladas a 90 grados.",
        "Extiende el brazo superior hacia arriba.",
        "Mantén la cabeza apoyada en el brazo inferior."
      ]}
      instructions={[
        "Gira suavemente el torso superior hacia atrás.",
        "Mantén las caderas y las rodillas estables.",
        "Regresa a la posición inicial.",
        "Repite el movimiento en el otro lado."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 por lado",
        "Duración: 3-5 segundos por rotación",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Rotación suave en la parte media de la espalda.",
        "Estabilidad en la pelvis y la zona lumbar.",
        "Estiramiento en los músculos laterales del torso."
      ]}
      whatToAvoid={[
        "Forzar la rotación o movimientos bruscos.",
        "Mover la pelvis o las rodillas.",
        "Tensión en el cuello o los hombros."
      ]}
      redFlags={[
        "Dolor agudo en la espalda o las caderas.",
        "Mareos o sensación de inestabilidad."
      ]}
      regression={[
        "Si la rotación es demasiado desafiante, reduce el rango de movimiento o realiza menos repeticiones."
      ]}
    />
  );
}
