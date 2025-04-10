import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day3Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day3/drill2" 
        currentDay="/week2/day3" 
        nextDrill="/week2/day3/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Seated Spine Rotation with Breath"
        week={2}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a firm chair, feet flat, hands on your chest."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and rotate your upper body to one side while maintaining rib control.",
          "Return to center and alternate sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale during rotation, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Controlled rotation through the thoracic spine."
        ]}
        whatToAvoid={[
          "Over-rotating or losing core control."
        ]}
        redFlags={[
          "Pain or discomfort in the spine or ribs."
        ]}
        regression={[
          "Reduce the range of rotation if needed."
        ]}
      />
    </div>
  );
} 
