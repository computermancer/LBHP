import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day3Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day2/drill5" 
        currentDay="/week2/day3" 
        nextDrill="/week2/day3/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Hooklying Pelvic Clocks"
        week={2}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Hands resting on your pelvis for feedback."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and slowly tilt the pelvis forward and backward.",
          "Move gently as if tracing a clock face with your pelvis."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Exhale during movement, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth, controlled motion through the pelvis."
        ]}
        whatToAvoid={[
          "Jerky or forced movement."
        ]}
        redFlags={[
          "Pain or discomfort in the low back."
        ]}
        regression={[
          "Reduce range of motion if needed."
        ]}
      />
    </div>
  );
} 
