import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day1Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill={null} 
        currentDay="/week1/day1" 
        nextDrill="/week1/day1/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Posterior Pelvic Tilt on Wall"
        week={1}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Stand with your back against a wall, feet about 6–12 inches away.",
          "Knees slightly bent, arms resting by your sides."
        ]}
        instructions={[
          "Gently tilt your pelvis backward so your low back flattens into the wall.",
          "Keep glutes and abs soft; allow the motion to come from pelvic rotation.",
          "Hold for 3–5 seconds, then release back to neutral.",
          "Move slowly and with control."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Exhale on the tilt, inhale on the release",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Gentle abdominal tension.",
          "Low back flattening softly into the wall.",
          "Relaxed breath and minimal upper body tension."
        ]}
        whatToAvoid={[
          "Squeezing glutes or pushing into the floor.",
          "Jerky or rushed movements."
        ]}
        redFlags={[
          "Sharp pain in the low back or hips.",
          "Dizziness or inability to breathe deeply."
        ]}
        regression={[
          "Perform seated pelvic tilts on a firm chair if standing is too challenging."
        ]}
      />
    </div>
  );
}
