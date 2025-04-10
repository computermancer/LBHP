import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day5Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day5/drill1" 
        currentDay="/week1/day5" 
        nextDrill="/week1/day5/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Cat-Cow with Breath Focus"
        week={1}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Begin on hands and knees, wrists under shoulders, knees under hips."
        ]}
        instructions={[
          "Inhale and arch your back, lifting your chest and tailbone (Cow).",
          "Exhale and round your spine, tucking your pelvis and chin (Cat).",
          "Move smoothly between positions with control."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Inhale to extend, exhale to flex",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth transition between flexion and extension",
          "Coordinated breath and spinal motion"
        ]}
        whatToAvoid={[
          "Rushing through the movement",
          "Overarching or collapsing posture"
        ]}
        redFlags={[
          "Pain or discomfort in the spine"
        ]}
        regression={[
          "Perform smaller movements if mobility is limited."
        ]}
      />
    </div>
  );
}
