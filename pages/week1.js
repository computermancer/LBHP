import WeekLayout from '../components/WeekLayout';
import DayButtons from '../components/DayButtons';

export default function Week1() {
  return (
    <WeekLayout
      title="Week 1"
      subtitle="Awareness & Activation"
    >
      <DayButtons weekPath="/week1" />

      <div className="h-8"></div>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-orange-300">Purpose of This Week</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>Introduce awareness of the pelvis, ribs, and diaphragm.</li>
          <li>Develop foundational control over lumbar flexion and extension.</li>
          <li>Increase interoceptive awareness and enhance breath control.</li>
          <li>Begin building confidence in pelvic and ribcage positioning.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-orange-300">Goals for Week 1</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>Develop awareness of posterior and anterior pelvic tilt.</li>
          <li>Control breath patterns while maintaining neutral pelvis and ribs.</li>
          <li>Improve sensory feedback through slow, controlled movements.</li>
          <li>Establish a foundation for safe, pain-free squatting and hinging.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-orange-300">Tips for Success</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>Move slowly and deliberately—quality over quantity.</li>
          <li>Focus on breath awareness and control.</li>
          <li>Take breaks if you feel fatigued or lose focus.</li>
          <li>Pay attention to how your body responds to different movements.</li>
        </ul>
      </section>
    </WeekLayout>
  );
}
