import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function PdfGeneratorEspanol({ children, filename = 'documento.pdf', buttonText = 'Descargar PDF' }) {
  const contentRef = useRef(null);

  const generatePDF = async () => {
    if (!contentRef.current) return;

    try {
      // Show loading state or notification here if needed
      
      const canvas = await html2canvas(contentRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true, // Enable CORS for images
        logging: false, // Disable logging
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      // Calculate dimensions to fit the content on the page
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(filename);
      
      // Show success notification here if needed
    } catch (error) {
      console.error('Error al generar PDF:', error);
      // Show error notification here if needed
    }
  };

  return (
    <div>
      <div ref={contentRef}>
        {children}
      </div>
      <button
        onClick={generatePDF}
        className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
      >
        {buttonText}
      </button>
    </div>
  );
} 