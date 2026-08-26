// frontend/src/services/pdfExportService.ts
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export interface ExportPdfOptions {
  market?: string;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (error: unknown) => void;
}

export const exportDashboardToPdf = async (
  element: HTMLElement,
  options: ExportPdfOptions = {}
): Promise<void> => {
  options.onStart?.();

  try {
    // Wait for React to render the exporting state (e.g., special header) and images
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const canvas = await html2canvas(element, {
      scale: 1.5,
      useCORS: true,
      backgroundColor: '#F0F2F4',
      logging: false,
    });

    const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth - 20;
    const imgHeight = imgWidth / (canvas.width / canvas.height);

    const availablePageHeight = pageHeight - 20;
    let remainingHeight = imgHeight;
    let sourceY = 0;
    let isFirstPage = true;

    while (remainingHeight > 0) {
      if (!isFirstPage) pdf.addPage();

      const sliceHeight = Math.min(availablePageHeight, remainingHeight);
      const sourceSliceHeight = (sliceHeight / imgHeight) * canvas.height;

      const sliceCanvas = document.createElement('canvas');
      sliceCanvas.width = canvas.width;
      sliceCanvas.height = Math.round(sourceSliceHeight);
      const ctx = sliceCanvas.getContext('2d');

      if (ctx) {
        ctx.drawImage(
          canvas,
          0,
          Math.round(sourceY),
          canvas.width,
          Math.round(sourceSliceHeight),
          0,
          0,
          canvas.width,
          Math.round(sourceSliceHeight)
        );
        pdf.addImage(
          sliceCanvas.toDataURL('image/jpeg', 0.92),
          'JPEG',
          10,
          10,
          imgWidth,
          sliceHeight
        );
      }

      sourceY += sourceSliceHeight;
      remainingHeight -= sliceHeight;
      isFirstPage = false;
    }

    const marketLabel = options.market || 'Global';
    const dateStr = new Date().toISOString().split('T')[0];
    pdf.save(`LLYC_Dashboard_${marketLabel}_${dateStr}.pdf`);
  } catch (err) {
    console.error('PDF Export error:', err);
    options.onError?.(err);
    throw err;
  } finally {
    options.onEnd?.();
  }
};
