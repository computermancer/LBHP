import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day3Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day3/drill1" 
        currentDay="/week1/day3" 
        nextDrill="/week1/day3/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Rhythmic Reach and Roll"
        week={1}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with arms extended overhead.",
          "Knees bent, feet flat on the floor."
        ]}
        instructions={[
          "Reach one arm up and across your body as if rolling over.",
          "Let your head and upper back follow the movement.",
          "Return to the starting position."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Inhale before the reach, exhale as you roll",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth, flowing movement through the spine",
          "Gentle stretch through the upper back and ribs"
        ]}
        whatToAvoid={[
          "Jerky or rushed movements",
          "Losing control of the rolling motion"
        ]}
        redFlags={[
          "Pain in the spine or shoulders"
        ]}
        regression={[
          "Bend knees closer to the chest for added control."
        ]}
      />
    </div>
  );
}
