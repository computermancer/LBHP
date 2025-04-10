import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day3Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day3/drill4" 
        currentDay="/week4/day3" 
        nextDrill="/week4/day4/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Supine Spine Twist with Breath"
        week={4}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Arms extended out to the sides."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and gently lower knees to one side.",
          "Inhale and return to the center.",
          "Alternate sides with control."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale to rotate, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth spinal rotation",
          "Controlled movement with breath"
        ]}
        whatToAvoid={[
          "Twisting from the lower back"
        ]}
        redFlags={[
          "Pain or discomfort during rotation"
        ]}
        regression={[
          "Limit the range of motion for less intensity."
        ]}
      />
    </div>
  );
}
