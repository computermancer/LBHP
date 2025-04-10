import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day3Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day3/drill2" 
        currentDay="/week3/day3" 
        nextDrill="/week3/day3/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Supine 90-90 Rib Shift with Breath"
        week={3}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with hips and knees at 90 degrees.",
          "Arms reaching toward the ceiling."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and gently shift ribs laterally to one side.",
          "Return to center and alternate sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale to shift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Controlled rib movement",
          "Core stability throughout"
        ]}
        whatToAvoid={[
          "Over-shifting or arching the back"
        ]}
        redFlags={[
          "Pain or discomfort in ribs or lower back"
        ]}
        regression={[
          "Perform with feet supported for added stability."
        ]}
      />
    </div>
  );
}
