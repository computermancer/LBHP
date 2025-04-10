import DrillTemplate from '../../../components/DrillTemplate';

export default function SupineMarchingwithRibControl() {
  return (
    <DrillTemplate
      title="Drill 4: Supine Marching with Rib Control"
      backButtonText="Week 1 - Day 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Lie on your back with knees bent, feet flat on the floor.",
        "Arms resting by your sides or palms on your lower ribs."
      ]}
      instructions={[
        "Exhale and lift one knee toward your chest.",
        "Maintain rib and pelvis control throughout.",
        "Lower the leg back to the floor with control.",
        "Alternate sides."
      ]}
      setsReps={[
        "Sets: 2–3",
        "Reps: 8–10 slow reps per side",
        "Breath: Exhale to lift, inhale to lower",
        "Rest: As needed"
      ]}
      whatToFeel={[
        "Core engagement and rib stability",
        "Smooth, controlled leg movement"
      ]}
      whatToAvoid={[
        "Arching the low back",
        "Losing control of pelvis and ribs"
      ]}
      redFlags={[
        "Low back pain or discomfort"
      ]}
      regression={[
        "Perform the drill with feet closer to the floor for reduced intensity."
      ]}
    />
  );
}
