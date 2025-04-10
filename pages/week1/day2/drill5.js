import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day2Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day2/drill4" 
        currentDay="/week1/day2" 
        nextDrill="/week1/day3/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Wall Supported Squat Hold"
        week={1}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Stand with your back against a wall, feet about hip-width apart.",
          "Slide down into a partial squat with thighs above parallel."
        ]}
        instructions={[
          "Hold the squat position while maintaining neutral spine.",
          "Press heels gently into the floor to engage hamstrings.",
          "Breathe steadily throughout the hold."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 15–30 seconds per hold",
          "Breath: Maintain slow, steady breathing throughout",
          "Rest: 30–40 seconds between sets"
        ]}
        whatToFeel={[
          "Tension through quads, hamstrings, and glutes",
          "Stable pelvis and core engagement"
        ]}
        whatToAvoid={[
          "Arching or flattening the lower back",
          "Shifting weight onto toes"
        ]}
        redFlags={[
          "Knee or back pain"
        ]}
        regression={[
          "Reduce squat depth or hold for a shorter time."
        ]}
      />
    </div>
  );
}
