import DrillTemplate from '../../../components/DrillTemplate';

export default function Drill1QuadrupedReach() {
  return (
    <DrillTemplate
      title="Drill 1: Quadruped Reach with Rib Control"
      backButtonText="Week 2 - Day 2"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Begin in a quadruped position with hands under shoulders and knees under hips.",
        "Keep your spine in a neutral position."
      ]}
      instructions={[
        "Inhale and reach one arm forward while maintaining rib control.",
        "Exhale and return to the starting position.",
        "Alternate arms with each repetition."
      ]}
      setsReps={[
        "Sets: 2",
        "Reps: 5–8 slow reaches per side",
        "Breath: Inhale to reach, exhale to return",
        "Rest: Between sets or as needed"
      ]}
      whatToFeel={[
        "Core and rib stability",
        "Controlled arm movement",
        "Connection between breath and movement"
      ]}
      whatToAvoid={[
        "Collapsing through the spine",
        "Moving too quickly",
        "Losing rib control"
      ]}
      redFlags={[
        "Pain in the shoulders or back",
        "Loss of stability",
        "Difficulty maintaining position"
      ]}
      regression={[
        "Reduce the reach distance.",
        "Place a pillow under your knees."
      ]}
    />
  );
} 
