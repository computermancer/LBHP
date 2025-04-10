import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day1Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day1/drill3" 
        currentDay="/week4/day1" 
        nextDrill="/week4/day1/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Wall Supported Hinge with Arm Reach"
        week={4}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Stand with feet hip-width apart, facing away from a wall.",
          "Hips slightly bent, arms extended in front."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and hinge at the hips, maintaining a neutral spine.",
          "Reach your arms forward while maintaining rib control.",
          "Return to standing with control."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 reps",
          "Breath: Exhale to hinge, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Glutes and hamstrings engaging",
          "Maintained core and rib stability"
        ]}
        whatToAvoid={[
          "Overarching or rounding the lower back"
        ]}
        redFlags={[
          "Pain or discomfort in the lower back"
        ]}
        regression={[
          "Perform with a smaller hinge for reduced range."
        ]}
      />
    </div>
  );
}
