import DrillTemplate from '../../../components/DrillTemplate';

export default function SeatedPelvicRocking() {
  return (
    <DrillTemplate
      title="Drill 3: Seated Pelvic Rocking"
      backButtonText="Week 1 - Day 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Sit on a firm chair or bench with feet flat on the floor.",
        "Place your hands on your hips to feel the movement.",
        "Keep your spine in a neutral position."
      ]}
      instructions={[
        "Gently rock your pelvis forward, creating a slight arch in your lower back.",
        "Then rock your pelvis backward, flattening your lower back.",
        "Move slowly and with control, focusing on the pelvic motion.",
        "Keep your upper body relatively still."
      ]}
      setsReps={[
        "Sets: 2-3",
        "Reps: 8-10 slow reps",
        "Breath: Exhale on the backward tilt, inhale on the forward tilt",
        "Rest: 30 seconds between sets"
      ]}
      whatToFeel={[
        "Gentle movement of the pelvis",
        "Subtle changes in lower back position",
        "Relaxed upper body"
      ]}
      whatToAvoid={[
        "Moving the entire trunk instead of just the pelvis",
        "Jerky or rushed movements",
        "Holding your breath"
      ]}
      redFlags={[
        "Pain in the lower back or hips",
        "Dizziness or balance issues"
      ]}
      regression={[
        "Perform the movement with your back against a wall for support",
        "Reduce the range of motion if needed"
      ]}
    />
  );
}
