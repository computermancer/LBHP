import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function MarchaDeIsquiotibialesEnPared() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 4: Marcha de Isquiotibiales en Pared"
      backButtonText="Semana 2 - Día 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con los pies en una pared, rodillas y caderas a 90 grados."
      ]}
      instructions={[
        "Exhala y presiona suavemente un talón contra la pared.",
        "Levanta ligeramente el pie opuesto de la pared.",
        "Regresa a la posición inicial y cambia de lado."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 marchas lentas por lado",
        "Respiración: Exhala durante el levantamiento, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Activación de los isquiotibiales y estabilidad pélvica."
      ]}
      whatToAvoid={[
        "Perder el control pélvico o arquear la espalda baja."
      ]}
      redFlags={[
        "Dolor o malestar en las caderas o la espalda baja."
      ]}
      regression={[
        "Mantén ambos pies en la pared si mantener la estabilidad es difícil."
      ]}
    />
  );
} 