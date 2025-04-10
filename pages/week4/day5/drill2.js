import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day5Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day5/drill1" 
        currentDay="/week4/day5" 
        nextDrill="/week4/day5/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Supine Pelvic Rock with Breath Focus"
        week={4}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Arms resting by your sides."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and gently rock your pelvis backward and forward.",
          "Maintain a neutral ribcage and pelvis throughout."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Exhale to rock, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth pelvic motion",
          "Controlled breathing with each movement"
        ]}
        whatToAvoid={[
          "Overarching or flattening the back"
        ]}
        redFlags={[
          "Pain or discomfort in the lower back"
        ]}
        regression={[
          "Perform with knees supported for reduced range."
        ]}
      />
    </div>
  );
}
