import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day2Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day2/drill1" 
        currentDay="/week1/day2" 
        nextDrill="/week1/day2/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Seated Thoracic Rotation"
        week={1}
        day={2}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright on a firm chair, feet flat, and hands crossed over your chest."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and slowly rotate your upper body to one side.",
          "Keep pelvis and hips still, focusing on thoracic rotation.",
          "Return to center and repeat on the other side."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 reps per side",
          "Breath: Exhale during rotation, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Gentle rotation through the upper back",
          "Controlled breath guiding the movement"
        ]}
        whatToAvoid={[
          "Rotating from the hips or lower back",
          "Jerky or rushed movement"
        ]}
        redFlags={[
          "Pain or discomfort in the spine"
        ]}
        regression={[
          "Place hands on a table for support if maintaining position is difficult."
        ]}
      />
    </div>
  );
}
