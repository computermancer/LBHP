import DrillTemplate from '../../../components/DrillTemplate';

export default function PosteriorPelvicTiltonWall() {
  return (
    <DrillTemplate
      title="Drill 2: Seated Posterior Pelvic Rocking"
      backButtonText="Week 1 - Day 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Sit upright in a firm chair, feet flat on the floor.",
        "Hands resting gently on your thighs."
      ]}
      instructions={[
        "Tilt pelvis backward (flattening low back) and then forward (arching low back).",
        "Move slowly and smoothly between positions.",
        "Use breath to guide the rhythm."
      ]}
      setsReps={[
        "Sets: 2–3",
        "Reps: 8–12 controlled reps",
        "Breath: Inhale forward, exhale backward",
        "Rest: As needed"
      ]}
      whatToFeel={[
        "Gentle rocking motion through pelvis",
        "Coordination of breath with movement"
      ]}
      whatToAvoid={[
        "Excessive arching or collapsing posture"
      ]}
      redFlags={[
        "Pain or discomfort in the low back"
      ]}
      regression={[
        "Use hands on hips to increase body awareness."
      ]}
    />
  );
}
