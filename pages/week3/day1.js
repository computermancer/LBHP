import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week3Day1() {
  return (
    <DayLayout
      title="Week 3 - Day 1"
      subtitle="Pelvic Control and Breath Integration"
      prevDay="/week2/day5"
      currentWeek="/week3"
      nextDay="/week3/day2"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Hooklying Breath with Pelvic Awareness"
          description="Enhance breath control and establish awareness of pelvic movement."
          href="/week3/day1/drill1"
        />

        <DrillCard
          number="2"
          title="Seated Hip Shift with Rib Stability"
          description="Develop control of hip shifting with minimal ribcage movement."
          href="/week3/day1/drill2"
        />

        <DrillCard
          number="3"
          title="Supine Diaphragm Reset with Reach"
          description="Reinforce ribcage control during breath cycles."
          href="/week3/day1/drill3"
        />

        <DrillCard
          number="4"
          title="Quadruped Rock Back with Breath Focus"
          description="Improve pelvic mobility and maintain core stability."
          href="/week3/day1/drill4"
        />

        <DrillCard
          number="5"
          title="Wall Supported Hinge with Arm Reach"
          description="Build posterior chain activation while maintaining rib control."
          href="/week3/day1/drill5"
        />
      </div>
    </DayLayout>
  );
}
