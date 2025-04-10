import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day4Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day4/drill3" 
        currentDay="/week4/day4" 
        nextDrill="/week4/day4/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Supported Side-Lying Hip Abduction"
        week={4}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your side with knees slightly bent.",
          "Head supported by your arm."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and lift the top leg slightly without rotating the pelvis.",
          "Hold for 2–3 seconds, then return."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale to lift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Glute activation and hip control",
          "Pelvic stability throughout"
        ]}
        whatToAvoid={[
          "Rolling the pelvis or hiking the hip"
        ]}
        redFlags={[
          "Pain in the hips or lower back"
        ]}
        regression={[
          "Perform with a pillow between knees for support."
        ]}
      />
    </div>
  );
}
