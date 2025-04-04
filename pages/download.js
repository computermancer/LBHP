import React from "react";
import Nav from '../components/Nav';

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
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Download PDF's</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Program Materials</h2>
          
          <section className="mb-6">
            <p className="text-lg mb-6">
              You can download each week or the entire program as a PDF.
            </p>
            <div className="space-y-4">
              {pdfs.map((pdf) => (
                <div key={pdf.file} className="flex justify-start">
                  <a
                    href={pdf.file}
                    download={pdf.file.split('/').pop()}
                    className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full text-left"
                  >
                    {pdf.label}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
