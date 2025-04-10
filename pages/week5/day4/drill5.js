import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day4Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day4/drill4" 
        currentDay="/week5/day4" 
        nextDrill="/week5/day5/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Side-Lying Hip IR and Breathing"
        week={5}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your side with knees bent at 90 degrees, stacked.",
          "Support your head with your lower arm."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and gently rotate your top leg inward without lifting your foot.",
          "Hold for 2–3 seconds, then return to starting."
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
