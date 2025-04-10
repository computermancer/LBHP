import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day4Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day3/drill5" 
        currentDay="/week2/day4" 
        nextDrill="/week2/day4/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Supine Rib Shift with Breath"
        week={2}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Place hands on your lower ribs for feedback."
        ]}
        instructions={[
          "Inhale deeply, expanding the ribs laterally.",
          "Exhale and gently shift the ribs side to side.",
          "Return to center before switching sides."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow shifts per side",
          "Breath: Exhale during shift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Subtle motion through the ribs with minimal effort."
        ]}
        whatToAvoid={[
          "Arching the back or tensing the neck."
        ]}
        redFlags={[
          "Pain or discomfort in the ribs or spine."
        ]}
        regression={[
          "Reduce range of motion if needed."
        ]}
      />
    </div>
  );
} 
