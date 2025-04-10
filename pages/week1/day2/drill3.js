import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day2Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day2/drill2" 
        currentDay="/week1/day2" 
        nextDrill="/week1/day2/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Standing Hip Hinge with Wall Reach"
        week={1}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Stand facing away from a wall, feet hip-width apart.",
          "Position yourself about 6 inches away from the wall."
        ]}
        instructions={[
          "Push your hips back toward the wall while maintaining a neutral spine.",
          "Reach both hands forward as you hinge.",
          "Stop when your hips touch the wall lightly.",
          "Return to standing by driving hips forward."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow, controlled reps",
          "Breath: Inhale as you hinge, exhale as you return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Hamstrings and glutes activating during the hinge",
          "Length through the spine and engaged core"
        ]}
        whatToAvoid={[
          "Rounding the lower back",
          "Pushing hips too far back, causing balance loss"
        ]}
        redFlags={[
          "Pain or discomfort in the low back"
        ]}
        regression={[
          "Stand closer to the wall to reduce hinge depth."
        ]}
      />
    </div>
  );
}
