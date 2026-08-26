// frontend/src/components/dashboard/MotorPerformanceTable.tsx
import React from 'react';
import type { MotorPerformanceRow, TenantConfig } from '../../types';

interface MotorPerformanceTableProps {
  trafficSource: string;
  motorRows: MotorPerformanceRow[];
  tenant: TenantConfig;
}

export const MotorPerformanceTable: React.FC<MotorPerformanceTableProps> = ({
  trafficSource,
  motorRows,
  tenant,
}) => {
  const conversionEvents = tenant?.ga4_conversion_events || [];

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-dashboard-border shadow-sm">
      <div className="p-5 pb-0">
        <div className="text-[11px] font-bold text-navy uppercase tracking-widest mb-1 flex items-center gap-1">
          Rendimiento por motor IA{' '}
          <span
            className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase ${
              trafficSource === 'Adobe' ? 'bg-navy/10 text-navy' : 'bg-teal-light text-teal'
            }`}
          >
            {trafficSource}
          </span>
        </div>
        <div className="text-[10px] text-mid mb-4">Desglose de conversiones configuradas</div>
      </div>
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[580px]">
          <thead className="bg-dashboard-bg/50">
            <tr className="text-[10px] font-bold text-mid uppercase tracking-widest">
              <th className="px-5 py-2">Motor</th>
              <th className="px-5 py-2 text-right">Sesiones</th>
              <th className="px-5 py-2 text-right">Duración</th>
              {conversionEvents.length > 0 ? (
                conversionEvents.map((event) => (
                  <th key={event} className="px-5 py-2 text-right">
                    {event.replace(/_/g, ' ')}
                  </th>
                ))
              ) : (
                <th className="px-5 py-2 text-right">Conv.</th>
              )}
              <th className="px-5 py-2 text-center">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dashboard-border text-xs">
            {motorRows.length > 0 ? (
              motorRows.map((r, i) => (
                <tr key={i} className="hover:bg-dashboard-bg/20 transition-colors">
                  <td className="px-5 py-2 font-bold text-navy">{r.n}</td>
                  <td className="px-5 py-2 text-right text-mid">{r.s}</td>
                  <td className="px-5 py-2 text-right text-mid">{r.d}</td>

                  {conversionEvents.length > 0 ? (
                    conversionEvents.map((event) => (
                      <td key={event} className="px-5 py-2 text-right text-mid font-medium text-navy">
                        {r.conversionsByEvent?.[event] || 0}
                      </td>
                    ))
                  ) : (
                    <td className="px-5 py-2 text-right text-mid">{r.c}</td>
                  )}

                  <td className="px-5 py-2">
                    <div className="flex items-center gap-2 justify-end">
                      <span className="text-[10px] font-bold text-mid">{r.sc}</span>
                      <div className="w-16 h-1 bg-dashboard-bg rounded-full overflow-hidden">
                        <div className="h-full bg-red" style={{ width: `${r.sc}%` }}></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-5 py-8 text-center text-mid text-xs italic">
                  Sin datos de tráfico para este periodo
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
