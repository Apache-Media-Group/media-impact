import React from 'react';
import { ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';

interface KpiCardProps {
  label: string;
  value: string | number;
  suffix?: string;
  trend?: string;
  isPositive?: boolean;
  source?: string;
  colorClass?: string;
  tooltip?: string;
}

export const KpiCard: React.FC<KpiCardProps> = ({ 
  label, 
  value, 
  suffix, 
  trend, 
  isPositive = true, 
  source,
  colorClass = "",
  tooltip
}) => {
  const valueStr = String(value);
  const isVeryLongValue = valueStr.length > 7;
  const isLongValue = valueStr.length > 5;
  
  const valueSizeClass = isVeryLongValue ? 'text-xl xl:text-2xl' : isLongValue ? 'text-2xl xl:text-3xl' : 'text-3xl';

  return (
    <div className={`bg-white rounded-xl p-4 border border-dashboard-border shadow-sm flex flex-col gap-1.5 min-w-0 h-full ${colorClass}`}>
      <div className="flex items-start justify-between min-w-0">
        <div className="text-[10px] xl:text-[11px] font-bold text-mid uppercase tracking-widest flex items-start gap-1 flex-wrap">
          <div className="leading-tight break-words flex items-center gap-1 group relative">
            {label}
            {tooltip ? (
              <>
                <Info className="w-3 h-3 text-mid/60 hover:text-navy transition-colors cursor-help" />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 p-2.5 bg-navy text-white text-[10px] normal-case font-normal tracking-normal rounded-lg shadow-xl z-50 pointer-events-none before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-navy">
                  {tooltip}
                </div>
              </>
            ) : null}
          </div>
          {source ? (
            <span className={`text-[8px] xl:text-[9px] px-1.5 py-0.5 rounded font-black flex-shrink-0 mt-[-1px] ${source === 'GA4' ? 'bg-teal-light text-teal' : source === 'Adobe' ? 'bg-navy/10 text-navy' : 'bg-red-light text-red'}`}>
              {source}
            </span>
          ) : null}
        </div>
      </div>
      
      <div className={`${valueSizeClass} font-black text-navy flex items-baseline gap-1 min-w-0 mt-1`}>
        <span className="break-all leading-none">{value}</span>
        {suffix ? <em className="text-xs xl:text-sm font-normal not-italic text-mid flex-shrink-0">{suffix}</em> : null}
      </div>
      
      {trend ? (
        <div className={`text-[9px] xl:text-[10px] font-bold flex items-center gap-0.5 mt-auto ${isPositive ? 'text-green-600' : 'text-red'}`}>
          {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          <span className="truncate">{trend}</span>
        </div>
      ) : null}
    </div>
  );
};
