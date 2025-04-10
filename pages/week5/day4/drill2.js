import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day4Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day4/drill1" 
        currentDay="/week5/day4" 
        nextDrill="/week5/day4/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Chair Pushups with Pelvic Stability"
        week={5}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Place hands on the edge of a sturdy chair, feet extended behind in plank position.",
          "Maintain a straight line from head to heels."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and lower chest toward the chair, keeping ribs aligned.",
          "Inhale and push back to start."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 reps",
          "Breath: Exhale to push, inhale to lower",
          "Rest: 30–45 seconds between sets"
        ]}
        whatToFeel={[
          "Chest, shoulders, and core engaged",
          "Controlled movement with rib stability"
        ]}
        whatToAvoid={[
          "Allowing hips to drop or arching back"
        ]}
        redFlags={[
          "Pain or discomfort in shoulders"
        ]}
        regression={[
          "Perform pushups against a higher surface."
        ]}
      />
    </div>
  );
}
