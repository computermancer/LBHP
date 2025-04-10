import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day3Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day2/drill5" 
        currentDay="/week4/day3" 
        nextDrill="/week4/day3/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Cat-Cow with Rib Expansion"
        week={4}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Begin on hands and knees, wrists under shoulders, knees under hips.",
          "Maintain a neutral spine."
        ]}
        instructions={[
          "Inhale and arch your back, lifting your chest and tailbone (Cow).",
          "Exhale and round your spine, tucking pelvis and chin (Cat).",
          "Coordinate movement with breath."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Inhale to extend, exhale to flex",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth spinal flexion and extension",
          "Controlled pelvic and ribcage movement"
        ]}
        whatToAvoid={[
          "Overarching or collapsing posture"
        ]}
        redFlags={[
          "Pain or discomfort in the spine"
        ]}
        regression={[
          "Perform smaller movements if needed."
        ]}
      />
    </div>
  );
}
