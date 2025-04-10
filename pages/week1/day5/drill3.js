import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day5Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day5/drill2" 
        currentDay="/week1/day5" 
        nextDrill="/week1/day5/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Seated Spine Twist with Breath"
        week={1}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a firm chair, feet flat on the floor.",
          "Hands gently resting on your knees or crossed over your chest."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and rotate your upper body to one side.",
          "Return to center before rotating to the other side."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale during rotation, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Controlled rotation through the thoracic spine",
          "Engagement of core and obliques"
        ]}
        whatToAvoid={[
          "Rotating from the hips or lower back",
          "Jerky or rushed movements"
        ]}
        redFlags={[
          "Pain or discomfort during rotation"
        ]}
        regression={[
          "Hold onto the side of the chair for added stability."
        ]}
      />
    </div>
  );
}
