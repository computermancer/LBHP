import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day1Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day5/drill5" 
        currentDay="/week4/day1" 
        nextDrill="/week4/day1/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Supine Rib Shift with Breath Control"
        week={4}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat.",
          "Hands resting gently on the sides of your ribcage."
        ]}
        instructions={[
          "Inhale deeply through your nose, feeling ribs expand laterally.",
          "Exhale and shift the ribs slightly to one side while maintaining pelvis control.",
          "Return to center and alternate sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale to shift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Ribcage expanding and shifting laterally",
          "Pelvic stability while ribs move"
        ]}
        whatToAvoid={[
          "Losing pelvis control",
          "Forcing the rib shift"
        ]}
        redFlags={[
          "Pain or discomfort in the ribs or lower back"
        ]}
        regression={[
          "Perform with smaller rib shifts to improve control."
        ]}
      />
    </div>
  );
}
