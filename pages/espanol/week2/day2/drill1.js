import DrillTemplateEspanol from '../../../components/DrillTemplateEspanol';
import NavEspanol from '../../../../components/NavEspanol';

export default function Drill1QuadrupedReach() {
  return (
    <>
      <NavEspanol />
      <DrillTemplateEspanol
        title="Drill 1: Quadruped Reach with Rib Control"
        backButtonText="Week 2 - Day 2"
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Start in a quadruped position, hands under shoulders, knees under hips.",
          "Maintain a neutral spine with ribs aligned."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and slowly reach one arm forward while maintaining rib control.",
          "Return to the starting position and alternate sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale during the reach, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Stability through the ribs and core.",
          "Smooth, controlled motion with no rib flaring."
        ]}
        whatToAvoid={[
          "Losing rib control or arching the lower back."
        ]}
        redFlags={[
          "Pain or discomfort in the shoulders or low back."
        ]}
        regression={[
          "Reduce range of motion if control is difficult."
        ]}
      />
    </>
  );
} 
