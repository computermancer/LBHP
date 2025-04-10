import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day5Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day4/drill5" 
        currentDay="/week2/day5" 
        nextDrill="/week2/day5/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Crocodile Breathing with Rib Expansion"
        week={2}
        day={5}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie face down with forehead resting on your hands.",
          "Legs extended, toes pointing slightly outward."
        ]}
        instructions={[
          "Inhale deeply, feeling your belly press into the floor.",
          "Exhale softly, allowing ribs to relax and fall.",
          "Focus on lateral rib expansion during inhale."
        ]}
        setsReps={[
          "Sets: 2",
          "Reps: 5–8 breath cycles per set",
          "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
          "Rest: Between sets or as needed"
        ]}
        whatToFeel={[
          "Expansion of the lower ribs and belly."
        ]}
        whatToAvoid={[
          "Shallow chest breathing or tension."
        ]}
        redFlags={[
          "Dizziness or discomfort."
        ]}
        regression={[
          "Place a pillow under the belly for support."
        ]}
      />
    </div>
  );
} 
