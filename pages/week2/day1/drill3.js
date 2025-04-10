import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day1Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day1/drill2" 
        currentDay="/week2/day1" 
        nextDrill="/week2/day1/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Side-Lying Hip IR with Breath"
        week={2}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your side with knees bent and stacked.",
          "Support your head with a pillow or your arm."
        ]}
        instructions={[
          "Exhale and rotate your top knee inward while keeping the pelvis stable.",
          "Inhale to return to the starting position.",
          "Move slowly and maintain control throughout."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale during rotation, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Internal rotation in the hip.",
          "Stable pelvis with controlled motion."
        ]}
        whatToAvoid={[
          "Rolling the pelvis forward or backward.",
          "Forcing the range of motion."
        ]}
        redFlags={[
          "Sharp pain or discomfort."
        ]}
        regression={[
          "Place a pillow between the knees for added support."
        ]}
      />
    </div>
  );
} 
