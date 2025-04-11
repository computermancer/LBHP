import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week1Day3() {
  return (
    <DayLayout
      title="Week 1 - Day 3"
      subtitle="Breath Control and Rhythmic Movement"
      prevDay="/week1/day2"
      currentWeek="/week1"
      nextDay="/week1/day4"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Breath Reset in Side-Lying"
          description="Promote ribcage and diaphragm reset through focused breath."
          href="/week1/day3/drill1"
        />

        <DrillCard
          number="2"
          title="Rhythmic Reach & Roll"
          description="Enhance rotational control and coordination."
          href="/week1/day3/drill2"
        />

        <DrillCard
          number="3"
          title="Supported Breath Patterning"
          description="Reinforce steady breath control and rib awareness."
          href="/week1/day3/drill3"
        />

        <DrillCard
          number="4"
          title="Relaxed Spine Rocking"
          description="Encourage fluid motion through the pelvis and spine."
          href="/week1/day3/drill4"
        />

        <DrillCard
          number="5"
          title="Gentle Bilateral Rocking"
          description="Improve pelvic mobility and relaxation."
          href="/week1/day3/drill5"
        />
      </div>
    </DayLayout>
  );
}
