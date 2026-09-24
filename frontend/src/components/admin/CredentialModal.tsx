// frontend/src/components/admin/CredentialModal.tsx
import React, { useState, useEffect } from 'react';
import { Key, RefreshCw, Save } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { secureFetch } from '../../services/apiClient';
import { AdobeCredentialForm } from './credentials/AdobeCredentialForm';
import { PeecCredentialForm } from './credentials/PeecCredentialForm';
import { BrandlightCredentialForm } from './credentials/BrandlightCredentialForm';
import { GA4CredentialForm } from './credentials/GA4CredentialForm';

interface CredentialModalProps {
  isOpen: boolean;
  onClose: () => void;
  tenantId: string | null;
  configuredSecrets?: Record<string, boolean>;
  forceEditMode?: boolean;
  onSaveSuccess: (message: string) => void;
  onSaveError: (error: string) => void;
}

export const CredentialModal: React.FC<CredentialModalProps> = ({
  isOpen,
  onClose,
  tenantId,
  configuredSecrets = {},
  forceEditMode = false,
  onSaveSuccess,
  onSaveError,
}) => {
  const [secretType, setSecretType] = useState('brandlight-key');
  const [secretValue, setSecretValue] = useState('');
  const [saving, setSaving] = useState(false);
  const [redeploying, setRedeploying] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  // Adobe Analytics states
  const [adobeClientId, setAdobeClientId] = useState('');
  const [adobeClientSecret, setAdobeClientSecret] = useState('');
  const [adobeOrgId, setAdobeOrgId] = useState('');
  const [adobeCompaniesList, setAdobeCompaniesList] = useState<any[]>([]);
  const [adobeSuitesList, setAdobeSuitesList] = useState<any[]>([]);
  const [validatingAdobe, setValidatingAdobe] = useState(false);
  const [selectedAdobeCompany, setSelectedAdobeCompany] = useState('');
  const [selectedAdobeSuite, setSelectedAdobeSuite] = useState('');

  // Peec.ai states
  const [peecProjectsList, setPeecProjectsList] = useState<any[]>([]);
  const [validatingPeec, setValidatingPeec] = useState(false);
  const [selectedPeecProject, setSelectedPeecProject] = useState('');

  // Brandlight states
  const [brandlightBrandName, setBrandlightBrandName] = useState('');
  const [brandlightBrandsList, setBrandlightBrandsList] = useState<any[]>([]);
  const [validatingBrandlight, setValidatingBrandlight] = useState(false);

  // GA4 Global Vault states
  const [selectedGa4Connection, setSelectedGa4Connection] = useState('');
  const [ga4PropertiesList, setGa4PropertiesList] = useState<any[]>([]);
  const [loadingGa4Properties, setLoadingGa4Properties] = useState(false);
  const [selectedGa4Properties, setSelectedGa4Properties] = useState<string[]>([]);

  // GA4 OAuth states
  const [ga4OauthAccountsList, setGa4OauthAccountsList] = useState<any[]>([]);
  const [ga4OauthPropertiesList, setGa4OauthPropertiesList] = useState<any[]>([]);
  const [validatingGa4Oauth, setValidatingGa4Oauth] = useState(false);
  const [selectedGa4OauthAccount, setSelectedGa4OauthAccount] = useState('');
  const [selectedGa4OauthProperty, setSelectedGa4OauthProperty] = useState('');

  // Global GA4 connections query
  const { data: ga4Connections = [] } = useQuery({
    queryKey: ['ga4Connections'],
    queryFn: async () => {
      const res = await secureFetch('/api/v1/mcp-analytics/connections/ga4');
      if (!res.ok) return [];
      return res.json();
    },
    enabled: isOpen && secretType === 'ga4-creds',
  });

  // Fetch GA4 Properties for selected global connection
  useEffect(() => {
    if (selectedGa4Connection) {
      const fetchProperties = async () => {
        setLoadingGa4Properties(true);
        try {
          const res = await secureFetch(
            `/api/v1/mcp-analytics/connections/ga4/${selectedGa4Connection}/properties`
          );
          if (res.ok) {
            const data = await res.json();
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

  // Reset modal state on open
  useEffect(() => {
    if (isOpen) {
      const available = ['brandlight-key', 'peec-key', 'ga4-creds', 'ga4-oauth', 'adobe-creds'];
      const firstOption =
        available.find((k) => (forceEditMode ? configuredSecrets[k] : !configuredSecrets[k])) ||
        available[0];

      setSecretType(firstOption);
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

      setPeecProjectsList([]);
      setSelectedPeecProject('');

      setBrandlightBrandName('');
      setBrandlightBrandsList([]);

      setRedeploying(false);
      setSaving(false);
      setIsEditMode(false);
    }
  }, [isOpen, tenantId, forceEditMode, configuredSecrets]);

  useEffect(() => {
    if (forceEditMode && configuredSecrets[secretType]) {
      handleEditConfig();
    } else {
      setIsEditMode(false);
      setSecretValue('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secretType]);

  if (!isOpen || !tenantId) return null;

  const handleToggleGa4Property = (propertyId: string) => {
    setSelectedGa4Properties((prev) =>
      prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]
    );
  };

  const handleValidateGa4OauthCredentials = async () => {
    if (!secretValue) {
      alert('Por favor pega el JSON de credenciales OAuth de Google para validar.');
      return;
    }
    try {
      setValidatingGa4Oauth(true);
      const res = await secureFetch(`/api/v1/mcp-analytics/admin/tenants/validate-ga4-credentials`, {
        method: 'POST',
        body: JSON.stringify({ credentials_json: secretValue.trim() }),
      });
      if (res.ok) {
        const data = await res.json();
        setGa4OauthAccountsList(data.accounts || []);
        setGa4OauthPropertiesList(data.properties || []);
        if (data.accounts?.length) setSelectedGa4OauthAccount(data.accounts[0].id);
        if (data.properties?.length) setSelectedGa4OauthProperty(data.properties[0].id);
        alert(
          `Credenciales de Google validadas con éxito. Se encontraron ${data.accounts?.length || 0} cuentas y ${data.properties?.length || 0} propiedades de GA4.`
        );
      } else {
        const err = await res.json();
        throw new Error(err.detail || 'Fallo en la autenticación con Google Analytics API.');
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
      const res = await secureFetch(
        `/api/v1/mcp-analytics/admin/tenants/validate-ga4-properties?credentials_json=${encodeURIComponent(
          secretValue.trim()
        )}&account_id=${encodeURIComponent(accountId)}`
      );
      if (res.ok) {
        const data = await res.json();
        const props = data.properties || [];
        setGa4OauthPropertiesList(props);
        if (props.length) setSelectedGa4OauthProperty(props[0].id);
      }
    } catch (err) {
      console.error('Error loading properties for GA4 account:', err);
    } finally {
      setValidatingGa4Oauth(false);
    }
  };

  const handleValidateAdobeCredentials = async () => {
    if (!adobeClientId || !adobeClientSecret || !adobeOrgId) {
      alert('Por favor completa los tres campos de Adobe para validar.');
      return;
    }
    try {
      setValidatingAdobe(true);
      const res = await secureFetch(`/api/v1/mcp-analytics/admin/tenants/validate-adobe-credentials`, {
        method: 'POST',
        body: JSON.stringify({
          client_id: adobeClientId.trim(),
          client_secret: adobeClientSecret.trim(),
          org_id: adobeOrgId.trim(),
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setAdobeCompaniesList(data.companies || []);
        setAdobeSuitesList(data.suites || []);
        if (data.companies?.length) setSelectedAdobeCompany(data.companies[0].id);
        if (data.suites?.length) setSelectedAdobeSuite(data.suites[0].id);
        alert(
          `Credenciales de Adobe validadas con éxito. Se encontraron ${data.companies?.length || 0} compañías y ${data.suites?.length || 0} report suites.`
        );
      } else {
        const err = await res.json();
        throw new Error(err.detail || 'Fallo en la autenticación con Adobe Discovery API.');
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
      const res = await secureFetch(
        `/api/v1/mcp-analytics/admin/tenants/validate-adobe-properties?client_id=${encodeURIComponent(
          adobeClientId.trim()
        )}&client_secret=${encodeURIComponent(adobeClientSecret.trim())}&org_id=${encodeURIComponent(
          adobeOrgId.trim()
        )}&company_id=${encodeURIComponent(companyId)}`
      );
      if (res.ok) {
        const data = await res.json();
        const suites = data.suites || [];
        setAdobeSuitesList(suites);
        if (suites.length) setSelectedAdobeSuite(suites[0].id);
      }
    } catch (err) {
      console.error('Error loading properties for company:', err);
    } finally {
      setValidatingAdobe(false);
    }
  };

  const handleValidatePeecCredentials = async () => {
    if (!secretValue) {
      alert('Por favor ingresa el API Key de Peec.ai para validar.');
      return;
    }
    try {
      setValidatingPeec(true);
      const res = await secureFetch(
        `/api/v1/mcp-analytics/admin/tenants/validate-peec-projects?api_key=${encodeURIComponent(
          secretValue.trim()
        )}`
      );
      if (res.ok) {
        const data = await res.json();
        setPeecProjectsList(data.projects || []);
        if (data.projects?.length) setSelectedPeecProject(data.projects[0].id);
        alert(
          `API Key de Peec validadas con éxito. Se encontraron ${data.projects?.length || 0} proyectos.`
        );
      } else {
        const err = await res.json();
        throw new Error(err.detail || 'Fallo en la autenticación con Peec API.');
      }
    } catch (err: any) {
      alert(err.message || 'Error al conectar con el servicio de validación de Peec.ai');
    } finally {
      setValidatingPeec(false);
    }
  };

  const handleValidateBrandlightCredentials = async () => {
    if (!secretValue) {
      alert('Por favor ingresa el API Key de Brandlight para validar.');
      return;
    }
    try {
      setValidatingBrandlight(true);
      const res = await secureFetch(
        `/api/v1/mcp-analytics/admin/tenants/validate-brandlight-brands?api_key=${encodeURIComponent(
          secretValue.trim()
        )}`
      );
      if (res.ok) {
        const data = await res.json();
        setBrandlightBrandsList(data.brands || []);
        if (data.brands?.length) setBrandlightBrandName(data.brands[0].name);
        alert(`API Key de Brandlight validada. Se encontraron ${data.brands?.length || 0} marcas.`);
      } else {
        const err = await res.json();
        throw new Error(err.detail || 'Fallo en la autenticación con Brandlight API.');
      }
    } catch (err: any) {
      alert(err.message || 'Error al conectar con el servicio de validación de Brandlight');
    } finally {
      setValidatingBrandlight(false);
    }
  };

  const handleEditConfig = async () => {
    if (!tenantId) return;
    try {
      setSaving(true);
      const res = await secureFetch(
        `/api/v1/mcp-analytics/admin/tenants/${tenantId}/secrets/${secretType}/options`
      );
      if (res.ok) {
        const data = await res.json();
        const opts = data.options;
        const cur = data.current_selection;

        if (secretType === 'peec-key') {
          setPeecProjectsList(opts.projects || []);
          if (cur.project_id) setSelectedPeecProject(cur.project_id);
        } else if (secretType === 'brandlight-key') {
          setBrandlightBrandsList(opts.brands || []);
          if (cur.brandlight_brand_name) setBrandlightBrandName(cur.brandlight_brand_name);
        } else if (secretType === 'adobe-creds') {
          setAdobeCompaniesList(opts.companies || []);
          setAdobeSuitesList(opts.suites || []);
          if (cur.company_id) setSelectedAdobeCompany(cur.company_id);
          if (cur.property_id) setSelectedAdobeSuite(cur.property_id);
        } else if (secretType === 'ga4-creds' || secretType === 'ga4-oauth') {
          setGa4OauthAccountsList(opts.accounts || []);
          setGa4OauthPropertiesList(opts.properties || []);
          if (cur.account_id) setSelectedGa4OauthAccount(cur.account_id);
          if (cur.property_id) setSelectedGa4OauthProperty(cur.property_id);
        }
        setIsEditMode(true);
      } else {
        const err = await res.json();
        throw new Error(err.detail || 'Error al cargar opciones de configuración.');
      }
    } catch (err: any) {
      alert(err.message || 'Error al conectar con el backend para editar configuración');
    } finally {
      setSaving(false);
    }
  };

  const handleRedeployEtl = async () => {
    try {
      setRedeploying(true);
      const res = await secureFetch(`/api/v1/mcp-analytics/admin/tenants/${tenantId}/redeploy-etl`, {
        method: 'POST',
      });
      if (res.ok) {
        const data = await res.json();
        alert(
          data.message ||
            'Infraestructura ETL re-desplegada con éxito. Se re-creó el Cloud Scheduler y se encoló el backfill histórico.'
        );
      } else {
        throw new Error('Error al re-desplegar la infraestructura ETL');
      }
    } catch (err: any) {
      alert(err.message || 'Error al re-desplegar la ETL');
    } finally {
      setRedeploying(false);
    }
  };

  const [deletingTenant, setDeletingTenant] = useState(false);
  const [showDeleteTenantConfirm, setShowDeleteTenantConfirm] = useState(false);
  const [deleteTenantInput, setDeleteTenantInput] = useState('');

  const handleDeleteSecret = async () => {
    if (!tenantId) return;
    if (
      !window.confirm(
        `¿Estás seguro de que quieres borrar la llave secreta para ${secretType}? Esto podría romper los flujos ETL que dependan de ella.`
      )
    ) {
      return;
    }
    try {
      setSaving(true);
      const res = await secureFetch(
        `/api/v1/mcp-analytics/admin/tenants/${tenantId}/secrets/${secretType}`,
        { method: 'DELETE' }
      );
      if (res.ok) {
        onSaveSuccess(`Secreto '${secretType}' eliminado con éxito.`);
        onClose();
      } else {
        const err = await res.json();
        throw new Error(err.detail || 'Error al eliminar el secreto.');
      }
    } catch (err: any) {
      alert(err.message || 'Error al conectar con el backend para eliminar el secreto');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteTenant = async () => {
    if (!tenantId) return;
    if (deleteTenantInput.trim().toLowerCase() !== tenantId.trim().toLowerCase()) {
      alert(`El ID ingresado ('${deleteTenantInput}') no coincide con el ID del cliente ('${tenantId}').`);
      return;
    }

    try {
      setDeletingTenant(true);
      const res = await secureFetch(
        `/api/v1/mcp-analytics/admin/tenants/${tenantId}`,
        { method: 'DELETE' }
      );
      if (res.ok) {
        onSaveSuccess(`Cliente '${tenantId}' y todas sus conexiones fueron eliminados definitivamente.`);
        setShowDeleteTenantConfirm(false);
        onClose();
      } else {
        const err = await res.json();
        throw new Error(err.detail || 'Error al eliminar el cliente.');
      }
    } catch (err: any) {
      alert(err.message || 'Error al conectar con el servidor para eliminar el cliente.');
    } finally {
      setDeletingTenant(false);
    }
  };

  const handleSaveSecret = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSaving(true);

      if (isEditMode) {
        const updates: Record<string, any> = {};
        if (secretType === 'peec-key') updates.project_id = selectedPeecProject;
        else if (secretType === 'brandlight-key') updates.brandlight_brand_name = brandlightBrandName;
        else if (secretType === 'adobe-creds') {
          updates.company_id = selectedAdobeCompany;
          updates.property_id = selectedAdobeSuite;
        } else if (secretType === 'ga4-creds' || secretType === 'ga4-oauth') {
          updates.account_id = selectedGa4OauthAccount;
          updates.property_id = selectedGa4OauthProperty;
        }

        const res = await secureFetch(
          `/api/v1/mcp-analytics/admin/tenants/${tenantId}/secrets/${secretType}`,
          { method: 'PATCH', body: JSON.stringify(updates) }
        );

        if (res.ok) {
          onSaveSuccess(`Configuración del secreto '${secretType}' actualizada con éxito.`);
          onClose();
        } else {
          const err = await res.json();
          throw new Error(err.detail || 'Error al actualizar la configuración');
        }
        return;
      }

      if (secretType === 'ga4-creds') {
        if (!selectedGa4Connection || selectedGa4Properties.length === 0) {
          alert('Debes seleccionar una conexión global y al menos una propiedad de GA4.');
          return;
        }
        const res = await secureFetch(
          `/api/v1/mcp-analytics/admin/tenants/${tenantId}/ga4-config`,
          {
            method: 'POST',
            body: JSON.stringify({
              connection_id: selectedGa4Connection,
              properties: selectedGa4Properties,
            }),
          }
        );
        if (res.ok) {
          onSaveSuccess(
            `Propiedades GA4 (${selectedGa4Properties.length}) asociadas con éxito al tenant '${tenantId}'.`
          );
          onClose();
        } else {
          const err = await res.json();
          throw new Error(err.detail || 'Error al asociar propiedades de GA4.');
        }
        return;
      }

      let payload: Record<string, any> = {
        secret_type: secretType,
        secret_value: secretValue,
      };

      if (secretType === 'adobe-creds') {
        if (!selectedAdobeSuite) {
          alert('Debes validar y seleccionar un Report Suite de Adobe.');
          return;
        }
        payload = {
          secret_type: secretType,
          client_id: adobeClientId.trim(),
          client_secret: adobeClientSecret.trim(),
          org_id: adobeOrgId.trim(),
          company_id: selectedAdobeCompany,
          property_id: selectedAdobeSuite,
        };
      } else if (secretType === 'peec-key') {
        if (!selectedPeecProject) {
          alert('Debes validar y seleccionar un Proyecto de Peec.ai.');
          return;
        }
        payload = {
          secret_type: secretType,
          secret_value: secretValue.trim(),
          project_id: selectedPeecProject,
        };
      } else if (secretType === 'brandlight-key') {
        let formattedVal = secretValue.trim();
        try {
          JSON.parse(secretValue);
        } catch {
          formattedVal = JSON.stringify({
            api_key: secretValue.trim(),
            brandlight_brand_name: brandlightBrandName.trim()
          });
        }
        payload = {
          secret_type: secretType,
          secret_value: formattedVal,
        };
      } else if (secretType === 'ga4-oauth') {
        if (!selectedGa4OauthProperty) {
          alert('Debes validar y seleccionar una Propiedad de GA4.');
          return;
        }
        payload = {
          secret_type: secretType,
          secret_value: secretValue.trim(),
          account_id: selectedGa4OauthAccount,
          property_id: selectedGa4OauthProperty,
        };
      }

      const res = await secureFetch(
        `/api/v1/mcp-analytics/admin/tenants/${tenantId}/secrets`,
        { method: 'POST', body: JSON.stringify(payload) }
      );

      if (res.ok) {
        onSaveSuccess(`Llave secreta '${secretType}' guardada con éxito.`);
        onClose();
      } else {
        const err = await res.json();
        throw new Error(err.detail || 'Error al persistir el secreto en GCP Secret Manager');
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
            {forceEditMode ? "🔌 Gestionar Conexiones y Variables Operativas" : "Administrar Credenciales de Ciberseguridad (GCP)"}
          </h3>
        </div>

        <form onSubmit={handleSaveSecret} className="p-6 space-y-4 overflow-y-auto custom-scrollbar flex-1">
          <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 text-[11px] text-amber-300/80 leading-relaxed">
            🛡️ **Seguridad Compliance**: Las conexiones se gestionan de forma segura en **GCP Secret Manager**. Puedes modificar marcas, propiedades y suites sin exponer o alterar tus llaves.
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1">
              Cliente Objetivo
            </label>
            <input
              type="text"
              value={tenantId.toUpperCase()}
              disabled
              className="w-full bg-white/5 border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white/50 font-bold uppercase"
            />
          </div>

          <div className="space-y-1.5 flex justify-between items-end">
            <div className="w-full">
              <label className="text-xs font-bold uppercase tracking-widest text-mid block mb-1">
                {forceEditMode ? "Conexión Activa a Gestionar" : "¿Qué llave quieres agregar / configurar?"}
              </label>
              <select
                value={secretType}
                onChange={(e) => setSecretType(e.target.value)}
                className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 outline-none"
              >
                {!secretType && <option value="">¡Todas las llaves disponibles ya están configuradas!</option>}
                {(forceEditMode ? configuredSecrets['brandlight-key'] : !configuredSecrets['brandlight-key']) && (
                  <option value="brandlight-key">Clave API de Brandlight (Menciones)</option>
                )}
                {(forceEditMode ? configuredSecrets['peec-key'] : !configuredSecrets['peec-key']) && (
                  <option value="peec-key">Clave API de Peec.ai (Brand Intelligence)</option>
                )}
                {(forceEditMode ? configuredSecrets['ga4-creds'] : !configuredSecrets['ga4-creds']) && (
                  <option value="ga4-creds">Conexión GA4 (Global Service Account)</option>
                )}
                {(forceEditMode ? configuredSecrets['ga4-oauth'] : !configuredSecrets['ga4-oauth']) && (
                  <option value="ga4-oauth">Credenciales GA4 (JSON OAuth / Service Account)</option>
                )}
                {(forceEditMode ? configuredSecrets['adobe-creds'] : !configuredSecrets['adobe-creds']) && (
                  <option value="adobe-creds">Credenciales de Adobe Analytics</option>
                )}
              </select>
            </div>
          </div>

          {secretType === 'adobe-creds' && (
            <AdobeCredentialForm
              adobeClientId={adobeClientId}
              setAdobeClientId={setAdobeClientId}
              adobeClientSecret={adobeClientSecret}
              setAdobeClientSecret={setAdobeClientSecret}
              adobeOrgId={adobeOrgId}
              setAdobeOrgId={setAdobeOrgId}
              adobeCompaniesList={adobeCompaniesList}
              adobeSuitesList={adobeSuitesList}
              selectedAdobeCompany={selectedAdobeCompany}
              selectedAdobeSuite={selectedAdobeSuite}
              setSelectedAdobeSuite={setSelectedAdobeSuite}
              validatingAdobe={validatingAdobe}
              onValidateAdobe={handleValidateAdobeCredentials}
              onCompanyChange={handleAdobeCompanyChange}
              isEditMode={isEditMode}
            />
          )}

          {(secretType === 'ga4-creds' || secretType === 'ga4-oauth') && (
            <GA4CredentialForm
              secretType={secretType as 'ga4-creds' | 'ga4-oauth'}
              ga4Connections={ga4Connections}
              selectedGa4Connection={selectedGa4Connection}
              setSelectedGa4Connection={setSelectedGa4Connection}
              loadingGa4Properties={loadingGa4Properties}
              ga4PropertiesList={ga4PropertiesList}
              selectedGa4Properties={selectedGa4Properties}
              onToggleGa4Property={handleToggleGa4Property}
              secretValue={secretValue}
              setSecretValue={setSecretValue}
              validatingGa4Oauth={validatingGa4Oauth}
              onValidateGa4Oauth={handleValidateGa4OauthCredentials}
              ga4OauthAccountsList={ga4OauthAccountsList}
              ga4OauthPropertiesList={ga4OauthPropertiesList}
              selectedGa4OauthAccount={selectedGa4OauthAccount}
              selectedGa4OauthProperty={selectedGa4OauthProperty}
              setSelectedGa4OauthProperty={setSelectedGa4OauthProperty}
              onGa4OauthAccountChange={handleGa4OauthAccountChange}
              isEditMode={isEditMode}
            />
          )}

          {secretType === 'peec-key' && (
            <PeecCredentialForm
              secretValue={secretValue}
              setSecretValue={setSecretValue}
              peecProjectsList={peecProjectsList}
              selectedPeecProject={selectedPeecProject}
              setSelectedPeecProject={setSelectedPeecProject}
              validatingPeec={validatingPeec}
              onValidatePeec={handleValidatePeecCredentials}
              isEditMode={isEditMode}
            />
          )}

          {secretType === 'brandlight-key' && (
            <BrandlightCredentialForm
              secretValue={secretValue}
              setSecretValue={setSecretValue}
              brandlightBrandName={brandlightBrandName}
              setBrandlightBrandName={setBrandlightBrandName}
              brandlightBrandsList={brandlightBrandsList}
              validating={validatingBrandlight}
              onValidate={handleValidateBrandlightCredentials}
              isEditMode={isEditMode}
            />
          )}

          <div className="flex gap-2 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              disabled={saving || redeploying}
              className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all"
            >
              Cancelar
            </button>
            {isEditMode && (
              <button
                type="button"
                onClick={handleDeleteSecret}
                disabled={saving || redeploying}
                className="px-4 py-2.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 font-bold text-xs uppercase tracking-widest rounded-xl transition-all border border-rose-500/20"
              >
                Eliminar
              </button>
            )}
            <button
              type="submit"
              disabled={saving || redeploying || !secretType}
              className="flex-1 py-2.5 bg-amber-400 hover:bg-amber-300 text-[#060c18] font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {saving ? (
                <>
                  <RefreshCw size={14} className="animate-spin" /> Guardando…
                </>
              ) : (
                <>
                  <Save size={14} /> {isEditMode ? 'Actualizar' : 'Guardar Llave'}
                </>
              )}
            </button>
          </div>

          {configuredSecrets[secretType] && (
            <div className="pt-2">
              <button
                type="button"
                onClick={handleRedeployEtl}
                disabled={redeploying || saving}
                className="w-full py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {redeploying ? (
                  <>
                    <RefreshCw size={12} className="animate-spin" /> Re-desplegando Infraestructura ETL…
                  </>
                ) : (
                  <>
                    <RefreshCw size={12} /> Re-desplegar ETL y Recrear Scheduler
                  </>
                )}
              </button>
            </div>
          )}

          {/* DANGER ZONE / ZONA DE PELIGRO */}
          {tenantId && (
            <div className="mt-6 pt-4 border-t border-rose-500/20">
              <div className="bg-rose-500/5 border border-rose-500/20 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                  <span>⚠️ Danger Zone</span>
                  <span className="text-[10px] text-rose-400/60 font-normal">Acciones Destructivas Irreversibles</span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                  <div>
                    <div className="text-xs font-bold text-white">Eliminar Conexión Activa</div>
                    <div className="text-[10px] text-white/50">
                      Elimina la credencial de {secretType} de GCP Secret Manager.
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleDeleteSecret}
                    disabled={saving || redeploying || deletingTenant}
                    className="px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 font-bold text-[10px] uppercase tracking-wider rounded-lg transition-all whitespace-nowrap"
                  >
                    🗑️ Eliminar {secretType}
                  </button>
                </div>

                <div className="pt-2 border-t border-rose-500/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold text-rose-300">Eliminar Cliente Completo</div>
                    <div className="text-[10px] text-white/50">
                      Elimina el perfil en Firestore y purga todas las llaves de {tenantId.toUpperCase()}.
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowDeleteTenantConfirm(true)}
                    disabled={saving || redeploying || deletingTenant}
                    className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white font-black text-[10px] uppercase tracking-wider rounded-lg transition-all shadow-lg flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    🔥 Eliminar Tenant
                  </button>
                </div>

                {showDeleteTenantConfirm && (
                  <div className="p-3 bg-rose-950/80 border border-rose-500/40 rounded-lg space-y-2 mt-2">
                    <p className="text-[11px] text-rose-200 font-semibold">
                      Para confirmar la destrucción total de <span className="font-bold underline">{tenantId.toUpperCase()}</span>, escribe exactamente su ID a continuación:
                    </p>
                    <input
                      type="text"
                      value={deleteTenantInput}
                      onChange={(e) => setDeleteTenantInput(e.target.value)}
                      placeholder={`Escribe ${tenantId.toLowerCase()} aquí...`}
                      className="w-full bg-black/50 border border-rose-500/30 rounded px-3 py-1.5 text-xs text-rose-200 focus:outline-none focus:border-rose-400"
                    />
                    <div className="flex justify-end gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setShowDeleteTenantConfirm(false);
                          setDeleteTenantInput('');
                        }}
                        className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold uppercase rounded"
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        onClick={handleDeleteTenant}
                        disabled={deletingTenant || deleteTenantInput.trim().toLowerCase() !== tenantId.trim().toLowerCase()}
                        className="px-3 py-1 bg-rose-600 hover:bg-rose-500 disabled:opacity-40 text-white text-[10px] font-black uppercase rounded shadow transition-all"
                      >
                        {deletingTenant ? 'Destruyendo…' : 'Confirmar Borrado Definitivo'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
