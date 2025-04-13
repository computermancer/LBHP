import WeekLayout from '../components/WeekLayout';

export default function WorkInProgress() {
  return (
    <WeekLayout
      title="Work in Progress"
      subtitle="Current Development Updates"
    >
      <div className="space-y-6">
        <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Continuous Evolution</h2>
          <p className="text-lg leading-relaxed">
            This version of LBHP is a living, breathing work in progress. I'm committed to continually improving and expanding the program based on feedback, experience, and evolving tools.
          </p>

          <p className="text-lg leading-relaxed">
            If something doesn't make sense, feels confusing, or you have suggestions—please don't hesitate to reach out. Your input helps shape the future of this program.
          </p>
        </section>

        <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
          <h2 className="text-orange-300 text-xl font-semibold mb-4">What's Next</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
            <li>Updating instructions and cues as needed for clarity and precision</li>
            <li>Using feedback from users to refine and enhance usability</li>
            <li>Adding video support for each drill to assist with learning and confidence</li>
            <li>Creating a Spanish-language version for broader accessibility</li>
            <li>Building an improved glossary system to explain terms and positions</li>
            <li>Optimizing dynamic resolution for smoother viewing on tablets and desktops</li>
          </ul>
        </section>
      </div>
    </WeekLayout>
  );
}
