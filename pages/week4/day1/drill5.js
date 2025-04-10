import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day1Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day1/drill4" 
        currentDay="/week4/day1" 
        nextDrill="/week4/day2/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Quadruped Rock Back with Reach Focus"
        week={4}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Begin on hands and knees, wrists under shoulders, knees under hips.",
          "Maintain a neutral spine and pelvis."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and slowly shift your hips back toward your heels while reaching one arm forward.",
          "Inhale and return to the starting position.",
          "Switch arms and repeat."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale to rock back, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth pelvic motion with core control",
          "Rib stability during reach"
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
