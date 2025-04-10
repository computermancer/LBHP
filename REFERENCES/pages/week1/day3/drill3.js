import DrillTemplate from '../../../components/DrillTemplate';

export default function SupportedBreathPatterning() {
  return (
    <DrillTemplate
      title="Drill 3: Supported Breath Patterning"
      backButtonText="Week 1 - Day 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Sit upright in a chair, feet flat on the floor.",
        "Hands resting gently on your lower ribs."
      ]}
      instructions={[
        "Inhale deeply into the belly and lower ribs.",
        "Exhale fully and feel the ribs drop back.",
        "Maintain slow, steady breaths throughout."
      ]}
      setsReps={[
        "Sets: 2",
        "Reps: 5–8 breath cycles per set",
        "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
        "Rest: Between sets or as needed"
      ]}
      whatToFeel={[
        "Expansion through the ribs and belly",
        "Relaxation with minimal upper chest movement"
      ]}
      whatToAvoid={[
        "Holding breath or forcing exhalation"
      ]}
      redFlags={[
        "Lightheadedness or discomfort"
      ]}
      regression={[
        "Lean slightly forward to provide better feedback."
      ]}
    />
  );
}
