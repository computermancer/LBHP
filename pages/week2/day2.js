import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week2Day2() {
  return (
    <DayLayout
      title="Week 2 - Day 2"
      subtitle="Thoracic Rotation and Posterior Chain Activation"
      prevDay="/week2/day1"
      currentWeek="/week2"
      nextDay="/week2/day3"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Quadruped Reach with Rib Control"
          description="Develop thoracic rotation with stable ribcage control."
          href="/week2/day2/drill1"
        />

        <DrillCard
          number="2"
          title="Seated Hip Hinge with Breath"
          description="Improve hinge pattern and maintain core control."
          href="/week2/day2/drill2"
        />

        <DrillCard
          number="3"
          title="Standing Posterior Weight Shift"
          description="Develop posterior weight shift for balanced hip control."
          href="/week2/day2/drill3"
        />

        <DrillCard
          number="4"
          title="Wall Hamstring Marching"
          description="Reinforce posterior chain activation and pelvic control."
          href="/week2/day2/drill4"
        />

        <DrillCard
          number="5"
          title="Prone Hip IR and Extension Drill"
          description="Build awareness of hip rotation and extension."
          href="/week2/day2/drill5"
        />
      </div>
    </DayLayout>
  );
}
