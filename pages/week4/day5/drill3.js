import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day5Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day5/drill2" 
        currentDay="/week4/day5" 
        nextDrill="/week4/day5/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Seated Posterior Pelvic Awareness"
        week={4}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a firm chair, feet flat on the floor.",
          "Hands resting on your thighs."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and gently rock your pelvis backward and forward.",
          "Maintain awareness of your pelvis moving through neutral."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Exhale to rock, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth pelvic control",
          "Awareness of neutral pelvis position"
        ]}
        whatToAvoid={[
          "Overarching or collapsing posture"
        ]}
        redFlags={[
          "Sharp pain or discomfort"
        ]}
        regression={[
          "Limit range of motion for better control."
        ]}
      />
    </div>
  );
}
