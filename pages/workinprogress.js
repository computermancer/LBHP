import MainNavBar from '../components/MainNavBar';

export default function WorkInProgress() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainNavBar />
      <main className="px-8 text-gray-200 font-sans">
      <div className="max-w-[500px] mx-auto py-20">
      <h1 className="text-orange-300 text-4xl font-bold mb-2">Work in Progress</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Current Development Updates</h2>

          <section className="space-y-6">
            <p className="text-lg leading-relaxed">
              This version of LBHP is a living, breathing work in progress. I'm committed to continually improving and expanding the program based on feedback, experience, and evolving tools.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-orange-300">Here are a few things currently in development:</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Updating instructions and cues as needed for clarity and precision</li>
                <li>Using feedback from users to refine and enhance usability</li>
                <li>Adding video support for each drill to assist with learning and confidence</li>
                <li>Creating a Spanish-language version for broader accessibility</li>
                <li>Building an improved glossary system to explain terms and positions</li>
                <li>Optimizing dynamic resolution for smoother viewing on tablets and desktops</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              If something doesn't make sense, feels confusing, or you have suggestions—please don't hesitate to reach out. Your input helps shape the future of this program.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
