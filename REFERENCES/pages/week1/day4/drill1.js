import DrillTemplate from '../../../components/DrillTemplate';

export default function SupineDiaphragmReset() {
  return (
    <DrillTemplate
      title="Drill 1: Supine Diaphragm Reset"
      backButtonText="Week 1 - Day 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Lie on your back with knees bent, feet flat on the floor.",
        "Place one hand on your belly and the other on your chest."
      ]}
      instructions={[
        "Inhale deeply through your nose, allowing the belly to expand.",
        "Exhale softly, feeling the belly fall.",
        "Focus on relaxing the ribs and diaphragm."
      ]}
      setsReps={[
        "Sets: 2",
        "Reps: 5–8 breath cycles per set",
        "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
        "Rest: Between sets or as needed"
      ]}
      whatToFeel={[
        "Expansion of the belly and lower ribs",
        "Relaxed, controlled breathing"
      ]}
      whatToAvoid={[
        "Chest dominance or shallow breathing"
      ]}
      redFlags={[
        "Lightheadedness or difficulty maintaining position"
      ]}
      regression={[
        "Prop knees with a pillow to reduce tension."
      ]}
    />
  );
}
