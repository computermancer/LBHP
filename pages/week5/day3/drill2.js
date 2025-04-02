import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill2ForwardLungeswithRibControl() {
  return (
    <DrillTemplate
      title="Drill 2: Forward Lunges with Rib Control"
      backButtonText="Week 5 - Day 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Stand with feet shoulder-width apart.",
        "Hands on hips or extended forward for balance."
      ]}
      instructions={[
        "Inhale to prepare.",
        "Exhale and step forward into a lunge, lowering back knee toward the floor.",
        "Inhale and push back to starting position.",
        "Switch sides and repeat."
      ]}
      setsReps={[
        "Sets: 2–3",
        "Reps: 8–10 per side",
        "Breath: Exhale to lunge, inhale to return",
        "Rest: 30–45 seconds between sets"
      ]}
      whatToFeel={[
        "Glute, quad, and core engagement",
        "Rib and pelvis stability"
      ]}
      whatToAvoid={[
        "Knees collapsing inward or arching the back"
      ]}
      redFlags={[
        "Pain in knees or hips"
      ]}
      regression={[
        "Perform smaller lunges to reduce intensity."
      ]}
    />
  );
}
