import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill2SupineDiaphragmReset() {
  return (
    <DrillTemplate
      title="Drill 2: Supine Diaphragm Reset with Reach"
      backButtonText="Week 2 - Day 3"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Lie on your back with knees bent and feet flat.",
        "Place your hands on your lower ribs."
      ]}
      instructions={[
        "Inhale and expand your ribs laterally.",
        "Exhale and reach one arm toward the ceiling.",
        "Return to starting position and alternate arms."
      ]}
      setsReps={[
        "Sets: 2",
        "Reps: 5–8 slow reaches per side",
        "Breath: Inhale to prepare, exhale to reach",
        "Rest: Between sets or as needed"
      ]}
      whatToFeel={[
        "Rib expansion during inhalation",
        "Core activation during reach",
        "Controlled arm movement"
      ]}
      whatToAvoid={[
        "Rib flaring",
        "Back arching",
        "Moving too quickly"
      ]}
      redFlags={[
        "Pain in the shoulders or ribs",
        "Loss of rib control",
        "Difficulty breathing"
      ]}
      regression={[
        "Reduce the reach distance.",
        "Keep both arms at your sides."
      ]}
    />
  );
} 
