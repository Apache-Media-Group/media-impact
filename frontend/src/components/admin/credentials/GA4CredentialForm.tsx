// frontend/src/components/admin/credentials/GA4CredentialForm.tsx
import React from 'react';
import { RefreshCw, CheckSquare } from 'lucide-react';

interface GA4CredentialFormProps {
  secretType: 'ga4-creds' | 'ga4-oauth';
  // Props for ga4-creds mode (global vault)
  ga4Connections: any[];
  selectedGa4Connection: string;
  setSelectedGa4Connection: (val: string) => void;
  loadingGa4Properties: boolean;
  ga4PropertiesList: any[];
  selectedGa4Properties: string[];
  onToggleGa4Property: (propertyId: string) => void;
  // Props for ga4-oauth mode (JSON credentials)
  secretValue: string;
  setSecretValue: (val: string) => void;
  validatingGa4Oauth: boolean;
  onValidateGa4Oauth: () => void;
  ga4OauthAccountsList: any[];
  ga4OauthPropertiesList: any[];
  selectedGa4OauthAccount: string;
  selectedGa4OauthProperty: string;
  setSelectedGa4OauthProperty: (val: string) => void;
  onGa4OauthAccountChange: (accountId: string) => void;
  isEditMode: boolean;
}

export const GA4CredentialForm: React.FC<GA4CredentialFormProps> = ({
  secretType,
  ga4Connections,
  selectedGa4Connection,
  setSelectedGa4Connection,
  loadingGa4Properties,
  ga4PropertiesList,
  selectedGa4Properties,
  onToggleGa4Property,
  secretValue,
  setSecretValue,
  validatingGa4Oauth,
  onValidateGa4Oauth,
  ga4OauthAccountsList,
  ga4OauthPropertiesList,
  selectedGa4OauthAccount,
  selectedGa4OauthProperty,
  setSelectedGa4OauthProperty,
  onGa4OauthAccountChange,
  isEditMode,
}) => {
  if (secretType === 'ga4-creds') {
    return (
      <div className="space-y-4 border-l-2 border-teal pl-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1 text-teal">
            Conexión Global de GA4 (Vault)
          </label>
          <select
            value={selectedGa4Connection}
            onChange={(e) => setSelectedGa4Connection(e.target.value)}
            className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-red font-bold"
          >
            <option value="" disabled>
              Selecciona una conexión...
            </option>
            {ga4Connections.map((conn: any) => (
              <option key={conn.id} value={conn.id}>
                {conn.name} ({conn.client_email})
              </option>
            ))}
          </select>
        </div>

        {loadingGa4Properties ? (
          <div className="flex items-center gap-2 text-mid text-xs">
            <RefreshCw className="w-4 h-4 animate-spin" /> Cargando propiedades...
          </div>
        ) : ga4PropertiesList.length > 0 ? (
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-2 text-red">
              Propiedades GA4 (Selección Múltiple)
            </label>
            <div className="bg-[#0a1829] border border-white/10 rounded-lg max-h-60 overflow-y-auto custom-scrollbar">
              {ga4PropertiesList.map((p) => {
                const isSelected = selectedGa4Properties.includes(p.property_id);
                return (
                  <div
                    key={p.property_id}
                    className={`flex items-center gap-3 p-3 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors ${
                      isSelected ? 'bg-red/5' : ''
                    }`}
                    onClick={() => onToggleGa4Property(p.property_id)}
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center ${
                        isSelected ? 'bg-red border-red text-white' : 'border-white/20'
                      }`}
                    >
                      {isSelected && <CheckSquare className="w-3 h-3" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{p.property_name}</p>
                      <p className="text-[10px] text-mid">
                        {p.account_name} &bull; {p.property_id}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : selectedGa4Connection ? (
          <p className="text-xs text-red-400">
            No se encontraron propiedades accesibles para esta conexión.
          </p>
        ) : null}
      </div>
    );
  }

  // GA4 OAuth JSON mode
  return (
    <div className="space-y-4">
      {!isEditMode && (
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-widest text-mid block">
            JSON de Credenciales de Google (OAuth)
          </label>
          <textarea
            placeholder="Pega el contenido completo del archivo JSON descargado desde Google Cloud Platform..."
            value={secretValue}
            onChange={(e) => setSecretValue(e.target.value)}
            rows={4}
            className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white placeholder-white/20 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 outline-none font-mono custom-scrollbar resize-none"
          />

          <button
            type="button"
            onClick={onValidateGa4Oauth}
            disabled={validatingGa4Oauth || !secretValue.trim()}
            className="w-full mt-2 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg text-xs font-bold uppercase hover:bg-emerald-500/30 transition-colors border border-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {validatingGa4Oauth ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              '🔍 Validar y Buscar Cuentas de GA4'
            )}
          </button>
        </div>
      )}

      {(isEditMode || ga4OauthAccountsList.length > 0) && (
        <div className="space-y-3 bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
          <div className="space-y-4 pt-3 border-t border-white/5">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1 text-teal">
                Cuenta Google Seleccionada
              </label>
              <select
                value={selectedGa4OauthAccount}
                onChange={(e) => onGa4OauthAccountChange(e.target.value)}
                className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-red font-bold"
              >
                {ga4OauthAccountsList.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.name}
                  </option>
                ))}
              </select>
            </div>

            {ga4OauthPropertiesList.length > 0 && (
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1 text-red">
                  Propiedad GA4 (Para ETL)
                </label>
                <select
                  value={selectedGa4OauthProperty}
                  onChange={(e) => setSelectedGa4OauthProperty(e.target.value)}
                  className="w-full bg-[#0a1829] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-red font-bold text-red"
                >
                  {ga4OauthPropertiesList.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
