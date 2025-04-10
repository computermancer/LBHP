import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day1Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day1/drill2" 
        currentDay="/week3/day1" 
        nextDrill="/week3/day1/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Supine Diaphragm Reset with Reach"
        week={3}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Arms reaching toward the ceiling."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and reach both arms toward the ceiling, feeling ribs flatten.",
          "Inhale and return to the starting position."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 reps",
          "Breath: Exhale to reach, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Core engagement and ribcage control",
          "Smooth, controlled arm reach"
        ]}
        whatToAvoid={[
          "Flaring ribs or arching the lower back"
        ]}
        redFlags={[
          "Pain or discomfort in the shoulders or lower back"
        ]}
        regression={[
          "Perform with knees supported by a pillow."
        ]}
      />
    </div>
  );
}
