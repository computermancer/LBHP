import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week1Day4() {
  return (
    <DayLayout
      title="Week 1 - Day 4"
      subtitle="Pelvic and Rib Control"
      prevDay="/week1/day3"
      currentWeek="/week1"
      nextDay="/week1/day5"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Supine Diaphragm Reset"
          description="Establish deeper diaphragmatic control and relaxation."
          href="/week1/day4/drill1"
        />

        <DrillCard
          number="2"
          title="Seated Posterior Pelvic Rocking"
          description="Improve awareness of pelvic positioning."
          href="/week1/day4/drill2"
        />

        <DrillCard
          number="3"
          title="Seated Thoracic Extension"
          description="Strengthen thoracic extension and rib positioning."
          href="/week1/day4/drill3"
        />

        <DrillCard
          number="4"
          title="Supine Hip Shift with Breath"
          description="Build control of pelvic shifts and core integration."
          href="/week1/day4/drill4"
        />

        <DrillCard
          number="5"
          title="Seated Breath with Rib Control"
          description="Maintain ribcage and pelvis control with steady breath."
          href="/week1/day4/drill5"
        />
      </div>
    </DayLayout>
  );
}
