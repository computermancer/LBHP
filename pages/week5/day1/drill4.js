import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day1Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day1/drill3" 
        currentDay="/week5/day1" 
        nextDrill="/week5/day1/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Wall Supported Split Squat Hold"
        week={5}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Stand facing away from a wall, one foot forward and the other foot resting on the wall.",
          "Lower into a split squat position."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and hold the bottom position of the split squat.",
          "Maintain rib and pelvis control throughout the hold."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 20–30 second holds per side",
          "Breath: Steady breathing throughout",
          "Rest: 30–45 seconds between holds"
        ]}
        whatToFeel={[
          "Glute, quad, and core engagement",
          "Stability in the pelvis and ribs"
        ]}
        whatToAvoid={[
          "Allowing the knee to collapse inward"
        ]}
        redFlags={[
          "Pain in the front knee or hip"
        ]}
        regression={[
          "Perform a higher split squat hold for reduced intensity."
        ]}
      />
    </div>
  );
}
