import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day1Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day1/drill1" 
        currentDay="/week2/day1" 
        nextDrill="/week2/day1/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Hooklying Hip Shifts"
        week={2}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Place hands gently on your pelvis."
        ]}
        instructions={[
          "Gently shift your pelvis side to side, feeling each hip lift slightly.",
          "Move slowly and stay within a comfortable range of motion.",
          "Return to neutral after each shift."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 controlled shifts",
          "Breath: Inhale to prepare, exhale during each shift",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Subtle shifting of the pelvis.",
          "Smooth, controlled movements."
        ]}
        whatToAvoid={[
          "Forcing the shift or losing control.",
          "Collapsing or tensing excessively."
        ]}
        redFlags={[
          "Pain or discomfort in the hips or low back."
        ]}
        regression={[
          "Reduce range of motion or support knees with a pillow."
        ]}
      />
    </div>
  );
} 
