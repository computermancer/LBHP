import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week1Day1() {
  return (
    <DayLayout
      title="Week 1 - Day 1"
      subtitle="Groundwork and Awareness"
      prevDay={null}
      currentWeek="/week1"
      nextDay="/week1/day2"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Posterior Pelvic Tilt on Wall"
          description="Develop awareness of pelvic tilt and lumbar control."
          href="/week1/day1/drill1"
        />

        <DrillCard
          number="2"
          title="Hooklying Belly Breathing"
          description="Improve breath control and diaphragmatic function."
          href="/week1/day1/drill2"
        />

        <DrillCard
          number="3"
          title="Seated Pelvic Rocking"
          description="Increase pelvic mobility and coordination."
          href="/week1/day1/drill3"
        />

        <DrillCard
          number="4"
          title="Supine 90-90 Reach"
          description="Enhance core stability and maintain rib-pelvis alignment."
          href="/week1/day1/drill4"
        />

        <DrillCard
          number="5"
          title="Wall Hamstring Press"
          description="Activate hamstrings to stabilize pelvis and core."
          href="/week1/day1/drill5"
        />
      </div>
    </DayLayout>
  );
}
