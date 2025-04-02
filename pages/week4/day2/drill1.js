import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill1SeatedThoracicFlexionandExtension() {
  return (
    <DrillTemplate
      title="Drill 1: Seated Thoracic Flexion and Extension"
      backButtonText="Week 4 - Day 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Sit upright in a firm chair, feet flat on the floor.",
        "Hands resting on thighs or crossed over chest."
      ]}
      instructions={[
        "Inhale to prepare.",
        "Exhale and gently flex the thoracic spine forward.",
        "Inhale and extend the spine back to neutral."
      ]}
      setsReps={[
        "Sets: 2–3",
        "Reps: 8–10 slow reps",
        "Breath: Exhale to flex, inhale to extend",
        "Rest: As needed"
      ]}
      whatToFeel={[
        "Smooth thoracic motion",
        "Core engagement during flexion and extension"
      ]}
      whatToAvoid={[
        "Overarching or collapsing the spine"
      ]}
      redFlags={[
        "Sharp pain or discomfort"
      ]}
      regression={[
        "Perform smaller movements for better control."
      ]}
    />
  );
}
