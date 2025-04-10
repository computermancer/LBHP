import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day3Drill4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day3/drill3" 
        currentDay="/week1/day3" 
        nextDrill="/week1/day3/drill5" 
      />
      <DrillTemplate
        title="Drill 4: Relaxed Spine Rocking"
        week={1}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Begin in a quadruped position, hands under shoulders, knees under hips."
        ]}
        instructions={[
          "Gently rock back and forth, allowing the spine to move naturally.",
          "Focus on maintaining a smooth, rhythmic motion.",
          "Breathe steadily throughout the movement."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–12 slow rocks",
          "Breath: Inhale as you rock forward, exhale as you rock back",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Gentle stretch through hips and lower back",
          "Relaxed and fluid motion"
        ]}
        whatToAvoid={[
          "Tensing the shoulders or bracing excessively"
        ]}
        redFlags={[
          "Pain or discomfort in the low back"
        ]}
        regression={[
          "Use a folded towel under knees for added comfort."
        ]}
      />
    </div>
  );
}
