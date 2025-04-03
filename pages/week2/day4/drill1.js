import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill1SupineRibShift() {
  return (
    <DrillTemplate
      title="Drill 1: Supine Rib Shift with Breath"
      backButtonText="Week 2 - Day 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Lie on your back with knees bent, feet flat on the floor.",
        "Place hands on your lower ribs for feedback."
      ]}
      instructions={[
        "Inhale deeply, expanding the ribs laterally.",
        "Exhale and gently shift the ribs side to side.",
        "Return to center before switching sides."
      ]}
      setsReps={[
        "Sets: 2–3",
        "Reps: 8–10 slow shifts per side",
        "Breath: Exhale during shift, inhale to return",
        "Rest: As needed"
      ]}
      whatToFeel={[
        "Subtle motion through the ribs with minimal effort."
      ]}
      whatToAvoid={[
        "Arching the back or tensing the neck."
      ]}
      redFlags={[
        "Pain or discomfort in the ribs or spine."
      ]}
      regression={[
        "Reduce range of motion if needed."
      ]}
    />
  );
} 
