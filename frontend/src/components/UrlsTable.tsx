import React from 'react';

interface ContentAffinity {
  landing_page: string;
  cluster: string;
  sessions: number;
  avg_duration: string | number;
  share_ia?: string;
  platform_breakdown?: Record<string, number>;
}

interface UrlsTableProps {
  title: string;
  rows: ContentAffinity[];
  source?: string;
}

export const UrlsTable: React.FC<UrlsTableProps> = ({ title, rows, source }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-dashboard-border shadow-sm">
      <div className="p-5 pb-0">
        <div className="text-[11px] font-bold text-navy uppercase tracking-widest mb-4 flex items-center gap-1">
          {title}
          {source && (
            <span className={`text-[9px] px-1.5 py-0.5 rounded font-black ${source === 'GA4' ? 'bg-teal-light text-teal' : 'bg-red-light text-red'}`}>
              {source}
            </span>
          )}
        </div>
      </div>
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[580px]">
          <thead className="bg-dashboard-bg/50">
            <tr>
              <th className="px-5 py-2 text-[10px] font-bold text-mid uppercase tracking-widest">URL de Aterrizaje</th>
              <th className="px-5 py-2 text-[10px] font-bold text-mid uppercase tracking-widest text-right">Sesiones</th>
              <th className="px-5 py-2 text-[10px] font-bold text-mid uppercase tracking-widest text-right">Duración Media</th>
              <th className="px-5 py-2 text-[10px] font-bold text-mid uppercase tracking-widest">Cluster Principal</th>
              <th className="px-5 py-2 text-[10px] font-bold text-mid uppercase tracking-widest">Desglose por Motor (IA)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dashboard-border">
            {rows.length > 0 ? rows.map((r, i) => (
              <tr key={i} className="hover:bg-dashboard-bg/20 transition-colors">
                <td className="px-5 py-2.5 text-xs font-medium text-navy break-all max-w-xs" title={r.landing_page}>
                  <a href={r.landing_page.startsWith('http') ? r.landing_page : `https://${r.landing_page}`} target="_blank" rel="noopener noreferrer" className="hover:text-red transition-colors underline decoration-dashboard-border hover:decoration-red underline-offset-2">
                    {r.landing_page.replace(/^https?:\/\/(www\.)?/, '').split('?')[0]}
                  </a>
                </td>
                <td className="px-5 py-2.5 text-xs font-bold text-right text-navy">
                  {r.sessions.toLocaleString('es-ES')}
                  {r.share_ia && <span className="block text-[9px] text-mid font-medium">{r.share_ia} del total</span>}
                </td>
                <td className="px-5 py-2.5 text-xs font-medium text-right text-mid">
                  {r.avg_duration}
                </td>
                <td className="px-5 py-2.5">
                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    r.cluster === 'transaccional' ? 'bg-red/10 text-red border border-red/20' :
                    r.cluster === 'investigador' || r.cluster === 'investigación' ? 'bg-teal/10 text-teal border border-teal/20' :
                    r.cluster === 'respuesta_rápida' || r.cluster === 'respuesta rápida' ? 'bg-navy/10 text-navy border border-navy/20' :
                    'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                  }`}>
                    {r.cluster.replace('_', ' ')}
                  </span>
                </td>
                <td className="px-5 py-2.5">
                  {r.platform_breakdown && Object.keys(r.platform_breakdown).length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {Object.entries(r.platform_breakdown).map(([engine, count]) => (
                        <span key={engine} className="text-[9px] px-1.5 py-0.5 bg-dashboard-bg border border-dashboard-border rounded text-mid font-medium flex items-center gap-1" title={`${engine}: ${count} sesiones`}>
                          <span className="font-bold text-navy capitalize">{engine}</span>
                          <span className="text-[8px] bg-white/50 px-1 rounded">{count}</span>
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-[10px] text-mid/50 italic">Sin desagregar</span>
                  )}
                </td>
              </tr>
            )) : (
              <tr><td colSpan={5} className="px-5 py-8 text-center text-mid text-xs italic">No hay URLs recomendadas o detectadas para este periodo</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
