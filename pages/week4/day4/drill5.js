import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day4Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day4/drill4" 
        currentDay="/week4/day4" 
        nextDrill="/week4/day5/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Seated Spine Twist with Arm Reach"
        week={4}
        day={4}
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
