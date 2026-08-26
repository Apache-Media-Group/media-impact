// LLYC Intelligence Dashboard App - React Frontend (Branded Multisite)
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ClientLoginScreen } from './components/ClientLoginScreen';
import { Header, FilterBar } from './components/DashboardLayout';
import { AdminPanel } from './components/AdminPanel';
import { MethodologyModal } from './components/methodology/MethodologyModal';
import { AnalyticsDashboardView } from './components/dashboard/AnalyticsDashboardView';
import { useAnalytics } from './hooks/useAnalytics';
import { secureFetch, API_BASE_URL } from './services/apiClient';
import { getTenantFromUrl, getProxiedLogoUrl, applyTenantTheme } from './services/tenantResolver';
import { exportDashboardToPdf } from './services/pdfExportService';
import type { TenantConfig } from './types';

export { getTenantFromUrl };


const App: React.FC = () => {
  const { state, data, loading, fetchData, updateState } = useAnalytics();
  const [lastUpdated, setLastUpdated] = useState('--:--');
  const [exporting, setExporting] = useState(false);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [isAdminView, setIsAdminView] = useState(false);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  
  // Estados de autenticación seguros y verificados por Firebase SDK
  const [adminUserEmail, setAdminUserEmail] = useState<string | null>(null);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  
  const [tenant, setTenant] = useState<TenantConfig>({
    tenant_id: 'llyc',
    tenant_name: 'LLYC Intelligence',
    logo_url: `${import.meta.env.BASE_URL}logo_llyc.svg`,
    primary_color: '#F54963',
    secondary_color: '#36A7B7',
    font_family: 'Montserrat, sans-serif',
    support_email: 'intelligence.mcp@llyc.global'
  });

  // Estados de autorización de inquilino para clientes
  const [isTenantAuthorized, setIsTenantAuthorized] = useState<boolean | null>(null);
  const [verifyingAccess, setVerifyingAccess] = useState(false);
  const [is2faRequired, setIs2faRequired] = useState(false);

  // Inicializa showDashboard en true si se accede con un tenant específico en la URL o subdominio
  const [showDashboard, setShowDashboard] = useState(() => {
    const detected = getTenantFromUrl();
    if (detected && detected !== 'llyc') {
      return true;
    }
    return false;
  });

  // 1. Observador de estado de Auth oficial de Firebase para mantener consistencia de login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email || '';
        const emailLower = email.toLowerCase();
        setCurrentUserEmail(emailLower);
        
        if (emailLower.endsWith('@llyc.global') || emailLower.endsWith('@llyc.ai')) {
          setAdminUserEmail(emailLower);
          localStorage.setItem('admin_user_email', emailLower);
        } else {
          setAdminUserEmail(null);
          localStorage.removeItem('admin_user_email');
        }
      } else {
        setCurrentUserEmail(null);
        setAdminUserEmail(null);
        localStorage.removeItem('admin_user_email');
      }
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 1.1. Verificar acceso del usuario actual al inquilino seleccionado
  useEffect(() => {
    if (!showDashboard || !tenant?.tenant_id) return;

    if (!currentUserEmail) {
      setIsTenantAuthorized(false);
      setIs2faRequired(false);
      return;
    }

    const checkAccess = async () => {
      try {
        setVerifyingAccess(true);
        const res = await secureFetch(`/api/v1/mcp-analytics/tenant/verify?tenant=${tenant.tenant_id}`);
        if (res.ok) {
          const result = await res.json();
          if (result.authorized) {
            setIsTenantAuthorized(true);
            setIs2faRequired(false);
          } else if (result['2fa_required']) {
            setIs2faRequired(true);
            setIsTenantAuthorized(false);
          } else {
            setIsTenantAuthorized(false);
            setIs2faRequired(false);
          }
        } else {
          setIsTenantAuthorized(false);
          setIs2faRequired(false);
        }
      } catch (err) {
        console.error("Error verificando acceso al inquilino:", err);
        setIsTenantAuthorized(false);
        setIs2faRequired(false);
      } finally {
        setVerifyingAccess(false);
      }
    };

    checkAccess();
  }, [showDashboard, currentUserEmail, tenant?.tenant_id]);

  // 2. Guardia de Ruta Estricto en el Ruteo Nativo de la SPA
  useEffect(() => {
    const handleLocationChange = () => {
      const isHashAdmin = window.location.hash === '#admin' || window.location.pathname === '/admin';
      
      if (isHashAdmin) {
        // Evitar falsos negativos o expulsiones prematuras mientras Firebase Auth está inicializándose
        if (authLoading) return;
        
        // Verificar si existe una sesión de administrador corporativo LLYC activa y verificada
        const isLlycEmail = adminUserEmail && (adminUserEmail.endsWith('@llyc.global') || adminUserEmail.endsWith('@llyc.ai'));
        
        if (!isLlycEmail) {
          // Bloquear el renderizado y expulsar inmediatamente a la landing
          window.location.hash = '';
          setIsAdminView(false);
          alert("Acceso denegado: Se requiere iniciar sesión con una cuenta corporativa de LLYC (@llyc.global o @llyc.ai) para acceder al panel de administración.");
        } else {
          setIsAdminView(true);
          setAdminPreviewTenant(null); // Limpiar modo vista previa al volver al panel de admin
        }
      } else {
        setIsAdminView(false);
      }
    };
    
    // Ejecutar chequeo en la carga inicial
    handleLocationChange();
    
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [adminUserEmail, authLoading]);

  const [adminPreviewTenant, setAdminPreviewTenant] = useState<string | null>(null);

  const handlePreviewTenant = async (tenantId: string) => {
    try {
      const res = await secureFetch(`/api/v1/mcp-analytics/tenant/config?tenant=${tenantId}`);
      if (res.ok) {
        const data: TenantConfig = await res.json();
        setTenant(data);
        
        // Aplicar la paleta de colores de marca dinámicamente en el documento
        if (data.primary_color) {
          document.documentElement.style.setProperty('--red', data.primary_color);
          document.documentElement.style.setProperty('--red-light', data.primary_color + '1A');
        }
        if (data.secondary_color) {
          document.documentElement.style.setProperty('--teal', data.secondary_color);
          document.documentElement.style.setProperty('--teal-light', data.secondary_color + '1A');
        }
        
        // Activar el modo de vista previa de administrador
        setAdminPreviewTenant(data.tenant_name);
        setIsAdminView(false);
        setShowDashboard(true);
        updateState({
          tenant_id: data.tenant_id,
          connection_id: '',
          property_id: '',
          live_api: false
        });
      }
    } catch (err) {
      console.error("Error setting preview tenant:", err);
    }
  };

  const handlePreviewLiveAPI = async (tenantId: string) => {
    try {
      const res = await secureFetch(`/api/v1/mcp-analytics/tenant/config?tenant=${tenantId}`);
      if (res.ok) {
        const data: TenantConfig = await res.json();
        setTenant(data);
        applyTenantTheme(data);
        
        // Activar el modo de vista previa de administrador y LIVE API
        setAdminPreviewTenant(data.tenant_name + " (LIVE API DEMO)");
        setIsAdminView(false);
        setShowDashboard(true);
        updateState({
          tenant_id: data.tenant_id,
          connection_id: '',
          property_id: '',
          live_api: true
        });
      }
    } catch (err) {
      console.error("Error setting preview tenant (Live API):", err);
    }
  };

  const handleGoToDashboard = () => {
    window.location.hash = '';
    setIsAdminView(false);
    setAdminPreviewTenant(null); // Limpiar modo vista previa al volver de forma normal
    setShowDashboard(true); // Saltar WelcomeScreen al volver de admin
  };


  // Orígenes de datos, Cuentas, Propiedades y Segmentos
  const [connections, setConnections] = useState<any[]>([]);
  const [accounts, setAccounts] = useState<any[]>([]);
  const [properties, setProperties] = useState<any[]>([]);
  const [segments, setSegments] = useState<any[]>([]);

  // 1. Efecto secundario dinámico para buscar si este Tenant tiene conexiones personalizadas en GCP Secret Manager
  useEffect(() => {
    if (tenant?.configured_secrets) {
      const list: any[] = [];
      const sec = tenant.configured_secrets;
      if (sec['ga4-creds']) {
        list.push({ connection_id: 'local', display_name: 'Google Analytics 4', platform: 'GA4' });
      }
      if (sec['adobe-creds']) {
        list.push({ connection_id: 'adobe-temp', display_name: 'Adobe Analytics', platform: 'ADOBE_ANALYTICS' });
      }
      if (sec['peec-key']) {
        list.push({ connection_id: 'peec-temp', display_name: 'Peec.ai (Comportamiento)', platform: 'PEEC' });
      }
      if (sec['brandlight-key']) {
        list.push({ connection_id: 'brandlight-temp', display_name: 'Brandlight (Visibilidad)', platform: 'BRANDLIGHT' });
      }
      setConnections(list);
      
      // Auto-select the first valid general connection
      const generalConnections = list.filter(c => c.platform === 'GA4' || c.platform === 'ADOBE_ANALYTICS');
      if (generalConnections.length > 0) {
        const currentConn = state.connection_id;
        const hasCurrent = generalConnections.find(c => c.connection_id === currentConn);
        if (!hasCurrent) {
          setTimeout(() => {
            handleConnectionChange(generalConnections[0].connection_id);
          }, 0);
        }
      }

      // Auto-select the first valid AI connection
      const aiConns = list.filter(c => c.platform === 'PEEC' || c.platform === 'BRANDLIGHT');
      if (aiConns.length > 0) {
        const currentAi = state.ai_connection_id;
        const hasCurrentAi = aiConns.find(c => c.connection_id === currentAi);
        if (!hasCurrentAi) {
          setTimeout(() => {
            updateState({ ai_connection_id: aiConns[0].connection_id });
          }, 0);
        }
      }
    }
  }, [tenant]);

  // Cargar cuentas cuando cambia la conexión/origen
  const handleConnectionChange = async (connId: string) => {
    updateState({ connection_id: connId, account_id: '', property_id: '', segment_id: '' });
    setAccounts([]);
    setProperties([]);
    setSegments([]);

    if (!connId) return;

    try {
      const tId = tenant?.tenant_id || state.tenant_id || '';
      const tenantQuery = tId ? `&tenant_id=${tId}` : '';
      const res = await secureFetch(`/api/v1/mcp-analytics/accounts?connection_id=${connId}${tenantQuery}`);
      if (res.ok) {
        const data = await res.json();
        const loadedAccounts = data.accounts || [];
        setAccounts(loadedAccounts);
        
        // Seleccionar cuenta por defecto e iniciar cascada
        if (loadedAccounts.length > 0) {
          const firstAcc = loadedAccounts[0].account_id;
          updateState({ connection_id: connId, account_id: firstAcc, property_id: '', segment_id: '' });
          handleAccountChange(connId, firstAcc);
        }
      }
    } catch (e) {
      console.error("Error loading accounts:", e);
    }
  };

  // Cargar propiedades cuando cambia la cuenta
  const handleAccountChange = async (connId: string, accId: string) => {
    updateState({ account_id: accId, property_id: '', segment_id: '' });
    setProperties([]);
    setSegments([]);

    if (!connId || !accId) return;

    try {
      const tId = tenant?.tenant_id || state.tenant_id || '';
      const tenantQuery = tId ? `&tenant_id=${tId}` : '';
      const res = await secureFetch(`/api/v1/mcp-analytics/properties?connection_id=${connId}&account_id=${accId}${tenantQuery}`);
      if (res.ok) {
        const data = await res.json();
        const loadedProperties = data.properties || [];
        setProperties(loadedProperties);
        
        // Seleccionar propiedad por defecto e iniciar cascada de segmentos si es Adobe
        if (loadedProperties.length > 0) {
          const firstProp = loadedProperties[0].property_id;
          updateState({ account_id: accId, property_id: firstProp, segment_id: '' });
          if (connId.toLowerCase().includes('adobe')) {
            handlePropertyChange(connId, firstProp);
          }
        }
      }
    } catch (e) {
      console.error("Error loading properties:", e);
    }
  };

  // Cargar segmentos cuando cambia la propiedad/suite de Adobe
  const handlePropertyChange = async (connId: string, propId: string) => {
    updateState({ property_id: propId, segment_id: '' });
    setSegments([]);

    if (!connId || !propId) return;

    try {
      const tId = tenant?.tenant_id || state.tenant_id || '';
      const tenantQuery = tId ? `&tenant_id=${tId}` : '';
      const res = await secureFetch(`/api/v1/mcp-analytics/adobe/segments/${propId}?connection_id=${connId}${tenantQuery}`);
      if (res.ok) {
        const data = await res.json();
        setSegments(data.segments || []);
      }
    } catch (e) {
      console.error("Error loading segments:", e);
    }
  };

  // 0. Efecto para cargar dinámicamente la configuración visual del Tenant (Sanitas, LLYC, etc.)
  useEffect(() => {
    if (adminPreviewTenant) return;
    
    // Al volver al tenant por defecto, podemos limpiar los estados de simulación local
    updateState({ connection_id: '', property_id: '' });

    const tenantParam = getTenantFromUrl();
    
    const fetchTenantConfig = async () => {
      try {
        const url = tenantParam 
          ? `/api/v1/mcp-analytics/tenant/config?tenant=${tenantParam}`
          : `/api/v1/mcp-analytics/tenant/config`;
          
        const res = await secureFetch(url);
        if (res.ok) {
          const data: TenantConfig = await res.json();
          setTenant(data);
          updateState({ tenant_id: data.tenant_id });
          applyTenantTheme(data);
        } else if (tenantParam === 'vidal' || tenantParam === 'vidal-y-vidal') {
          // Fallback para testing local
          const vidalMock: TenantConfig = {
            tenant_id: 'vidal-vidal',
            tenant_name: 'Vidal & Vidal',
            logo_url: 'https://storage.googleapis.com/llyc-mcp-public-assets/logos/vidal-vidal.png',
            primary_color: '#000000',
            secondary_color: '#E51D24',
            font_family: 'Montserrat, sans-serif',
            support_email: 'support@vidal-vidal.com'
          };
          setTenant(vidalMock);
          updateState({ tenant_id: vidalMock.tenant_id });
          applyTenantTheme(vidalMock);
        }
      } catch (err) {
        console.error("Error fetching tenant config:", err);
      }
    };
    
    fetchTenantConfig();
  }, [adminPreviewTenant]);

  const [lineData, setLineData] = useState<any>({
    labels: [],
    datasets: []
  });

  const handleApplyFilters = useCallback(() => {
    fetchData();
  }, [fetchData]);

  // 1. Efecto para inicialización desde URL (solo una vez al montar)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const connId = urlParams.get('connection_id');
    const sessId = urlParams.get('session_id');
    
    if (connId || sessId) {
      updateState({ connection_id: connId || 'google', session_id: sessId || '' });
      setShowDashboard(true);
    }
  }, []); // Sin dependencias para que solo corra una vez

  // 2. Efecto para carga inicial de datos cuando se activa el dashboard
  useEffect(() => {
    if (showDashboard && (state.connection_id || state.property_id)) {
      fetchData();
    }
  }, [showDashboard, state.connection_id, state.property_id]);

  // 3. Efecto dinámico para mapear y actualizar lineData con los registros de BigQuery en tiempo real
  useEffect(() => {
    if (data && data.rows && data.rows.length > 0) {
      const sortedRows = [...data.rows].sort((a: any, b: any) => a.date.localeCompare(b.date));
      
      const labels = sortedRows.map((r: any) => {
        const parts = r.date.split('-');
        return parts.length === 3 ? `${parts[2]}/${parts[1]}` : r.date;
      });
      
      const totalData = sortedRows.map((r: any) => {
        let total = parseInt((r.sessions || '0').toString(), 10);
        return total;
      });
      const aiData = sortedRows.map((r: any) => parseInt((r.ai_referred || '0').toString(), 10) + parseInt((r.ai_inferred || '0').toString(), 10));
      
      setLineData({
        labels,
        datasets: [
          {
            label: 'Sesiones totales',
            data: totalData,
            borderColor: '#C5D2DA',
            borderWidth: 1.5,
            borderDash: [4, 3],
            pointRadius: 0,
            tension: 0.3,
            yAxisID: 'y'
          },
          {
            label: 'Sesiones IA',
            data: aiData,
            borderColor: '#F54963',
            borderWidth: 2,
            pointRadius: 3,
            backgroundColor: 'rgba(245,73,99,0.05)',
            fill: true,
            tension: 0.3,
            yAxisID: 'y1'
          }
        ]
      });
    } else {
      setLineData({ labels: [], datasets: [] });
    }
    setLastUpdated(new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }));
  }, [data]);

  const handleSelectGA4 = () => {
    window.location.href = `${API_BASE_URL}/api/v1/mcp-analytics/oauth/login`;
  };

  const handleSelectAdobe = (creds: any) => {
    console.log("Adobe Creds:", creds);
    setShowDashboard(true);
    handleConnectionChange('adobe-temp');
  };

  const handleSelectPeec = (apiKey: string) => {
    console.log("Peec API Key:", apiKey);
    setShowDashboard(true);
    handleConnectionChange('peec-temp');
  };

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const res = await secureFetch(`/api/v1/mcp-analytics/upload-data`, {
        method: 'POST',
        body: formData
      });
      const result = await res.json();
      if (result.status === 'success') {
        updateState({ connection_id: 'local', property_id: result.property_id });
        setShowDashboard(true);
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      alert("Error de conexión");
    }
  };

  const handleExportPDF = async () => {
    if (!dashboardRef.current) return;
    await exportDashboardToPdf(dashboardRef.current, {
      market: state.market,
      onStart: () => setExporting(true),
      onEnd: () => setExporting(false),
      onError: () => alert("Error al generar el PDF")
    });
  };

  if (isAdminView) {
    return <AdminPanel key="admin-panel-view" adminEmailProp={adminUserEmail || undefined} onBack={handleGoToDashboard} onPreviewTenant={handlePreviewTenant} onPreviewLiveAPI={handlePreviewLiveAPI} />;
  }

  if (!showDashboard) {
    return (
      <WelcomeScreen 
        key="welcome-screen-view"
        onSelectGA4={handleSelectGA4}
        onSelectAdobe={handleSelectAdobe}
        onSelectPeec={handleSelectPeec}
        onFileUpload={handleFileUpload}
        tenant={tenant}
      />
    );
  }

  // Pantalla de carga mientras se inicializa Auth o se verifica el acceso en vivo
  if (authLoading || (currentUserEmail && verifyingAccess)) {
    return (
      <div key="auth-verifying-screen" className="fixed inset-0 bg-[#060c18] flex flex-col items-center justify-center p-5 z-[1000] gap-4">
        <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin" style={{ borderColor: tenant.primary_color || '#E51D24', borderTopColor: 'transparent' }} />
        <p className="text-white text-xs uppercase tracking-widest font-bold">Verificando Credenciales de {tenant.tenant_name}…</p>
      </div>
    );
  }

  // Pantalla de inicio de sesión o acceso restringido si no está autorizado
  if (!isTenantAuthorized) {
    return (
      <ClientLoginScreen 
        key="client-login-view"
        tenant={tenant}
        isAccessDenied={!!currentUserEmail && !is2faRequired}
        onClearAccessDenied={() => {
          setIsTenantAuthorized(null);
          setIs2faRequired(false);
        }}
        is2faRequired={is2faRequired}
        on2faSuccess={() => {
          setIs2faRequired(false);
          setIsTenantAuthorized(true);
        }}
      />
    );
  }

  const aiSource = connections.some(c => c.platform === 'PEEC') ? 'PEEC' : 'BL';

  // Obtener dominios unbranded / branded dinámicamente desde BigQuery
  const getDomainsData = () => {
    let allDomains: any[] = [];
    
    if (data && data.domains) {
      data.domains.forEach((d: any) => {
        allDomains.push({
          d: d.domain,
          m: '-', // Menciones
          g: d.visibility_score,
          c: d.classification
        });
      });
    }
    
    return allDomains.sort((a, b) => b.g - a.g).slice(0, 10);
  };

  const top10Domains = getDomainsData();

  const trafficSource = state.connection_id?.toLowerCase().includes('adobe') ? 'Adobe' : 'GA4';



  // Calcular rendimiento por motor IA dinámicamente
  type EngineData = { sessions: number, conversions: number, count: number, totalDuration: number };
  const getMotorRows = () => {
    const motors: Record<string, EngineData> = {
      'ChatGPT': { sessions: 0, conversions: 0, count: 0, totalDuration: 0 },
      'Gemini': { sessions: 0, conversions: 0, count: 0, totalDuration: 0 },
      'Perplexity': { sessions: 0, conversions: 0, count: 0, totalDuration: 0 },
      'Claude': { sessions: 0, conversions: 0, count: 0, totalDuration: 0 },
      'Copilot': { sessions: 0, conversions: 0, count: 0, totalDuration: 0 },
      'Otros': { sessions: 0, conversions: 0, count: 0, totalDuration: 0 },
    };

    if (data && data.rows) {
      data.rows.forEach((r: any) => {
        const processEngine = (name: string, sessionKey: string, durationKey: string, convKey: string) => {
          const sess = parseInt((r[sessionKey] || '0').toString(), 10);
          const dur = parseFloat((r[durationKey] || '0').toString());
          const eng = parseFloat((r[convKey] || '0').toString());
          
          if (sess > 0) {
            motors[name].sessions += sess;
            motors[name].conversions += eng;
            motors[name].count += 1;
            motors[name].totalDuration += dur;
          }
        };

        processEngine('ChatGPT', 'chatgpt_sessions', 'chatgpt_duration', 'chatgpt_conversions');
        processEngine('Gemini', 'gemini_sessions', 'gemini_duration', 'gemini_conversions');
        processEngine('Perplexity', 'perplexity_sessions', 'perplexity_duration', 'perplexity_conversions');
        processEngine('Claude', 'claude_sessions', 'claude_duration', 'claude_conversions');
        processEngine('Copilot', 'copilot_sessions', 'copilot_duration', 'copilot_conversions');
        processEngine('Otros', 'other_ai_sessions', 'other_ai_duration', 'other_ai_conversions');
      });
    }
    
    return Object.keys(motors)
      .filter(m => (motors[m].sessions > 0 || motors[m].count > 0) && (m !== 'Otros' || (motors[m].conversions > 0 || motors[m].sessions > 50)))
      .map(m => {
        const avgSecs = motors[m].sessions > 0 ? Math.round(motors[m].totalDuration / motors[m].sessions) : 0;
        const mins = Math.floor(avgSecs / 60);
        const secs = avgSecs % 60;
        const durationStr = avgSecs > 0 ? `${mins}m ${secs}s` : 'N/A';
        return {
          n: m,
          s: motors[m].sessions.toLocaleString('es-ES'),
          ds: motors[m].sessions,
          d: durationStr,
          c: motors[m].count > 0 ? (motors[m].conversions / motors[m].count).toFixed(1) + '%' : '0%',
          sc: motors[m].count > 0 ? Math.round(motors[m].conversions / motors[m].count) : 0
        };
      })
      .sort((a, b) => b.ds - a.ds);
  };
  
  const motorRows = getMotorRows();
  const topicsRows = [...(data?.topics_pr || []), ...(data?.topics_digital || []), ...(data?.topics_rows || [])];
  const totalUniqueDomains = data?.rows ? new Set(data.rows.map((r: any) => r.domain).filter(Boolean)).size : 0;

  return (
    <div className="min-h-screen flex flex-col bg-dashboard-bg">
      {/* IMAGES PRELOADER FOR PDF EXPORT */}
      <div style={{ display: 'none' }}>
        {tenant?.logo_url && <img src={getProxiedLogoUrl(tenant.logo_url)} alt="preload" crossOrigin="anonymous" />}
      </div>
      {adminPreviewTenant && (
        <div className="bg-amber-500 text-navy py-2 px-8 flex items-center justify-between text-xs font-black uppercase tracking-wider shadow-md z-[100]">
          <div className="flex items-center gap-2">
            <span>👁️ Modo Vista Previa de Administrador</span>
            <span className="bg-navy text-white px-2 py-0.5 rounded text-[10px] font-black uppercase">Visualizando: {adminPreviewTenant}</span>
          </div>
          <button 
            onClick={() => {
              window.location.hash = '#admin';
              setIsAdminView(true);
            }}
            className="underline hover:text-white transition-colors"
          >
            Volver a la Administración →
          </button>
        </div>
      )}
      <Header 
        onRefresh={handleApplyFilters} 
        onExport={handleExportPDF} 
        onFileUpload={handleFileUpload} 
        loading={loading} 
        exporting={exporting}
        lastUpdated={lastUpdated} 
        tenant={tenant}
      />
      <FilterBar
        state={state}
        updateState={updateState}
        onApply={handleApplyFilters}
        connections={connections}
        accounts={accounts}
        properties={properties}
        segments={segments}
        onConnectionChange={handleConnectionChange}
        onAccountChange={(accId) => handleAccountChange(state.connection_id, accId)}
      />


      <AnalyticsDashboardView
        data={data}
        loading={loading}
        state={state}
        tenant={tenant}
        trafficSource={trafficSource}
        aiSource={aiSource}
        lineData={lineData}
        top10Domains={top10Domains}
        motorRows={motorRows}
        topicsRows={topicsRows}
        totalUniqueDomains={totalUniqueDomains}
        exporting={exporting}
        dashboardRef={dashboardRef}
        onOpenMethodology={() => setIsMethodologyOpen(true)}
      />

      <MethodologyModal
        isOpen={isMethodologyOpen}
        onClose={() => setIsMethodologyOpen(false)}
      />

      {exporting && (
        <div className="fixed inset-0 bg-navy/80 flex items-center justify-center p-5 z-[2000]">
          <div className="bg-white rounded-xl p-8 max-w-xs w-full shadow-2xl text-center flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-red/20 border-t-red rounded-full spin"></div>
            <p className="text-navy font-bold uppercase tracking-widest text-xs">Generando PDF…</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
