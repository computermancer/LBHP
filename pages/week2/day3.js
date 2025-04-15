import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week2Day3() {
  return (
    <DayLayout
      title="Week 2 - Day 3"
      subtitle="Pelvic Control & Stability"
      prevDay="/week2/day2"
      currentWeek="/week2"
      nextDay="/week2/day4"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Hooklying Pelvic Clocks"
          description="Develop subtle awareness and control of pelvic tilt."
          href="/week2/day3/drill1"
        />

        <DrillCard
          number="2"
          title="Supine Diaphragm Reset with Reach"
          description="Refine breath control with active upper body reach."
          href="/week2/day3/drill2"
        />

        <DrillCard
          number="3"
          title="Seated Spine Rotation with Breath"
          description="Increase thoracic rotation with breath control."
          href="/week2/day3/drill3"
        />

        <DrillCard
          number="4"
          title="Supported Side-Lying Hip Abduction"
          description="Improve lateral hip strength and pelvic stability."
          href="/week2/day3/drill4"
        />

        <DrillCard
          number="5"
          title="Wall Supported Deep Squat Hold"
          description="Build confidence in deep squat position while maintaining control."
          href="/week2/day3/drill5"
        />
      </div>
    </DayLayout>
  );
}
