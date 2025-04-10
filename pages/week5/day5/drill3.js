import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day5Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day5/drill2" 
        currentDay="/week5/day5" 
        nextDrill="/week5/day5/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Tib Raises with Breath Awareness"
        week={5}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Stand with feet hip-width apart, hands on hips or a wall for support.",
          "Maintain rib and pelvis alignment."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and lift toes off the ground, shifting weight to heels.",
          "Hold briefly, then return to starting position."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 10–12 reps",
          "Breath: Exhale to lift, inhale to lower",
          "Rest: 30–45 seconds between sets"
        ]}
        whatToFeel={[
          "Engagement of tibialis anterior",
          "Controlled movement with rib stability"
        ]}
        whatToAvoid={[
          "Leaning backward or losing balance"
        ]}
        redFlags={[
          "Pain in shins or ankles"
        ]}
        regression={[
          "Perform smaller lifts for control."
        ]}
      />
    </div>
  );
}
