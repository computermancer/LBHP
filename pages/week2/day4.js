import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week2Day4() {
  return (
    <DayLayout
      title="Week 2 - Day 4"
      subtitle="Rib Shift and Thoracic Mobility"
      prevDay="/week2/day3"
      currentWeek="/week2"
      nextDay="/week2/day5"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Supine Rib Shift with Breath"
          description="Enhance ribcage awareness and asymmetrical breath control."
          href="/week2/day4/drill1"
        />

        <DrillCard
          number="2"
          title="Seated Posterior Pelvic Rocking"
          description="Maintain pelvic awareness and improve pelvic rhythm."
          href="/week2/day4/drill2"
        />

        <DrillCard
          number="3"
          title="Seated Thoracic Flexion/Extension"
          description="Develop awareness of spinal flexion and extension."
          href="/week2/day4/drill3"
        />

        <DrillCard
          number="4"
          title="Supine Hip Shifts with Rib Stability"
          description="Build core and hip stability through shifting patterns."
          href="/week2/day4/drill4"
        />

        <DrillCard
          number="5"
          title="Seated Breath with Pelvic Awareness"
          description="Reinforce breath and pelvic positioning control."
          href="/week2/day4/drill5"
        />
      </div>
    </DayLayout>
  );
}
