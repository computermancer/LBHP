import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week4Day2Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week4/day1/drill5" 
        currentDay="/week4/day2" 
        nextDrill="/week4/day2/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Seated Thoracic Flexion and Extension"
        week={4}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a firm chair, feet flat on the floor.",
          "Hands resting on thighs or crossed over chest."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and gently flex the thoracic spine forward.",
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
