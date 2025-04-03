import DrillTemplate from '../../../components/DrillTemplate';

export default function HooklyingBellyBreathing() {
  return (
    <DrillTemplate
      title="Drill 2: Hooklying Belly Breathing"
      backButtonText="Week 1 - Day 1"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Lie on your back with knees bent and feet flat on the floor.",
        "Place your hands on your belly to feel the movement.",
        "Keep your lower back in a neutral position."
      ]}
      instructions={[
        "Take a slow, deep breath in through your nose, allowing your belly to expand.",
        "Feel your hands rise as your diaphragm descends.",
        "Exhale slowly through your mouth, letting your belly fall.",
        "Focus on expanding the sides and back of your ribcage as well."
      ]}
      setsReps={[
        "Sets: 2-3",
        "Reps: 10-12 breaths",
        "Breath: 4-5 seconds inhale, 4-5 seconds exhale",
        "Rest: 30 seconds between sets"
      ]}
      whatToFeel={[
        "Gentle expansion of the belly and lower ribcage",
        "Relaxation of the pelvic floor on inhale",
        "Soft engagement of the core on exhale"
      ]}
      whatToAvoid={[
        "Chest breathing or shoulder tension",
        "Holding your breath",
        "Forcing the movement"
      ]}
      redFlags={[
        "Dizziness or lightheadedness",
        "Pain in the chest or abdomen"
      ]}
      regression={[
        "Place a small pillow under your head if needed",
        "Reduce the number of breaths if fatiguing"
      ]}
    />
  );
}
