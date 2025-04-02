import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill3SeatedThoracicFlexionExtension() {
  return (
    <DrillTemplate
      title="Drill 3: Seated Thoracic Flexion/Extension"
      backButtonText="Week 2 - Day 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Sit upright in a firm chair with feet flat.",
        "Place your hands on your chest."
      ]}
      instructions={[
        "Inhale to prepare.",
        "Exhale and rotate your upper body to one side.",
        "Return to center and alternate sides."
      ]}
      setsReps={[
        "Sets: 2",
        "Reps: 5–8 slow rotations per side",
        "Breath: Exhale during rotation, inhale to return",
        "Rest: Between sets or as needed"
      ]}
      whatToFeel={[
        "Controlled rotation through the thoracic spine",
        "Core stability",
        "Connection between breath and movement"
      ]}
      whatToAvoid={[
        "Over-rotating",
        "Losing core control",
        "Moving too quickly"
      ]}
      redFlags={[
        "Pain or discomfort in the spine",
        "Loss of balance",
        "Difficulty maintaining posture"
      ]}
      regression={[
        "Reduce the range of rotation.",
        "Place your hands on the chair for support."
      ]}
    />
  );
} 
