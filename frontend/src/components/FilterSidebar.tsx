// frontend/src/components/FilterSidebar.tsx
import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  Building2, 
  SlidersHorizontal 
} from 'lucide-react';
import type { AnalyticsState } from '../types';

export interface FilterSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  state: AnalyticsState;
  updateState: (updates: Partial<AnalyticsState>) => void;
  onApply: () => void;
  loading?: boolean;
  connections?: Array<{ connection_id: string; display_name: string; platform: string }>;
  accounts?: Array<{ account_id: string; display_name: string }>;
  properties?: Array<{ property_id: string; display_name: string }>;
  segments?: Array<{ id: string; name: string }>;
  onConnectionChange?: (connectionId: string) => void;
  onAccountChange?: (accountId: string) => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onToggle,
  state,
  updateState,
  onApply,
  loading = false,
  connections = [],
  accounts = [],
  properties = [],
  segments = [],
  onConnectionChange,
  onAccountChange,
}) => {
  const isAdobe = state.connection_id?.toLowerCase().includes('adobe');
  const todayStr = new Date().toISOString().split('T')[0];

  const generalConnections = connections.filter(c => c.platform === 'GA4' || c.platform === 'ADOBE_ANALYTICS');
  const aiConnections = connections.filter(c => c.platform === 'PEEC' || c.platform === 'BRANDLIGHT');

  // Quick preset dates
  const handleQuickPreset = (days: number) => {
    const d = new Date();
    const to = d.toISOString().split('T')[0];
    const fromDate = new Date();
    fromDate.setDate(d.getDate() - days);
    const from = fromDate.toISOString().split('T')[0];
    updateState({ from, to });
  };

  return (
    <>
      {/* Backdrop para dispositivos móviles */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-navy/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}

      {/* Contenedor del Menú Lateral Colapsable */}
      <aside
        className={`
          fixed lg:sticky top-0 lg:top-16 z-40 lg:z-30 h-screen lg:h-[calc(100vh-4rem)]
          bg-white border-r border-dashboard-border flex flex-col shrink-0
          transition-all duration-300 ease-in-out select-none
          ${isOpen 
            ? 'left-0 w-80 shadow-2xl lg:shadow-none translate-x-0' 
            : '-translate-x-full lg:translate-x-0 lg:w-14'
          }
        `}
      >
        {!isOpen ? (
          /* Vista Colapsada (Rail de Iconos para Desktop) */
          <div className="hidden lg:flex flex-col items-center py-4 h-full w-full justify-between">
            <div className="flex flex-col items-center gap-4 w-full">
              <button
                onClick={onToggle}
                title="Expandir filtros"
                aria-label="Expandir filtros"
                className="w-9 h-9 rounded-lg bg-dashboard-bg hover:bg-navy hover:text-white text-navy flex items-center justify-center transition-all group"
              >
                <ChevronRight className="w-4 h-4 text-red group-hover:text-white transition-colors" />
              </button>

              <div 
                onClick={onToggle} 
                className="flex flex-col items-center gap-3 cursor-pointer py-4 px-2 w-full hover:bg-dashboard-bg/50 transition-colors"
                title="Haga clic para ver los filtros"
              >
                <div className="w-8 h-8 rounded-full bg-red/10 flex items-center justify-center text-red">
                  <Filter className="w-3.5 h-3.5" />
                </div>
                <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-black uppercase tracking-widest text-navy/70 hover:text-red transition-colors">
                  Filtros de Análisis
                </span>
              </div>
            </div>

            <div className="w-full px-2">
              <button
                onClick={onToggle}
                className="w-full py-2 flex flex-col items-center justify-center text-mid hover:text-navy transition-colors text-[9px] uppercase font-bold"
                title="Abrir filtros"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 mb-1" />
                <span>Abrir</span>
              </button>
            </div>
          </div>
        ) : (
          /* Vista Expandida (Formulario Completo de Filtros) */
          <div className="flex flex-col h-full w-full">
            {/* Header del Menú Lateral */}
            <div className="h-14 px-5 border-b border-dashboard-border flex items-center justify-between shrink-0 bg-white">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-red/10 flex items-center justify-center text-red">
                  <Filter className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h2 className="text-xs font-black uppercase tracking-wider text-navy">
                    Filtros
                  </h2>
                  <p className="text-[10px] text-mid font-medium">Configuración del reporte</p>
                </div>
              </div>

              <button
                onClick={onToggle}
                className="p-1.5 rounded-lg hover:bg-dashboard-bg text-mid hover:text-navy transition-colors"
                title="Colapsar panel"
                aria-label="Colapsar panel"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>

            {/* Contenido Scrolleable de Filtros */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-6">
              {/* Sección 1: Rango de Fechas */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-navy flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-mid" /> Período
                  </span>
                </div>

                {/* Quick Presets */}
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { label: '7D', days: 7 },
                    { label: '14D', days: 14 },
                    { label: '30D', days: 30 },
                    { label: '90D', days: 90 },
                  ].map((preset) => (
                    <button
                      key={preset.days}
                      type="button"
                      onClick={() => handleQuickPreset(preset.days)}
                      className="px-2 py-1 text-[10px] font-bold rounded bg-dashboard-bg hover:bg-navy-light text-navy border border-dashboard-border hover:border-red/30 transition-all text-center"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-2 pt-1">
                  <div>
                    <label className="text-[10px] font-bold text-mid uppercase tracking-wider block mb-1">
                      Desde
                    </label>
                    <input 
                      type="date" 
                      value={state.from} 
                      max={state.to || todayStr}
                      onChange={e => updateState({ from: e.target.value })}
                      className="w-full bg-dashboard-bg border border-dashboard-border rounded-lg px-2.5 py-1.5 text-xs text-navy font-semibold outline-none focus:ring-2 focus:ring-red/20 focus:border-red/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-mid uppercase tracking-wider block mb-1">
                      Hasta
                    </label>
                    <input 
                      type="date" 
                      value={state.to} 
                      min={state.from}
                      max={todayStr}
                      onChange={e => updateState({ to: e.target.value })}
                      className="w-full bg-dashboard-bg border border-dashboard-border rounded-lg px-2.5 py-1.5 text-xs text-navy font-semibold outline-none focus:ring-2 focus:ring-red/20 focus:border-red/40 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-dashboard-border"></div>

              {/* Sección 2: Orígenes de Datos */}
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-navy flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-mid" /> Conectores
                </span>

                {/* General Analytics */}
                {generalConnections.length > 0 && (
                  <div>
                    <label className="text-[10px] font-bold text-mid uppercase tracking-wider block mb-1">
                      General Analytics (Web)
                    </label>
                    <select 
                      value={generalConnections.some(c => c.connection_id === state.connection_id) ? state.connection_id : ''}
                      onChange={e => onConnectionChange?.(e.target.value)}
                      className="w-full bg-dashboard-bg border border-dashboard-border rounded-lg px-2.5 py-1.5 text-xs text-navy font-semibold outline-none focus:ring-2 focus:ring-red/20 transition-all"
                    >
                      <option value="">Seleccionar Origen...</option>
                      {generalConnections.map(c => (
                        <option key={c.connection_id} value={c.connection_id}>
                          {c.display_name} ({c.platform})
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* AI Analytics */}
                {aiConnections.length > 0 && (
                  <div>
                    <label className="text-[10px] font-bold text-mid uppercase tracking-wider block mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-500" /> AI Analytics (LLMs)
                    </label>
                    <select 
                      value={aiConnections.some(c => c.connection_id === state.ai_connection_id) ? state.ai_connection_id : ''}
                      onChange={e => updateState({ ai_connection_id: e.target.value })}
                      className="w-full bg-dashboard-bg border border-dashboard-border rounded-lg px-2.5 py-1.5 text-xs text-navy font-semibold outline-none focus:ring-2 focus:ring-red/20 transition-all"
                    >
                      <option value="">Seleccionar Origen AI...</option>
                      {aiConnections.map(c => (
                        <option key={c.connection_id} value={c.connection_id}>
                          {c.display_name} ({c.platform})
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div className="h-[1px] bg-dashboard-border"></div>

              {/* Sección 3: Estructura Analítica */}
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-navy flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-mid" /> Estructura
                </span>

                {/* Cuentas / Compañías */}
                {accounts.length > 0 && (
                  <div>
                    <label className="text-[10px] font-bold text-mid uppercase tracking-wider block mb-1">
                      {isAdobe ? 'Compañía' : 'Cuenta'}
                    </label>
                    <select 
                      value={state.account_id || ''}
                      onChange={e => onAccountChange?.(e.target.value)}
                      className="w-full bg-dashboard-bg border border-dashboard-border rounded-lg px-2.5 py-1.5 text-xs text-navy font-bold outline-none focus:ring-2 focus:ring-red/20 transition-all"
                    >
                      <option value="">
                        {isAdobe ? 'Seleccionar Compañía...' : 'Seleccionar Cuenta...'}
                      </option>
                      {accounts.map(a => (
                        <option key={a.account_id} value={a.account_id}>
                          {a.display_name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Propiedades / Suites */}
                {properties.length > 0 && (
                  <div>
                    <label className="text-[10px] font-bold text-mid uppercase tracking-wider block mb-1">
                      {isAdobe ? 'Report Suite' : 'Propiedad'}
                    </label>
                    <select 
                      value={state.property_id || ''}
                      onChange={e => updateState({ property_id: e.target.value })}
                      className="w-full bg-dashboard-bg border border-dashboard-border rounded-lg px-2.5 py-1.5 text-xs font-bold text-red outline-none focus:ring-2 focus:ring-red/20 transition-all"
                    >
                      <option value="">
                        {isAdobe ? 'Seleccionar Report Suite...' : 'Seleccionar Propiedad...'}
                      </option>
                      {properties.map(p => (
                        <option key={p.property_id} value={p.property_id}>
                          {p.display_name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Segmento / Mercado */}
                {isAdobe ? (
                  <div>
                    <label className="text-[10px] font-bold text-[#F54963] uppercase tracking-wider block mb-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#F54963]" /> Mercado / Segmento
                    </label>
                    <select 
                      value={state.segment_id || ''}
                      onChange={e => updateState({ segment_id: e.target.value })}
                      className="w-full bg-dashboard-bg border border-dashboard-border rounded-lg px-2.5 py-1.5 text-xs font-bold text-[#F54963] outline-none focus:ring-2 focus:ring-red/20 transition-all"
                    >
                      <option value="">Todos los segmentos</option>
                      {segments.map(s => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="text-[10px] font-bold text-mid uppercase tracking-wider block mb-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-mid" /> Mercado
                    </label>
                    <select 
                      value={state.market}
                      onChange={e => updateState({ market: e.target.value })}
                      className="w-full bg-dashboard-bg border border-dashboard-border rounded-lg px-2.5 py-1.5 text-xs text-navy font-semibold outline-none focus:ring-2 focus:ring-red/20 transition-all"
                    >
                      <option value="all">Todos los mercados</option>
                      <option value="es">España</option>
                      <option value="mx">México</option>
                      <option value="co">Colombia</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Footer con Botón Aplicar Filtros */}
            <div className="p-4 border-t border-dashboard-border bg-dashboard-bg/40 shrink-0">
              <button 
                type="button"
                onClick={onApply}
                disabled={loading}
                className="w-full py-2.5 px-4 bg-red hover:bg-red/90 active:scale-[0.99] text-white rounded-lg text-[11px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
              >
                <Filter className="w-3.5 h-3.5" />
                <span>{loading ? 'Aplicando...' : 'Aplicar Filtros'}</span>
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};
