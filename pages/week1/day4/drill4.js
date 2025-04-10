import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day4Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day4/drill3" 
        currentDay="/week1/day4" 
        nextDrill="/week1/day4/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Supine Hip Shift with Breath"
        week={1}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat.",
          "Arms resting by your sides."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and gently shift one hip higher than the other.",
          "Maintain control and alignment.",
          "Return to neutral before switching sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 controlled reps per side",
          "Breath: Exhale during the shift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Subtle motion through the pelvis and hips",
          "Engagement of core and hip stabilizers"
        ]}
        whatToAvoid={[
          "Overarching or flattening the low back"
        ]}
        redFlags={[
          "Pain or discomfort in the hips or spine"
        ]}
        regression={[
          "Use a pillow under hips for added support."
        ]}
      />
    </div>
  );
}
