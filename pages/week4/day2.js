import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week4Day2() {
  return (
    <DayLayout
      title="Week 4 - Day 2"
      subtitle="Core and Pelvic Stability in Action"
      prevDay="/week4/day1"
      currentWeek="/week4"
      nextDay="/week4/day3"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Seated Thoracic Flexion and Extension"
          description="Improve thoracic mobility while maintaining pelvis control."
          href="/week4/day2/drill1"
        />

        <DrillCard
          number="2"
          title="Supine 90-90 Leg Lowering with Breath"
          description="Reinforce core control while lowering the legs with stability."
          href="/week4/day2/drill2"
        />

        <DrillCard
          number="3"
          title="Seated Spine Rotation with Arm Reach"
          description="Develop rotational control and thoracic mobility."
          href="/week4/day2/drill3"
        />

        <DrillCard
          number="4"
          title="Wall Hamstring March with Rib Stability"
          description="Build posterior chain control while maintaining rib control."
          href="/week4/day2/drill4"
        />

        <DrillCard
          number="5"
          title="Prone Hip IR and Extension with Control"
          description="Develop awareness of hip rotation and hip extension."
          href="/week4/day2/drill5"
        />
      </div>
    </DayLayout>
  );
}
