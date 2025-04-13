import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week3Day2() {
  return (
    <DayLayout
      title="Week 3 - Day 2"
      subtitle="Rib and Hip Coordination"
      prevDay="/week3/day1"
      currentWeek="/week3"
      nextDay="/week3/day3"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Seated Rib Expansion with Breath Control"
          description="Promote ribcage mobility and lateral breath expansion."
          href="/week3/day2/drill1"
        />

        <DrillCard
          number="2"
          title="Supine Marching with Core Control"
          description="Reinforce pelvic stability while moving the legs."
          href="/week3/day2/drill2"
        />

        <DrillCard
          number="3"
          title="Seated Thoracic Rotation with Arm Reach"
          description="Develop rotational control and mobility."
          href="/week3/day2/drill3"
        />

        <DrillCard
          number="4"
          title="Wall Hamstring March with Rib Control"
          description="Activate the posterior chain while maintaining rib stability."
          href="/week3/day2/drill4"
        />

        <DrillCard
          number="5"
          title="Prone Hip IR and Extension Drill"
          description="Build awareness of hip rotation and hip extension."
          href="/week3/day2/drill5"
        />
      </div>
    </DayLayout>
  );
}
