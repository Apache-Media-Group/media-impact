// frontend/src/components/admin/CredentialModal.tsx
import React, { useState, useEffect } from 'react';
import { Key, RefreshCw, Save, CheckSquare } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { secureFetch } from '../../services/apiClient';

interface CredentialModalProps {
  isOpen: boolean;
  onClose: () => void;
  tenantId: string | null;
  onSaveSuccess: (message: string) => void;
  onSaveError: (error: string) => void;
}

export const CredentialModal: React.FC<CredentialModalProps> = ({
  isOpen,
  onClose,
  tenantId,
  onSaveSuccess,
  onSaveError,
}) => {
  const [secretType, setSecretType] = useState('brandlight-key');
  const [secretValue, setSecretValue] = useState('');
  const [saving, setSaving] = useState(false);
  const [redeploying, setRedeploying] = useState(false);

  // Estados de Adobe Analytics
  const [adobeClientId, setAdobeClientId] = useState('');
  const [adobeClientSecret, setAdobeClientSecret] = useState('');
  const [adobeOrgId, setAdobeOrgId] = useState('');
  const [adobeCompaniesList, setAdobeCompaniesList] = useState<any[]>([]);
  const [adobeSuitesList, setAdobeSuitesList] = useState<any[]>([]);
  const [validatingAdobe, setValidatingAdobe] = useState(false);
  const [selectedAdobeCompany, setSelectedAdobeCompany] = useState('');
  const [selectedAdobeSuite, setSelectedAdobeSuite] = useState('');

  // Estados de GA4 (Nueva arquitectura multichoice)
  const [selectedGa4Connection, setSelectedGa4Connection] = useState('');
  const [ga4PropertiesList, setGa4PropertiesList] = useState<any[]>([]);
  const [loadingGa4Properties, setLoadingGa4Properties] = useState(false);
  const [selectedGa4Properties, setSelectedGa4Properties] = useState<string[]>([]);

  // Estados de GA4 (OAuth Tradicional)
  const [ga4OauthAccountsList, setGa4OauthAccountsList] = useState<any[]>([]);
  const [ga4OauthPropertiesList, setGa4OauthPropertiesList] = useState<any[]>([]);
  const [validatingGa4Oauth, setValidatingGa4Oauth] = useState(false);
  const [selectedGa4OauthAccount, setSelectedGa4OauthAccount] = useState('');
  const [selectedGa4OauthProperty, setSelectedGa4OauthProperty] = useState('');

  // Fetch Conexiones Globales de GA4
  const { data: ga4Connections = [] } = useQuery({
    queryKey: ['ga4Connections'],
    queryFn: async () => {
      const res = await secureFetch('/api/v1/mcp-analytics/connections/ga4');
      if (!res.ok) return [];
      return res.json();
    },
    enabled: isOpen && secretType === 'ga4-creds'
  });

  // Fetch Propiedades cuando se selecciona una conexión
  useEffect(() => {
    if (selectedGa4Connection) {
      const fetchProperties = async () => {
        setLoadingGa4Properties(true);
        try {
          const res = await secureFetch(`/api/v1/mcp-analytics/connections/ga4/${selectedGa4Connection}/properties`);
          if (res.ok) {
            const data = await res.json();
            // Flatten accounts and properties
            const props: any[] = [];
            if (data.accounts) {
              data.accounts.forEach((acc: any) => {
                if (acc.properties) {
                  acc.properties.forEach((p: any) => {
                    props.push({ ...p, account_name: acc.account_name });
                  });
                }
              });
            }
            setGa4PropertiesList(props);
          }
        } catch (err) {
          console.error('Error fetching GA4 properties:', err);
        } finally {
          setLoadingGa4Properties(false);
        }
      };
      fetchProperties();
    } else {
      setGa4PropertiesList([]);
    }
  }, [selectedGa4Connection]);

  // Resetear estados cuando cambia el tenant o se abre el modal
  useEffect(() => {
    if (isOpen) {
      setSecretType('brandlight-key');
      setSecretValue('');
      setAdobeClientId('');
      setAdobeClientSecret('');
      setAdobeOrgId('');
      setAdobeCompaniesList([]);
      setAdobeSuitesList([]);
      setSelectedAdobeCompany('');
      setSelectedAdobeSuite('');
      
      setSelectedGa4Connection('');
      setGa4PropertiesList([]);
      setSelectedGa4Properties([]);
      
      setGa4OauthAccountsList([]);
      setGa4OauthPropertiesList([]);
      setSelectedGa4OauthAccount('');
      setSelectedGa4OauthProperty('');
      
      setRedeploying(false);
      setSaving(false);
    }
  }, [isOpen, tenantId]);

  if (!isOpen || !tenantId) return null;

  const handleToggleGa4Property = (propertyId: string) => {
    setSelectedGa4Properties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId) 
        : [...prev, propertyId]
    );
  };

  const handleValidateGa4OauthCredentials = async () => {
    if (!secretValue) {
      alert("Por favor pega el JSON de credenciales OAuth de Google para validar.");
      return;
    }
    
    try {
      setValidatingGa4Oauth(true);
      const res = await secureFetch(`/api/v1/mcp-analytics/admin/tenants/validate-ga4-credentials`, {
        method: 'POST',
        body: JSON.stringify({
          credentials_json: secretValue.trim()
        })
      });
      
      if (res.ok) {
        const data = await res.json();
        setGa4OauthAccountsList(data.accounts || []);
        setGa4OauthPropertiesList(data.properties || []);
        
        if (data.accounts && data.accounts.length > 0) {
          setSelectedGa4OauthAccount(data.accounts[0].id);
        }
        if (data.properties && data.properties.length > 0) {
          setSelectedGa4OauthProperty(data.properties[0].id);
        }
        
        alert(`Credenciales de Google validadas con éxito. Se encontraron ${data.accounts?.length || 0} cuentas y ${data.properties?.length || 0} propiedades de GA4.`);
      } else {
        const err = await res.json();
        throw new Error(err.detail || "Fallo en la autenticación con Google Analytics API.");
      }
    } catch (err: any) {
      alert(err.message || 'Error al conectar con el servicio de validación de Google');
    } finally {
      setValidatingGa4Oauth(false);
    }
  };

  const handleGa4OauthAccountChange = async (accountId: string) => {
    setSelectedGa4OauthAccount(accountId);
    setSelectedGa4OauthProperty('');
    setGa4OauthPropertiesList([]);
    
    try {
      setValidatingGa4Oauth(true);
      const res = await secureFetch(`/api/v1/mcp-analytics/admin/tenants/validate-ga4-properties?credentials_json=${encodeURIComponent(secretValue.trim())}&account_id=${encodeURIComponent(accountId)}`);
      
      if (res.ok) {
        const data = await res.json();
        setGa4OauthPropertiesList(data.properties || []);
        if (data.properties && data.properties.length > 0) {
          setSelectedGa4OauthProperty(data.properties[0].id);
        }
      }
    } catch (err: any) {
      console.error("Error loading properties for GA4 account:", err);
    } finally {
      setValidatingGa4Oauth(false);
    }
  };

  const handleValidateAdobeCredentials = async () => {
    if (!adobeClientId || !adobeClientSecret || !adobeOrgId) {
      alert("Por favor completa los tres campos de Adobe para validar.");
      return;
    }
    
    try {
      setValidatingAdobe(true);
      const res = await secureFetch(`/api/v1/mcp-analytics/admin/tenants/validate-adobe-credentials`, {
        method: 'POST',
        body: JSON.stringify({
          client_id: adobeClientId.trim(),
          client_secret: adobeClientSecret.trim(),
          org_id: adobeOrgId.trim()
        })
      });
      
      if (res.ok) {
        const data = await res.json();
        setAdobeCompaniesList(data.companies || []);
        setAdobeSuitesList(data.suites || []);
        
        if (data.companies && data.companies.length > 0) {
          setSelectedAdobeCompany(data.companies[0].id);
        }
        if (data.suites && data.suites.length > 0) {
          setSelectedAdobeSuite(data.suites[0].id);
        }
        
        alert(`Credenciales de Adobe validadas con éxito. Se encontraron ${data.companies?.length || 0} compañías y ${data.suites?.length || 0} report suites.`);
      } else {
        const err = await res.json();
        throw new Error(err.detail || "Fallo en la autenticación con Adobe Discovery API.");
      }
    } catch (err: any) {
      alert(err.message || 'Error al conectar con el servicio de validación de Adobe');
    } finally {
      setValidatingAdobe(false);
    }
  };

  const handleAdobeCompanyChange = async (companyId: string) => {
    setSelectedAdobeCompany(companyId);
    setSelectedAdobeSuite('');
    setAdobeSuitesList([]);
    
    try {
      setValidatingAdobe(true);
      const res = await secureFetch(`/api/v1/mcp-analytics/admin/tenants/validate-adobe-properties?client_id=${encodeURIComponent(adobeClientId.trim())}&client_secret=${encodeURIComponent(adobeClientSecret.trim())}&org_id=${encodeURIComponent(adobeOrgId.trim())}&company_id=${encodeURIComponent(companyId)}`);
      
      if (res.ok) {
        const data = await res.json();
        const suites = data.suites || [];
        setAdobeSuitesList(suites);
        if (suites.length > 0) {
          const firstSuite = suites[0].id;
          setSelectedAdobeSuite(firstSuite);
        }
      }
    } catch (err: any) {
      console.error("Error loading properties for company:", err);
    } finally {
      setValidatingAdobe(false);
    }
  };

  const handleRedeployEtl = async () => {
    try {
      setRedeploying(true);
      const res = await secureFetch(`/api/v1/mcp-analytics/admin/tenants/${tenantId}/redeploy-etl`, {
        method: 'POST'
      });
      
      if (res.ok) {
        const data = await res.json();
        alert(data.message || 'Infraestructura ETL re-desplegada con éxito. Se re-creó el Cloud Scheduler y se encoló el backfill histórico.');
      } else {
        throw new Error("Error al re-desplegar la infraestructura ETL");
      }
    } catch (err: any) {
      alert(err.message || 'Error al re-desplegar la ETL');
    } finally {
      setRedeploying(false);
    }
  };

  const handleSaveSecret = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setSaving(true);
      
      if (secretType === 'ga4-creds') {
        if (!selectedGa4Connection || selectedGa4Properties.length === 0) {
          alert("Debes seleccionar una conexión global y al menos una propiedad de GA4.");
          return;
        }
        const res = await secureFetch(`/api/v1/mcp-analytics/admin/tenants/${tenantId}/ga4-config`, {
          method: 'POST',
          body: JSON.stringify({
            connection_id: selectedGa4Connection,
            properties: selectedGa4Properties
          })
        });
        if (res.ok) {
          onSaveSuccess(`Configuración multicuenta de GA4 guardada con éxito para '${tenantId}'.`);
          onClose();
        } else {
          throw new Error("Error al guardar la configuración de GA4");
        }
      } else {
        // Lógica original de secretos
        let finalSecretValue = secretValue;
        if (secretType === 'adobe-creds') {
          finalSecretValue = JSON.stringify({
            client_id: adobeClientId.trim(),
            client_secret: adobeClientSecret.trim(),
            org_id: adobeOrgId.trim(),
            company_id: selectedAdobeCompany || undefined,
            property_id: selectedAdobeSuite || undefined
          });
        } else if (secretType === 'ga4-oauth' && selectedGa4OauthProperty) {
          try {
            const parsed = JSON.parse(secretValue.trim());
            parsed.account_id = selectedGa4OauthAccount;
            parsed.property_id = selectedGa4OauthProperty;
            finalSecretValue = JSON.stringify(parsed);
          } catch (err) {
            console.warn("Pasted secret is not valid JSON, keeping as is:", err);
          }
        }
        if (!finalSecretValue) {
          alert("Por favor completa los campos de credenciales.");
          return;
        }
        const res = await secureFetch(`/api/v1/mcp-analytics/admin/tenants/${tenantId}/secrets`, {
          method: 'POST',
          body: JSON.stringify({ secret_type: secretType, secret_value: finalSecretValue })
        });
        if (res.ok) {
          onSaveSuccess(`Secreto '${secretType}' guardado y encriptado con éxito en GCP Secret Manager para el cliente '${tenantId}'.`);
          onClose();
        } else {
          throw new Error("Error al persistir el secreto en GCP Secret Manager");
        }
      }
    } catch (err: any) {
      onSaveError(err.message || 'Error de ciberseguridad al guardar el secreto');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-navy/80 backdrop-blur-sm flex items-center justify-center p-5 z-[1000]">
      <div className="bg-[#0b1b3d]/90 border border-white/10 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-white/10 bg-white/[0.02] flex items-center gap-2">
          <Key className="w-5 h-5 text-amber-400" />
          <h3 className="font-black text-sm uppercase tracking-widest text-amber-400">
            Administrar Credenciales de Ciberseguridad (GCP)
          </h3>
        </div>
        
        <form onSubmit={handleSaveSecret} className="p-6 space-y-4 overflow-y-auto custom-scrollbar flex-1">
          <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 text-[11px] text-amber-300/80 leading-relaxed">
            🛡️ **Seguridad Compliance**: Estas llaves serán guardadas y encriptadas de forma transparente y directa en **GCP Secret Manager** de producción. Nunca se almacenarán en bases de datos relacionales estándar en texto plano.
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1">Cliente Objetivo</label>
            <input 
              type="text" 
              value={tenantId.toUpperCase()} 
              disabled 
              className="w-full bg-white/5 border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white/50 font-bold uppercase"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1">Tipo de Servicio Analítico</label>
            <select 
              value={secretType}
              onChange={(e) => setSecretType(e.target.value)}
              className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-red"
            >
              <option value="brandlight-key">Brandlight BI API Key (Visibilidad / SoV)</option>
              <option value="peec-key">Peec.ai API Token (Comportamiento de IA)</option>
              <option value="ga4-creds">GA4 Service Account JSON (Opción Recomendada)</option>
              <option value="ga4-oauth">GA4 Usuario OAuth (Necesita renovación periódica)</option>
              <option value="adobe-creds">Adobe Analytics API Credentials (3 Campos)</option>
            </select>
          </div>

          {secretType === 'adobe-creds' ? (
            <div className="space-y-4 border-l-2 border-red pl-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1">Adobe Client ID (API Key)</label>
                <input 
                  type="text" 
                  value={adobeClientId}
                  onChange={(e) => setAdobeClientId(e.target.value)}
                  placeholder="ej: e6c7619213194a289f81f18..."
                  required
                  className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-red"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1">Adobe Client Secret</label>
                <input 
                  type="password" 
                  value={adobeClientSecret}
                  onChange={(e) => setAdobeClientSecret(e.target.value)}
                  placeholder="Pega aquí el Client Secret de Adobe..."
                  required
                  className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-red"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1">Adobe Organization ID (IMS Org ID)</label>
                <input 
                  type="text" 
                  value={adobeOrgId}
                  onChange={(e) => setAdobeOrgId(e.target.value)}
                  placeholder="ej: 12345ABCDE@AdobeOrg"
                  required
                  className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-red"
                />
              </div>
              
              {/* Botón para validar en caliente */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleValidateAdobeCredentials}
                  disabled={validatingAdobe || !adobeClientId || !adobeClientSecret || !adobeOrgId}
                  className="px-4 py-2 bg-gradient-to-r from-red to-[#b91c1c] text-white hover:from-[#b91c1c] hover:to-[#991b1b] rounded-lg text-[10px] font-black uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${validatingAdobe ? 'animate-spin' : ''}`} />
                  {validatingAdobe ? 'Validando...' : '🔍 Validar y Cargar Compañías de Adobe'}
                </button>
              </div>
              
              {/* Selectores de Compañías y Report Suites de Adobe */}
              {adobeCompaniesList.length > 0 && (
                <div className="space-y-4 pt-3 border-t border-white/5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1 text-teal">Compañía Seleccionada</label>
                    <select 
                      value={selectedAdobeCompany}
                      onChange={(e) => handleAdobeCompanyChange(e.target.value)}
                      className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-red font-bold"
                    >
                      {adobeCompaniesList.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  {adobeSuitesList.length > 0 && (
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1 text-red">Report Suite (Propiedad para ETL)</label>
                      <select 
                        value={selectedAdobeSuite}
                        onChange={(e) => setSelectedAdobeSuite(e.target.value)}
                        className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-red font-bold"
                      >
                        {adobeSuitesList.map(s => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : secretType === 'ga4-creds' ? (
            <div className="space-y-4 border-l-2 border-teal pl-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1 text-teal">Conexión Global de GA4 (Vault)</label>
                <select 
                  value={selectedGa4Connection}
                  onChange={(e) => setSelectedGa4Connection(e.target.value)}
                  className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-red font-bold"
                >
                  <option value="" disabled>Selecciona una conexión...</option>
                  {ga4Connections.map((conn: any) => (
                    <option key={conn.id} value={conn.id}>{conn.name} ({conn.client_email})</option>
                  ))}
                </select>
              </div>
              
              {loadingGa4Properties ? (
                <div className="flex items-center gap-2 text-mid text-xs">
                  <RefreshCw className="w-4 h-4 animate-spin" /> Cargando propiedades...
                </div>
              ) : ga4PropertiesList.length > 0 ? (
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-2 text-red">Propiedades GA4 (Selección Múltiple)</label>
                  <div className="bg-[#0a1829] border border-white/10 rounded-lg max-h-60 overflow-y-auto custom-scrollbar">
                    {ga4PropertiesList.map(p => (
                      <div 
                        key={p.property_id} 
                        className={`flex items-center gap-3 p-3 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors ${selectedGa4Properties.includes(p.property_id) ? 'bg-red/5' : ''}`}
                        onClick={() => handleToggleGa4Property(p.property_id)}
                      >
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${selectedGa4Properties.includes(p.property_id) ? 'bg-red border-red text-white' : 'border-white/20'}`}>
                          {selectedGa4Properties.includes(p.property_id) && <CheckSquare className="w-3 h-3" />}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">{p.property_name}</p>
                          <p className="text-[10px] text-mid">{p.account_name} &bull; {p.property_id}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : selectedGa4Connection ? (
                <p className="text-xs text-red-400">No se encontraron propiedades accesibles para esta conexión.</p>
              ) : null}
            </div>
          ) : (
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1">Valor de la Llave Secreta (API Key / Token / JSON de OAuth)</label>
              <textarea 
                value={secretValue}
                onChange={(e) => setSecretValue(e.target.value)}
                placeholder={secretType === 'ga4-oauth' ? "Pega aquí el JSON del Refresh Token OAuth de Google Analytics..." : "Pega aquí la clave secreta obtenida del proveedor analítico..."}
                required={secretType !== 'ga4-creds'}
                rows={4}
                className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-red resize-none"
              />
              
              {secretType === 'ga4-oauth' && (
                <div className="space-y-4 mt-4 border-l-2 border-teal pl-4">
                  {/* Botón para validar GA4 OAuth */}
                  <button
                    type="button"
                    onClick={handleValidateGa4OauthCredentials}
                    disabled={validatingGa4Oauth || !secretValue}
                    className="px-4 py-2 bg-gradient-to-r from-teal to-[#0d9488] text-navy hover:from-[#0d9488] hover:to-[#0f766e] rounded-lg text-[10px] font-black uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${validatingGa4Oauth ? 'animate-spin' : ''}`} />
                    {validatingGa4Oauth ? 'Validando...' : '🔍 Validar y Cargar Propiedades de Google'}
                  </button>
                  
                  {/* Dropdowns de Cuentas y Propiedades de GA4 OAuth */}
                  {ga4OauthAccountsList.length > 0 && (
                    <div className="space-y-4 pt-3 border-t border-white/5">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1 text-teal">Cuenta Google Seleccionada</label>
                        <select 
                          value={selectedGa4OauthAccount}
                          onChange={(e) => handleGa4OauthAccountChange(e.target.value)}
                          className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-red font-bold"
                        >
                          {ga4OauthAccountsList.map(a => (
                            <option key={a.id} value={a.id}>{a.name}</option>
                          ))}
                        </select>
                      </div>
                      
                      {ga4OauthPropertiesList.length > 0 && (
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1 text-red">Propiedad GA4 (Para ETL)</label>
                          <select 
                            value={selectedGa4OauthProperty}
                            onChange={(e) => setSelectedGa4OauthProperty(e.target.value)}
                            className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-red font-bold text-red"
                          >
                            {ga4OauthPropertiesList.map(p => (
                              <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Sección de Automatización ETL y Scheduler */}
          <div className="bg-white/5 border border-white/5 p-4 rounded-xl space-y-3 mt-4">
            <div className="flex items-start gap-2.5">
              <RefreshCw className={`w-4 h-4 text-amber-400 mt-0.5 ${redeploying ? 'animate-spin' : ''}`} />
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">Estado de Automatización (Daily ETL & Backfill)</h4>
                <p className="text-[9px] text-mid leading-relaxed mt-1">
                  Si el Cloud Scheduler diario o el backfill de 90 días no se configuraron debido a un fallo inicial, puedes forzar su re-despliegue manual e inmediato.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleRedeployEtl}
              disabled={redeploying || saving}
              className="w-full py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 hover:from-amber-500/20 hover:to-amber-600/20 text-amber-400 hover:text-white border border-amber-500/20 disabled:opacity-50 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1.5"
            >
              <RefreshCw className={`w-3 h-3 ${redeploying ? 'animate-spin' : ''}`} />
              {redeploying ? 'Re-desplegando...' : 'Forzar Re-despliegue de Scheduler & Backfill'}
            </button>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button 
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold transition-colors"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              disabled={saving}
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-navy rounded-lg text-xs font-black uppercase tracking-wider transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" /> {saving ? 'Cifrando...' : 'Encriptar y Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
