import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day5Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day4/drill5" 
        currentDay="/week4/day5" 
        nextDrill="/week4/day5/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Crocodile Breathing with Rib Expansion"
        week={4}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie face down with forehead resting on hands.",
          "Legs extended, toes pointing slightly outward."
        ]}
        instructions={[
          "Inhale deeply, feeling your belly push into the floor.",
          "Exhale softly, allowing your ribs and belly to fall naturally.",
          "Focus on expanding your breath into the back and sides of your ribcage."
        ]}
        setsReps={[
          "Sets: 2",
          "Reps: 5–8 breath cycles per set",
          "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
          "Rest: Between sets or as needed"
        ]}
        whatToFeel={[
          "Belly pressing into the floor with each inhale",
          "Relaxed, steady breathing"
        ]}
        whatToAvoid={[
          "Shallow chest breathing",
          "Holding tension in the upper body"
        ]}
        redFlags={[
          "Dizziness or discomfort"
        ]}
        regression={[
          "Place a pillow under your belly for added comfort."
        ]}
      />
    </div>
  );
}
