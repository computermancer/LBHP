import React from "react";
import Nav from '../components/Nav';

export default function Download() {
  const pdfs = [
    { label: "Week 1 – Reconnect & Reset", file: "LBHP-Week1.pdf" },
    { label: "Week 2 – Strengthen & Stabilize", file: "LBHP-Week2.pdf" },
    { label: "Week 3 – Hinge, Shift, & Rotate", file: "LBHP-Week3.pdf" },
    { label: "Week 4 – Integrate & Prepare", file: "LBHP-Week4.pdf" },
    { label: "Week 5 – Breathing & Nervous System Reset", file: "LBHP-Week5.pdf" },
    { label: "All 5 Weeks – Full Program", file: "LBHP-Complete.pdf" },
  ];

  return (
    <>
      <Nav />
      <main className="p-8 text-gray-200 min-h-screen font-sans">
        <h1 className="text-orange-300 text-3xl font-bold mb-6">Downloads</h1>
        
        <section className="mb-6 max-w-2xl">
          <p className="text-lg mb-6">
            You can download each week or the entire program as a PDF.
          </p>
          <div>
            {pdfs.map((pdf) => (
              <div key={pdf.file} className="flex space-x-4 mb-3">
                <a
                  href={`/documents/${pdf.file}`}
                  download={pdf.file}
                  className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-[500px] mb-6"
                >
                  {pdf.label}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
