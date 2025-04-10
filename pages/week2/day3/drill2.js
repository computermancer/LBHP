import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day3Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day3/drill1" 
        currentDay="/week2/day3" 
        nextDrill="/week2/day3/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Supine Diaphragm Reset with Reach"
        week={2}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Arms reaching straight up to the ceiling."
        ]}
        instructions={[
          "Inhale deeply into the ribs.",
          "Exhale and gently reach toward the ceiling while maintaining rib control.",
          "Return to the starting position."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Exhale during reach, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Activation of core and ribcage stability."
        ]}
        whatToAvoid={[
          "Flaring the ribs or arching the back."
        ]}
        redFlags={[
          "Pain or discomfort in the shoulders or ribs."
        ]}
        regression={[
          "Reduce the range of motion if needed."
        ]}
      />
    </div>
  );
} 
