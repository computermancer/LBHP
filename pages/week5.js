import WeekLayout from '../components/WeekLayout';
import DayButtons from '../components/DayButtons';

export default function Week5() {
  return (
    <WeekLayout
      title="Week 5"
      subtitle="Strength & Control Progression"
    >
      <DayButtons weekPath="/week5" />

      <div className="h-8"></div>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-orange-300">Purpose of This Week</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>Integrate foundational strength work using bodyweight movements.</li>
          <li>Reinforce balance, control, and pelvic/rib stability during more challenging positions.</li>
          <li>Prepare the body to tolerate future load progression.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-orange-300">Goals for Week 5</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>Develop strength and endurance in lower body stances and lunges.</li>
          <li>Build posterior chain strength through glute bridge variations.</li>
          <li>Introduce progressive upper body pushing variations.</li>
          <li>Improve single-leg balance and control through staggered stance and lunges.</li>
          <li>Reinforce rib and pelvic stability during more complex movements.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-orange-300">Tips for Success</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>Focus on controlled movement over speed.</li>
          <li>Maintain breath control and core stability throughout.</li>
          <li>Progress gradually—listen to your body.</li>
          <li>Emphasize quality of movement as intensity increases.</li>
        </ul>
      </section>
    </WeekLayout>
  );
}
