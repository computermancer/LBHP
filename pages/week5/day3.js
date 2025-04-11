import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week5Day3() {
  return (
    <DayLayout
      title="Week 5 - Day 3"
      subtitle="Posterior Chain and Hip Control"
      prevDay="/week5/day2"
      currentWeek="/week5"
      nextDay="/week5/day4"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Staggered Stance RDL with Hip Awareness"
          description="Improve posterior chain strength and single-leg control."
          href="/week5/day3/drill1"
        />

        <DrillCard
          number="2"
          title="Forward Lunges with Rib Control"
          description="Develop strength and stability in forward lunge patterns."
          href="/week5/day3/drill2"
        />

        <DrillCard
          number="3"
          title="Wall Hamstring Press with Rib Stability"
          description="Engage hamstrings and reinforce core control."
          href="/week5/day3/drill3"
        />

        <DrillCard
          number="4"
          title="Bilateral Glute Bridge with Rib and Pelvic Control"
          description="Reinforce hip extension and core stability."
          href="/week5/day3/drill4"
        />

        <DrillCard
          number="5"
          title="Supine Spine Twist with Breath"
          description="Improve thoracic rotation with controlled breath."
          href="/week5/day3/drill5"
        />
      </div>
    </DayLayout>
  );
}
