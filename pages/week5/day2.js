import DayLayout from '../../components/DayLayout';
import DrillCard from '../../components/DrillCard';

export default function Week5Day2() {
  return (
    <DayLayout
      title="Week 5 - Day 2"
      subtitle="Single Leg and Hip Control"
      prevDay="/week5/day1"
      currentWeek="/week5"
      nextDay="/week5/day3"
    >
      <div className="space-y-4">
        <DrillCard
          number="1"
          title="Staggered Stance Squats with Rib Stability"
          description="Develop single-leg loading and pelvic control."
          href="/week5/day2/drill1"
        />

        <DrillCard
          number="2"
          title="Lateral Lunges with Breath Control"
          description="Improve lateral hip control and rib stability."
          href="/week5/day2/drill2"
        />

        <DrillCard
          number="3"
          title="Side-Lying Hip Abduction with Breath Focus"
          description="Build lateral hip strength with breath control."
          href="/week5/day2/drill3"
        />

        <DrillCard
          number="4"
          title="Single-Leg Glute Bridge with Rib Stability"
          description="Develop posterior chain strength and hip control."
          href="/week5/day2/drill4"
        />

        <DrillCard
          number="5"
          title="Supine Rib Shift with Core Engagement"
          description="Develop core control with subtle rib shifting."
          href="/week5/day2/drill5"
        />
      </div>
    </DayLayout>
  );
}
