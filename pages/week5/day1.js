import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week5Day1() {
  return (
    <DayLayout
      title="Week 5 - Day 1"
      subtitle="Lower Body Control and Strength"
      prevDay="/week4/day5"
      currentWeek="/week5"
      nextDay="/week5/day2"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Bodyweight Squats with Rib Control"
          description="Reinforce squat mechanics with core stability."
          href="/week5/day1/drill1"
        />

        <DrillCard
          number="2"
          title="Horse Stance Hold (Parallel to Floor)"
          description="Develop isometric strength and endurance in the lower body."
          href="/week5/day1/drill2"
        />

        <DrillCard
          number="3"
          title="Kickstand RDL with Hip Control"
          description="Enhance posterior chain and hip stability."
          href="/week5/day1/drill3"
        />

        <DrillCard
          number="4"
          title="Wall Supported Split Squat Hold"
          description="Strengthen glutes, quads, and core in a split stance."
          href="/week5/day1/drill4"
        />

        <DrillCard
          number="5"
          title="Supine Marching with Core Control"
          description="Reinforce pelvic stability during dynamic movement."
          href="/week5/day1/drill5"
        />
      </div>
    </DayLayout>
  );
}
