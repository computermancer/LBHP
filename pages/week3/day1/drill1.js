import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day1Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day5/drill5" 
        currentDay="/week3/day1" 
        nextDrill="/week3/day1/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Hooklying Breath with Pelvic Awareness"
        week={3}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Hands resting on the lower abdomen and ribcage."
        ]}
        instructions={[
          "Inhale and feel your belly expand gently.",
          "Exhale fully while maintaining a neutral pelvis.",
          "Focus on awareness of pelvic movement with each breath."
        ]}
        setsReps={[
          "Sets: 2",
          "Reps: 5–8 breath cycles per set",
          "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Belly and ribs expanding with breath",
          "Minimal pelvic movement with controlled breathing"
        ]}
        whatToAvoid={[
          "Over-tilting the pelvis or arching the back"
        ]}
        redFlags={[
          "Dizziness or discomfort during breathing"
        ]}
        regression={[
          "Use a pillow under knees to maintain pelvic neutrality."
        ]}
      />
    </div>
  );
}
