import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day4Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day4/drill1" 
        currentDay="/week3/day4" 
        nextDrill="/week3/day4/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Seated Thoracic Flexion and Extension"
        week={3}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a firm chair, feet flat.",
          "Hands resting on thighs or crossed over chest."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and flex the thoracic spine gently forward.",
          "Inhale and extend the spine back to neutral."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Exhale to flex, inhale to extend",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth thoracic motion",
          "Core engagement during flexion and extension"
        ]}
        whatToAvoid={[
          "Overarching or collapsing the spine"
        ]}
        redFlags={[
          "Sharp pain or discomfort"
        ]}
        regression={[
          "Perform smaller movements for better control."
        ]}
      />
    </div>
  );
}
