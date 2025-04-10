import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day3Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day3/drill1" 
        currentDay="/week4/day3" 
        nextDrill="/week4/day3/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Seated Posterior Pelvic Rocking"
        week={4}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a firm chair, feet flat on the floor.",
          "Hands resting on thighs."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and gently rock your pelvis backward, flattening the low back.",
          "Inhale and return to neutral."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Exhale to rock, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth pelvic motion",
          "Engagement of core during movement"
        ]}
        whatToAvoid={[
          "Overarching or collapsing the spine"
        ]}
        redFlags={[
          "Sharp pain or discomfort"
        ]}
        regression={[
          "Limit the range of motion for better control."
        ]}
      />
    </div>
  );
}
