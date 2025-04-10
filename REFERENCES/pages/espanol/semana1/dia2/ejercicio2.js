import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function RotacionToracicaSentado() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 2: Rotación Torácica Sentado"
      backButtonText="Semana 1 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Siéntate en una silla firme con los pies apoyados en el suelo.",
        "Coloca las manos detrás de la cabeza con los codos abiertos."
      ]}
      instructions={[
        "Mantén la pelvis estable y gira suavemente el torso hacia un lado.",
        "Siente el estiramiento en la parte media de la espalda.",
        "Regresa al centro y repite hacia el otro lado.",
        "Mantén la respiración suave y controlada durante todo el movimiento."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 6-8 por lado",
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
        "Mover la pelvis o inclinar el cuerpo.",
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
