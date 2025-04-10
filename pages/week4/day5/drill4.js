import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day5Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day5/drill3" 
        currentDay="/week4/day5" 
        nextDrill="/week4/day5/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Wall Supported Marching with Rib Stability"
        week={4}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with feet on the wall, knees at 90 degrees.",
          "Arms resting by your sides."
        ]}
        instructions={[
          "Exhale and gently press your heels into the wall.",
          "Lift one foot slightly off the wall while maintaining rib control.",
          "Return to starting position and alternate sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale to lift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Core activation and rib stability",
          "Smooth, controlled leg movement"
        ]}
        whatToAvoid={[
          "Arching the lower back"
        ]}
        redFlags={[
          "Pain or discomfort in the lower back"
        ]}
        regression={[
          "Perform smaller marches to reduce intensity."
        ]}
      />
    </div>
  );
}
