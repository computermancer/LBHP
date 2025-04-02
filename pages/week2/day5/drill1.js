import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill1CrocodileBreathing() {
  return (
    <DrillTemplate
      title="Drill 1: Crocodile Breathing with Rib Expansion"
      backButtonText="Week 2 - Day 5"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Lie on your stomach with your forehead resting on your hands.",
        "Keep your legs straight and relaxed."
      ]}
      instructions={[
        "Inhale deeply, allowing your ribs to expand into the ground.",
        "Exhale slowly, feeling the ribs gently compress.",
        "Maintain a relaxed neck and shoulders throughout."
      ]}
      setsReps={[
        "Sets: 2",
        "Reps: 5–8 slow breaths per set",
        "Breath: Inhale for 4 counts, exhale for 4 counts",
        "Rest: Between sets or as needed"
      ]}
      whatToFeel={[
        "Rib expansion into the ground during inhalation",
        "Gentle rib compression during exhalation",
        "Relaxed breathing pattern"
      ]}
      whatToAvoid={[
        "Forcing the breath",
        "Tensing the neck or shoulders",
        "Over-arching the back"
      ]}
      redFlags={[
        "Pain or discomfort in the back or ribs",
        "Difficulty breathing",
        "Dizziness or lightheadedness"
      ]}
      regression={[
        "Place a pillow under your chest for support.",
        "Reduce the breathing count to 3 counts."
      ]}
    />
  );
} 
