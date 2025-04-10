import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day1Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day1/drill1" 
        currentDay="/week3/day1" 
        nextDrill="/week3/day1/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Seated Hip Shift with Rib Stability"
        week={3}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright on a firm chair, feet flat on the floor.",
          "Hands resting gently on your thighs."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and gently shift one hip forward while maintaining rib stability.",
          "Return to neutral and alternate sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale to shift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth, controlled hip shifting",
          "Ribcage remaining neutral and stable"
        ]}
        whatToAvoid={[
          "Leaning or twisting the torso"
        ]}
        redFlags={[
          "Pain or discomfort in the hips or lower back"
        ]}
        regression={[
          "Perform with smaller shifts for better control."
        ]}
      />
    </div>
  );
}
