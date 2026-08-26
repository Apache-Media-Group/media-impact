// frontend/src/components/admin/credentials/BrandlightCredentialForm.tsx
import React from 'react';

interface BrandlightCredentialFormProps {
  secretValue: string;
  setSecretValue: (val: string) => void;
  isEditMode: boolean;
}

export const BrandlightCredentialForm: React.FC<BrandlightCredentialFormProps> = ({
  secretValue,
  setSecretValue,
  isEditMode,
}) => {
  if (isEditMode) {
    return (
      <div className="p-4 bg-dashboard-bg/50 border border-dashboard-border rounded-xl text-xs text-navy/70 leading-relaxed">
        El API Key de Brandlight está configurada de forma segura en Google Cloud Secret Manager. Para actualizarla, introduce un nuevo valor.
      </div>
    );
  }

  return (
    <div>
      <label className="block text-[11px] font-bold text-navy uppercase tracking-widest mb-1.5">
        Brandlight API Key
      </label>
      <input
        type="password"
        required
        value={secretValue}
        onChange={(e) => setSecretValue(e.target.value)}
        placeholder="bl_live_••••••••••••"
        className="w-full bg-dashboard-bg border border-dashboard-border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-red"
      />
    </div>
  );
};
