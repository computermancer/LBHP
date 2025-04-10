import DrillTemplate from '../../../components/DrillTemplate';

export default function SeatedBreathandPelvicAwareness() {
  return (
    <DrillTemplate
      title="Drill 5: Seated Breath and Pelvic Awareness"
      backButtonText="Week 1 - Day 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Sit upright in a firm chair, feet flat on the floor.",
        "Hands gently resting on your belly and lower ribs."
      ]}
      instructions={[
        "Inhale deeply into your belly and ribs.",
        "Exhale fully while maintaining a neutral pelvis.",
        "Maintain awareness of rib and pelvis position throughout."
      ]}
      setsReps={[
        "Sets: 2",
        "Reps: 5–8 breath cycles per set",
        "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
        "Rest: Between sets or as needed"
      ]}
      whatToFeel={[
        "Awareness of rib expansion and pelvic control",
        "Smooth, steady breath with minimal upper chest involvement"
      ]}
      whatToAvoid={[
        "Overextending or collapsing posture",
        "Shallow chest breathing"
      ]}
      redFlags={[
        "Difficulty maintaining breath control"
      ]}
      regression={[
        "Place a pillow behind the lower back for added support."
      ]}
    />
  );
}
