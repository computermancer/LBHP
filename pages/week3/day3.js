import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week3Day3() {
  return (
    <DayLayout
      title="Week 3 - Day 3"
      subtitle="Spinal Mobility and Core Control"
      prevDay="/week3/day2"
      currentWeek="/week3"
      nextDay="/week3/day4"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Cat-Cow with Breath Awareness"
          description="Develop spinal flexion and extension control."
          href="/week3/day3/drill1"
        />

        <DrillCard
          number="2"
          title="Seated Posterior Pelvic Rocking"
          description="Enhance pelvic control and improve awareness of movement."
          href="/week3/day3/drill2"
        />

        <DrillCard
          number="3"
          title="Supine 90-90 Rib Shift with Breath"
          description="Build core stability and enhance breath-guided movement."
          href="/week3/day3/drill3"
        />

        <DrillCard
          number="4"
          title="Wall Supported Squat Hold with Reach"
          description="Increase confidence in squat position with upper body movement."
          href="/week3/day3/drill4"
        />

        <DrillCard
          number="5"
          title="Supine Spine Twist with Breath"
          description="Improve thoracic rotation with breath control."
          href="/week3/day3/drill5"
        />
      </div>
    </DayLayout>
  );
}
