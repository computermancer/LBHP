import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day2Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day2/drill4" 
        currentDay="/week3/day2" 
        nextDrill="/week3/day3/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Prone Hip IR and Extension Drill"
        week={3}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie face down with arms resting under your forehead.",
          "Legs extended and toes pointing slightly outward."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and rotate one hip internally without lifting the leg.",
          "Inhale and return to neutral.",
          "Perform hip extension by lifting the leg slightly off the floor."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale during movement, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Hip rotation and glute activation",
          "Control through the pelvis"
        ]}
        whatToAvoid={[
          "Arching the lower back"
        ]}
        redFlags={[
          "Pain in the hips or lower back"
        ]}
        regression={[
          "Perform with a pillow under hips for support."
        ]}
      />
    </div>
  );
}
