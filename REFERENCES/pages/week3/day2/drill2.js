import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill2SupineMarchingwithCoreControl() {
  return (
    <DrillTemplate
      title="Drill 2: Supine Marching with Core Control"
      backButtonText="Week 3 - Day 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Lie on your back with knees bent, feet flat.",
        "Arms resting by your sides."
      ]}
      instructions={[
        "Exhale and lift one knee toward your chest.",
        "Inhale and return to the starting position.",
        "Alternate sides while maintaining rib and pelvis control."
      ]}
      setsReps={[
        "Sets: 2–3",
        "Reps: 8–10 reps per side",
        "Breath: Exhale to lift, inhale to return",
        "Rest: As needed"
      ]}
      whatToFeel={[
        "Core engagement and rib stability",
        "Smooth, controlled leg movement"
      ]}
      whatToAvoid={[
        "Arching the lower back"
      ]}
      redFlags={[
        "Pain or discomfort in the lower back"
      ]}
      regression={[
        "Perform with feet closer to the floor for reduced intensity."
      ]}
    />
  );
}
