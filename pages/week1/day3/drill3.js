import Nav from '../../../components/Nav';
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';

export default function Week1Day3Drill3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DrillNavBar 
        prevDrill="/week1/day3/drill2" 
        currentDay="/week1/day3" 
        nextDrill="/week1/day3/drill4" 
      />
      <DrillTemplate
        title="Drill 3: Supported Breath Patterning"
        week={1}
        day={3}
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Sit upright in a chair, feet flat on the floor.",
          "Hands resting gently on your lower ribs."
        ]}
        instructions={[
          "Inhale deeply into the belly and lower ribs.",
          "Exhale fully and feel the ribs drop back.",
          "Maintain slow, steady breaths throughout."
        ]}
        setsReps={[
          "Sets: 2",
          "Reps: 5–8 breath cycles per set",
          "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
          "Rest: Between sets or as needed"
        ]}
        whatToFeel={[
          "Expansion through the ribs and belly",
          "Relaxation with minimal upper chest movement"
        ]}
        whatToAvoid={[
          "Holding breath or forcing exhalation"
        ]}
        redFlags={[
          "Lightheadedness or discomfort"
        ]}
        regression={[
          "Lean slightly forward to provide better feedback."
        ]}
      />
    </div>
  );
}
