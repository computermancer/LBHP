import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day4Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day4/drill4" 
        currentDay="/week2/day4" 
        nextDrill="/week2/day5/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Seated Breath with Pelvic Awareness"
        week={2}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright on a firm chair, feet flat.",
          "Hands gently on lower ribs or pelvis."
        ]}
        instructions={[
          "Inhale deeply into the belly and ribs.",
          "Exhale while maintaining pelvic and rib control.",
          "Repeat with smooth, controlled breathing."
        ]}
        setsReps={[
          "Sets: 2",
          "Reps: 5–8 breath cycles per set",
          "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
          "Rest: Between sets or as needed"
        ]}
        whatToFeel={[
          "Connection between breath, pelvis, and ribcage."
        ]}
        whatToAvoid={[
          "Overarching or collapsing posture."
        ]}
        redFlags={[
          "Difficulty maintaining control."
        ]}
        regression={[
          "Use a pillow for lumbar support."
        ]}
      />
    </div>
  );
} 
