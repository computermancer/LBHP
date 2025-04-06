import DrillTemplate from '../../../components/DrillTemplate';
import NavEspanol from '../../../../components/NavEspanol';

export default function Drill4QuadrupedRockBackwithBreathFocus() {
  return (
    <>
      <NavEspanol />
      <DrillTemplate
        title="Drill 4: Quadruped Rock Back with Breath Focus"
        backButtonText="Week 3 - Day 1"
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Begin on hands and knees, wrists under shoulders, knees under hips.",
          "Maintain a neutral spine and pelvis."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and slowly shift your hips back toward your heels.",
          "Inhale and return to the starting position."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Exhale to rock back, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth pelvic movement with core control",
          "Minimal arching or rounding of the spine"
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
