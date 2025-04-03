import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill4SupineMarching() {
  return (
    <DrillTemplate
      title="Drill 4: Supine Marching with Pelvic Control"
      backButtonText="Week 2 - Day 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Lie on your back with knees bent, feet flat.",
        "Hands resting by your sides or on lower ribs."
      ]}
      instructions={[
        "Exhale and lift one knee toward the chest while maintaining rib and pelvis control.",
        "Return to starting position and switch sides."
      ]}
      setsReps={[
        "Sets: 2–3",
        "Reps: 8–10 slow reps per side",
        "Breath: Exhale during lift, inhale to return",
        "Rest: As needed"
      ]}
      whatToFeel={[
        "Core and pelvis control with smooth leg motion."
      ]}
      whatToAvoid={[
        "Arching the back or losing pelvic control."
      ]}
      redFlags={[
        "Pain or discomfort in the hips or low back."
      ]}
      regression={[
        "Limit leg lift height if needed."
      ]}
    />
  );
} 
