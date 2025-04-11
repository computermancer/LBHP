import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week1Day2() {
  return (
    <DayLayout
      title="Week 1 - Day 2"
      subtitle="Rib Expansion and Hip Hinge Focus"
      prevDay="/week1/day1"
      currentWeek="/week1"
      nextDay="/week1/day3"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Side-Lying Rib Expansion"
          description="Improve lateral ribcage expansion and breathing mechanics."
          href="/week1/day2/drill1"
        />

        <DrillCard
          number="2"
          title="Seated Thoracic Rotation"
          description="Increase thoracic mobility and rotational control."
          href="/week1/day2/drill2"
        />

        <DrillCard
          number="3"
          title="Standing Hip Hinge with Wall Reach"
          description="Develop hip hinge awareness and control."
          href="/week1/day2/drill3"
        />

        <DrillCard
          number="4"
          title="Quadruped Rock Back with Neutral Spine"
          description="Promote pelvic control with neutral spine."
          href="/week1/day2/drill4"
        />

        <DrillCard
          number="5"
          title="Wall Supported Squat Hold"
          description="Build confidence in squat position with wall support."
          href="/week1/day2/drill5"
        />
      </div>
    </DayLayout>
  );
}
