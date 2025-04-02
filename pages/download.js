import React from "react";
import Nav from '../components/Nav';

export default function Download() {
  const pdfs = [
    { label: "Week 1 – Reconnect & Reset", file: "/documents/LBHP-Week1.pdf" },
    { label: "Week 2 – Strengthen & Stabilize", file: "/documents/LBHP-Week2.pdf" },
    { label: "Week 3 – Hinge, Shift, & Rotate", file: "/documents/LBHP-Week3.pdf" },
    { label: "Week 4 – Integrate & Prepare", file: "/documents/LBHP-Week4.pdf" },
    { label: "Week 5 – Breathing & Nervous System Reset", file: "/documents/LBHP-Week5.pdf" },
    { label: "All 5 Weeks – Full Program", file: "/documents/LBHP-Complete.pdf" },
  ];

  return (
    <>
      <Nav />
      <main className="p-4 sm:p-8 text-gray-200 min-h-screen font-sans">
        <h1 className="text-orange-300 text-3xl font-bold mb-6">Downloads</h1>
        
        <section className="mb-6 max-w-2xl">
          <p className="text-lg mb-6">
            You can download each week or the entire program as a PDF.
          </p>
          <div className="space-y-4">
            {pdfs.map((pdf) => (
              <div key={pdf.file} className="flex justify-start">
                <a
                  href={pdf.file}
                  download={pdf.file.split('/').pop()}
                  className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left"
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
