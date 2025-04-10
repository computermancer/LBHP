import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day1Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day1/drill4" 
        currentDay="/week5/day1" 
        nextDrill="/week5/day2/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Supine Marching with Core Control"
        week={5}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Arms resting by your sides."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and lift one foot off the floor, maintaining core stability.",
          "Inhale to return and alternate sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale to lift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Core control and stability",
          "Smooth, controlled leg movement"
        ]}
        whatToAvoid={[
          "Arching the lower back"
        ]}
        redFlags={[
          "Pain or discomfort in the lower back"
        ]}
        regression={[
          "Perform smaller marches to reduce intensity."
        ]}
      />
    </div>
  );
}
