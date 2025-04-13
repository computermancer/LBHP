import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week4Day4() {
  return (
    <DayLayout
      title="Week 4 - Day 4"
      subtitle="Hip and Rib Control under Load"
      prevDay="/week4/day3"
      currentWeek="/week4"
      nextDay="/week4/day5"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Supine Hip Shifts with Rib Awareness"
          description="Develop lateral hip mobility while maintaining rib stability."
          href="/week4/day4/drill1"
        />

        <DrillCard
          number="2"
          title="Quadruped Arm and Leg Reach with Control"
          description="Improve balance and stability with controlled movement."
          href="/week4/day4/drill2"
        />

        <DrillCard
          number="3"
          title="Wall Hamstring Press with Breath Focus"
          description="Reinforce hamstring engagement and core control."
          href="/week4/day4/drill3"
        />

        <DrillCard
          number="4"
          title="Supported Side-Lying Hip Abduction"
          description="Develop lateral hip strength and stability."
          href="/week4/day4/drill4"
        />

        <DrillCard
          number="5"
          title="Seated Spine Twist with Arm Reach"
          description="Build thoracic rotation and control."
          href="/week4/day4/drill5"
        />
      </div>
    </DayLayout>
  );
}
