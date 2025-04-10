import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day1Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day1/drill2" 
        currentDay="/week1/day1" 
        nextDrill="/week1/day1/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Seated Pelvic Rocking"
        week={1}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit on a firm chair, feet flat, hands resting on thighs."
        ]}
        instructions={[
          "Slowly tilt the pelvis forward (arching low back) and backward (flattening low back).",
          "Let the breath guide the rhythm of your movement.",
          "Keep upper body still and relaxed."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–12 controlled reps",
          "Breath: Inhale as you tilt forward, exhale as you tilt backward",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Gentle motion through the pelvis and low back.",
          "Ease and rhythm with breath."
        ]}
        whatToAvoid={[
          "Tensing shoulders or upper back.",
          "Over-arching or collapsing posture."
        ]}
        redFlags={[
          "Pain during any part of the movement.",
          "Inability to isolate pelvic motion."
        ]}
        regression={[
          "Place hands on hips for feedback if you're unsure where the motion is coming from."
        ]}
      />
    </div>
  );
}
