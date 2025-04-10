import DrillTemplate from '../../../components/DrillTemplate';

export default function SideLyingRibExpansion() {
  return (
    <DrillTemplate
      title="Drill 1: Side-Lying Rib Expansion"
      backButtonText="Week 1 - Day 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Lie on your side with knees bent at 90 degrees and stacked.",
        "Rest your bottom arm under your head for support."
      ]}
      instructions={[
        "Inhale deeply into the bottom side of your ribs.",
        "Feel the ribs expanding laterally as you breathe in.",
        "Exhale slowly and let the ribs fall naturally.",
        "Focus on directing the breath to the lower ribcage."
      ]}
      setsReps={[
        "Sets: 2",
        "Reps: 5–8 breath cycles per set",
        "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
        "Rest: Between sets or as needed"
      ]}
      whatToFeel={[
        "Expansion of the lower ribs.",
        "Controlled, relaxed breath with no chest dominance."
      ]}
      whatToAvoid={[
        "Breathing only into the upper chest.",
        "Collapsing or losing rib position."
      ]}
      redFlags={[
        "Dizziness or difficulty maintaining position."
      ]}
      regression={[
        "Prop your torso with a pillow for comfort and stability."
      ]}
    />
  );
}
