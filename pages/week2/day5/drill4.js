import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day5Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day5/drill3" 
        currentDay="/week2/day5" 
        nextDrill="/week2/day5/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Supine Marching with Pelvic Control"
        week={2}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat.",
          "Hands resting by your sides or on lower ribs."
        ]}
        instructions={[
          "Exhale and lift one knee toward the chest while maintaining rib and pelvis control.",
          "Return to starting position and switch sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale during lift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Core and pelvis control with smooth leg motion."
        ]}
        whatToAvoid={[
          "Arching the back or losing pelvic control."
        ]}
        redFlags={[
          "Pain or discomfort in the hips or low back."
        ]}
        regression={[
          "Limit leg lift height if needed."
        ]}
      />
    </div>
  );
} 
