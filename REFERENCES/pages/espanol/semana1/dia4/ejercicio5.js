import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function EjercicioDeMovilidadGeneral() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 5: Ejercicio de Movilidad General"
      backButtonText="Semana 1 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate en una silla con la espalda recta.",
        "Mantén los hombros relajados.",
        "Coloca las manos en los muslos."
      ]}
      instructions={[
        "Realiza movimientos suaves y controlados de rotación del torso.",
        "Mantén la pelvis estable.",
        "Incluye movimientos de flexión y extensión del cuello.",
        "Combina movimientos de hombros y brazos."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 por movimiento",
        "Duración: 3-5 segundos por movimiento",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Movimiento fluido y coordinado.",
        "Estabilidad en la parte central del cuerpo.",
        "Liberación de tensión en diferentes áreas."
      ]}
      whatToAvoid={[
        "Movimientos bruscos o forzados.",
        "Tensión excesiva en cualquier área.",
        "Pérdida de control o equilibrio."
      ]}
      redFlags={[
        "Dolor agudo en cualquier parte del cuerpo.",
        "Mareos o sensación de inestabilidad."
      ]}
      regression={[
        "Si algún movimiento es demasiado desafiante, reduce el rango o la velocidad.",
        "Realiza menos repeticiones si es necesario."
      ]}
    />
  );
}
