import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day2Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day2/drill1" 
        currentDay="/week5/day2" 
        nextDrill="/week5/day2/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Lateral Lunges with Breath Control"
        week={5}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Stand with feet hip-width apart, hands on hips or extended forward.",
          "Shift weight to one side, bending the knee."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and shift weight laterally, lowering into a lunge.",
          "Inhale and return to center.",
          "Switch sides and repeat."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale to lower, inhale to return",
          "Rest: 30–45 seconds between sets"
        ]}
        whatToFeel={[
          "Glute and adductor engagement",
          "Control and balance while shifting"
        ]}
        whatToAvoid={[
          "Collapsing knees or leaning forward"
        ]}
        redFlags={[
          "Pain in knees or hips"
        ]}
        regression={[
          "Perform smaller side shifts."
        ]}
      />
    </div>
  );
}
