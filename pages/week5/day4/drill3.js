import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day4Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day4/drill2" 
        currentDay="/week5/day4" 
        nextDrill="/week5/day4/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Floor Pushups with Rib and Pelvic Control"
        week={5}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Start in a plank position, hands slightly wider than shoulder-width.",
          "Maintain rib and pelvis control."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and lower chest to the floor.",
          "Inhale and push back to starting position."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 6–8 reps",
          "Breath: Exhale to push, inhale to lower",
          "Rest: 45–60 seconds between sets"
        ]}
        whatToFeel={[
          "Chest, triceps, and core engaged",
          "Stable rib and pelvis position"
        ]}
        whatToAvoid={[
          "Collapsing through shoulders or arching back"
        ]}
        redFlags={[
          "Pain in shoulders or wrists"
        ]}
        regression={[
          "Perform on knees or with reduced range."
        ]}
      />
    </div>
  );
}
