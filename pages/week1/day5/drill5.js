import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day5Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day5/drill4" 
        currentDay="/week1/day5" 
        nextDrill="/week2/day1/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Seated Breath and Pelvic Awareness"
        week={1}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a firm chair, feet flat on the floor.",
          "Hands gently resting on your belly and lower ribs."
        ]}
        instructions={[
          "Inhale deeply into your belly and ribs.",
          "Exhale fully while maintaining a neutral pelvis.",
          "Maintain awareness of rib and pelvis position throughout."
        ]}
        setsReps={[
          "Sets: 2",
          "Reps: 5–8 breath cycles per set",
          "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
          "Rest: Between sets or as needed"
        ]}
        whatToFeel={[
          "Awareness of rib expansion and pelvic control",
          "Smooth, steady breath with minimal upper chest involvement"
        ]}
        whatToAvoid={[
          "Overextending or collapsing posture",
          "Shallow chest breathing"
        ]}
        redFlags={[
          "Difficulty maintaining breath control"
        ]}
        regression={[
          "Place a pillow behind the lower back for added support."
        ]}
      />
    </div>
  );
}
