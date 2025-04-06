import DrillTemplate from '../../../components/DrillTemplate';
import NavEspanol from '../../../../components/NavEspanol';

export default function Drill4() {
  return (
    <>
      <NavEspanol />
      <DrillTemplate
        title="Drill 4: Wall Supported Split Squat Hold"
        backButtonText="Week 5 - Day 1"
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Stand facing away from a wall, one foot forward and the other foot resting on the wall.",
          "Lower into a split squat position."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and hold the bottom position of the split squat.",
          "Maintain rib and pelvis control throughout the hold."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 20–30 second holds per side",
          "Breath: Steady breathing throughout",
          "Rest: 30–45 seconds between holds"
        ]}
        whatToFeel={[
          "Glute, quad, and core engagement",
          "Stability in the pelvis and ribs"
        ]}
        whatToAvoid={[
          "Allowing the knee to collapse inward"
        ]}
        redFlags={[
          "Pain in the front knee or hip"
        ]}
        regression={[
          "Perform a higher split squat hold for reduced intensity."
        ]}
      />
    </>
  );
}
