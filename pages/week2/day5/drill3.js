import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day5Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day5/drill2" 
        currentDay="/week2/day5" 
        nextDrill="/week2/day5/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Seated Spine Twist with Arm Reach"
        week={2}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a firm chair, feet flat, hands crossed over your chest."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and rotate your upper body to one side while reaching one arm forward.",
          "Return to center and switch sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale during rotation, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Controlled thoracic rotation with scapular motion."
        ]}
        whatToAvoid={[
          "Over-rotating or losing rib control."
        ]}
        redFlags={[
          "Pain or discomfort in the spine."
        ]}
        regression={[
          "Perform without arm reach if needed."
        ]}
      />
    </div>
  );
} 
