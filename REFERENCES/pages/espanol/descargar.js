import React from "react";
import NavEspanol from '../../components/NavEspanol';

export default function Descargar() {
  const pdfs = [
    { label: "Semana 1 – Conciencia y Activación", file: "/documents/LBHP-Semana1.pdf" },
    { label: "Semana 2 – Control Costal e Integración de Cadera", file: "/documents/LBHP-Semana2.pdf" },
    { label: "Semana 3 – Control Pélvico e Integración Respiratoria", file: "/documents/LBHP-Semana3.pdf" },
    { label: "Semana 4 – Estabilidad Costal y Pélvica en Movimiento", file: "/documents/LBHP-Semana4.pdf" },
    { label: "Semana 5 – Progresión de Fuerza y Control", file: "/documents/LBHP-Semana5.pdf" },
    { label: "Las 5 Semanas – Programa Completo", file: "/documents/LBHP-Completo.pdf" },
  ];

  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Descargar PDF's</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Materiales del Programa</h2>
          
          <section className="mb-6">
            <p className="text-lg mb-6">
              Puedes descargar cada semana o el programa completo en formato PDF.
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
