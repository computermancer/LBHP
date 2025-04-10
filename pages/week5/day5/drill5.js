import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day5Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day5/drill4" 
        currentDay={null} 
        nextDrill={null} 
      />
      <DrillTemplate
        title="Drill 5: Supine Pelvic Rock with Breath Control"
        week={5}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Hands resting on lower ribs."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and gently rock your pelvis backward and forward.",
          "Focus on smooth movement and maintaining rib control."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Exhale to rock, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth pelvic motion",
          "Core engagement with controlled breath"
        ]}
        whatToAvoid={[
          "Overarching or collapsing posture"
        ]}
        redFlags={[
          "Sharp pain or discomfort"
        ]}
        regression={[
          "Perform smaller movements for better control."
        ]}
      />
    </div>
  );
}
