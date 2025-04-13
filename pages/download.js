import React from "react";
import WeekLayout from '../components/WeekLayout';

export default function Download() {
  const pdfs = [
    { label: "Week 1 – Awareness & Activation", file: "/documents/LBHP-Week1.pdf" },
    { label: "Week 2 – Rib Control & Hip Integration", file: "/documents/LBHP-Week2.pdf" },
    { label: "Week 3 – Pelvic Control & Breath Integration", file: "/documents/LBHP-Week3.pdf" },
    { label: "Week 4 – Rib & Pelvic Stability in Motion", file: "/documents/LBHP-Week4.pdf" },
    { label: "Week 5 – Strength & Control Progression", file: "/documents/LBHP-Week5.pdf" },
    { label: "All 5 Weeks – Full Program", file: "/documents/LBHP-Complete.pdf" },
  ];

  return (
    <div className="min-h-screen bg-zinc-900">
      <WeekLayout
        title="Download PDF's"
        subtitle="Program Materials"
      >
        <div className="space-y-6">
          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <p className="text-lg mb-6">
              You can download each week or the entire program as a PDF for offline refrence, or even to print out.
            </p>
            <div className="space-y-4">
              {pdfs.map((pdf) => (
                <div key={pdf.file} className="flex justify-start">
                  <a
                    href={pdf.file}
                    download={pdf.file.split('/').pop()}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg transition-colors border border-gray-600"
                  >
                    {pdf.label}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </WeekLayout>
    </div>
  );
}
