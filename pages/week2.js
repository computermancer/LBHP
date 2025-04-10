import WeekLayout from '../components/WeekLayout';
import DayButtons from '../components/DayButtons';

export default function Week2() {
  return (
    <WeekLayout
      title="Week 2"
      subtitle="Rib Control & Hip Integration"
    >
      <DayButtons weekPath="/week2" />

      <div className="h-8"></div>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-orange-300">Purpose of This Week</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>Increase pelvic and ribcage control through dynamic positions.</li>
          <li>Introduce basic rotational movements and refine rib-pelvis connection.</li>
          <li>Develop comfort with hip hinging and improve thoracic extension.</li>
          <li>Reinforce breath control and interoceptive feedback.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-orange-300">Goals for Week 2</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>Refine awareness of pelvic and thoracic alignment during movement.</li>
          <li>Improve rotational control through the thoracic spine.</li>
          <li>Enhance stability and control in transitional positions.</li>
          <li>Develop better coordination between breath and movement.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-orange-300">Tips for Success</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>Focus on maintaining neutral pelvis and rib alignment during movement.</li>
          <li>Move deliberately and avoid rushing through drills.</li>
          <li>Pay attention to any asymmetries between sides.</li>
          <li>Prioritize breath control and coordinated timing.</li>
        </ul>
      </section>
    </WeekLayout>
  );
}
