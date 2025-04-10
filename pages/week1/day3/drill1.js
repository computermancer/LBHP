import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day3Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day2/drill5" 
        currentDay="/week1/day3" 
        nextDrill="/week1/day3/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Breath Reset in Side Lying"
        week={1}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your side with knees bent at 90 degrees, head supported.",
          "Place one hand on your top ribcage and the other on your belly."
        ]}
        instructions={[
          "Inhale deeply into the lower ribs and belly.",
          "Exhale softly, allowing ribs to drop naturally.",
          "Focus on creating expansion in the lower ribs with each breath."
        ]}
        setsReps={[
          "Sets: 2",
          "Reps: 5–8 breath cycles per set",
          "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
          "Rest: Between sets or as needed"
        ]}
        whatToFeel={[
          "Lower ribcage expanding with each inhale",
          "Relaxed and controlled breath pattern"
        ]}
        whatToAvoid={[
          "Overarching the low back",
          "Tension in the upper chest or shoulders"
        ]}
        redFlags={[
          "Dizziness or shortness of breath"
        ]}
        regression={[
          "Prop the torso with a pillow to maintain alignment."
        ]}
      />
    </div>
  );
}
