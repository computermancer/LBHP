import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day4Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day4/drill2" 
        currentDay="/week2/day4" 
        nextDrill="/week2/day4/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Seated Thoracic Flexion/Extension"
        week={2}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright on a firm chair, feet flat, hands on your chest."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and gently flex forward through the upper back.",
          "Inhale and extend through the thoracic spine, lifting the chest.",
          "Move smoothly between positions."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Exhale during flexion, inhale to extend",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Controlled flexion and extension through the thoracic spine."
        ]}
        whatToAvoid={[
          "Overarching or collapsing posture."
        ]}
        redFlags={[
          "Pain or discomfort in the spine."
        ]}
        regression={[
          "Perform with arms crossed for less strain."
        ]}
      />
    </div>
  );
} 
