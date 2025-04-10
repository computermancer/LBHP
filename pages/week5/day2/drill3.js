import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day2Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day2/drill2" 
        currentDay="/week5/day2" 
        nextDrill="/week5/day2/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Side-Lying Hip Abduction with Breath Focus"
        week={5}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your side with knees slightly bent, supporting head with arm.",
          "Top hand resting on your hip or in front for balance."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and lift the top leg while maintaining pelvis stability.",
          "Inhale to return to start."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale to lift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Glute and hip engagement",
          "Stability in pelvis during movement"
        ]}
        whatToAvoid={[
          "Rolling the pelvis backward"
        ]}
        redFlags={[
          "Sharp pain in the hip or lower back"
        ]}
        regression={[
          "Perform smaller lifts for control."
        ]}
      />
    </div>
  );
}
