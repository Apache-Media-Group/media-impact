// frontend/src/components/admin/credentials/AdobeCredentialForm.tsx
import React from 'react';
import { RefreshCw } from 'lucide-react';

interface AdobeCredentialFormProps {
  adobeClientId: string;
  setAdobeClientId: (val: string) => void;
  adobeClientSecret: string;
  setAdobeClientSecret: (val: string) => void;
  adobeOrgId: string;
  setAdobeOrgId: (val: string) => void;
  adobeCompaniesList: any[];
  adobeSuitesList: any[];
  selectedAdobeCompany: string;
  selectedAdobeSuite: string;
  setSelectedAdobeSuite: (val: string) => void;
  validatingAdobe: boolean;
  onValidateAdobe: () => void;
  onCompanyChange: (companyId: string) => void;
  isEditMode: boolean;
}

export const AdobeCredentialForm: React.FC<AdobeCredentialFormProps> = ({
  adobeClientId,
  setAdobeClientId,
  adobeClientSecret,
  setAdobeClientSecret,
  adobeOrgId,
  setAdobeOrgId,
  adobeCompaniesList,
  adobeSuitesList,
  selectedAdobeCompany,
  selectedAdobeSuite,
  setSelectedAdobeSuite,
  validatingAdobe,
  onValidateAdobe,
  onCompanyChange,
  isEditMode,
}) => {
  return (
    <div className="space-y-4">
      {!isEditMode && (
        <>
          <div>
            <label className="block text-[11px] font-bold text-navy uppercase tracking-widest mb-1.5">
              Client ID (API Key de Adobe)
            </label>
            <input
              type="text"
              required
              value={adobeClientId}
              onChange={(e) => setAdobeClientId(e.target.value)}
              placeholder="Ej: d83a9f..."
              className="w-full bg-dashboard-bg border border-dashboard-border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-red"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-navy uppercase tracking-widest mb-1.5">
              Client Secret
            </label>
            <input
              type="password"
              required
              value={adobeClientSecret}
              onChange={(e) => setAdobeClientSecret(e.target.value)}
              placeholder="••••••••••••••••"
              className="w-full bg-dashboard-bg border border-dashboard-border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-red"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-navy uppercase tracking-widest mb-1.5">
              IMS Org ID
            </label>
            <input
              type="text"
              required
              value={adobeOrgId}
              onChange={(e) => setAdobeOrgId(e.target.value)}
              placeholder="Ej: 1234567890ABCDEF@AdobeOrg"
              className="w-full bg-dashboard-bg border border-dashboard-border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-red"
            />
          </div>

          <button
            type="button"
            onClick={onValidateAdobe}
            disabled={validatingAdobe || !adobeClientId || !adobeClientSecret || !adobeOrgId}
            className="w-full py-2.5 bg-navy/5 hover:bg-navy/10 text-navy font-bold text-xs uppercase tracking-widest rounded-xl transition-all border border-navy/10 flex items-center justify-center gap-2"
          >
            {validatingAdobe ? (
              <>
                <RefreshCw size={14} className="animate-spin text-red" />
                Descubriendo Report Suites…
              </>
            ) : (
              '🔍 Validar y Cargar Report Suites'
            )}
          </button>
        </>
      )}

      {/* Selectores de Compañía y Report Suite */}
      {adobeCompaniesList.length > 0 && (
        <div className="p-4 bg-dashboard-bg/50 border border-dashboard-border rounded-xl space-y-3 animate-in fade-in">
          <div>
            <label className="block text-[10px] font-bold text-navy uppercase tracking-widest mb-1">
              Compañía de Adobe Analytics
            </label>
            <select
              value={selectedAdobeCompany}
              onChange={(e) => onCompanyChange(e.target.value)}
              className="w-full bg-white border border-dashboard-border rounded-lg px-3 py-2 text-xs text-navy focus:outline-none focus:border-red"
            >
              {adobeCompaniesList.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.id})
                </option>
              ))}
            </select>
          </div>

          {adobeSuitesList.length > 0 && (
            <div>
              <label className="block text-[10px] font-bold text-navy uppercase tracking-widest mb-1">
                Report Suite (Propiedad / Suite ID)
              </label>
              <select
                value={selectedAdobeSuite}
                onChange={(e) => setSelectedAdobeSuite(e.target.value)}
                className="w-full bg-white border border-dashboard-border rounded-lg px-3 py-2 text-xs text-navy focus:outline-none focus:border-red"
              >
                {adobeSuitesList.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.id})
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
