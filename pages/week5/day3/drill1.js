import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day3Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day2/drill5" 
        currentDay="/week5/day3" 
        nextDrill="/week5/day3/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Staggered Stance RDL with Hip Awareness"
        week={5}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Stand with feet hip-width apart, one foot slightly behind (kickstand position).",
          "Hinge at hips, keeping back neutral."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and hinge forward, maintaining rib and pelvis control.",
          "Return to standing with control.",
          "Switch legs and repeat."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale to hinge, inhale to return",
          "Rest: 30–45 seconds between sets"
        ]}
        whatToFeel={[
          "Glute and hamstring engagement",
          "Pelvic and rib stability"
        ]}
        whatToAvoid={[
          "Rounding or arching the back"
        ]}
        redFlags={[
          "Sharp pain in hamstrings or lower back"
        ]}
        regression={[
          "Perform a smaller hinge with less range of motion."
        ]}
      />
    </div>
  );
}
