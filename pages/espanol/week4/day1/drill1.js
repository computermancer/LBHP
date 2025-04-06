import DrillTemplate from '../../../components/DrillTemplate';
import NavEspanol from '../../../../components/NavEspanol';

export default function Drill1SupineRibShiftwithBreathControl() {
  return (
    <>
      <NavEspanol />
      <DrillTemplate
        title="Drill 1: Supine Rib Shift with Breath Control"
        backButtonText="Week 4 - Day 1"
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat.",
          "Hands resting gently on the sides of your ribcage."
        ]}
        instructions={[
          "Inhale deeply through your nose, feeling ribs expand laterally.",
          "Exhale and shift the ribs slightly to one side while maintaining pelvis control.",
          "Return to center and alternate sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale to shift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Ribcage expanding and shifting laterally",
          "Pelvic stability while ribs move"
        ]}
        whatToAvoid={[
          "Losing pelvis control",
          "Forcing the rib shift"
        ]}
        redFlags={[
          "Pain or discomfort in the ribs or lower back"
        ]}
        regression={[
          "Perform with smaller rib shifts to improve control."
        ]}
      />
    </>
  );
}
