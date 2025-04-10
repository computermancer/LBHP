import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day5Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day5/drill3" 
        currentDay="/week5/day5" 
        nextDrill="/week5/day5/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Hooklying Rib Expansion with Marching"
        week={5}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Hands resting on ribcage."
        ]}
        instructions={[
          "Inhale deeply, feeling ribs expand laterally.",
          "Exhale and lift one foot off the floor, maintaining rib control.",
          "Return to starting and alternate sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Inhale to prepare, exhale to lift",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Core and rib engagement",
          "Controlled movement with breath"
        ]}
        whatToAvoid={[
          "Arching the back or losing core control"
        ]}
        redFlags={[
          "Pain or discomfort in the lower back"
        ]}
        regression={[
          "Perform smaller marches to maintain control."
        ]}
      />
    </div>
  );
}
