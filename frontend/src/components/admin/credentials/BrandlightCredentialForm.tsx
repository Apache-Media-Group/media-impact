// frontend/src/components/admin/credentials/BrandlightCredentialForm.tsx
import React from 'react';

interface BrandlightCredentialFormProps {
  secretValue: string;
  setSecretValue: (val: string) => void;
  brandlightBrandName: string;
  setBrandlightBrandName: (val: string) => void;
  brandlightBrandsList: any[];
  isEditMode: boolean;
  onValidate?: () => void;
  validating?: boolean;
}

export const BrandlightCredentialForm: React.FC<BrandlightCredentialFormProps> = ({
  secretValue,
  setSecretValue,
  brandlightBrandName,
  setBrandlightBrandName,
  brandlightBrandsList,
  isEditMode,
  onValidate,
  validating,
}) => {
  const [useManualInput, setUseManualInput] = React.useState(false);

  if (isEditMode) {
    return (
      <div className="space-y-4">
        <div className="p-4 bg-dashboard-bg/50 border border-dashboard-border rounded-xl text-xs text-navy/70 leading-relaxed">
          🔒 El API Key de Brandlight está configurada de forma segura en Google Cloud Secret Manager. Para actualizar la llave, introduce un nuevo valor abajo.
        </div>

        <div>
          <label className="block text-[11px] font-bold text-navy uppercase tracking-widest mb-1.5">
            Nueva API Key (Opcional)
          </label>
          <input
            type="password"
            value={secretValue}
            onChange={(e) => setSecretValue(e.target.value)}
            placeholder="Dejar en blanco para mantener la clave existente..."
            className="w-full bg-dashboard-bg border border-dashboard-border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-red"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-[11px] font-bold text-navy uppercase tracking-widest">
              Marca Comercial Asociada en Brandlight BI
            </label>
            {brandlightBrandsList.length > 0 && (
              <button
                type="button"
                onClick={() => setUseManualInput(!useManualInput)}
                className="text-[10px] text-red font-bold hover:underline"
              >
                {useManualInput ? '📋 Seleccionar de la lista' : '✍️ Escribir manualmente'}
              </button>
            )}
          </div>

          {brandlightBrandsList.length > 0 && !useManualInput ? (
            <select
              value={brandlightBrandName}
              onChange={(e) => setBrandlightBrandName(e.target.value)}
              className="w-full bg-dashboard-bg border border-dashboard-border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-red font-semibold"
            >
              <option value="">-- Selecciona una marca autorizada --</option>
              {brandlightBrandsList.map((b) => (
                <option key={b.id || b.name} value={b.name}>
                  {b.name}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              required
              value={brandlightBrandName}
              onChange={(e) => setBrandlightBrandName(e.target.value)}
              placeholder="ej: Nombre de Marca Registrada"
              className="w-full bg-dashboard-bg border border-dashboard-border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-red font-semibold"
            />
          )}
          <p className="text-[10px] text-mid mt-1">
            Marca configurada actualmente: <strong className="text-navy">{brandlightBrandName || '(Ninguna)'}</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-[11px] font-bold text-navy uppercase tracking-widest mb-1.5">
          Brandlight API Key
        </label>
        <div className="flex gap-2">
          <input
            type="password"
            required
            value={secretValue}
            onChange={(e) => setSecretValue(e.target.value)}
            placeholder="bl_live_••••••••••••"
            className="w-full bg-dashboard-bg border border-dashboard-border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-red"
          />
          {onValidate && (
            <button
              type="button"
              onClick={onValidate}
              disabled={validating || !secretValue}
              className="px-3 py-2.5 bg-red/10 border border-red/20 text-red text-xs font-bold rounded-xl hover:bg-red/20 transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {validating ? 'Validando...' : 'Validar Marcas'}
            </button>
          )}
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-bold text-navy uppercase tracking-widest mb-1.5">
          Nombre de Marca Comercial en Brandlight BI
        </label>
        {brandlightBrandsList.length > 0 ? (
          <select
            value={brandlightBrandName}
            onChange={(e) => setBrandlightBrandName(e.target.value)}
            className="w-full bg-dashboard-bg border border-dashboard-border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-red"
          >
            <option value="">-- Selecciona una marca autorizada --</option>
            {brandlightBrandsList.map((b) => (
              <option key={b.id || b.name} value={b.name}>
                {b.name}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            required
            value={brandlightBrandName}
            onChange={(e) => setBrandlightBrandName(e.target.value)}
            placeholder="ej: Nombre de Marca Registrada"
            className="w-full bg-dashboard-bg border border-dashboard-border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-red"
          />
        )}
        <p className="text-[10px] text-mid mt-1">
          Escribe o selecciona la marca registrada exactas en Brandlight para dirigir las consultas a sus endpoints.
        </p>
      </div>
    </div>
  );
};

