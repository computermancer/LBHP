import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week3Day5() {
  return (
    <DayLayout
      title="Week 3 - Day 5"
      subtitle="Breath, Mobility, and Relaxation"
      prevDay="/week3/day4"
      currentWeek="/week3"
      nextDay="/week4/day1"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Crocodile Breathing with Rib Expansion"
          description="Reinforce full-body breath expansion."
          href="/week3/day5/drill1"
        />

        <DrillCard
          number="2"
          title="Supine Pelvic Rock with Breath Focus"
          description="Develop gentle pelvic motion with breath-guided movement."
          href="/week3/day5/drill2"
        />

        <DrillCard
          number="3"
          title="Seated Spine Twist with Arm Reach"
          description="Improve thoracic rotation with coordinated breath and movement."
          href="/week3/day5/drill3"
        />

        <DrillCard
          number="4"
          title="Wall Supported Marching with Rib Control"
          description="Build ribcage control and core stability."
          href="/week3/day5/drill4"
        />

        <DrillCard
          number="5"
          title="Side-Lying Hip IR and Breathing"
          description="Enhance internal hip rotation and improve breath coordination."
          href="/week3/day5/drill5"
        />
      </div>
    </DayLayout>
  );
}
