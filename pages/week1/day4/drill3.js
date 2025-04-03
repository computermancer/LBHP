import DrillTemplate from '../../../components/DrillTemplate';

export default function SeatedThoracicExtension() {
  return (
    <DrillTemplate
      title="Drill 3: Seated Thoracic Extension"
      backButtonText="Week 1 - Day 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Sit on a firm chair, feet flat, hands behind your head."
      ]}
      instructions={[
        "Inhale to prepare.",
        "Exhale and gently extend through the upper back.",
        "Maintain contact between lower ribs and pelvis.",
        "Return to neutral and repeat."
      ]}
      setsReps={[
        "Sets: 2–3",
        "Reps: 8–10 slow, controlled reps",
        "Breath: Exhale during extension, inhale to return",
        "Rest: As needed"
      ]}
      whatToFeel={[
        "Opening through the chest and upper back",
        "Engagement of the upper back muscles"
      ]}
      whatToAvoid={[
        "Arching lower back or flaring ribs"
      ]}
      redFlags={[
        "Pain or discomfort in the spine"
      ]}
      regression={[
        "Perform with arms crossed if mobility is limited."
      ]}
    />
  );
}
