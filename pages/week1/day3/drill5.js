import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day3Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day3/drill4" 
        currentDay="/week1/day3" 
        nextDrill="/week1/day4/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Gentle Bilateral Rocking"
        week={1}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Arms resting comfortably by your sides."
        ]}
        instructions={[
          "Gently rock both knees side to side.",
          "Move within a comfortable range of motion.",
          "Return to center before switching sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow rocks per side",
          "Breath: Inhale at center, exhale as you rock",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Gentle mobility through the pelvis and lower back",
          "Relaxed movement with control"
        ]}
        whatToAvoid={[
          "Forcing the knees too far",
          "Tension through the spine"
        ]}
        redFlags={[
          "Sharp pain or discomfort"
        ]}
        regression={[
          "Reduce range of motion if needed."
        ]}
      />
    </div>
  );
}
