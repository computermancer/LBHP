import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day2Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day2/drill1" 
        currentDay="/week3/day2" 
        nextDrill="/week3/day2/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Supine Marching with Core Control"
        week={3}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat.",
          "Arms resting by your sides."
        ]}
        instructions={[
          "Exhale and lift one knee toward your chest.",
          "Inhale and return to the starting position.",
          "Alternate sides while maintaining rib and pelvis control."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 reps per side",
          "Breath: Exhale to lift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Core engagement and rib stability",
          "Smooth, controlled leg movement"
        ]}
        whatToAvoid={[
          "Arching the lower back"
        ]}
        redFlags={[
          "Pain or discomfort in the lower back"
        ]}
        regression={[
          "Perform with feet closer to the floor for reduced intensity."
        ]}
      />
    </div>
  );
}
