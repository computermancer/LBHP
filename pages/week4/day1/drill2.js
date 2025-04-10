import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day1Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day1/drill1" 
        currentDay="/week4/day1" 
        nextDrill="/week4/day1/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Seated Hip Shifts with Breath Awareness"
        week={4}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a firm chair, feet flat on the floor.",
          "Hands resting on your thighs."
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
