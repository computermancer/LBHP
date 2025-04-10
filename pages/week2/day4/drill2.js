import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week2Day4Drill2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week2/day4/drill1" 
        currentDay="/week2/day4" 
        nextDrill="/week2/day4/drill3" 
      />
      <DrillTemplate
        title="Drill 2: Seated Posterior Pelvic Rocking"
        week={2}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a firm chair, feet flat, hands on thighs."
        ]}
        instructions={[
          "Inhale to prepare.",
          "Exhale and rock pelvis backward (posterior tilt), then forward (anterior tilt).",
          "Move smoothly and maintain control."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 slow reps",
          "Breath: Exhale during rocking, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Smooth motion through the pelvis and lumbar spine."
        ]}
        whatToAvoid={[
          "Jerky or rushed movements."
        ]}
        redFlags={[
          "Pain or discomfort in the lower back."
        ]}
        regression={[
          "Place hands on hips for additional feedback."
        ]}
      />
    </div>
  );
} 
