import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill1HorseStancewithRibControl() {
  return (
    <DrillTemplate
      title="Drill 1: Horse Stance with Rib Control"
      backButtonText="Week 5 - Day 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Stand with feet wider than shoulder-width apart, toes slightly turned out.",
        "Arms extended forward or hands on hips."
      ]}
      instructions={[
        "Inhale to prepare.",
        "Exhale and lower hips until thighs are parallel to the floor.",
        "Hold for 30–45 seconds while maintaining rib and pelvic control."
      ]}
      setsReps={[
        "Sets: 2–3",
        "Reps: 2–3 holds",
        "Breath: Steady breathing throughout",
        "Rest: 30–45 seconds between holds"
      ]}
      whatToFeel={[
        "Thigh and glute activation",
        "Rib stability and core engagement"
      ]}
      whatToAvoid={[
        "Allowing knees to collapse inward",
        "Arching the back"
      ]}
      redFlags={[
        "Sharp knee or hip pain"
      ]}
      regression={[
        "Perform a higher stance to reduce intensity."
      ]}
    />
  );
}
