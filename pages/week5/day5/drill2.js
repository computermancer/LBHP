import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day5Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day5/drill1" 
        currentDay="/week5/day5" 
        nextDrill="/week5/day5/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Calf Raises with Rib and Pelvic Control"
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
          "Exhale and lift heels off the ground.",
          "Hold briefly, then return to starting position."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 10–12 reps",
          "Breath: Exhale to lift, inhale to lower",
          "Rest: 30–45 seconds between sets"
        ]}
        whatToFeel={[
          "Calf and foot engagement",
          "Rib and pelvis stability"
        ]}
        whatToAvoid={[
          "Collapsing arches or losing alignment"
        ]}
        redFlags={[
          "Pain in calves or ankles"
        ]}
        regression={[
          "Perform smaller range of motion."
        ]}
      />
    </div>
  );
}
