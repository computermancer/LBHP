import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day4Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day3/drill5" 
        currentDay="/week5/day4" 
        nextDrill="/week5/day4/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Wall Pushups with Rib Stability"
        week={5}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Stand facing a wall, hands placed slightly wider than shoulder-width.",
          "Feet hip-width apart, body in a straight line."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and lower chest toward the wall, maintaining rib and pelvis control.",
          "Inhale and push back to starting position."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 reps",
          "Breath: Exhale to push, inhale to lower",
          "Rest: 30–45 seconds between sets"
        ]}
        whatToFeel={[
          "Chest, shoulders, and core engaged",
          "Maintained alignment of rib and pelvis"
        ]}
        whatToAvoid={[
          "Arching the lower back or losing core control"
        ]}
        redFlags={[
          "Pain in shoulders or wrists"
        ]}
        regression={[
          "Perform with a higher incline (closer to wall)."
        ]}
      />
    </div>
  );
}
