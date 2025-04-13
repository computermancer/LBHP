import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week5Day5() {
  return (
    <DayLayout
      title="Week 5 - Day 5"
      subtitle="Mobility, Breath, and Control"
      prevDay="/week5/day4"
      currentWeek="/week5"
      nextDay="/week6/day1"
      disableNext={true}
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Horse Stance with Rib Control (Longer Hold)"
          description="Reinforce isometric lower body endurance."
          href="/week5/day5/drill1"
        />

        <DrillCard
          number="2"
          title="Calf Raises with Rib and Pelvic Control"
          description="Strengthen calves while maintaining neutral alignment."
          href="/week5/day5/drill2"
        />

        <DrillCard
          number="3"
          title="Tib Raises with Breath Awareness"
          description="Develop anterior shin strength and balance."
          href="/week5/day5/drill3"
        />

        <DrillCard
          number="4"
          title="Hooklying Rib Expansion with Marching"
          description="Reinforce core and breath control with marching."
          href="/week5/day5/drill4"
        />

        <DrillCard
          number="5"
          title="Supine Pelvic Rock with Breath Control"
          description="Enhance pelvic mobility and breath-guided awareness."
          href="/week5/day5/drill5"
        />
      </div>
    </DayLayout>
  );
}
