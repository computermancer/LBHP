import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week4Day1() {
  return (
    <DayLayout
      title="Week 4 - Day 1"
      subtitle="Rib and Pelvic Stability in Motion"
      prevDay="/week3/day5"
      currentWeek="/week4"
      nextDay="/week4/day2"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Supine Rib Shift with Breath Control"
          description="Develop lateral rib control while maintaining pelvis stability."
          href="/week4/day1/drill1"
        />

        <DrillCard
          number="2"
          title="Seated Hip Shifts with Breath Awareness"
          description="Reinforce pelvic control and hip awareness in seated positions."
          href="/week4/day1/drill2"
        />

        <DrillCard
          number="3"
          title="Hooklying Rib Expansion with Marching"
          description="Build core and rib stability while adding dynamic movement."
          href="/week4/day1/drill3"
        />

        <DrillCard
          number="4"
          title="Wall Supported Hinge with Arm Reach"
          description="Strengthen posterior chain while maintaining ribcage control and focus on controlled arm reach."
          href="/week4/day1/drill4"
        />

        <DrillCard
          number="5"
          title="Quadruped Rock Back with Reach Focus"
          description="Improve pelvic mobility with controlled rib and breath awareness."
          href="/week4/day1/drill5"
        />
      </div>
    </DayLayout>
  );
}
