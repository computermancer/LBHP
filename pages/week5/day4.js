import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week5Day4() {
  return (
    <DayLayout
      title="Week 5 - Day 4"
      subtitle="Upper Body and Core Control"
      prevDay="/week5/day3"
      currentWeek="/week5"
      nextDay="/week5/day5"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Wall Pushups with Rib Stability"
          description="Introduce upper body pressing while maintaining core control."
          href="/week5/day4/drill1"
        />

        <DrillCard
          number="2"
          title="Chair Pushups with Pelvic Stability"
          description="Progress pressing with greater load while maintaining control."
          href="/week5/day4/drill2"
        />

        <DrillCard
          number="3"
          title="Floor Pushups with Rib and Pelvic Control"
          description="Build upper body and core strength in a plank position."
          href="/week5/day4/drill3"
        />

        <DrillCard
          number="4"
          title="Seated Spine Rotation with Reach"
          description="Develop thoracic rotation and scapular movement."
          href="/week5/day4/drill4"
        />

        <DrillCard
          number="5"
          title="Side-Lying Hip IR and Breathing"
          description="Improve hip mobility and breath control."
          href="/week5/day4/drill5"
        />
      </div>
    </DayLayout>
  );
}
