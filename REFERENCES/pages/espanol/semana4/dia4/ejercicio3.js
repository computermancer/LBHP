import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function Ejercicio3PresionDeIsquiotibialesEnParedConEnfoqueRespiratorio() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 3: Presión de Isquiotibiales en Pared con Enfoque Respiratorio"
      backButtonText="Semana 4 - Día 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con los pies en la pared, rodillas a 90 grados.",
        "Brazos descansando a los lados."
      ]}
      instructions={[
        "Exhala y presiona suavemente los talones contra la pared.",
        "Mantén durante 5-8 segundos mientras mantienes el control pélvico.",
        "Inhala y relaja."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: Mantenimientos de 5-8 segundos",
        "Respiración: Respiración constante durante todo el ejercicio",
        "Descanso: 30 segundos entre series"
      ]}
      whatToFeel={[
        "Activación de isquiotibiales y estabilidad pélvica",
        "Presión controlada sin arquear"
      ]}
      whatToAvoid={[
        "Empujar con los dedos de los pies o levantar las caderas"
      ]}
      redFlags={[
        "Dolor agudo o calambres"
      ]}
      regression={[
        "Mueve los pies ligeramente más abajo en la pared para reducir la intensidad."
      ]}
    />
  );
} 