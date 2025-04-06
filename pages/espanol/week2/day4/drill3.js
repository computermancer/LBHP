import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill3SeatedThoracicFlexionExtension() {
  return (
    <DrillTemplate
      title="Drill 3: Seated Thoracic Flexion/Extension"
      backButtonText="Week 2 - Day 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Sit upright on a firm chair, feet flat, hands on your chest."
      ]}
      instructions={[
        "Inhale to prepare.",
        "Exhale and gently flex forward through the upper back.",
        "Inhale and extend through the thoracic spine, lifting the chest.",
        "Move smoothly between positions."
      ]}
      setsReps={[
        "Sets: 2–3",
        "Reps: 8–10 slow reps",
        "Breath: Exhale during flexion, inhale to extend",
        "Rest: As needed"
      ]}
      whatToFeel={[
        "Controlled flexion and extension through the thoracic spine."
      ]}
      whatToAvoid={[
        "Overarching or collapsing posture."
      ]}
      redFlags={[
        "Pain or discomfort in the spine."
      ]}
      regression={[
        "Perform with arms crossed for less strain."
      ]}
    />
  );
} 
