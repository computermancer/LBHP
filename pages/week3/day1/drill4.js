import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day1Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day1/drill3" 
        currentDay="/week3/day1" 
        nextDrill="/week3/day1/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Quadruped Rock Back with Breath Focus"
        week={3}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Begin on hands and knees, wrists under shoulders, knees under hips.",
          "Maintain a neutral spine and pelvis."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and slowly shift your hips back toward your heels.",
          "Inhale and return to the starting position."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Exhale to rock back, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth pelvic movement with core control",
          "Minimal arching or rounding of the spine"
        ]}
        whatToAvoid={[
          "Collapsing the lower back or pelvis"
        ]}
        redFlags={[
          "Pain in the knees or lower back"
        ]}
        regression={[
          "Perform with hands elevated on a surface for reduced load."
        ]}
      />
    </div>
  );
}
