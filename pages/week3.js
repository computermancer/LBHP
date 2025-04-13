import WeekLayout from '../components/WeekLayout';
import DayButtons from '../components/DayButtons';
import Card from '../components/Card';

export default function Week3() {
  return (
    <WeekLayout
      title="Week 3"
      subtitle="Pelvic Control & Breath Integration"
    >
      <DayButtons weekPath="/week3" />

      <div className="h-6"></div>

      <Card title="Purpose of This Week">
        <ul className="list-disc pl-5 text-lg">
          <li>Reinforce pelvic and ribcage coordination during more dynamic movements.</li>
          <li>Continue developing control in hip hinging and spinal mobility.</li>
          <li>Introduce further rotational patterns for thoracic mobility.</li>
          <li>Enhance breath awareness to support stability and control.</li>
        </ul>
      </Card>

      <Card title="Goals for Week 3">
        <ul className="list-disc pl-5 text-lg">
          <li>Build confidence in deeper hip movements and spinal flexion/extension.</li>
          <li>Improve rotational strength and mobility through thoracic and lumbar integration.</li>
          <li>Develop increased control of breath while performing dynamic movements.</li>
          <li>Refine awareness of posture and alignment in different positions.</li>
        </ul>
      </Card>

      <Card title="Tips for Success">
        <ul className="list-disc pl-5 text-lg">
          <li>Focus on maintaining a stable pelvis and ribcage through each movement.</li>
          <li>Move with control—prioritize quality over quantity.</li>
          <li>Continue using breath as a guide to enhance movement efficiency.</li>
          <li>Monitor any asymmetries between sides and adjust as needed.</li>
        </ul>
      </Card>
    </WeekLayout>
  );
}
