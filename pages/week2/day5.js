import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week2Day5() {
  return (
    <DayLayout
      title="Week 2 - Day 5"
      subtitle="Breath, Rotation, and Pelvic Coordination"
      prevDay="/week2/day4"
      currentWeek="/week2"
      nextDay="/week3/day1"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Crocodile Breathing with Rib Expansion"
          description="Reinforce full diaphragmatic breath expansion."
          href="/week2/day5/drill1"
        />

        <DrillCard
          number="2"
          title="Cat-Cow with Rotational Focus"
          description="Improve spinal flexion/extension and incorporate rotation."
          href="/week2/day5/drill2"
        />

        <DrillCard
          number="3"
          title="Seated Spine Twist with Arm Reach"
          description="Increase rotational control and scapular mobility."
          href="/week2/day5/drill3"
        />

        <DrillCard
          number="4"
          title="Supine Marching with Pelvic Control"
          description="Strengthen rib-pelvis coordination and core control."
          href="/week2/day5/drill4"
        />

        <DrillCard
          number="5"
          title="Seated Breath with Hip Shifts"
          description="Increase awareness of pelvic shifts while maintaining breath control."
          href="/week2/day5/drill5"
        />
      </div>
    </DayLayout>
  );
}
