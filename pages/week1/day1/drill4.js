import DrillTemplate from '../../../components/DrillTemplate';

export default function StandingPelvicRocking() {
  return (
    <DrillTemplate
      title="Drill 4: Standing Pelvic Rocking"
      backButtonText="Week 1 - Day 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Stand with feet hip-width apart",
        "Place hands on hips for feedback",
        "Keep knees slightly bent"
      ]}
      instructions={[
        "Gently rock your pelvis forward and backward",
        "Keep the movement small and controlled",
        "Maintain a stable upper body",
        "Let your breath guide the movement"
      ]}
      setsReps={[
        "Sets: 2-3",
        "Reps: 8-10 slow reps",
        "Breath: Exhale on backward tilt, inhale on forward tilt",
        "Rest: 30 seconds between sets"
      ]}
      whatToFeel={[
        "Smooth pelvic movement",
        "Stable legs and upper body",
        "Natural breathing pattern"
      ]}
      whatToAvoid={[
        "Moving the entire trunk",
        "Locking the knees",
        "Holding your breath"
      ]}
      redFlags={[
        "Loss of balance",
        "Pain in lower back or hips",
        "Dizziness"
      ]}
      regression={[
        "Perform with back against a wall",
        "Reduce range of motion",
        "Hold onto a stable surface for support"
      ]}
    />
  );
}
