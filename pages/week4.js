import WeekLayout from '../components/WeekLayout';
import DayButtons from '../components/DayButtons';
import Card from '../components/Card';

export default function Week4() {
  return (
    <WeekLayout
      title="Week 4"
      subtitle="Rib & Pelvic Stability in Motion"
    >
      <DayButtons weekPath="/week4" />

      <div className="h-6"></div>

      <Card title="Purpose of This Week">
        <ul className="list-disc pl-5 text-lg">
          <li>Integrate dynamic movement patterns with breath and rib control.</li>
          <li>Reinforce strength and stability during more complex movements.</li>
          <li>Develop confidence in advanced hinge and squat patterns.</li>
          <li>Prepare the body for more progressive loaded movements in future programs</li>
        </ul>
      </Card>

      <Card title="Goals for Week 4">
        <ul className="list-disc pl-5 text-lg">
          <li>Improve movement efficiency by combining breath and core control.</li>
          <li>Enhance control of pelvic and ribcage positions during loaded movements.</li>
          <li>Develop strength in hinge, squat, and rotational patterns.</li>
          <li>Increase awareness of balance, stability, and control under dynamic conditions.</li>
        </ul>
      </Card>

      <Card title="Tips for Success">
        <ul className="list-disc pl-5 text-lg">
          <li>Maintain steady breathing while performing more complex movements.</li>
          <li>Focus on smooth, controlled transitions between positions.</li>
          <li>Use the breath to stabilize the ribcage and pelvis throughout each movement.</li>
          <li>Be mindful of fatigue—quality of movement is more important than quantity.</li>
        </ul>
      </Card>
    </WeekLayout>
  );
}
