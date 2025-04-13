import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week2Day3() {
  return (
    <DayLayout
      title="Week 2 - Day 3"
      subtitle="Pelvic Control & Stability"
      prevDay="/week2/day2"
      currentWeek="/week2"
      nextDay="/week2/day4"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Pelvic Floor Engagement"
          description="Learn to activate and release pelvic floor muscles."
          href="/week2/day3/drill1"
        />

        <DrillCard
          number="2"
          title="Pelvic Rocking with Breath"
          description="Integrate breath with pelvic movement patterns."
          href="/week2/day3/drill2"
        />

        <DrillCard
          number="3"
          title="Seated Pelvic Tilts"
          description="Practice pelvic control in a seated position."
          href="/week2/day3/drill3"
        />

        <DrillCard
          number="4"
          title="Pelvic Floor with Leg Lifts"
          description="Combine pelvic floor activation with leg movements."
          href="/week2/day3/drill4"
        />

        <DrillCard
          number="5"
          title="Pelvic Floor with Arm Movements"
          description="Integrate pelvic floor control with upper body."
          href="/week2/day3/drill5"
        />
      </div>
    </DayLayout>
  );
}
