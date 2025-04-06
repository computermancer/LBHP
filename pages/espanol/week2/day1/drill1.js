import DrillTemplate from '../../../components/DrillTemplate';
import NavEspanol from '../../../../components/NavEspanol';

export default function SupineRibExpansionwithBreath() {
  return (
    <>
      <NavEspanol />
      <DrillTemplate
        title="Drill 1: Supine Rib Expansion with Breath"
        backButtonText="Week 2 - Day 1"
        videoId="wn0IyvGBeUI"
        videoStart={2248}
        setup={[
          "Lie on your back with knees bent, feet flat on the floor.",
          "Place hands gently on your lower ribs."
        ]}
        instructions={[
          "Inhale deeply into the lower ribs, feeling lateral expansion.",
          "Exhale softly, allowing ribs to fall naturally.",
          "Maintain slow, controlled breaths throughout."
        ]}
        setsReps={[
          "Sets: 2",
          "Reps: 5–8 breath cycles per set",
          "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
          "Rest: Between sets or as needed"
        ]}
        whatToFeel={[
          "Expansion of ribs during inhale.",
          "Relaxed breath pattern with minimal chest rise."
        ]}
        whatToAvoid={[
          "Breathing only into the upper chest.",
          "Collapsing the ribcage or losing control."
        ]}
        redFlags={[
          "Dizziness or discomfort with breath control."
        ]}
        regression={[
          "Place a pillow under the knees to reduce tension in the lower back."
        ]}
      />
    </>
  );
} 
