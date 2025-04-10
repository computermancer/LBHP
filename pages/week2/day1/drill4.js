import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day1Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day1/drill3" 
        currentDay="/week2/day1" 
        nextDrill="/week2/day1/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Supine 90-90 Leg Lowering"
        week={2}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with hips and knees bent to 90 degrees.",
          "Arms resting by your sides or placed gently on your ribs."
        ]}
        instructions={[
          "Exhale and slowly lower one leg toward the floor.",
          "Keep the opposite leg and pelvis stable.",
          "Inhale to return to the starting position.",
          "Alternate sides with control."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale to lower, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Core control and stability.",
          "Smooth leg movement without pelvic shifting."
        ]}
        whatToAvoid={[
          "Arching the lower back or losing core engagement."
        ]}
        redFlags={[
          "Low back pain or instability."
        ]}
        regression={[
          "Lower legs less if maintaining control is difficult."
        ]}
      />
    </div>
  );
} 
