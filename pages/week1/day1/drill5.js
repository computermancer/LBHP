import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day1Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day1/drill4" 
        currentDay="/week1/day1" 
        nextDrill="/week1/day2/drill1" 
      />
      <DrillTemplate
        title="Drill 5: Wall Hamstring Press"
        week={1}
        day={1}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with feet on wall, knees and hips at 90 degrees.",
          "Arms resting by sides or palms on lower ribs."
        ]}
        instructions={[
          "Gently press both heels into the wall as if trying to slide the wall down.",
          "Avoid lifting the hips; let hamstrings engage and stabilize the pelvis.",
          "Breathe steadily throughout."
        ]}
        setsReps={[
          "Sets: 2–3",
          "Reps: 5–10 second presses",
          "Breath: Slow, steady breathing throughout each press",
          "Rest: 20–40 seconds between sets"
        ]}
        whatToFeel={[
          "Gentle hamstring tension.",
          "Subtle core engagement as pelvis anchors."
        ]}
        whatToAvoid={[
          "Pushing through toes.",
          "Holding breath or squeezing glutes excessively."
        ]}
        redFlags={[
          "Cramping or sharp discomfort.",
          "Shaking or bracing excessively."
        ]}
        regression={[
          "Move feet slightly lower on the wall to reduce intensity."
        ]}
      />
    </div>
  );
}
