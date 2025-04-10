import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day4Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day4/drill2" 
        currentDay="/week3/day4" 
        nextDrill="/week3/day4/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Quadruped Arm and Leg Reach with Control"
        week={3}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Begin on hands and knees, wrists under shoulders, knees under hips.",
          "Maintain a neutral spine and pelvis."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and extend one arm and the opposite leg without losing pelvis control.",
          "Inhale and return to starting position.",
          "Switch sides and repeat."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale to extend, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Core stability and balance",
          "Controlled extension with neutral spine"
        ]}
        whatToAvoid={[
          "Arching the back or losing balance"
        ]}
        redFlags={[
          "Pain in the lower back or shoulders"
        ]}
        regression={[
          "Perform with smaller movements for better control."
        ]}
      />
    </div>
  );
}
