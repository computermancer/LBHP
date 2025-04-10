import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day4Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day4/drill4" 
        currentDay="/week3/day4" 
        nextDrill="/week3/day5/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Supported Side-Lying Hip Abduction"
        week={3}
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
