import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day2Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day2/drill4" 
        currentDay="/week5/day2" 
        nextDrill="/week5/day3/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Supine Rib Shift with Core Engagement"
        week={5}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat.",
          "Hands resting on ribcage."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and shift ribs slightly to one side.",
          "Inhale and return to center.",
          "Switch sides and repeat."
        ]}
        setsReps={[
          "Sets: 2",
          "Reps: 8–10 per side",
          "Breath: Exhale to shift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Subtle core activation and rib control"
        ]}
        whatToAvoid={[
          "Over-shifting or losing control"
        ]}
        redFlags={[
          "Sharp discomfort in ribs or spine"
        ]}
        regression={[
          "Limit range of rib movement."
        ]}
      />
    </div>
  );
}
