import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill1BodyweightSquatswithRibControl() {
  return (
    <DrillTemplate
      title="Drill 1: Bodyweight Squats with Rib Control"
      backButtonText="Week 5 - Day 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Stand with feet shoulder-width apart, toes slightly pointed outward.",
        "Arms extended forward or hands clasped in front of chest."
      ]}
      instructions={[
        "Inhale to prepare.",
        "Exhale and lower your hips down and back, keeping the ribs aligned over pelvis.",
        "Inhale to return to standing."
      ]}
      setsReps={[
        "Sets: 2–3",
        "Reps: 10–12 slow, controlled reps",
        "Breath: Exhale to lower, inhale to rise",
        "Rest: 30–45 seconds between sets"
      ]}
      whatToFeel={[
        "Engagement of glutes, quads, and core",
        "Rib control and pelvis stability throughout"
      ]}
      whatToAvoid={[
        "Collapsing the chest or overarching the lower back"
      ]}
      redFlags={[
        "Knee or lower back pain"
      ]}
      regression={[
        "Perform squats to a chair or elevated surface."
      ]}
    />
  );
}
