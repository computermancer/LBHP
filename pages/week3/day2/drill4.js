import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day2Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day2/drill3" 
        currentDay="/week3/day2" 
        nextDrill="/week3/day2/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Wall Hamstring March with Rib Control"
        week={3}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with feet on the wall, knees bent at 90 degrees.",
          "Arms resting by your sides."
        ]}
        instructions={[
          "Exhale and press both heels into the wall.",
          "Lift one foot slightly off the wall without losing rib control.",
          "Return and switch sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale to lift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Hamstring and core activation",
          "Stable ribcage with controlled movement"
        ]}
        whatToAvoid={[
          "Lifting the hips or arching the back"
        ]}
        redFlags={[
          "Pain or discomfort in the hips or lower back"
        ]}
        regression={[
          "Perform smaller marches for reduced intensity."
        ]}
      />
    </div>
  );
}
