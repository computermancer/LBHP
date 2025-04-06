import DrillTemplateEspanol from '../../../components/DrillTemplateEspanol';
import NavEspanol from '../../../../components/NavEspanol';

export default function Drill2SeatedHipHinge() {
  return (
    <>
      <NavEspanol />
      <DrillTemplateEspanol
        title="Drill 2: Seated Hip Hinge with Breath"
        backButtonText="Week 2 - Day 2"
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit on a firm chair, feet flat, hands resting on your thighs."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and hinge forward from the hips while maintaining a neutral spine.",
          "Return to the starting position with control."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 controlled reps",
          "Breath: Exhale to hinge, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Stretch in the hamstrings and engagement through the core."
        ]}
        whatToAvoid={[
          "Rounding or arching the back."
        ]}
        redFlags={[
          "Pain or discomfort in the low back."
        ]}
        regression={[
          "Place hands on a table for additional support."
        ]}
      />
    </>
  );
} 
