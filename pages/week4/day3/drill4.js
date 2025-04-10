import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day3Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day3/drill3" 
        currentDay="/week4/day3" 
        nextDrill="/week4/day3/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Wall Supported Deep Squat Hold with Reach"
        week={4}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Stand with back against the wall, feet slightly forward.",
          "Arms reaching forward for balance."
        ]}
        instructions={[
          "Exhale and slowly lower into a squat, maintaining rib and pelvis control.",
          "Hold for 10–20 seconds.",
          "Inhale and return to standing."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 2–3 holds",
          "Breath: Steady breathing throughout",
          "Rest: 30–60 seconds between sets"
        ]}
        whatToFeel={[
          "Glute and hamstring activation",
          "Ribcage stability while maintaining squat"
        ]}
        whatToAvoid={[
          "Knees collapsing inward",
          "Losing rib and pelvis control"
        ]}
        redFlags={[
          "Sharp pain or discomfort in knees"
        ]}
        regression={[
          "Perform a higher squat for reduced intensity."
        ]}
      />
    </div>
  );
}
