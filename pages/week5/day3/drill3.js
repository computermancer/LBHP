import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week5Day3Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week5/day3/drill2" 
        currentDay="/week5/day3" 
        nextDrill="/week5/day3/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Wall Hamstring Press with Rib Stability"
        week={5}
        day={3}
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
