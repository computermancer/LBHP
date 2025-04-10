import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week3Day4Drill1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week3/day3/drill5" 
        currentDay="/week3/day4" 
        nextDrill="/week3/day4/drill2" 
      />
      <DrillTemplate
        title="Drill 1: Supine Hip Shifts with Rib Control"
        week={3}
        day={4}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat.",
          "Arms resting by your sides."
        ]}
        instructions={[
          "Exhale and shift one hip slightly higher than the other.",
          "Inhale and return to neutral.",
          "Switch sides and repeat with control."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 8–10 per side",
          "Breath: Exhale to shift, inhale to return",
          "Rest: As needed"
        ]}
        whatToFeel={[
          "Subtle hip motion with rib stability",
          "Smooth, controlled shifts"
        ]}
        whatToAvoid={[
          "Losing ribcage and pelvis control"
        ]}
        redFlags={[
          "Pain or discomfort in hips or spine"
        ]}
        regression={[
          "Perform smaller shifts to improve control."
        ]}
      />
    </div>
  );
}
