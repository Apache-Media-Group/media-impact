// frontend/src/components/dashboard/MotorPerformanceTable.tsx
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ExternalLink, ShoppingBag, Globe } from 'lucide-react';
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
  const [expandedMotor, setExpandedMotor] = useState<string | null>(null);
  const conversionEvents = tenant?.ga4_conversion_events || [];

  const toggleExpand = (motorName: string) => {
    setExpandedMotor(prev => prev === motorName ? null : motorName);
  };

  const hasPurchases = motorRows.some(r => (r.purchaseCount !== undefined && r.purchaseCount > 0) || (r.purchaseRevenue !== undefined && r.purchaseRevenue > 0));

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-dashboard-border shadow-sm">
      <div className="p-5 pb-3">
        <div className="flex items-center justify-between">
          <div>
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
            <div className="text-[10px] text-mid">
              Desglose de conversiones, Sniper Score y URLs recomendadas por modelo
            </div>
          </div>
          <div className="text-[10px] text-mid italic hidden sm:block">
            Haz clic en un motor para ver sus Landing Pages
          </div>
        </div>
      </div>
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[620px]">
          <thead className="bg-dashboard-bg/50">
            <tr className="text-[10px] font-bold text-mid uppercase tracking-widest">
              <th className="px-5 py-2.5">Motor</th>
              <th className="px-5 py-2.5 text-right">Sesiones</th>
              <th className="px-5 py-2.5 text-right">Duración</th>
              {conversionEvents.length > 0 ? (
                conversionEvents.map((event) => (
                  <th key={event} className="px-5 py-2.5 text-right">
                    {event === 'purchase' ? 'Compras (Ecommerce)' : event.replace(/_/g, ' ')}
                  </th>
                ))
              ) : hasPurchases ? (
                <>
                  <th className="px-5 py-2.5 text-right">Compras</th>
                  <th className="px-5 py-2.5 text-right">Tasa Conv.</th>
                </>
              ) : (
                <th className="px-5 py-2.5 text-right">Tasa Conv.</th>
              )}
              <th className="px-5 py-2.5 text-center">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dashboard-border text-xs">
            {motorRows.length > 0 ? (
              motorRows.map((r, i) => {
                const isExpanded = expandedMotor === r.n;
                const landingCount = r.landingPages?.length || 0;
                const colSpanCount = conversionEvents.length > 0 ? 4 + conversionEvents.length : (hasPurchases ? 6 : 5);

                return (
                  <React.Fragment key={r.n || i}>
                    <tr 
                      onClick={() => toggleExpand(r.n)}
                      className={`hover:bg-dashboard-bg/30 transition-colors cursor-pointer ${
                        isExpanded ? 'bg-dashboard-bg/40' : ''
                      }`}
                    >
                      <td className="px-5 py-3 font-bold text-navy flex items-center gap-2">
                        <span className="text-mid hover:text-navy transition-colors">
                          {isExpanded ? (
                            <ChevronDown className="w-3.5 h-3.5 text-primary" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-mid" />
                          )}
                        </span>
                        <div className="flex items-center gap-2">
                          <span>{r.n}</span>
                          {landingCount > 0 && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded-full font-semibold bg-primary/10 text-primary">
                              {landingCount} {landingCount === 1 ? 'URL' : 'URLs'}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-3 text-right text-mid font-medium">{r.s}</td>
                      <td className="px-5 py-3 text-right text-mid">{r.d}</td>

                      {conversionEvents.length > 0 ? (
                        conversionEvents.map((event) => {
                          const val = event === 'purchase' && r.purchaseCount !== undefined
                            ? r.purchaseCount
                            : (r.conversionsByEvent?.[event] || 0);
                          return (
                            <td key={event} className="px-5 py-3 text-right font-medium text-navy">
                              {val}
                              {event === 'purchase' && r.purchaseRevenue && r.purchaseRevenue > 0 && (
                                <span className="block text-[9px] text-mid font-normal">
                                  {r.purchaseRevenue.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                                </span>
                              )}
                            </td>
                          );
                        })
                      ) : hasPurchases ? (
                        <>
                          <td className="px-5 py-3 text-right font-medium text-navy">
                            <div className="flex items-center justify-end gap-1">
                              <ShoppingBag className="w-3 h-3 text-emerald-600" />
                              <span>{r.purchaseCount ?? r.conversions ?? 0}</span>
                            </div>
                            {r.purchaseRevenue && r.purchaseRevenue > 0 && (
                              <span className="block text-[9px] text-mid font-normal">
                                {r.purchaseRevenue.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                              </span>
                            )}
                          </td>
                          <td className="px-5 py-3 text-right text-mid">{r.purchaseRate ?? r.c}</td>
                        </>
                      ) : (
                        <td className="px-5 py-3 text-right text-mid">{r.c}</td>
                      )}

                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2 justify-end">
                          <span className="text-[10px] font-bold text-mid">{r.sc}</span>
                          <div className="w-16 h-1.5 bg-dashboard-bg rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all duration-300 ${
                                r.sc >= 70 ? 'bg-emerald-500' : r.sc >= 30 ? 'bg-primary' : 'bg-amber-500'
                              }`} 
                              style={{ width: `${Math.min(100, Math.max(5, r.sc))}%` }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Acordeón de Landing Pages recomendadas (Feature 2.1) */}
                    {isExpanded && (
                      <tr className="bg-dashboard-bg/25 border-b border-dashboard-border">
                        <td colSpan={colSpanCount} className="p-4 sm:px-8">
                          <div className="bg-white rounded-lg p-4 border border-dashboard-border shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <Globe className="w-3.5 h-3.5 text-primary" />
                                <span className="text-[11px] font-bold text-navy uppercase tracking-wider">
                                  Top Landing Pages recomendadas por {r.n}
                                </span>
                              </div>
                              <span className="text-[10px] text-mid">
                                Páginas a las que este motor dirige tráfico
                              </span>
                            </div>

                            {r.landingPages && r.landingPages.length > 0 ? (
                              <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs">
                                  <thead>
                                    <tr className="text-[9px] font-bold text-mid uppercase tracking-wider border-b border-dashboard-border pb-1">
                                      <th className="py-1.5 px-2">URL de Destino</th>
                                      <th className="py-1.5 px-2 text-right">Sesiones IA</th>
                                      <th className="py-1.5 px-2 text-right">% Cuota Motor</th>
                                      <th className="py-1.5 px-2 text-right">Duración Media</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-dashboard-border/60">
                                    {r.landingPages.map((lp, idx) => (
                                      <tr key={idx} className="hover:bg-dashboard-bg/30">
                                        <td className="py-2 px-2 font-mono text-[11px] text-navy max-w-[320px] truncate" title={lp.url}>
                                          <a 
                                            href={lp.url.startsWith('http') ? lp.url : `https://${lp.url.replace(/^\/+/, '')}`} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="hover:text-primary hover:underline inline-flex items-center gap-1.5"
                                          >
                                            <span className="truncate">{lp.url}</span>
                                            <ExternalLink className="w-2.5 h-2.5 flex-shrink-0 text-mid" />
                                          </a>
                                        </td>
                                        <td className="py-2 px-2 text-right font-semibold text-navy">
                                          {lp.sessions.toLocaleString('es-ES')}
                                        </td>
                                        <td className="py-2 px-2 text-right text-mid">
                                          {lp.share || '-'}
                                        </td>
                                        <td className="py-2 px-2 text-right text-mid">
                                          {lp.avg_duration || '-'}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            ) : (
                              <div className="text-center py-4 text-mid text-xs italic">
                                No se registraron páginas de destino específicas para {r.n} en este periodo.
                              </div>
                            )}

                            {/* Desglose de conversión adicional si está presente (Feature 2.2) */}
                            {((r.purchaseCount !== undefined && r.purchaseCount > 0) || (r.purchaseRevenue !== undefined && r.purchaseRevenue > 0)) && (
                              <div className="mt-3 pt-3 border-t border-dashboard-border flex items-center justify-between text-[11px]">
                                <span className="font-semibold text-navy flex items-center gap-1.5">
                                  <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" />
                                  Impacto Comercial Ecommerce:
                                </span>
                                <span className="text-navy font-bold">
                                  {r.purchaseCount ?? 0} pedidos confirmados
                                  {r.purchaseRate && ` (${r.purchaseRate} conv.)`}
                                  {r.purchaseRevenue !== undefined && r.purchaseRevenue > 0 && ` — Total: ${r.purchaseRevenue.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}`}
                                </span>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
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

