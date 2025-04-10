import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day2Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day2/drill2" 
        currentDay="/week3/day2" 
        nextDrill="/week3/day2/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Seated Thoracic Rotation with Arm Reach"
        week={3}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a firm chair, feet flat.",
          "Hands resting on thighs or crossed over chest."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and rotate your upper body to one side, reaching one arm forward.",
          "Return to center and repeat on the opposite side."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale to rotate, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth thoracic rotation",
          "Rib stability while rotating"
        ]}
        whatToAvoid={[
          "Twisting from the lower back"
        ]}
        redFlags={[
          "Pain or discomfort during rotation"
        ]}
        regression={[
          "Perform with hands on knees for support."
        ]}
      />
    </div>
  );
}
