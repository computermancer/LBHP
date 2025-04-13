import WeekLayout from '../components/WeekLayout';
import DayButtons from '../components/DayButtons';
import Card from '../components/Card';

export default function Week2() {
  return (
    <WeekLayout
      title="Week 2"
      subtitle="Rib Control & Hip Integration"
    >
      <DayButtons weekPath="/week2" />

      <div className="h-6"></div>

      <Card title="Purpose of This Week">
        <ul className="list-disc pl-5 text-lg">
          <li>Increase pelvic and ribcage control through dynamic positions.</li>
          <li>Introduce basic rotational movements and refine rib-pelvis connection.</li>
          <li>Develop comfort with hip hinging and improve thoracic extension.</li>
          <li>Reinforce breath control and interoceptive feedback.</li>
        </ul>
      </Card>

      <Card title="Goals for Week 2">
        <ul className="list-disc pl-5 text-lg">
          <li>Refine awareness of pelvic and thoracic alignment during movement.</li>
          <li>Improve rotational control through the thoracic spine.</li>
          <li>Enhance stability and control in transitional positions.</li>
          <li>Develop better coordination between breath and movement.</li>
        </ul>
      </Card>

      <Card title="Tips for Success">
        <ul className="list-disc pl-5 text-lg">
          <li>Focus on maintaining neutral pelvis and rib alignment during movement.</li>
          <li>Move deliberately and avoid rushing through drills.</li>
          <li>Pay attention to any asymmetries between sides.</li>
          <li>Prioritize breath control and coordinated timing.</li>
        </ul>
      </Card>
    </WeekLayout>
  );
}
