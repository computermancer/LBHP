import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day2Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day2/drill4" 
        currentDay="/week2/day2" 
        nextDrill="/week2/day3/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Prone Hip IR and Extension Drill"
        week={2}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your stomach with legs extended straight."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and gently rotate one leg inward (hip internal rotation).",
          "Inhale to return to neutral and switch sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale during rotation, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Subtle activation in the hips and pelvis."
        ]}
        whatToAvoid={[
          "Over-rotating or losing control."
        ]}
        redFlags={[
          "Pain or discomfort in the hips."
        ]}
        regression={[
          "Place a pillow under the pelvis for support."
        ]}
      />
    </div>
  );
} 
