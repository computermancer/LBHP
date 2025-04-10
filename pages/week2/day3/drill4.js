import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day3Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day3/drill3" 
        currentDay="/week2/day3" 
        nextDrill="/week2/day3/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Supported Side-Lying Hip Abduction"
        week={2}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your side with knees slightly bent and stacked.",
          "Support your head with a pillow or your arm."
        ]}
        instructions={[
          "Exhale and lift your top leg slightly while maintaining pelvic stability.",
          "Inhale to return to the starting position.",
          "Move slowly and maintain control throughout."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale during lift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Activation of the lateral hip muscles."
        ]}
        whatToAvoid={[
          "Rolling the pelvis backward or forward."
        ]}
        redFlags={[
          "Pain or discomfort in the hips."
        ]}
        regression={[
          "Place a pillow between the knees for added support."
        ]}
      />
    </div>
  );
} 
