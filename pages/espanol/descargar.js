import React from "react";
import WeekLayout from '../../components/WeekLayout';
import MainEspNavbar from '../../components/MainEspNavbar';

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
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavbar />
      <WeekLayout
        title="Descargar PDF's"
        subtitle="Materiales del Programa"
      >
        <div className="space-y-6">
          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <p className="text-lg mb-6">
              Puedes descargar cada semana o el programa completo en formato PDF.
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
