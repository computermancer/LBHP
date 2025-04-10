import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day5Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day5/drill3" 
        currentDay="/week1/day5" 
        nextDrill="/week1/day5/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Supine Marching with Rib Control"
        week={1}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Arms resting by your sides or palms on your lower ribs."
        ]}
        instructions={[
          "Exhale and lift one knee toward your chest.",
          "Maintain rib and pelvis control throughout.",
          "Lower the leg back to the floor with control.",
          "Alternate sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale to lift, inhale to lower",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Core engagement and rib stability",
          "Smooth, controlled leg movement"
        ]}
        whatToAvoid={[
          "Arching the low back",
          "Losing control of pelvis and ribs"
        ]}
        redFlags={[
          "Low back pain or discomfort"
        ]}
        regression={[
          "Perform the drill with feet closer to the floor for reduced intensity."
        ]}
      />
    </div>
  );
}
