import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day2Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day2/drill1" 
        currentDay="/week4/day2" 
        nextDrill="/week4/day2/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Supine 90-90 Leg Lowering with Breath"
        week={4}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with hips and knees at 90 degrees.",
          "Arms resting by your sides."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and slowly lower one leg toward the floor while maintaining rib control.",
          "Inhale to return to starting position and alternate sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale to lower, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Core engagement while maintaining rib control",
          "Smooth leg motion with minimal arching"
        ]}
        whatToAvoid={[
          "Arching the lower back"
        ]}
        redFlags={[
          "Pain or discomfort in lower back"
        ]}
        regression={[
          "Limit the range of motion for better control."
        ]}
      />
    </div>
  );
}
