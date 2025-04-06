import DrillTemplate from '../../../components/DrillTemplate';
import NavEspanol from '../../../../components/NavEspanol';

export default function Drill5QuadrupedRockBackwithReachFocus() {
  return (
    <>
      <NavEspanol />
      <DrillTemplate
        title="Drill 5: Quadruped Rock Back with Reach Focus"
        backButtonText="Week 4 - Day 1"
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Begin on hands and knees, wrists under shoulders, knees under hips.",
          "Maintain a neutral spine and pelvis."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and slowly shift your hips back toward your heels while reaching one arm forward.",
          "Inhale and return to the starting position.",
          "Switch arms and repeat."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale to rock back, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth pelvic motion with core control",
          "Rib stability during reach"
        ]}
        whatToAvoid={[
          "Collapsing the lower back or pelvis"
        ]}
        redFlags={[
          "Pain in the knees or lower back"
        ]}
        regression={[
          "Perform with hands elevated on a surface for reduced load."
        ]}
      />
    </>
  );
}
