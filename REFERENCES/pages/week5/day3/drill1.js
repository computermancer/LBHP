import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill1StaggeredStanceRDLwithHipAwareness() {
  return (
    <DrillTemplate
      title="Drill 1: Staggered Stance RDL with Hip Awareness"
      backButtonText="Week 5 - Day 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Stand with feet hip-width apart, one foot slightly behind (kickstand position).",
        "Hinge at hips, keeping back neutral."
      ]}
      instructions={[
        "Inhale to prepare.",
        "Exhale and hinge forward, maintaining rib and pelvis control.",
        "Return to standing with control.",
        "Switch legs and repeat."
      ]}
      setsReps={[
        "Sets: 2–3",
        "Reps: 8–10 per side",
        "Breath: Exhale to hinge, inhale to return",
        "Rest: 30–45 seconds between sets"
      ]}
      whatToFeel={[
        "Glute and hamstring engagement",
        "Pelvic and rib stability"
      ]}
      whatToAvoid={[
        "Rounding or arching the back"
      ]}
      redFlags={[
        "Sharp pain in hamstrings or lower back"
      ]}
      regression={[
        "Perform a smaller hinge with less range of motion."
      ]}
    />
  );
}
