import DrillTemplateEspanol from '../../../../components/DrillTemplateEspanol';

export default function MarchaEnDecúbitoSupinoConControlPélvico() {
  return (
    <DrillTemplateEspanol
      title="Ejercicio 4: Marcha en Decúbito Supino con Control Pélvico"
      backButtonText="Semana 2 - Día 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Acuéstate boca arriba con las rodillas flexionadas, pies apoyados.",
        "Manos descansando a los lados o en las costillas inferiores."
      ]}
      instructions={[
        "Exhala y levanta una rodilla hacia el pecho manteniendo el control de las costillas y la pelvis.",
        "Regresa a la posición inicial y cambia de lado."
      ]}
      setsReps={[
        "Series: 2-3",
        "Repeticiones: 8-10 repeticiones lentas por lado",
        "Respiración: Exhala durante el levantamiento, inhala para regresar",
        "Descanso: Según sea necesario"
      ]}
      whatToFeel={[
        "Control del core y la pelvis con movimiento suave de las piernas."
      ]}
      whatToAvoid={[
        "Arquear la espalda o perder el control pélvico."
      ]}
      redFlags={[
        "Dolor o malestar en las caderas o la espalda baja."
      ]}
      regression={[
        "Limita la altura del levantamiento de la pierna si es necesario."
      ]}
    />
  );
} 