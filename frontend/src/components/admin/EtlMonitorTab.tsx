// frontend/src/components/admin/EtlMonitorTab.tsx
import React, { useState, useEffect } from 'react';
import { 
  Database, AlertTriangle, Activity, RefreshCw, AlertCircle, 
  Check, CheckCircle2, Clock, Play, Unlock, ShieldAlert, Zap
} from 'lucide-react';
import type { TenantConfig } from './types';
import { secureFetch } from '../../services/apiClient';

interface EtlMonitorTabProps {
  tenants: TenantConfig[];
  onRefreshTenants: () => void;
}

export const EtlMonitorTab: React.FC<EtlMonitorTabProps> = ({
  tenants,
  onRefreshTenants,
}) => {
  const [etlHistory, setEtlHistory] = useState<any[]>([]);
  const [etlAlerts, setEtlAlerts] = useState<any[]>([]);
  const [orchestratorStatus, setOrchestratorStatus] = useState<any | null>(null);
  const [loadingEtl, setLoadingEtl] = useState(false);
  const [runningTick, setRunningTick] = useState(false);
  const [runningTenantId, setRunningTenantId] = useState<string | null>(null);
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchEtlData = async () => {
    try {
      setLoadingEtl(true);
      
      // 1. Fetch History
      const resHistory = await secureFetch(`/api/v1/mcp-analytics/admin/etl/history`);
      const dataHistory = resHistory.ok ? await resHistory.json() : [];
      setEtlHistory(dataHistory);
      
      // 2. Fetch Active Alerts
      const resAlerts = await secureFetch(`/api/v1/mcp-analytics/admin/etl/alerts`);
      const dataAlerts = resAlerts.ok ? await resAlerts.json() : [];
      setEtlAlerts(dataAlerts);

      // 3. Fetch Orchestrator Status
      const resOrc = await secureFetch(`/api/v1/mcp-analytics/admin/orchestrator/status`);
      if (resOrc.ok) {
        const dataOrc = await resOrc.json();
        setOrchestratorStatus(dataOrc);
      }
      
    } catch (err) {
      console.error("Error fetching ETL metrics:", err);
    } finally {
      setLoadingEtl(false);
    }
  };

  const handleDismissAlert = async (alertId: string) => {
    try {
      const res = await secureFetch(`/api/v1/mcp-analytics/admin/etl/alerts/${alertId}/dismiss`, {
        method: 'POST'
      });
      if (res.ok) {
        setEtlAlerts(prev => prev.filter(a => a.alert_id !== alertId));
        setActionMessage({ type: 'success', text: "Alerta descartada con éxito." });
        setTimeout(() => setActionMessage(null), 4000);
      } else {
        throw new Error("No se pudo descartar la alerta en Firestore");
      }
    } catch (err: any) {
      setActionMessage({ type: 'error', text: err.message });
      setTimeout(() => setActionMessage(null), 4000);
    }
  };

  const triggerResetStatus = async (tenantId: string) => {
    try {
      setActionMessage({
        type: 'success',
        text: `Cancelando y reseteando estado de despliegue para '${tenantId}'...`
      });
      const res = await secureFetch(`/api/v1/mcp-analytics/admin/tenants/${tenantId}/reset-status`, {
        method: 'POST'
      });
      if (res.ok) {
        setActionMessage({
          type: 'success',
          text: `Estado de despliegue reseteado con éxito para '${tenantId}'. Listo para re-desplegar.`
        });
        fetchEtlData();
        onRefreshTenants();
      } else {
        throw new Error(`Error al resetear el estado de despliegue para '${tenantId}'`);
      }
    } catch (err: any) {
      setActionMessage({ type: 'error', text: err.message || 'Error al resetear estado' });
    }
  };

  // Disparo manual del ciclo horario del orquestador
  const triggerOrchestratorTick = async () => {
    try {
      setRunningTick(true);
      setActionMessage({
        type: 'success',
        text: "Despachando tick horario del orquestador. Procesando candidatos con presupuesto de 20 min..."
      });
      const res = await secureFetch(`/api/v1/mcp-analytics/admin/orchestrator/tick`, {
        method: 'POST'
      });
      const data = await res.json();
      if (res.ok) {
        setActionMessage({
          type: 'success',
          text: `Ciclo del orquestador finalizado (${data.duration_seconds ?? 0}s). Procesados: ${data.succeeded?.length ?? 0} con éxito, ${data.failed?.length ?? 0} fallidos, ${data.deferred?.length ?? 0} diferidos.`
        });
        fetchEtlData();
        onRefreshTenants();
      } else {
        throw new Error(data.detail || "Error al disparar el ciclo horario.");
      }
    } catch (err: any) {
      setActionMessage({ type: 'error', text: err.message || "Error al ejecutar orquestador." });
    } finally {
      setRunningTick(false);
    }
  };

  // Disparo manual on-demand para un cliente
  const triggerTenantOnDemand = async (tenantId: string, historicalBackfill: boolean = false) => {
    try {
      setRunningTenantId(tenantId);
      setActionMessage({
        type: 'success',
        text: `Iniciando ETL ${historicalBackfill ? 'Backfill (90 días)' : 'Estándar (2 días)'} para '${tenantId}'...`
      });
      const res = await secureFetch(`/api/v1/mcp-analytics/admin/orchestrator/run-tenant/${tenantId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ historical_backfill: historicalBackfill })
      });
      const data = await res.json();
      if (res.ok) {
        setActionMessage({
          type: 'success',
          text: `ETL completada exitosamente para '${tenantId}'. Registros actualizados en BigQuery.`
        });
        fetchEtlData();
        onRefreshTenants();
      } else {
        throw new Error(data.detail || `Error al ejecutar ETL de '${tenantId}'`);
      }
    } catch (err: any) {
      setActionMessage({ type: 'error', text: err.message || "Error en ETL manual." });
    } finally {
      setRunningTenantId(null);
    }
  };

  // Reactivar un cliente en estado ERROR_SUSPENDED
  const handleResumeTenant = async (tenantId: string) => {
    try {
      const res = await secureFetch(`/api/v1/mcp-analytics/admin/orchestrator/resume-tenant/${tenantId}`, {
        method: 'POST'
      });
      const data = await res.json();
      if (res.ok) {
        setActionMessage({
          type: 'success',
          text: `Cliente '${tenantId}' reactivado con éxito. Contador de fallos reseteado.`
        });
        fetchEtlData();
        onRefreshTenants();
      } else {
        throw new Error(data.detail || "No se pudo reactivar el cliente.");
      }
    } catch (err: any) {
      setActionMessage({ type: 'error', text: err.message });
    }
  };

  // Reset de emergencia del lock
  const handleResetLock = async () => {
    try {
      const res = await secureFetch(`/api/v1/mcp-analytics/admin/orchestrator/reset-lock`, {
        method: 'POST'
      });
      if (res.ok) {
        setActionMessage({ type: 'success', text: "Lease Lock liberado de emergencia." });
        fetchEtlData();
      }
    } catch (err: any) {
      setActionMessage({ type: 'error', text: err.message });
    }
  };

  useEffect(() => {
    fetchEtlData();
  }, []);

  const lockInfo = orchestratorStatus?.lock || {};
  const lastCycle = orchestratorStatus?.last_cycle;

  return (
    <div className="space-y-6">
      {/* MENSAJES DE ACCIÓN INTERNOS */}
      {actionMessage && (
        <div className={`p-4 rounded-xl flex items-start gap-3 border transition-all ${
          actionMessage.type === 'success' 
            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
            : 'bg-red-500/10 border-red-500/20 text-red-400'
        }`}>
          {actionMessage.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
          <span className="text-xs font-semibold leading-relaxed">{actionMessage.text}</span>
        </div>
      )}

      {/* TARJETA MAESTRA: ORQUESTADOR CENTRALIZADO DE ETL */}
      <div className="bg-gradient-to-r from-navy via-[#0d2238] to-[#0a1829] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-red/10 border border-red/20 rounded-xl text-red">
                <Clock className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-black uppercase tracking-widest text-white">
                    Orquestador Centralizado de ETL (Single Scheduler)
                  </h2>
                  <span className="px-2 py-0.5 text-[9px] font-black uppercase rounded bg-teal/10 text-teal border border-teal/20">
                    Cadencia Horaria: 0 * * * *
                  </span>
                </div>
                <p className="text-xs text-mid mt-0.5">
                  Bucle secuencial con control de tiempo (20 min máx), cola priorizada por antigüedad y protección anti-poison pills.
                </p>
              </div>
            </div>

            {/* Métricas rápidas del último ciclo */}
            <div className="flex items-center gap-4 pt-2 text-[11px] text-mid flex-wrap">
              <div>
                <span className="text-white/40 block text-[9px] uppercase font-bold">Estado del Lock</span>
                <span className={`font-bold flex items-center gap-1.5 ${lockInfo.is_locked ? 'text-amber-400' : 'text-emerald-400'}`}>
                  <span className={`w-2 h-2 rounded-full ${lockInfo.is_locked ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`}></span>
                  {lockInfo.is_locked ? 'Ejecutando (Bloqueado)' : 'Libre (Listo)'}
                </span>
              </div>
              <div className="h-6 w-[1px] bg-white/10"></div>
              <div>
                <span className="text-white/40 block text-[9px] uppercase font-bold">Último Ciclo</span>
                <span className="font-semibold text-white">
                  {lastCycle?.started_at ? new Date(lastCycle.started_at).toLocaleTimeString() : 'Ninguno'}
                </span>
              </div>
              <div className="h-6 w-[1px] bg-white/10"></div>
              <div>
                <span className="text-white/40 block text-[9px] uppercase font-bold">Duración</span>
                <span className="font-semibold text-white">
                  {lastCycle?.duration_seconds ? `${lastCycle.duration_seconds}s` : '--'}
                </span>
              </div>
              <div className="h-6 w-[1px] bg-white/10"></div>
              <div>
                <span className="text-white/40 block text-[9px] uppercase font-bold">Resultados Ronda</span>
                <span className="font-semibold text-emerald-400">{lastCycle?.succeeded?.length ?? 0} éxito</span>
                <span className="text-white/30 mx-1">/</span>
                <span className="font-semibold text-red-400">{lastCycle?.failed?.length ?? 0} fallos</span>
                <span className="text-white/30 mx-1">/</span>
                <span className="font-semibold text-amber-400">{lastCycle?.deferred?.length ?? 0} diferidos</span>
              </div>
            </div>
          </div>

          {/* Botones de acción del orquestador */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
            {lockInfo.is_locked && (
              <button
                type="button"
                onClick={handleResetLock}
                title="Libera el Lease Lock si un proceso anterior quedó congelado"
                className="px-3 py-2 bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-navy border border-amber-500/30 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5"
              >
                <Unlock className="w-3.5 h-3.5" /> Liberar Lock
              </button>
            )}

            <button
              type="button"
              onClick={triggerOrchestratorTick}
              disabled={runningTick || lockInfo.is_locked}
              className="px-4 py-2.5 bg-red hover:bg-red/80 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-red/20 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw className={`w-4 h-4 ${runningTick ? 'animate-spin' : ''}`} />
              {runningTick ? 'Ejecutando Ronda...' : 'Ejecutar Ciclo Horario Ahora'}
            </button>
          </div>
        </div>
      </div>

      {/* ESTADO DE CONFIGURACIÓN Y CLIENTES EN LA ORQUESTACIÓN */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-teal animate-pulse" />
            <h2 className="text-xs font-black uppercase tracking-widest text-white">
              Panel de Inquilinos y Control de Ingesta Individual ({tenants.length})
            </h2>
          </div>
          <button 
            onClick={() => { fetchEtlData(); onRefreshTenants(); }}
            className="text-[10px] font-bold uppercase text-mid hover:text-white transition-all flex items-center gap-1.5"
          >
            <RefreshCw className="w-3 h-3" /> Actualizar Estado
          </button>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tenants.map(t => {
            const secrets = t.configured_secrets || {};
            const dep = t.deployment_status || {};
            const isDeploying = dep.status === 'deploying';
            const isRunning = runningTenantId === t.tenant_id || t.is_running_now;
            const isSuspended = t.last_execution_status === 'ERROR_SUSPENDED' || (t.consecutive_failures ?? 0) >= 3;
            const cadence = t.sync_cadence || 'daily';
            const failures = t.consecutive_failures ?? 0;

            return (
              <div 
                key={t.tenant_id} 
                className={`p-4 rounded-xl flex flex-col gap-3.5 border transition-all ${
                  isSuspended 
                    ? 'bg-red-500/[0.04] border-red-500/30 shadow-red-500/5' 
                    : isRunning
                    ? 'bg-teal/5 border-teal/30'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                }`}
              >
                {/* Cabecera del Inquilino */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-black text-xs uppercase tracking-wider text-white flex items-center gap-2">
                      {t.tenant_name}
                      {isSuspended && (
                        <span className="px-1.5 py-0.5 bg-red-500/20 text-red-400 text-[8px] font-black rounded uppercase border border-red-500/30 flex items-center gap-1">
                          <ShieldAlert className="w-2.5 h-2.5" /> Suspendido
                        </span>
                      )}
                    </h3>
                    <span className="text-[9px] text-mid block">ID: {t.tenant_id}</span>
                  </div>

                  {/* Estado de Ejecución Badge */}
                  <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider border ${
                    isRunning 
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20 animate-pulse'
                      : t.last_execution_status === 'SUCCESS'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : isSuspended
                      ? 'bg-red-500/20 text-red-300 border-red-500/30'
                      : t.last_execution_status === 'FAILED'
                      ? 'bg-red-500/10 text-red-400 border-red-500/20'
                      : 'bg-white/5 text-mid border-white/5'
                  }`}>
                    {isRunning ? 'Ejecutando' : t.last_execution_status || 'Inactivo'}
                  </span>
                </div>

                {/* Métricas de Cadencia y Fallos */}
                <div className="grid grid-cols-2 gap-2 text-[10px] bg-black/20 p-2.5 rounded-lg border border-white/5">
                  <div>
                    <span className="text-white/40 block text-[8px] uppercase font-bold">Cadencia</span>
                    <span className="font-semibold text-white capitalize">{cadence} @ {t.preferred_hour_utc ?? 3}:00 UTC</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[8px] uppercase font-bold">Fallos Consecutivos</span>
                    <span className={`font-semibold ${failures > 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                      {failures} / 3 {failures >= 3 ? '(Límite)' : ''}
                    </span>
                  </div>
                  <div className="col-span-2 pt-1 border-t border-white/5">
                    <span className="text-white/40 block text-[8px] uppercase font-bold">Última Sincronización Exitosa</span>
                    <span className="font-mono text-mid text-[9px]">
                      {t.last_successful_execution ? new Date(t.last_successful_execution).toLocaleString() : 'Pendiente / Ninguna'}
                    </span>
                  </div>
                </div>

                {/* Credenciales configuradas */}
                <div className="flex gap-1.5 flex-wrap">
                  <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase ${
                    secrets['ga4-creds'] ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-white/5 text-white/30 border border-white/5'
                  }`} title={secrets['ga4-creds'] ? 'Configurado' : 'Sin Configurar'}>
                    GA4
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase ${
                    secrets['adobe-creds'] ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-white/5 text-white/30 border border-white/5'
                  }`} title={secrets['adobe-creds'] ? 'Configurado' : 'Sin Configurar'}>
                    Adobe
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase ${
                    secrets['peec-key'] ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-white/5 text-white/30 border border-white/5'
                  }`} title={secrets['peec-key'] ? 'Configurado' : 'Sin Configurar'}>
                    Peec
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase ${
                    secrets['brandlight-key'] ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-white/5 text-white/30 border border-white/5'
                  }`} title={secrets['brandlight-key'] ? 'Configurado' : 'Sin Configurar'}>
                    Brandlight
                  </span>
                </div>

                {/* Botones de acción manual por cliente */}
                <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-white/5">
                  {isSuspended ? (
                    <button
                      type="button"
                      onClick={() => handleResumeTenant(t.tenant_id)}
                      className="px-2.5 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-[9px] font-black uppercase tracking-wider transition-all flex items-center gap-1"
                    >
                      <Check className="w-3 h-3" /> Reactivar Cliente
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => triggerTenantOnDemand(t.tenant_id, false)}
                        disabled={isRunning}
                        title="Ejecuta la sincronización incremental de los últimos 2 días"
                        className="px-2 py-1 bg-teal/10 hover:bg-teal text-teal hover:text-navy border border-teal/30 rounded text-[9px] font-black uppercase tracking-wider transition-all flex items-center gap-1 disabled:opacity-50"
                      >
                        <Zap className={`w-2.5 h-2.5 ${isRunning ? 'animate-spin' : ''}`} />
                        Sync ETL (2d)
                      </button>

                      <button
                        type="button"
                        onClick={() => triggerTenantOnDemand(t.tenant_id, true)}
                        disabled={isRunning}
                        title="Ejecuta un Backfill profundo de los últimos 90 días"
                        className="px-2 py-1 bg-white/5 hover:bg-white/10 text-mid hover:text-white border border-white/10 rounded text-[9px] font-black uppercase tracking-wider transition-all flex items-center gap-1 disabled:opacity-50"
                      >
                        <Play className="w-2.5 h-2.5" />
                        Backfill (90d)
                      </button>
                    </>
                  )}

                  {isDeploying && (
                    <button
                      type="button"
                      onClick={() => triggerResetStatus(t.tenant_id)}
                      title="Cancela y limpia el estado de despliegue si se quedó estancado"
                      className="px-2 py-1 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/20 rounded text-[9px] font-black uppercase tracking-wider transition-all flex items-center gap-1"
                    >
                      ⏹️ Cancelar
                    </button>
                  )}
                </div>

                {/* Detalle de estado de despliegue si existe */}
                {dep.status && (
                  <div className={`p-2.5 rounded-lg text-[9px] flex flex-col gap-1 border ${
                    dep.status === 'deploying' ? 'bg-blue-500/5 border-blue-500/20 text-blue-300' :
                    dep.status === 'success' ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-300' :
                    'bg-red-500/5 border-red-500/20 text-red-300'
                  }`}>
                    <div className="flex items-center gap-1.5 font-bold uppercase tracking-wide text-[8px]">
                      {dep.status === 'deploying' && <RefreshCw className="w-2.5 h-2.5 animate-spin text-blue-400" />}
                      {dep.status === 'success' && <span className="text-emerald-400">✅</span>}
                      {dep.status === 'failed' && <span className="text-red-400">❌</span>}
                      <span>{dep.step}</span>
                    </div>
                    <p className="opacity-80 font-mono break-all leading-tight">{dep.message}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ALERTAS OPERACIONALES ACTIVAS */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-white/10 bg-white/[0.02] flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red" />
          <h2 className="text-xs font-black uppercase tracking-widest text-white">Alertas Operacionales Activas ({etlAlerts.length})</h2>
        </div>
        
        {etlAlerts.length === 0 ? (
          <div className="p-12 text-center text-mid text-xs flex flex-col items-center gap-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            <span>¡Excelente! No hay alertas de salud activas en el ecosistema ETL.</span>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {etlAlerts.map(a => (
              <div key={a.alert_id} className="p-5 flex items-center justify-between gap-4 hover:bg-white/[0.01] transition-all">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-xs uppercase tracking-wider text-white">Inquilino: {a.tenant_id?.toUpperCase()}</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-red-500/10 text-red-400 font-bold uppercase rounded">
                        {a.alert_type || a.provider || 'ERROR'}
                      </span>
                    </div>
                    <p className="text-xs text-mid mt-1 font-semibold">{a.message || a.error_message}</p>
                    <span className="text-[10px] text-mid/60 mt-1 block">Ocurrido en: {new Date(a.created_at || a.timestamp).toLocaleString()}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleDismissAlert(a.alert_id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors"
                >
                  <Check className="w-3.5 h-3.5" /> Atendido / Borrar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* HISTORIAL DE LOGS DE INGESTA DIARIA */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-teal" />
            <h2 className="text-xs font-black uppercase tracking-widest text-white">Historial de Ingesta Diaria</h2>
          </div>
          <button 
            onClick={fetchEtlData}
            className="text-[10px] font-bold uppercase text-mid hover:text-white transition-all"
          >
            Sincronizar Monitor
          </button>
        </div>

        {loadingEtl ? (
          <div className="p-12 text-center text-mid text-xs flex flex-col items-center gap-2">
            <RefreshCw className="w-6 h-6 animate-spin text-red" />
            <span>Recuperando log de operaciones...</span>
          </div>
        ) : etlHistory.length === 0 ? (
          <div className="p-12 text-center text-mid text-xs">
            No hay registros de ejecución de ETL todavía en Firestore.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.01] text-mid uppercase tracking-wider font-bold text-[10px]">
                  <th className="p-4">Tenant</th>
                  <th className="p-4">Fecha Sincronización</th>
                  <th className="p-4">Estado</th>
                  <th className="p-4 text-center">Tipo / Disparado Por</th>
                  <th className="p-4">Detalles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {etlHistory.map((h, idx) => (
                  <tr key={h.run_id || idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 font-black uppercase text-white">{h.tenant_id}</td>
                    <td className="p-4 text-mid font-semibold">{new Date(h.completed_at || h.timestamp).toLocaleString()}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                        h.status === "success" 
                          ? 'bg-emerald-500/10 text-emerald-400' 
                          : h.status === "partial_success"
                          ? 'bg-amber-500/10 text-amber-400'
                          : 'bg-red-500/10 text-red-400'
                      }`}>
                        {h.status}
                      </span>
                    </td>
                    <td className="p-4 text-center text-mid font-mono text-[10px]">
                      {h.historical_backfill ? 'Backfill 90d' : 'Incremental'} ({h.triggered_by || 'Auto'})
                    </td>
                    <td className="p-4 text-mid text-[11px] font-mono break-all max-w-[400px]">
                      {JSON.stringify(h.details || h.results_summary || h.error)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
