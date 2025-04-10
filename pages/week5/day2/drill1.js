import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day2Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day1/drill5" 
        currentDay="/week5/day2" 
        nextDrill="/week5/day2/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Staggered Stance Squats with Rib Stability"
        week={5}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Stand with feet staggered, one foot slightly in front of the other.",
          "Arms extended forward or hands on hips."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and lower into a squat, keeping ribs aligned with pelvis.",
          "Inhale and return to standing.",
          "Switch sides and repeat."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale to lower, inhale to rise",
          "Rest: 30–45 seconds between sets"
        ]}
        whatToFeel={[
          "Glute, quad, and core engagement",
          "Stability in the pelvis and ribcage"
        ]}
        whatToAvoid={[
          "Knees collapsing inward or arching the back"
        ]}
        redFlags={[
          "Sharp pain or discomfort in knees"
        ]}
        regression={[
          "Perform a smaller range of motion."
        ]}
      />
    </div>
  );
}
