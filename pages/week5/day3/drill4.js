import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day3Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day3/drill3" 
        currentDay="/week5/day3" 
        nextDrill="/week5/day3/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Bilateral Glute Bridge with Rib and Pelvic Control"
        week={5}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Arms resting by your sides."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and lift hips toward the ceiling while maintaining rib control.",
          "Hold briefly, then return to starting position."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 reps",
          "Breath: Exhale to lift, inhale to lower",
          "Rest: 30–45 seconds between sets"
        ]}
        whatToFeel={[
          "Glutes, hamstrings, and core engaged",
          "Pelvis and rib stability maintained"
        ]}
        whatToAvoid={[
          "Overarching the lower back"
        ]}
        redFlags={[
          "Pain in the lower back or hips"
        ]}
        regression={[
          "Perform a smaller range of motion."
        ]}
      />
    </div>
  );
}
