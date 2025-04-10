import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day5Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day5/drill4" 
        currentDay="/week2/day5" 
        nextDrill="/week3/day1/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Seated Breath with Hip Shifts"
        week={2}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright on a firm chair, feet flat.",
          "Hands resting on your pelvis or thighs."
        ]}
        instructions={[
          "Inhale deeply, maintaining pelvic and rib control.",
          "Exhale and gently shift the pelvis side to side.",
          "Return to center between each shift."
        ]}
        setsReps={[
          "Sets: 2",
          "Reps: 5–8 slow shifts per set",
          "Breath: Inhale to prepare, exhale during shift",
          "Rest: Between sets or as needed"
        ]}
        whatToFeel={[
          "Connection between breath, pelvis, and ribcage."
        ]}
        whatToAvoid={[
          "Over-shifting or losing control."
        ]}
        redFlags={[
          "Pain or discomfort in hips or low back."
        ]}
        regression={[
          "Use a pillow for lumbar support."
        ]}
      />
    </div>
  );
} 
