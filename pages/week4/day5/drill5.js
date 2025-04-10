import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day5Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day5/drill4" 
        currentDay="/week4/day5" 
        nextDrill="/week5/day1/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Side-Lying Hip IR and Breathing"
        week={4}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your side with knees bent at 90 degrees, stacked.",
          "Support your head with your lower arm."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and gently rotate your top leg inward without lifting your foot.",
          "Hold for 2–3 seconds, then return to starting.",
          "Focus on smooth, controlled movement."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale to rotate, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Internal rotation of the hip",
          "Engagement of deep hip stabilizers"
        ]}
        whatToAvoid={[
          "Rolling the pelvis backward"
        ]}
        redFlags={[
          "Sharp hip or groin pain"
        ]}
        regression={[
          "Perform with a pillow between knees for support."
        ]}
      />
    </div>
  );
}
