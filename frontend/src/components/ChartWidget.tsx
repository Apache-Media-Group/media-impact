import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartWidgetProps {
  type: 'line' | 'bar' | 'doughnut';
  title: string;
  source?: string;
  data: any;
  options?: any;
  height?: number;
  legendId?: string;
  footer?: React.ReactNode;
  onInfoClick?: () => void;
}

export const ChartWidget: React.FC<ChartWidgetProps> = ({ 
  type, 
  title, 
  source, 
  data, 
  options = {}, 
  height = 200,
  legendId,
  footer,
  onInfoClick
}) => {
  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    ...options
  };

  const hasValidData = Boolean(
    data &&
    Array.isArray(data.datasets) &&
    data.datasets.length > 0 &&
    data.datasets.some((d: any) => Array.isArray(d.data) && d.data.length > 0)
  );


  return (
    <div className="bg-white rounded-xl p-5 border border-dashboard-border shadow-sm flex flex-col">
      <div className="text-[11px] font-bold text-navy uppercase tracking-widest mb-4 flex items-center gap-1">
        {title}
        {source && (
          <span className={`text-[9px] px-1.5 py-0.5 rounded font-black ${source === 'GA4' ? 'bg-teal-light text-teal' : 'bg-red-light text-red'}`}>
            {source}
          </span>
        )}
        {onInfoClick && (
          <button 
            onClick={onInfoClick}
            className="ml-auto text-mid hover:text-navy transition-colors"
            title="Ver metodología"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </button>
        )}
      </div>
      
      <div className="w-full relative" style={{ height }}>
        {hasValidData ? (
          type === 'line' ? <Line data={data} options={baseOptions} /> :
          type === 'bar' ? <Bar data={data} options={baseOptions} /> :
          type === 'doughnut' ? <Doughnut data={data} options={baseOptions} /> : null
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-mid/60 italic">
            Sin datos para este periodo
          </div>
        )}
      </div>

      {legendId && <div id={legendId} className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-mid"></div>}
      
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};
