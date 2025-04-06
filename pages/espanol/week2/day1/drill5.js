import DrillTemplate from '../../../components/DrillTemplate';
import NavEspanol from '../../../../components/NavEspanol';

export default function WallSupportedHeelPress() {
  return (
    <>
      <NavEspanol />
      <DrillTemplate
        title="Drill 5: Wall Supported Heel Press"
        backButtonText="Week 2 - Day 1"
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with feet on a wall, knees and hips at 90 degrees.",
          "Arms resting by your sides or on your ribs."
        ]}
        instructions={[
          "Press both heels gently into the wall.",
          "Maintain contact with the wall and focus on engaging the hamstrings.",
          "Hold for 5–10 seconds, then relax."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 5–8 controlled presses",
          "Breath: Exhale during press, inhale to release",
          "Rest: 20–40 seconds between sets"
        ]}
        whatToFeel={[
          "Hamstring activation and subtle core engagement."
        ]}
        whatToAvoid={[
          "Pressing too hard or lifting the pelvis."
        ]}
        redFlags={[
          "Cramping or sharp discomfort."
        ]}
        regression={[
          "Move feet slightly lower on the wall to reduce intensity."
        ]}
      />
    </>
  );
} 
