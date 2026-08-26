// frontend/src/components/dashboard/AnalyticsDashboardView.tsx
import React from 'react';
import { Database } from 'lucide-react';
import type { ApiResponse, AnalyticsState, TenantConfig, MotorPerformanceRow } from '../../types';
import { KpiCard } from '../KpiCard';
import { ChartWidget } from '../ChartWidget';
import { TopicsCard } from '../TopicsCard';
import { DomainsTable } from '../DomainsTable';
import { UrlsTable } from '../UrlsTable';
import { MotorPerformanceTable } from './MotorPerformanceTable';
import { PdfExportHeader } from './PdfExportHeader';

interface AnalyticsDashboardViewProps {
  data: ApiResponse | null;
  loading: boolean;
  state: AnalyticsState;
  tenant: TenantConfig;
  trafficSource: string;
  aiSource: string;
  lineData: any;
  top10Domains: any[];
  motorRows: MotorPerformanceRow[];
  topicsRows: any[];
  totalUniqueDomains: number;
  exporting: boolean;
  dashboardRef: React.RefObject<HTMLDivElement | null>;
  onOpenMethodology: () => void;
}

export const AnalyticsDashboardView: React.FC<AnalyticsDashboardViewProps> = ({
  data,
  loading,
  state,
  tenant,
  trafficSource,
  aiSource,
  lineData,
  top10Domains,
  motorRows,
  topicsRows,
  totalUniqueDomains,
  exporting,
  dashboardRef,
  onOpenMethodology,
}) => {
  const aiReferredVal = parseInt((data?.ai_referred || 0).toString(), 10);
  const aiInferredVal = parseInt((data?.ai_inferred || 0).toString(), 10);
  const totalSessVal = parseInt((data?.total_sessions || 0).toString(), 10);

  const engScoreVal = parseFloat((data?.engagement_score || 0).toString());
  const visScoreVal = parseFloat((data?.visibility_score || 0).toString());
  const sentScoreVal = parseFloat((data?.sentiment_score || 0).toString());

  const restVal = Math.max(0, totalSessVal - (aiReferredVal + aiInferredVal));
  const referredPercent = totalSessVal > 0 ? Math.round((aiReferredVal / totalSessVal) * 1000) / 10 : 0;
  const inferredPercent = totalSessVal > 0 ? Math.round((aiInferredVal / totalSessVal) * 1000) / 10 : 0;
  const restPercent = totalSessVal > 0 ? Math.round((restVal / totalSessVal) * 1000) / 10 : 0;
  const mainBrandLabel = tenant?.tenant_name || 'Tu Marca';

  return (
    <main ref={dashboardRef} className="flex-1 p-4 sm:p-8 space-y-6 max-w-[1400px] mx-auto w-full">
      {exporting && (
        <PdfExportHeader tenant={tenant} fromDate={state.from} toDate={state.to} />
      )}

      {loading && !data ? (
        <>
          {/* Skeleton KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-dashboard-border shadow-sm flex flex-col justify-between h-24 animate-pulse">
                <div className="flex justify-between items-center">
                  <div className="h-2.5 bg-dashboard-border/60 rounded w-16"></div>
                  <div className="h-2.5 bg-dashboard-border/40 rounded w-6"></div>
                </div>
                <div className="h-6 bg-dashboard-border/50 rounded w-20 mt-auto"></div>
              </div>
            ))}
          </div>

          {/* Skeleton Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 bg-white rounded-xl p-5 border border-dashboard-border shadow-sm h-[320px] animate-pulse flex flex-col justify-between">
              <div className="h-3 bg-dashboard-border/60 rounded w-32"></div>
              <div className="h-48 bg-dashboard-border/30 rounded-lg w-full"></div>
              <div className="h-3 bg-dashboard-border/40 rounded w-48"></div>
            </div>
            <div className="lg:col-span-4 bg-white rounded-xl p-5 border border-dashboard-border shadow-sm h-[320px] animate-pulse flex flex-col justify-between">
              <div className="h-3 bg-dashboard-border/60 rounded w-28"></div>
              <div className="w-36 h-36 rounded-full border-8 border-dashboard-border/30 mx-auto my-auto"></div>
              <div className="h-3 bg-dashboard-border/40 rounded w-32 mx-auto"></div>
            </div>
          </div>

          {/* Skeleton Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border border-dashboard-border shadow-sm h-[260px] animate-pulse flex flex-col gap-4">
              <div className="h-3 bg-dashboard-border/60 rounded w-40"></div>
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div key={idx} className="h-8 bg-dashboard-border/20 rounded w-full"></div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-dashboard-border shadow-sm h-[260px] animate-pulse flex flex-col gap-4">
              <div className="h-3 bg-dashboard-border/60 rounded w-40"></div>
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div key={idx} className="h-8 bg-dashboard-border/20 rounded w-full"></div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-3">
        <KpiCard
          label="Sesiones totales"
          tooltip="Volumen total de tráfico recibido en el sitio web (incluyendo canales como orgánico, directo, pagado, referido, etc.)."
          value={totalSessVal.toLocaleString('es-ES')}
          suffix=""
          trend=""
          source={trafficSource}
        />
        <KpiCard
          label="IA referida"
          tooltip="Sesiones directas declaradas por motores de IA."
          longTooltip={
            <>
              <p>
                Las sesiones de <strong className="text-navy">IA Referida</strong> representan a los usuarios que han hecho clic en un enlace de tu marca directamente desde la interfaz de un motor de IA generativa y el motor declara explícitamente su origen en la cabecera HTTP (ej. <code className="bg-gray-100 px-1 rounded">chatgpt.com / referral</code>).
              </p>
              <p>
                Es común que este número sea significativamente inferior a la IA Inferida, ya que la gran mayoría de interacciones con IA, especialmente en aplicaciones móviles u otras plataformas, ocultan su origen inyectando el tráfico como "Directo".
              </p>
            </>
          }
          value={aiReferredVal.toLocaleString('es-ES')}
          suffix=""
          trend=""
          source={trafficSource}
        />
        <KpiCard
          label={
            <div className="flex items-center gap-1.5">
              IA inferida
              {data?.inferred_traffic?.confidence_index && !data.inferred_traffic.confidence_index.is_significant && (
                <div
                  className="text-amber-500 cursor-help flex items-center"
                  title="Muestra estadística insuficiente. El margen de error puede ser mayor al habitual."
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
              )}
            </div>
          }
          tooltip="Tráfico orgánico/directo perfilado como proviniendo de IA."
          longTooltip={
            <>
              <p>
                Las sesiones de <strong className="text-navy">IA Inferida</strong> representan tráfico que, aunque ingresa a tu web camuflado como "Directo" o sin referente claro, ha sido clasificado por el algoritmo de LLYC como altamente probable de provenir de consultas de IA.
              </p>
              <p>
                Nuestro modelo de propensión analiza factores de comportamiento en tiempo real para detectar interacciones típicas de cuando un usuario accede sugerido por un chat de IA.
              </p>
              <p>
                En el entorno SEO actual, <strong className="text-teal">es la norma y lo esperado</strong> que el tráfico inferido supere holgadamente al tráfico explícitamente referido.
              </p>
            </>
          }
          value={aiInferredVal.toLocaleString('es-ES')}
          suffix=""
          trend=""
          source={trafficSource}
        />
        <KpiCard
          label="Engagement IA"
          tooltip="Calificación de 0 a 100 que evalúa la calidad y profundidad del comportamiento en la web del tráfico proveniente de la IA (considera conversiones, tiempo en página y páginas por sesión)."
          value={engScoreVal}
          suffix={data?.engagement_score !== undefined ? "/100" : ""}
          trend=""
          source={trafficSource}
        />
        <KpiCard
          label="Visibilidad unbranded"
          tooltip="Share of Voice estimado de la marca dentro de los motores de IA cuando los usuarios realizan consultas genéricas del sector sin mencionar la marca explícitamente."
          value={data && (data?.total_monitored_domains || totalUniqueDomains) > 0 ? visScoreVal : "N/A"}
          suffix={data && (data?.total_monitored_domains || totalUniqueDomains) > 0 && data?.visibility_score !== undefined ? "%" : ""}
          trend=""
          source={aiSource}
          colorClass="!bg-teal-light/20 border-teal/20"
        />
        <KpiCard
          label="Score sentimiento"
          tooltip="Puntuación promedio de 0 a 10 que evalúa qué tan positivas, neutrales o negativas son las menciones de la marca dentro de las respuestas de IA."
          value={data && (data?.total_monitored_domains || totalUniqueDomains) > 0 ? sentScoreVal : "N/A"}
          suffix={data && (data?.total_monitored_domains || totalUniqueDomains) > 0 && data?.sentiment_score !== undefined ? "/10" : ""}
          trend=""
          source={aiSource}
        />
        <KpiCard
          label="Modelos analizados"
          tooltip="Cantidad total de modelos y motores conversacionales de IA que el sistema está monitorizando."
          value={data ? motorRows.length.toString() : "--"}
          trend=""
          source={aiSource}
        />
        <KpiCard
          label="Dominios monitorizados"
          tooltip="Volumen de fuentes de información y dominios web (medios, foros, wikis) que están siendo indexados y usados por los motores de IA para generar sus respuestas."
          value={
            data && (data?.total_monitored_domains || totalUniqueDomains) > 0
              ? (data?.total_monitored_domains
                  ? data.total_monitored_domains.toLocaleString('es-ES')
                  : totalUniqueDomains.toLocaleString('es-ES'))
              : "N/A"
          }
          trend=""
          source={aiSource}
        />
      </div>

      {/* Main Content Area */}
      {!data && !loading ? (
        <div className="p-12 text-center border border-dashed border-white/10 rounded-2xl bg-white/5 text-mid text-sm flex flex-col items-center gap-3">
          <Database className="w-8 h-8 text-amber-500 animate-bounce" />
          <h3 className="font-black text-xs uppercase tracking-widest text-white">
            No se detectaron datos en Google BigQuery para este inquilino
          </h3>
          <p className="max-w-md text-[10px] leading-relaxed text-mid">
            Para ver el dashboard analítico real de tu cliente, ingresa al Panel de Administración maestro y haz clic en "Re-desplegar ETL" para iniciar la ingesta real de los últimos 90 días de datos en BigQuery.
          </p>
        </div>
      ) : (
        <>
          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ChartWidget
                type="line"
                title="Evolución tráfico IA"
                source={trafficSource}
                data={lineData}
                options={{
                  scales: {
                    y: {
                      type: 'linear',
                      display: true,
                      position: 'left',
                      grid: { color: 'rgba(0,0,0,0.05)' },
                      title: {
                        display: true,
                        text: 'Sesiones Totales',
                        color: '#0A263B',
                        font: { size: 10, weight: 'bold' },
                      },
                    },
                    y1: {
                      type: 'linear',
                      display: true,
                      position: 'right',
                      grid: { drawOnChartArea: false },
                      title: {
                        display: true,
                        text: 'Sesiones IA',
                        color: '#F54963',
                        font: { size: 10, weight: 'bold' },
                      },
                    },
                  },
                }}
                height={200}
                footer={
                  <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-mid">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-1 border-t-2 border-dashed border-mid/50"></div> Sesiones totales
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-sm bg-red"></div> Sesiones IA
                    </div>
                  </div>
                }
              />
            </div>
            <div>
              <ChartWidget
                type="doughnut"
                title="Composición de audiencia"
                source={trafficSource}
                data={{
                  labels: ['IA directa', 'IA inferida', 'Resto'],
                  datasets: [
                    {
                      data: [aiReferredVal, aiInferredVal, restVal],
                      backgroundColor: ['#F54963', '#36A7B7', '#0A263B'],
                      borderWidth: 0,
                    },
                  ],
                }}
                height={200}
                footer={
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-mid">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-sm bg-red"></div> IA directa {referredPercent}%
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-sm bg-navy"></div> IA inferida {inferredPercent}%
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-sm bg-mid/30"></div> Resto {restPercent}%
                    </div>
                  </div>
                }
              />
            </div>
          </div>

          {/* Table & Bar Chart Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MotorPerformanceTable
              trafficSource={trafficSource}
              motorRows={motorRows}
              tenant={tenant}
            />
            <ChartWidget
              type="bar"
              title="Visibilidad de marca por motor IA"
              source={aiSource}
              data={{
                labels: data?.visibility_by_engine?.length
                  ? data.visibility_by_engine.map((e: any) => e.engine)
                  : ['Sin datos'],
                datasets: [
                  {
                    label: mainBrandLabel,
                    data: data?.visibility_by_engine?.length
                      ? data.visibility_by_engine.map((e: any) => e.brand_score)
                      : [0],
                    backgroundColor: '#36A7B7',
                    borderRadius: 4,
                  },
                  {
                    label: 'Prom.',
                    data: data?.visibility_by_engine?.length
                      ? data.visibility_by_engine.map((e: any) => e.competitor_avg)
                      : [0],
                    backgroundColor: '#C5D2DA',
                    borderRadius: 4,
                  },
                ],
              }}
              height={200}
              footer={
                <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-mid">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-teal"></div> {mainBrandLabel}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-mid/30"></div> Prom. competidores
                  </div>
                </div>
              }
            />
          </div>

          {/* Row 3: Clusters and Top 5 Competitors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(() => {
              const rawClusters = data?.behavior_clusters?.length
                ? data.behavior_clusters
                : [
                    { label: 'Transaccional', value: 0 },
                    { label: 'Investigación', value: 0 },
                    { label: 'Respuesta Rápida', value: 0 },
                    { label: 'Casual', value: 0 },
                  ];

              const order = ['Transaccional', 'Investigación', 'Respuesta Rápida', 'Casual'];
              const sortedClusters = [...rawClusters].sort(
                (a, b) => order.indexOf(a.label) - order.indexOf(b.label)
              );

              const clusterColorMap: Record<string, string> = {
                Transaccional: '#F54963',
                Investigación: '#36A7B7',
                'Respuesta Rápida': '#0A263B',
                Casual: '#E8A020',
              };

              const hoverTextMap: Record<string, string> = {
                Transaccional: 'Alta intención comercial o de conversión.',
                Investigación: 'Fase exploratoria o evaluación detallada.',
                'Respuesta Rápida': 'Búsqueda de datos puntuales o confirmaciones.',
                Casual: 'Interacción periférica sin intención de negocio.',
              };

              return (
                <ChartWidget
                  type="bar"
                  title="Clusters de comportamiento IA"
                  source={trafficSource}
                  onInfoClick={onOpenMethodology}
                  data={{
                    labels: sortedClusters.map((c: any) => c.label),
                    datasets: [
                      {
                        label: 'Sesiones IA',
                        data: sortedClusters.map((c: any) => c.value),
                        backgroundColor: sortedClusters.map(
                          (c: any) => clusterColorMap[c.label] || '#999999'
                        ),
                        borderRadius: 4,
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: { display: false },
                      tooltip: {
                        callbacks: {
                          afterLabel: (context: any) => hoverTextMap[context.label] || '',
                        },
                      },
                    },
                  }}
                />
              );
            })()}

            <ChartWidget
              type="bar"
              title="Visibilidad unbranded — top 5"
              source={aiSource}
              options={{ indexAxis: 'y', plugins: { legend: { display: false } } }}
              data={{
                labels:
                  data?.competitors
                    ?.filter((c: any) => c.classification?.toLowerCase() !== 'owned')
                    .slice(0, 5)
                    .map((c: any) => c.domain || c.name) || ['Sin datos'],
                datasets: [
                  {
                    data:
                      data?.competitors
                        ?.filter((c: any) => c.classification?.toLowerCase() !== 'owned')
                        .slice(0, 5)
                        .map((c: any) => c.visibility_score) || [0],
                    backgroundColor: ['#F54963', '#0A263B', '#0A263B', '#0A263B', '#0A263B'],
                    borderRadius: 4,
                  },
                ],
              }}
            />
            <ChartWidget
              type="bar"
              title="Sentimiento de marca — top 5"
              source={aiSource}
              options={{
                indexAxis: 'y',
                scales: { x: { min: 5, max: 10 } },
                plugins: { legend: { display: false } },
              }}
              data={{
                labels:
                  data?.competitors?.slice(0, 5).map((c: any) => c.domain || c.name) || ['Sin datos'],
                datasets: [
                  {
                    data:
                      data?.competitors?.slice(0, 5).map((c: any) => c.sentiment_score) || [0],
                    backgroundColor: ['#36A7B7', '#0A263B', '#0A263B', '#0A263B', '#0A263B'],
                    borderRadius: 4,
                  },
                ],
              }}
            />
          </div>

          {/* Row 4: Topics */}
          <div className="grid grid-cols-1 gap-6">
            <TopicsCard
              title="Temáticas clave — Impacto en IA"
              source={aiSource}
              topics={topicsRows.sort((a, b) => (b.w || 0) - (a.w || 0)).slice(0, 10)}
            />
          </div>

          {/* Row 5: Domains */}
          <div className="grid grid-cols-1 gap-6">
            <DomainsTable
              title="Top 10 dominios de visibilidad"
              source={aiSource}
              rows={top10Domains}
            />
          </div>

          {/* Row 6: Landing URLs */}
          {data?.content_affinity && data.content_affinity.length > 0 && (
            <div className="grid grid-cols-1 gap-6">
              <UrlsTable
                title="URLs de Aterrizaje Recomendadas por IA"
                source={trafficSource}
                rows={data.content_affinity}
              />
            </div>
          )}
        </>
      )}
        </>
      )}
    </main>
  );
};
