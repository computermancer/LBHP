import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day1Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day1/drill2" 
        currentDay="/week4/day1" 
        nextDrill="/week4/day1/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Hooklying Rib Expansion with Marching"
        week={4}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat.",
          "Hands resting on the sides of your ribs."
        ]}
        instructions={[
          "Inhale deeply, expanding the ribs.",
          "Exhale and lift one knee toward your chest while maintaining rib control.",
          "Return to starting position and alternate sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale to lift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Core engagement and rib stability",
          "Smooth, controlled leg movement"
        ]}
        whatToAvoid={[
          "Arching the lower back"
        ]}
        redFlags={[
          "Pain or discomfort in the lower back"
        ]}
        regression={[
          "Perform with feet closer to the floor for reduced intensity."
        ]}
      />
    </div>
  );
}
