import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day1Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day1/drill3" 
        currentDay="/week1/day1" 
        nextDrill="/week1/day1/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Supine 90-90 Reach"
        week={1}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with hips and knees bent to 90 degrees (feet off floor).",
          "Arms reaching straight up to the ceiling."
        ]}
        instructions={[
          "Exhale and reach your arms toward the ceiling while gently pressing low back into floor.",
          "Maintain 90-90 leg position; don't let knees drift or chest lift.",
          "Inhale and return arms to starting position without losing core control."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 5–8 slow, controlled reps",
          "Breath: Exhale during the reach, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Gentle core activation with low back grounded.",
          "Tension through abs without bracing."
        ]}
        whatToAvoid={[
          "Flaring ribs or arching low back.",
          "Reaching from shoulders or straining neck."
        ]}
        redFlags={[
          "Neck pain or excessive tension.",
          "Loss of position or breath control."
        ]}
        regression={[
          "Place feet on a chair or bench if holding 90-90 position is too difficult."
        ]}
      />
    </div>
  );
}
