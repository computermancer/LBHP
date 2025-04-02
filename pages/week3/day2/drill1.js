import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill1SeatedRibExpansionwithBreathControl() {
  return (
    <DrillTemplate
      title="Drill 1: Seated Rib Expansion with Breath Control"
      backButtonText="Week 3 - Day 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Sit upright in a firm chair, feet flat on the floor.",
        "Hands resting gently on the sides of your ribcage."
      ]}
      instructions={[
        "Inhale deeply through your nose, feeling ribs expand laterally.",
        "Exhale and allow the ribs to return to neutral.",
        "Focus on symmetrical expansion on both sides."
      ]}
      setsReps={[
        "Sets: 2",
        "Reps: 5–8 breath cycles per set",
        "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
        "Rest: As needed"
      ]}
      whatToFeel={[
        "Ribs expanding outward and back",
        "Steady breath with minimal upper chest movement"
      ]}
      whatToAvoid={[
        "Shallow breathing or shrugging shoulders"
      ]}
      redFlags={[
        "Dizziness or discomfort"
      ]}
      regression={[
        "Place hands on thighs for added stability."
      ]}
    />
  );
}
