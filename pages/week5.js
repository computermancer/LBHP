import WeekLayout from '../components/WeekLayout';
import DayButtons from '../components/DayButtons';
import Card from '../components/Card';

export default function Week5() {
  return (
    <WeekLayout
      title="Week 5"
      subtitle="Strength & Control Progression"
    >
      <DayButtons weekPath="/week5" />

      <div className="h-6"></div>

      <Card title="Purpose of This Week">
        <ul className="list-disc pl-5 text-lg">
          <li>Integrate foundational strength work using bodyweight movements.</li>
          <li>Reinforce balance, control, and pelvic/rib stability during more challenging positions.</li>
          <li>Prepare the body to tolerate future load progression.</li>
        </ul>
      </Card>

      <Card title="Goals for Week 5">
        <ul className="list-disc pl-5 text-lg">
          <li>Develop strength and endurance in lower body stances and lunges.</li>
          <li>Build posterior chain strength through glute bridge variations.</li>
          <li>Introduce progressive upper body pushing variations.</li>
          <li>Improve single-leg balance and control through staggered stance and lunges.</li>
          <li>Reinforce rib and pelvic stability during more complex movements.</li>
        </ul>
      </Card>

      <Card title="Tips for Success">
        <ul className="list-disc pl-5 text-lg">
          <li>Focus on controlled movement over speed.</li>
          <li>Maintain breath control and core stability throughout.</li>
          <li>Progress gradually—listen to your body.</li>
          <li>Emphasize quality of movement as intensity increases.</li>
        </ul>
      </Card>
    </WeekLayout>
  );
}
