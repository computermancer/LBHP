import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day4Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day4/drill3" 
        currentDay="/week2/day4" 
        nextDrill="/week2/day4/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Supine Hip Shifts with Rib Stability"
        week={2}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat.",
          "Arms resting by your sides or on ribs for feedback."
        ]}
        instructions={[
          "Exhale and gently shift the pelvis side to side.",
          "Keep ribcage and pelvis aligned throughout.",
          "Return to center after each shift."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps per side",
          "Breath: Exhale during shift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Subtle control through hips and core."
        ]}
        whatToAvoid={[
          "Losing rib control or over-shifting."
        ]}
        redFlags={[
          "Pain or discomfort in the hips or low back."
        ]}
        regression={[
          "Limit range of motion if needed."
        ]}
      />
    </div>
  );
} 
