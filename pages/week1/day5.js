import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week1Day5() {
  return (
    <DayLayout
      title="Week 1 - Day 5"
      subtitle="Breath, Spinal Flexion, and Core Control"
      prevDay="/week1/day4"
      currentWeek="/week1"
      nextDay="/week2/day1"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Diaphragmatic Breathing in Crocodile Position"
          description="Encourage full 3D breath expansion."
          href="/week1/day5/drill1"
        />

        <DrillCard
          number="2"
          title="Cat-Cow with Breath Focus"
          description="Develop spinal flexion and extension awareness."
          href="/week1/day5/drill2"
        />

        <DrillCard
          number="3"
          title="Seated Spine Twist with Breath"
          description="Improve thoracic rotation with controlled breathing."
          href="/week1/day5/drill3"
        />

        <DrillCard
          number="4"
          title="Supine Marching with Rib Control"
          description="Reinforce pelvic and rib stability with leg movement."
          href="/week1/day5/drill4"
        />

        <DrillCard
          number="5"
          title="Seated Breath and Pelvic Awareness"
          description="Increase awareness of breath and pelvic positioning."
          href="/week1/day5/drill5"
        />
      </div>
    </DayLayout>
  );
}
