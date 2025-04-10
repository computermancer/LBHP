import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day2Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day2/drill2" 
        currentDay="/week4/day2" 
        nextDrill="/week4/day2/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Seated Spine Rotation with Arm Reach"
        week={4}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a firm chair, feet flat on the floor.",
          "Hands resting on your thighs or crossed over your chest."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and rotate your upper body to one side, reaching one arm forward.",
          "Return to center before rotating to the other side."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale during rotation, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Controlled thoracic rotation",
          "Scapular movement with reach"
        ]}
        whatToAvoid={[
          "Rotating from the hips or lower back"
        ]}
        redFlags={[
          "Pain or discomfort during rotation"
        ]}
        regression={[
          "Perform with hands on knees for support."
        ]}
      />
    </div>
  );
}
