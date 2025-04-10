import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day4Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day4/drill3" 
        currentDay="/week3/day4" 
        nextDrill="/week3/day4/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Wall Hamstring Press with Hip Awareness"
        week={3}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with feet on the wall, knees at 90 degrees.",
          "Arms resting by your sides."
        ]}
        instructions={[
          "Exhale and gently press heels into the wall.",
          "Hold for 5–8 seconds while maintaining pelvic control.",
          "Inhale and relax."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 5–8 second holds",
          "Breath: Steady breathing throughout",
          "Rest: 30 seconds between sets"
        ]}
        whatToFeel={[
          "Hamstring activation and pelvis stability",
          "Controlled pressure without arching"
        ]}
        whatToAvoid={[
          "Pushing through toes or lifting hips"
        ]}
        redFlags={[
          "Sharp pain or cramping"
        ]}
        regression={[
          "Move feet slightly lower on the wall for reduced intensity."
        ]}
      />
    </div>
  );
}
