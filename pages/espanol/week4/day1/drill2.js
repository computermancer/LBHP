import DrillTemplate from '../../../components/DrillTemplate';
import NavEspanol from '../../../../components/NavEspanol';

export default function Drill2SeatedHipShiftswithBreathAwareness() {
  return (
    <>
      <NavEspanol />
      <DrillTemplate
        title="Drill 2: Seated Hip Shifts with Breath Awareness"
        backButtonText="Week 4 - Day 1"
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a firm chair, feet flat on the floor.",
          "Hands resting on your thighs."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and gently shift one hip forward while maintaining rib stability.",
          "Return to neutral and alternate sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale to shift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth, controlled hip shifting",
          "Ribcage remaining neutral and stable"
        ]}
        whatToAvoid={[
          "Leaning or twisting the torso"
        ]}
        redFlags={[
          "Pain or discomfort in the hips or lower back"
        ]}
        regression={[
          "Perform with smaller shifts for better control."
        ]}
      />
    </>
  );
}
