import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill1SupineRibExpansion() {
  return (
    <DrillTemplate
      title="Drill 1: Supine Rib Expansion with Breath"
      backButtonText="Week 2 - Day 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Lie on your back with knees bent and feet flat.",
        "Place your hands on your lower ribs."
      ]}
      instructions={[
        "Inhale deeply, feeling your ribs expand.",
        "Exhale slowly, allowing your ribs to relax.",
        "Focus on lateral rib expansion."
      ]}
      setsReps={[
        "Sets: 2",
        "Reps: 5–8 slow breaths per set",
        "Breath: Inhale for 4 counts, exhale for 4 counts",
        "Rest: Between sets or as needed"
      ]}
      whatToFeel={[
        "Rib expansion during inhalation",
        "Gentle rib compression during exhalation",
        "Relaxed breathing pattern"
      ]}
      whatToAvoid={[
        "Forcing the breath",
        "Shallow chest breathing",
        "Tensing the shoulders"
      ]}
      redFlags={[
        "Pain or discomfort in the ribs",
        "Difficulty breathing",
        "Dizziness or lightheadedness"
      ]}
      regression={[
        "Perform seated rib expansion if lying down is too challenging.",
        "Reduce the depth of breathing."
      ]}
    />
  );
} 
