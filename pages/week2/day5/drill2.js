import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day5Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day5/drill1" 
        currentDay="/week2/day5" 
        nextDrill="/week2/day5/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Cat-Cow with Rotational Focus"
        week={2}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Begin in a quadruped position, wrists under shoulders, knees under hips."
        ]}
        instructions={[
          "Inhale and arch your back, lifting the chest (Cow).",
          "Exhale and round your spine, tucking pelvis and chin (Cat).",
          "Add gentle thoracic rotation by reaching one arm toward the ceiling on each side."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Inhale to extend, exhale to flex",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Fluid motion through the spine and increased rotation."
        ]}
        whatToAvoid={[
          "Overarching or collapsing posture."
        ]}
        redFlags={[
          "Pain or discomfort in the spine."
        ]}
        regression={[
          "Limit rotation if control is difficult."
        ]}
      />
    </div>
  );
} 
