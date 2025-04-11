import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week4Day3() {
  return (
    <DayLayout
      title="Week 4 - Day 3"
      subtitle="Spinal Control and Hip Mobility"
      prevDay="/week4/day2"
      currentWeek="/week4"
      nextDay="/week4/day4"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Cat-Cow with Rib Expansion"
          description="Develop spinal flexion and extension with breath control."
          href="/week4/day3/drill1"
        />

        <DrillCard
          number="2"
          title="Seated Posterior Pelvic Rocking"
          description="Enhance awareness of pelvic motion in seated positions."
          href="/week4/day3/drill2"
        />

        <DrillCard
          number="3"
          title="Supine 90-90 Rib Shift with Breath"
          description="Build rib and pelvis coordination while breathing."
          href="/week4/day3/drill3"
        />

        <DrillCard
          number="4"
          title="Wall Supported Deep Squat Hold with Reach"
          description="Increase squat stability with rib and pelvis awareness."
          href="/week4/day3/drill4"
        />

        <DrillCard
          number="5"
          title="Supine Spine Twist with Breath"
          description="Improve thoracic rotation with controlled breath."
          href="/week4/day3/drill5"
        />
      </div>
    </DayLayout>
  );
}
