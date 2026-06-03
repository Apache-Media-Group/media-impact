'use client';

import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import { 
    checkMCPSession, listAccounts, listProperties, 
    chat, runReport, executeDeepDive, analyzeTrafficIA, executeRiskAnalysis, uploadLocalData,
    listUserConnections, executeAdvancedReport, executeFunnelAnalysis, executeTrafficIAURLAnalysis,
    auditProperty
} from '@/lib/mcp-analytics';
import { 
    MessageSquare, Settings, Send, Plus, 
    Database, ArrowLeft, Sparkles, AlertCircle,
    PanelLeftClose, PanelLeftOpen, BarChart, ChevronDown,
    FileUp, Zap, ShieldAlert, TrendingUp, Info, Search, RefreshCw, Calendar,
    LayoutGrid, Users, ShoppingCart, Target, Activity, FileText, PieChart, Globe, MousePointer2,
    Presentation
} from 'lucide-react';
import { Shell } from '@/components/Shell';
import Link from 'next/link';
import AnalysisDashboard from '@/components/mcp/AnalysisDashboard';
import { API_BASE_URL, apiRequest } from '@/lib/api';

export default function AnalyticsConversationalPage() {
    const { language } = useI18n() as { language: 'es' | 'en' };
    const t = (en: string, es: string) => language === 'es' ? es : en;

    const [tab, setTab] = useState<'chat' | 'analysis' | 'manage'>('chat');
    const [session, setSession] = useState<any>(null);
    const [userConnections, setUserConnections] = useState<any[]>([]);
    const [selectedConnectionId, setSelectedConnectionId] = useState('');
    const [accounts, setAccounts] = useState<any[]>([]);
    const [selectedAccount, setSelectedAccount] = useState('');
    const [properties, setProperties] = useState<any[]>([]);
    const [selectedProperty, setSelectedProperty] = useState('');
    const [propertySearch, setPropertySearch] = useState('');
    const [isInternalSidebarCollapsed, setIsInternalSidebarCollapsed] = useState(false);
    const [adobeSegments, setAdobeSegments] = useState<any[]>([]);
    const [selectedAdobeSegment, setSelectedAdobeSegment] = useState<string>('');
    
    // Dates
    const [startDate, setStartDate] = useState('30daysAgo');
    const [endDate, setEndDate] = useState('today');
    
    // Key Metrics
    const [metrics, setMetrics] = useState({
        activeUsers: '--',
        sessions: '--',
        conversions: '--'
    });

    const [messages, setMessages] = useState<any[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Dashboard State
    const [activeDashboard, setActiveDashboard] = useState<{ 
        type: 'risk' | 'traffic-ia' | 'deep-dive' | 'audit' | 'sources' | 'devices' | 'pages', 
        data: any 
    } | null>(null);

    const isAdobe = userConnections.find(c => c.connection_id === selectedConnectionId)?.platform === 'ADOBE_ANALYTICS';

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useLayoutEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    useEffect(() => {
        verifySessionAndConnections();
    }, []);

    async function verifySessionAndConnections() {
        setLoading(true);
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const urlSessionId = urlParams.get('session_id');
            const storedSessionId = localStorage.getItem('mcp_session_id');
            const sessionId = urlSessionId || storedSessionId;
            
            if (sessionId) {
                localStorage.setItem('mcp_session_id', sessionId);
            }

            const res = await checkMCPSession(sessionId || undefined);
            setSession(res);

            const connRes = await listUserConnections();
            const connections = connRes?.connections || [];
            setUserConnections(connections);

            if (!res.authenticated && connections.length > 0) {
                const firstConn = connections[0].connection_id;
                setSelectedConnectionId(firstConn);
                loadAccounts(undefined, firstConn);
            } else if (res.authenticated && sessionId) {
                loadAccounts(sessionId);
            }
        } catch (err: any) {
            setError(err.message || 'Failed to verify session');
        } finally {
            setLoading(false);
        }
    }

    async function loadAccounts(sessionId?: string, connectionId?: string) {
        try {
            const res = await listAccounts(sessionId, connectionId);
            setAccounts(res.accounts || []);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if (selectedConnectionId) {
            setSelectedAccount('');
            setProperties([]);
            setSelectedProperty('');
            
            const conn = userConnections.find(c => c.connection_id === selectedConnectionId);
            // Always load accounts (Companies for Adobe, Accounts for GA4)
            loadAccounts(undefined, selectedConnectionId);
            
            if (conn && conn.platform !== 'ADOBE_ANALYTICS') {
                loadProperties(session?.session_id, undefined, selectedConnectionId);
            }
        }
    }, [selectedConnectionId]);

    useEffect(() => {
        if (selectedAccount) {
            loadProperties(session?.session_id, selectedAccount, selectedConnectionId);
        }
    }, [selectedAccount, selectedConnectionId]);

    useEffect(() => {
        if (selectedProperty) {
            loadKeyMetrics();
        }
    }, [selectedProperty, startDate, endDate]);

    async function loadProperties(sessionId?: string, accountId?: string, connectionId?: string) {
        setLoading(true);
        try {
            const res = await listProperties(sessionId, accountId, connectionId);
            setProperties(res.properties || []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    async function loadKeyMetrics() {
        if (!selectedProperty && !isAdobe) return;
        const effectiveId = isAdobe ? (selectedProperty || 'default') : selectedProperty;
        if (!effectiveId) return;

        try {
            const res = await runReport(session?.session_id, {
                property_id: effectiveId,
                date_ranges: [{ start_date: startDate, end_date: endDate }],
                dimensions: ['date'], // Ensure at least one dimension for Adobe
                metrics: ['activeUsers', 'sessions', 'conversions'],
                limit: 365, // Allow fetching multiple days to sum up
                segment_id: selectedAdobeSegment || undefined
            }, selectedConnectionId);
            
            if (res.rows && res.rows.length > 0) {
                // Sum all rows in case Adobe/GA returns daily breakdown due to 'date' dimension
                const totals = res.rows.reduce((acc: any, row: any) => {
                    acc.activeUsers += Number(row.activeUsers || 0);
                    acc.sessions += Number(row.sessions || 0);
                    acc.conversions += Number(row.conversions || 0);
                    return acc;
                }, { activeUsers: 0, sessions: 0, conversions: 0 });

                setMetrics({
                    activeUsers: String(totals.activeUsers),
                    sessions: String(totals.sessions),
                    conversions: String(totals.conversions)
                });
            }
        } catch (err) {
            console.error('Error loading metrics:', err);
        }
    }

    // Auto-update Key Metrics when dates or properties change
    useEffect(() => {
        if (selectedConnectionId && (selectedProperty || isAdobe)) {
            loadKeyMetrics();
        }
    }, [startDate, endDate, selectedProperty, selectedConnectionId, isAdobe, selectedAdobeSegment]);

    async function loadAdobeSegments(propertyId: string, connectionId: string) {
        if (!propertyId || !connectionId) return;
        setLoading(true);
        try {
            const res = await apiRequest(`/mcp-analytics/adobe/segments/${propertyId}?connection_id=${connectionId}`);
            setAdobeSegments(res.segments || []);
        } catch (err) {
            console.error('Error loading Adobe segments:', err);
            // Silently fail, maybe the user does not have permissions for segments.
            setAdobeSegments([]);
        } finally {
            setLoading(false);
        }
    }

    // Effect to load segments when an Adobe property is selected
    useEffect(() => {
        if (isAdobe && selectedProperty && selectedConnectionId) {
            loadAdobeSegments(selectedProperty, selectedConnectionId);
        } else {
            // Clear segments if not Adobe or no property selected
            setAdobeSegments([]);
            setSelectedAdobeSegment('');
        }
    }, [isAdobe, selectedProperty, selectedConnectionId]);

    const handleSendMessage = async () => {
        if (!input.trim()) return;
        
        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        try {
            const chatHistory = messages.map(m => ({ role: m.role, content: m.content }));
            const selectedSegment = adobeSegments.find(s => s.id === selectedAdobeSegment);
            const context = {
                property_id: isAdobe ? (selectedProperty || 'default') : selectedProperty,
                account_id: selectedAccount,
                provider: isAdobe ? 'adobe' : (session?.provider || 'google'),
                metrics: metrics,
                date_range: { startDate, endDate },
                segment_id: selectedAdobeSegment || null,
                segment_name: selectedSegment ? selectedSegment.name : null
            };
            
            const res = await chat({
                message: input,
                context,
                chat_history: chatHistory,
                session_id: session?.session_id,
                connection_id: selectedConnectionId
            }, session?.session_id, selectedConnectionId);

            setMessages(prev => [...prev, { 
                role: 'assistant', 
                content: res.message,
                data: res.data
            }]);
        } catch (err: any) {
            setError(err.message || 'Failed to send message');
        } finally {
            setLoading(false);
        }
    };

    const runAnalysis = async (type: string, config: any = {}) => {
        if (!selectedProperty && !isAdobe) {
            alert(language === 'es' ? 'Por favor selecciona una propiedad primero.' : 'Please select a property first.');
            return;
        }

        setLoading(true);
        setTab('chat');
        
        const effectivePropertyId = isAdobe ? (selectedProperty || 'default') : selectedProperty;

        try {
            let res;
            let message = '';

            switch (type) {
                case 'last-7-days':
                    setStartDate('7daysAgo');
                    setEndDate('today');
                    message = language === 'es' ? 'Analizando los últimos 7 días...' : 'Analyzing last 7 days...';
                    res = await runReport(session?.session_id, {
                        property_id: effectivePropertyId,
                        date_ranges: [{ start_date: '7daysAgo', end_date: 'today' }],
                        dimensions: ['date'],
                        metrics: ['sessions', 'activeUsers', 'conversions'],
                        limit: 10,
                        segment_id: selectedAdobeSegment || undefined
                    }, selectedConnectionId);
                    break;
                case 'pages':
                    message = language === 'es' ? 'Analizando páginas top...' : 'Analyzing top pages...';
                    res = await runReport(session?.session_id, {
                        property_id: effectivePropertyId,
                        date_ranges: [{ start_date: startDate, end_date: endDate }],
                        dimensions: ['pagePath'],
                        metrics: ['screenPageViews', 'activeUsers', 'engagementRate'],
                        limit: 10,
                        segment_id: selectedAdobeSegment || undefined
                    }, selectedConnectionId);
                    if (res && !res.error) {
                        setActiveDashboard({ type: 'pages', data: res });
                    }
                    break;
                case 'sources':
                    message = language === 'es' ? 'Analizando fuentes de tráfico...' : 'Analyzing traffic sources...';
                    res = await runReport(session?.session_id, {
                        property_id: effectivePropertyId,
                        date_ranges: [{ start_date: startDate, end_date: endDate }],
                        dimensions: ['sessionSourceMedium'],
                        metrics: ['sessions', 'activeUsers', 'conversions'],
                        limit: 10,
                        segment_id: selectedAdobeSegment || undefined
                    }, selectedConnectionId);
                    if (res && !res.error) {
                        setActiveDashboard({ type: 'sources', data: res });
                    }
                    break;
                case 'devices':
                    message = language === 'es' ? 'Analizando por dispositivo...' : 'Analyzing by device...';
                    res = await runReport(session?.session_id, {
                        property_id: effectivePropertyId,
                        date_ranges: [{ start_date: startDate, end_date: endDate }],
                        dimensions: ['deviceCategory'],
                        metrics: ['sessions', 'activeUsers', 'engagementRate'],
                        limit: 10,
                        segment_id: selectedAdobeSegment || undefined
                    }, selectedConnectionId);
                    if (res && !res.error) {
                        setActiveDashboard({ type: 'devices', data: res });
                    }
                    break;
                case 'user-acquisition':
                    message = language === 'es' ? 'Analizando adquisición de usuarios...' : 'Analyzing user acquisition...';
                    res = await executeAdvancedReport(session?.session_id, effectivePropertyId, 'user_acquisition', startDate, endDate, selectedConnectionId);
                    if (res && !res.error) {
                        setActiveDashboard({ type: 'sources', data: res });
                    }
                    break;
                case 'traffic-acquisition':
                    message = language === 'es' ? 'Analizando adquisición de tráfico...' : 'Analyzing traffic acquisition...';
                    res = await executeAdvancedReport(session?.session_id, effectivePropertyId, 'traffic_acquisition', startDate, endDate, selectedConnectionId);
                    if (res && !res.error) {
                        setActiveDashboard({ type: 'sources', data: res });
                    }
                    break;
                case 'ecommerce':
                    message = language === 'es' ? 'Analizando e-commerce...' : 'Analyzing e-commerce...';
                    res = await executeAdvancedReport(session?.session_id, effectivePropertyId, 'ecommerce', startDate, endDate, selectedConnectionId);
                    if (res && !res.error) {
                        setActiveDashboard({ type: 'deep-dive', data: { sections: { "ecommerce_overview": res }, date_range: { start_date: startDate, end_date: endDate } } });
                    }
                    break;
                case 'funnel':
                    message = language === 'es' ? 'Analizando funnel de conversión...' : 'Analyzing conversion funnel...';
                    res = await executeFunnelAnalysis(session?.session_id, effectivePropertyId, ['session_start', 'view_item', 'add_to_cart', 'purchase'], startDate, endDate, selectedConnectionId);
                    if (res && !res.error) {
                        setActiveDashboard({ type: 'deep-dive', data: { sections: { "funnel": res }, date_range: { start_date: startDate, end_date: endDate } } });
                    }
                    break;
                case 'risk':
                    message = language === 'es' ? 'Ejecutando análisis de Riesgo y Varianza...' : 'Running Risk and Variance analysis...';
                    res = await executeRiskAnalysis(session?.session_id, effectivePropertyId, startDate, endDate, 3.0, selectedConnectionId);
                    if (res && !res.error) {
                        setActiveDashboard({ type: 'risk', data: res });
                    }
                    break;
                case 'traffic-ia':
                    message = language === 'es' ? 'Analizando Tráfico de alta intención (IA)...' : 'Analyzing High Intent Traffic (IA)...';
                    res = await analyzeTrafficIA(session?.session_id, effectivePropertyId, startDate, endDate, selectedConnectionId, selectedAdobeSegment || undefined);
                    if (res && !res.error) {
                        setActiveDashboard({ type: 'traffic-ia', data: res });
                    }
                    break;
                case 'url-performance':
                    message = language === 'es' ? 'Analizando rendimiento de URLs IA...' : 'Analyzing AI URL performance...';
                    res = await executeTrafficIAURLAnalysis(session?.session_id, effectivePropertyId, [], startDate, endDate, selectedConnectionId);
                    if (res && !res.error) {
                        setActiveDashboard({ type: 'pages', data: res });
                    }
                    break;
                case 'audit':
                    message = language === 'es' ? 'Auditando configuración de la propiedad...' : 'Auditing property configuration...';
                    res = await auditProperty(session?.session_id, effectivePropertyId, selectedConnectionId);
                    if (res && !res.error) {
                        setActiveDashboard({ type: 'audit', data: res });
                    }
                    break;
                case 'deep-dive':
                    message = language === 'es' ? 'Ejecutando Deep Dive completo...' : 'Executing full Deep Dive...';
                    res = await executeDeepDive(session?.session_id, effectivePropertyId, startDate, endDate, selectedConnectionId);
                    if (res && !res.error) {
                        setActiveDashboard({ type: 'deep-dive', data: res });
                    }
                    break;
                default:
                    return;
            }
            
            // Silence specialized analysis from the chat history
            const dashboardTypes = [
                'risk', 'traffic-ia', 'audit', 'deep-dive', 
                'sources', 'devices', 'pages', 
                'user-acquisition', 'traffic-acquisition', 'ecommerce', 'funnel', 'url-performance'
            ];
            if (!dashboardTypes.includes(type)) {
                setMessages(prev => [...prev, { 
                    role: 'assistant', 
                    content: message,
                    data: res
                }]);
            }
        } catch (err: any) {
            setError(err.message || 'Analysis failed');
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setLoading(true);
        try {
            const res = await uploadLocalData(file);
            alert(`File ${file.name} uploaded successfully!`);
            setSelectedProperty(`local:${file.name}`);
        } catch (err: any) {
            setError(err.message || 'File upload failed');
        } finally {
            setLoading(false);
        }
    };

    const renderData = (data: any, type?: any) => {
        if (!data) return null;

        const isDashboardType = ['risk', 'traffic-ia', 'audit', 'deep-dive'].includes(type);

        if (isDashboardType) {
            return (
                <button 
                    onClick={() => setActiveDashboard({ type, data })}
                    className="mt-4 flex items-center gap-2 px-6 py-3 bg-[#F54963] text-white rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
                >
                    <Presentation size={18} />
                    {language === 'es' ? 'Ver Dashboard Interactivo' : 'View Interactive Dashboard'}
                </button>
            );
        }

        return (
            <div className="mt-4 p-4 bg-black/5 rounded-xl border border-black/10 text-xs font-mono overflow-auto max-h-96">
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        );
    };

    const filteredProperties = (properties || []).filter(p => 
        p?.display_name?.toLowerCase().includes(propertySearch.toLowerCase()) || 
        p?.property_id?.includes(propertySearch)
    );

    if (!session?.authenticated && (userConnections || []).length === 0 && !loading) {
        return (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-[rgb(var(--background-rgb))]">
                <div className="w-20 h-20 bg-[#F54963]/10 rounded-full flex items-center justify-center mb-6">
                    <Sparkles size={40} className="text-[#F54963]" />
                </div>
                <h1 className="text-3xl font-black uppercase tracking-widest mb-4">Analytics Conversational MCP</h1>
                <p className="max-w-md text-gray-500 mb-8 font-medium">Connect your Google Analytics or Adobe Analytics account to start exploring your data with AI.</p>
                <div className="flex flex-col gap-4">
                    <a
                        href={`${API_BASE_URL}/mcp-analytics/oauth/login`}
                        className="px-8 py-4 bg-[#F54963] text-white rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-red-900/20"
                    >
                        Sign in with Google
                    </a>                    <Link href="/connections" className="text-sm font-bold text-[#F54963] hover:underline uppercase tracking-widest">
                        Manage Connections in AIMA
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-full overflow-hidden bg-[rgb(var(--background-rgb))] relative">
            {/* Sidebar Toggle Button */}
            {isInternalSidebarCollapsed && (
                <button 
                    onClick={() => setIsInternalSidebarCollapsed(false)}
                    className="absolute left-4 top-4 z-50 p-2 bg-[#F54963] text-white rounded-xl shadow-xl hover:scale-110 transition-all"
                >
                    <PanelLeftOpen size={20} />
                </button>
            )}

            {/* Internal Sidebar */}
            <aside className={`border-r border-[rgb(var(--border-color))] flex flex-col bg-[rgb(var(--card-bg))] transition-all duration-300 ${isInternalSidebarCollapsed ? 'w-0 -translate-x-full opacity-0' : 'w-80 translate-x-0 opacity-100'}`}>
                <div className="p-6 border-b border-[rgb(var(--border-color))] flex-1 overflow-y-auto custom-scrollbar">
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F54963] hover:brightness-110">
                            <ArrowLeft size={14} /> Back to AIMA
                        </Link>
                        <button onClick={() => setIsInternalSidebarCollapsed(true)} className="p-1.5 rounded-lg hover:bg-black/5 text-gray-400">
                            <PanelLeftClose size={20} />
                        </button>
                    </div>

                    <div className="space-y-6">
                        {/* CONTEXT SECTION */}
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('Context', 'Contexto')}</h3>
                            
                            {userConnections.length > 0 && (
                                <div>
                                    <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">{t('Connection', 'Conexión')}</label>
                                    <div className="flex gap-2">
                                        <select 
                                            value={selectedConnectionId}
                                            onChange={(e) => setSelectedConnectionId(e.target.value)}
                                            className="flex-1 bg-black/5 border border-[rgb(var(--border-color))] rounded-xl p-2.5 text-xs focus:ring-2 ring-[#F54963]/20 outline-none"
                                        >
                                            <option value="">{t('Select Connection...', 'Seleccionar Conexión...')}</option>
                                            {userConnections.map(conn => (
                                                <option key={conn.connection_id} value={conn.connection_id}>
                                                    {conn.display_name} ({conn.platform})
                                                </option>
                                            ))}
                                        </select>
                                        <button 
                                            onClick={async () => {
                                                if (!selectedConnectionId) return;
                                                setLoading(true);
                                                try {
                                                    const res = await apiRequest(`/mcp-analytics/test-connection?connection_id=${selectedConnectionId}${session?.session_id ? `&session_id=${session.session_id}` : ''}`);
                                                    
                                                    if (res.status === 'ok') {
                                                        alert('✅ Connection OK: ' + res.accounts_found + ' accounts found.');
                                                    } else if (res.status === 'warning') {
                                                        const raw = res.raw_adobe_response ? '\n\nRAW Adobe Response: ' + JSON.stringify(res.raw_adobe_response, null, 2) : '';
                                                        alert('⚠️ Connection warning: ' + res.message + raw);
                                                    } else {
                                                        const raw = res.raw_adobe_response ? '\n\nRAW Adobe Response: ' + JSON.stringify(res.raw_adobe_response, null, 2) : '';
                                                        alert('❌ Connection error: ' + res.message + raw);
                                                    }
                                                } catch (err: any) {
                                                    alert('❌ Request failed: ' + err.message);
                                                } finally { setLoading(false); }
                                            }}
                                            className="p-2.5 bg-black/5 border border-[rgb(var(--border-color))] rounded-xl hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all"
                                            title="Test Connection"
                                        >
                                            <Activity size={14} />
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">{isAdobe ? t('Adobe Company', 'Compañía Adobe') : t('Account', 'Cuenta')}</label>
                                <select 
                                    value={selectedAccount}
                                    onChange={(e) => setSelectedAccount(e.target.value)}
                                    className="w-full bg-black/5 border border-[rgb(var(--border-color))] rounded-xl p-2.5 text-xs focus:ring-2 ring-[#F54963]/20 outline-none"
                                >
                                    <option value="">{isAdobe ? t('Select Company...', 'Seleccionar Compañía...') : t('Select Account...', 'Seleccionar Cuenta...')}</option>
                                    {accounts.map(acc => <option key={acc.account_id} value={acc.account_id}>{acc.display_name}</option>)}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">{isAdobe ? t('Adobe Report Suite', 'Report Suite Adobe') : t('GA4 Property', 'Propiedad GA4')}</label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                    <input 
                                        type="text"
                                        placeholder={isAdobe ? t('Search suite...', 'Buscar suite...') : t('Search property...', 'Buscar propiedad...')}
                                        value={propertySearch}
                                        onChange={(e) => setPropertySearch(e.target.value)}
                                        className="w-full bg-black/5 border border-[rgb(var(--border-color))] rounded-xl py-2.5 pl-9 pr-4 text-xs focus:ring-2 ring-[#F54963]/20 outline-none"
                                    />
                                </div>
                                <select 
                                    value={selectedProperty}
                                    onChange={(e) => setSelectedProperty(e.target.value)}
                                    className="w-full bg-black/5 border border-[rgb(var(--border-color))] rounded-xl p-2.5 text-xs focus:ring-2 ring-[#F54963]/20 outline-none h-32"
                                    size={5}
                                >
                                    <option value="">{isAdobe ? t('Select a suite...', 'Selecciona un suite...') : t('Select a property...', 'Selecciona una propiedad...')}</option>
                                    {filteredProperties.map(prop => <option key={prop.property_id} value={prop.property_id}>{prop.display_name}</option>)}
                                </select>
                                <button 
                                    onClick={() => selectedAccount ? loadProperties(session?.session_id, selectedAccount, selectedConnectionId) : null}
                                    className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-[#F54963] transition-colors"
                                >
                                    <RefreshCw size={10} /> {t('Update', 'Actualizar')}
                                </button>
                            </div>

                            {isAdobe && adobeSegments.length > 0 && (
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">{t('Adobe Segment', 'Segmento Adobe')}</label>
                                    <select 
                                        value={selectedAdobeSegment}
                                        onChange={(e) => setSelectedAdobeSegment(e.target.value)}
                                        className="w-full bg-black/5 border border-[rgb(var(--border-color))] rounded-xl p-2.5 text-xs focus:ring-2 ring-[#F54963]/20 outline-none"
                                    >
                                        <option value="">{t('All users', 'Todos los usuarios')}</option>
                                        {adobeSegments.map(seg => <option key={seg.id} value={seg.id}>{seg.name}</option>)}
                                    </select>
                                </div>
                            )}
                        </div>

                        {/* DATE RANGE */}
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('Date Range', 'Rango de Fechas')}</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1 block">{t('From:', 'Desde:')}</label>
                                    <input 
                                        type="date" 
                                        value={startDate.includes('daysAgo') ? '' : startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="w-full bg-black/5 border border-[rgb(var(--border-color))] rounded-xl p-2.5 text-xs focus:ring-2 ring-[#F54963]/20 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1 block">{t('To:', 'Hasta:')}</label>
                                    <input 
                                        type="date" 
                                        value={endDate.includes('today') ? '' : endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className="w-full bg-black/5 border border-[rgb(var(--border-color))] rounded-xl p-2.5 text-xs focus:ring-2 ring-[#F54963]/20 outline-none"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => setStartDate('7daysAgo')} className={`flex-1 p-2 rounded-lg text-[10px] font-black uppercase transition-all ${startDate === '7daysAgo' ? 'bg-[#F54963] text-white' : 'bg-black/5 text-gray-400 hover:bg-black/10'}`}>{t('7 days', '7 días')}</button>
                                    <button onClick={() => setStartDate('30daysAgo')} className={`flex-1 p-2 rounded-lg text-[10px] font-black uppercase transition-all ${startDate === '30daysAgo' ? 'bg-[#F54963] text-white' : 'bg-black/5 text-gray-400 hover:bg-black/10'}`}>{t('30 days', '30 días')}</button>
                                    <button onClick={() => setStartDate('90daysAgo')} className={`flex-1 p-2 rounded-lg text-[10px] font-black uppercase transition-all ${startDate === '90daysAgo' ? 'bg-[#F54963] text-white' : 'bg-black/5 text-gray-400 hover:bg-black/10'}`}>{t('90 days', '90 días')}</button>
                                </div>
                            </div>
                        </div>

                        {/* QUICK ACTIONS */}
                        <div className="space-y-3">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('Quick Actions', 'Acciones Rápidas')}</h3>
                            <div className="grid grid-cols-1 gap-1.5">
                                <button onClick={() => runAnalysis('last-7-days')} className="flex items-center gap-2.5 p-2.5 bg-black/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all">
                                    <BarChart size={14} /> {t('Last 7 days', 'Últimos 7 días')}
                                </button>
                                <button onClick={() => runAnalysis('pages')} className="flex items-center gap-2.5 p-2.5 bg-black/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all">
                                    <FileText size={14} /> {t('Top pages', 'Páginas top')}
                                </button>
                                <button onClick={() => runAnalysis('sources')} className="flex items-center gap-2.5 p-2.5 bg-black/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all">
                                    <Globe size={14} /> {t('Traffic sources', 'Fuentes de tráfico')}
                                </button>
                                <button onClick={() => runAnalysis('devices')} className="flex items-center gap-2.5 p-2.5 bg-black/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all">
                                    <MousePointer2 size={14} /> {t('By device', 'Por dispositivo')}
                                </button>
                            </div>
                        </div>

                        {/* ADVANCED ANALYSIS */}
                        <div className="space-y-3">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('Advanced Analysis', 'Análisis Avanzado')}</h3>
                            <div className="grid grid-cols-1 gap-1.5">
                                <button onClick={() => runAnalysis('user-acquisition')} className="flex items-center gap-2.5 p-2.5 bg-black/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all">
                                    <Users size={14} /> {t('User acquisition', 'Adquisición usuarios')}
                                </button>
                                <button onClick={() => runAnalysis('traffic-acquisition')} className="flex items-center gap-2.5 p-2.5 bg-black/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all">
                                    <TrendingUp size={14} /> {t('Traffic acquisition', 'Adquisición tráfico')}
                                </button>
                                <button onClick={() => runAnalysis('ecommerce')} className="flex items-center gap-2.5 p-2.5 bg-black/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all">
                                    <ShoppingCart size={14} /> E-commerce
                                </button>
                                <button onClick={() => runAnalysis('funnel')} className="flex items-center gap-2.5 p-2.5 bg-black/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all">
                                    <Target size={14} /> {t('Conversion funnel', 'Funnel conversión')}
                                </button>
                                <button onClick={() => runAnalysis('risk')} className="flex items-center gap-2.5 p-2.5 bg-black/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all">
                                    <ShieldAlert size={14} /> {t('Risk and Variance', 'Riesgo y Varianza')}
                                </button>
                                <button onClick={() => runAnalysis('traffic-ia')} className="flex items-center gap-2.5 p-2.5 bg-black/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all text-[#F54963]">
                                    <Zap size={14} /> {t('High Intent Traffic', 'Tráfico de alta intención')}
                                </button>
                                <button onClick={() => runAnalysis('url-performance')} className="flex items-center gap-2.5 p-2.5 bg-black/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all">
                                    <Activity size={14} /> {t('AI URL Performance', 'Rendimiento URLs IA')}
                                </button>
                                <button onClick={() => runAnalysis('audit')} className="flex items-center gap-2.5 p-2.5 bg-black/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all">
                                    <Settings size={14} /> {t('Audit Config', 'Auditar Configuración')}
                                </button>
                                <button onClick={() => runAnalysis('deep-dive')} className="flex items-center gap-2.5 p-2.5 bg-black/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all">
                                    <PieChart size={14} /> {t('Full Deep Dive', 'Deep Dive Completo')}
                                </button>
                            </div>
                        </div>

                        {/* KEY METRICS */}
                        <div className="space-y-3 pt-4 border-t border-[rgb(var(--border-color))]">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('Key Metrics', 'Métricas Clave')}</h3>
                            <div className="space-y-2">
                                <div className="bg-black/5 rounded-2xl p-4 border border-black/5">
                                    <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">{t('Active users', 'Usuarios activos')}</div>
                                    <div className="text-xl font-black italic text-[rgb(var(--foreground-rgb))]">
                                        {isNaN(Number(metrics.activeUsers)) ? metrics.activeUsers : Number(metrics.activeUsers).toLocaleString()}
                                    </div>
                                </div>
                                <div className="bg-black/5 rounded-2xl p-4 border border-black/5">
                                    <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">{t('Sessions', 'Sesiones')}</div>
                                    <div className="text-xl font-black italic text-[rgb(var(--foreground-rgb))]">
                                        {isNaN(Number(metrics.sessions)) ? metrics.sessions : Number(metrics.sessions).toLocaleString()}
                                    </div>
                                </div>
                                <div className="bg-black/5 rounded-2xl p-4 border border-black/5">
                                    <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">{t('Conversions', 'Conversiones')}</div>
                                    <div className="text-xl font-black italic text-[#F54963]">
                                        {isNaN(Number(metrics.conversions)) ? metrics.conversions : Number(metrics.conversions).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-[rgb(var(--border-color))]">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Local Mode</h3>
                            <label className="flex items-center gap-3 p-3 bg-black/5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#F54963]/10 hover:text-[#F54963] transition-all cursor-pointer">
                                <FileUp size={14} /> Upload CSV/XLS
                                <input 
                                    ref={fileInputRef}
                                    type="file" 
                                    className="hidden" 
                                    onChange={handleFileUpload} 
                                    accept=".csv,.xlsx,.xls" 
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 h-full relative bg-black/5">
                {/* Header Tabs */}
                <div className="h-16 border-b border-[rgb(var(--border-color))] flex items-center px-8 bg-[rgb(var(--card-bg))] justify-between">
                    <div className="flex gap-8 h-full">
                        <button 
                            onClick={() => setTab('chat')}
                            className={`h-full flex items-center gap-2 border-b-2 font-black uppercase tracking-widest text-xs transition-all ${
                                tab === 'chat' ? 'border-[#F54963] text-[#F54963]' : 'border-transparent text-gray-400 hover:text-black'
                            }`}
                        >
                            <MessageSquare size={16} /> Chat Assistant
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Data Source Selector */}
                        <div className="flex items-center gap-2 bg-black/5 rounded-xl px-3 py-1.5 border border-[rgb(var(--border-color))] hover:bg-black/10 transition-all cursor-pointer group">
                            <Database size={14} className="text-[#F54963]" />
                            <select 
                                value={selectedConnectionId || (selectedProperty?.startsWith('local:') ? 'local' : '')}
                                onChange={(e) => {
                                    if (e.target.value === 'local') {
                                        fileInputRef.current?.click();
                                    } else {
                                        setSelectedConnectionId(e.target.value);
                                    }
                                }}
                                className="bg-transparent border-none text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer text-gray-600 group-hover:text-black"
                            >
                                <option value="" disabled>{t('Select Data Source', 'Origen de Datos')}</option>
                                {userConnections.map(conn => (
                                    <option key={conn.connection_id} value={conn.connection_id}>
                                        {conn.platform === 'ADOBE_ANALYTICS' ? 'Adobe Analytics' : 'Google Analytics 4'} - {conn.display_name}
                                    </option>
                                ))}
                                <option value="local">📁 {t('Local File (CSV/Excel)', 'Archivo Local (CSV/Excel)')}</option>
                            </select>
                        </div>

                        {loading && <RefreshCw size={16} className="animate-spin text-[#F54963]" />}
                        {error && (
                            <div className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-600 rounded-lg text-[10px] font-bold">
                                <AlertCircle size={14} /> {error}
                                <button onClick={() => setError(null)} className="ml-1 hover:brightness-90">✕</button>
                            </div>
                        )}
                        {selectedProperty && (
                            <div className="flex items-center gap-3 px-4 py-1.5 bg-[#F54963]/10 text-[#F54963] rounded-full border border-[#F54963]/20">
                                <BarChart size={12} />
                                <span className="text-[9px] font-black uppercase tracking-widest">
                                    {properties.find(p => p.property_id === selectedProperty)?.display_name || selectedProperty}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                        {messages.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center opacity-20">
                                <Sparkles size={64} className="mb-4 text-[#F54963]" />
                                <p className="text-xl font-black uppercase tracking-[0.2em]">How can I help you analyze your data?</p>
                            </div>
                        )}
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                                <div className={`max-w-3xl p-5 rounded-2xl shadow-sm ${
                                    msg.role === 'user' ? 'bg-[#F54963] text-white' : 'bg-[rgb(var(--card-bg))] border border-[rgb(var(--border-color))] text-[rgb(var(--foreground))]'
                                }`}>
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">{msg.content}</p>
                                    {renderData(msg.data)}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="bg-[rgb(var(--card-bg))] p-4 rounded-2xl border border-[rgb(var(--border-color))] flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#F54963] rounded-full animate-bounce" />
                                    <div className="w-2 h-2 bg-[#F54963] rounded-full animate-bounce [animation-delay:0.2s]" />
                                    <div className="w-2 h-2 bg-[#F54963] rounded-full animate-bounce [animation-delay:0.4s]" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-6 bg-[rgb(var(--card-bg))] border-t border-[rgb(var(--border-color))]">
                        <div className="max-w-4xl mx-auto relative flex items-center">
                            <input 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Ask a question about your GA4/Adobe data..."
                                className="w-full bg-black/5 border border-[rgb(var(--border-color))] rounded-2xl py-4 pl-8 pr-20 text-sm focus:ring-2 ring-[#F54963]/20 outline-none transition-all font-medium"
                                disabled={loading}
                            />
                            <button 
                                onClick={handleSendMessage}
                                disabled={loading || !input.trim()}
                                className="absolute right-4 p-2.5 bg-[#F54963] text-white rounded-xl hover:scale-105 transition-all shadow-lg disabled:opacity-50"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                        <div className="max-w-4xl mx-auto mt-2 flex gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                            <span className="flex items-center gap-1"><Info size={10} /> Try: "How many users did we have last week?"</span>
                            <span className="flex items-center gap-1"><Info size={10} /> Try: "Compare mobile vs desktop conversion rate"</span>
                        </div>
                    </div>
                </div>
            </main>

            {activeDashboard && (
                <AnalysisDashboard 
                    type={activeDashboard.type} 
                    data={activeDashboard.data} 
                    onClose={() => setActiveDashboard(null)} 
                    language={language}
                />
            )}
        </div>
    );
}
