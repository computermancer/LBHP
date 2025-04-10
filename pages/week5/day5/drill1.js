import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day5Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day4/drill5" 
        currentDay="/week5/day5" 
        nextDrill="/week5/day5/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Horse Stance with Rib Control"
        week={5}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Stand with feet wider than shoulder-width apart, toes slightly turned out.",
          "Arms extended forward or hands on hips."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and lower hips until thighs are parallel to the floor.",
          "Hold for 30–45 seconds while maintaining rib and pelvic control."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 2–3 holds",
          "Breath: Steady breathing throughout",
          "Rest: 30–45 seconds between holds"
        ]}
        whatToFeel={[
          "Thigh and glute activation",
          "Rib stability and core engagement"
        ]}
        whatToAvoid={[
          "Allowing knees to collapse inward",
          "Arching the back"
        ]}
        redFlags={[
          "Sharp knee or hip pain"
        ]}
        regression={[
          "Perform a higher stance to reduce intensity."
        ]}
      />
    </div>
  );
}
