import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day3Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day3/drill4" 
        currentDay="/week2/day3" 
        nextDrill="/week2/day4/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Wall Supported Deep Squat Hold"
        week={2}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Stand facing a wall, feet slightly wider than hip-width.",
          "Toes pointing slightly outward."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and slowly lower into a deep squat while maintaining rib and pelvic control.",
          "Hold the position briefly and return to standing."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 5–8 slow reps",
          "Breath: Exhale during descent, inhale to rise",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Opening through the hips and stability through the core."
        ]}
        whatToAvoid={[
          "Collapsing the chest or flaring the ribs."
        ]}
        redFlags={[
          "Pain or discomfort in knees or hips."
        ]}
        regression={[
          "Perform a partial squat if full depth is uncomfortable."
        ]}
      />
    </div>
  );
} 
