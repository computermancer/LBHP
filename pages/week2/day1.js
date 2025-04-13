import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week2Day1() {
  return (
    <DayLayout
      title="Week 2 - Day 1"
      subtitle="Rib Expansion and Hip Control"
      prevDay="/week1/day5"
      currentWeek="/week2"
      nextDay="/week2/day2"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Supine Rib Expansion with Breath"
          description="Increase ribcage awareness and diaphragmatic control."
          href="/week2/day1/drill1"
        />

        <DrillCard
          number="2"
          title="Hooklying Hip Shifts"
          description="Build control and awareness of hip shifting patterns."
          href="/week2/day1/drill2"
        />

        <DrillCard
          number="3"
          title="Side-Lying Hip IR with Breath"
          description="Improve internal hip rotation and breath coordination."
          href="/week2/day1/drill3"
        />

        <DrillCard
          number="4"
          title="Supine 90-90 Leg Lowering"
          description="Reinforce core stability and rib-pelvis alignment."
          href="/week2/day1/drill4"
        />

        <DrillCard
          number="5"
          title="Wall Supported Heel Press"
          description="Activate hamstrings to stabilize pelvis and reinforce control."
          href="/week2/day1/drill5"
        />
      </div>
    </DayLayout>
  );
}
