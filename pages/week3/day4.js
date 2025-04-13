import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week3Day4() {
  return (
    <DayLayout
      title="Week 3 - Day 4"
      subtitle="Hip and Ribcage Stability"
      prevDay="/week3/day3"
      currentWeek="/week3"
      nextDay="/week3/day5"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Supine Hip Shifts with Rib Control"
          description="Develop control of pelvic shifts while maintaining rib stability."
          href="/week3/day4/drill1"
        />

        <DrillCard
          number="2"
          title="Seated Thoracic Flexion and Extension"
          description="Improve thoracic spine mobility and postural control."
          href="/week3/day4/drill2"
        />

        <DrillCard
          number="3"
          title="Quadruped Arm and Leg Reach with Control"
          description="Build core and shoulder stability while maintaining neutral spine."
          href="/week3/day4/drill3"
        />

        <DrillCard
          number="4"
          title="Wall Hamstring Press with Hip Awareness"
          description="Reinforce hamstring activation and pelvis control."
          href="/week3/day4/drill4"
        />

        <DrillCard
          number="5"
          title="Supported Side-Lying Hip Abduction"
          description="Develop lateral hip strength and stability."
          href="/week3/day4/drill5"
        />
      </div>
    </DayLayout>
  );
}
