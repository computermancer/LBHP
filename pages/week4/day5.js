import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week4Day5() {
  return (
    <DayLayout
      title="Week 4 - Day 5"
      subtitle="Breath, Mobility, and Relaxation"
      prevDay="/week4/day4"
      currentWeek="/week4"
      nextDay="/week5/day1"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Crocodile Breathing with Rib Expansion"
          description="Reinforce full-body breath expansion."
          href="/week4/day5/drill1"
        />

        <DrillCard
          number="2"
          title="Supine Pelvic Rock with Breath Focus"
          description="Develop gentle pelvic motion with breath-guided movement."
          href="/week4/day5/drill2"
        />

        <DrillCard
          number="3"
          title="Seated Posterior Pelvic Awareness"
          description="Enhance control of pelvis positioning in seated positions."
          href="/week4/day5/drill3"
        />

        <DrillCard
          number="4"
          title="Wall Supported Marching with Rib Stability"
          description="Reinforce core and rib control during dynamic movements."
          href="/week4/day5/drill4"
        />

        <DrillCard
          number="5"
          title="Side-Lying Hip IR and Breathing"
          description="Improve hip mobility and breath control."
          href="/week4/day5/drill5"
        />
      </div>
    </DayLayout>
  );
}
