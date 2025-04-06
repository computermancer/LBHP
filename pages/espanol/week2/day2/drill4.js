import DrillTemplateEspanol from '../../../components/DrillTemplateEspanol';
import NavEspanol from '../../../../components/NavEspanol';

export default function Drill4WallHamstringMarching() {
  return (
    <>
      <NavEspanol />
      <DrillTemplateEspanol
        title="Drill 4: Wall Hamstring Marching"
        backButtonText="Week 2 - Day 2"
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with feet on a wall, knees and hips at 90 degrees."
        ]}
        instructions={[
          "Exhale and gently press one heel into the wall.",
          "Lift the opposite foot slightly off the wall.",
          "Return to starting position and switch sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow marches per side",
          "Breath: Exhale during lift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Hamstring engagement and pelvic stability."
        ]}
        whatToAvoid={[
          "Losing pelvic control or arching the lower back."
        ]}
        redFlags={[
          "Pain or discomfort in hips or low back."
        ]}
        regression={[
          "Keep both feet on the wall if maintaining stability is difficult."
        ]}
      />
    </>
  );
} 
