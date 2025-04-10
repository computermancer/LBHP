import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day1Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day1/drill1" 
        currentDay="/week1/day1" 
        nextDrill="/week1/day1/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Hooklying Belly Breathing"
        week={1}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Place one hand on your chest and the other on your belly."
        ]}
        instructions={[
          "Inhale gently through your nose, allowing the belly to rise without moving the chest.",
          "Exhale softly through your mouth or nose, allowing the belly to fall naturally.",
          "Focus on minimizing upper chest movement."
        ]}
        setsReps={[
          "Sets: 2",
          "Reps: 5–8 breath cycles per set",
          "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
          "Rest: Between sets or as needed"
        ]}
        whatToFeel={[
          "Belly rising under your hand with each inhale.",
          "Sense of relaxation and minimal chest movement."
        ]}
        whatToAvoid={[
          "Lifting the chest or shrugging shoulders.",
          "Forcing or over-controlling the breath."
        ]}
        redFlags={[
          "Lightheadedness or shortness of breath."
        ]}
        regression={[
          "Prop knees up with a pillow if the lower back feels strained."
        ]}
      />
    </div>
  );
}
