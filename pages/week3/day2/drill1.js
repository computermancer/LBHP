import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day2Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day1/drill5" 
        currentDay="/week3/day2" 
        nextDrill="/week3/day2/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Seated Rib Expansion with Breath Control"
        week={3}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a firm chair, feet flat on the floor.",
          "Hands resting gently on the sides of your ribcage."
        ]}
        instructions={[
          "Inhale deeply through your nose, feeling ribs expand laterally.",
          "Exhale and allow the ribs to return to neutral.",
          "Focus on symmetrical expansion on both sides."
        ]}
        setsReps={[
          "Sets: 2",
          "Reps: 5–8 breath cycles per set",
          "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Ribs expanding outward and back",
          "Steady breath with minimal upper chest movement"
        ]}
        whatToAvoid={[
          "Shallow breathing or shrugging shoulders"
        ]}
        redFlags={[
          "Dizziness or discomfort"
        ]}
        regression={[
          "Place hands on thighs for added stability."
        ]}
      />
    </div>
  );
}
