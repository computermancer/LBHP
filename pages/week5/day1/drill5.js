import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill5SupineMarchingwithCoreControl() {
  return (
    <DrillTemplate
      title="Drill 5: Supine Marching with Core Control"
      backButtonText="Week 5 - Day 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Lie on your back with knees bent, feet flat on the floor.",
        "Arms resting by your sides."
      ]}
      instructions={[
        "Inhale to prepare.",
        "Exhale and lift one foot off the floor, maintaining core stability.",
        "Inhale to return and alternate sides."
      ]}
      setsReps={[
        "Sets: 2–3",
        "Reps: 8–10 slow reps per side",
        "Breath: Exhale to lift, inhale to return",
        "Rest: As needed"
      ]}
      whatToFeel={[
        "Core control and stability",
        "Smooth, controlled leg movement"
      ]}
      whatToAvoid={[
        "Arching the lower back"
      ]}
      redFlags={[
        "Pain or discomfort in the lower back"
      ]}
      regression={[
        "Perform smaller marches to reduce intensity."
      ]}
    />
  );
}
