import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day2Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day2/drill3" 
        currentDay="/week5/day2" 
        nextDrill="/week5/day2/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Single-Leg Glute Bridge with Rib Stability"
        week={5}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Arms resting by your sides."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and lift hips while extending one leg.",
          "Hold briefly, then return to start.",
          "Switch legs and repeat."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale to lift, inhale to lower",
          "Rest: 30–45 seconds between sets"
        ]}
        whatToFeel={[
          "Glutes and core engaged",
          "Pelvis and ribcage stability"
        ]}
        whatToAvoid={[
          "Arching the lower back"
        ]}
        redFlags={[
          "Pain in the lower back or hips"
        ]}
        regression={[
          "Perform a bilateral glute bridge."
        ]}
      />
    </div>
  );
}
