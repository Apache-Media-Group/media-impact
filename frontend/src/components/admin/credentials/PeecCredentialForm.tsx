// frontend/src/components/admin/credentials/PeecCredentialForm.tsx
import React from 'react';
import { RefreshCw } from 'lucide-react';

interface PeecCredentialFormProps {
  secretValue: string;
  setSecretValue: (val: string) => void;
  peecProjectsList: any[];
  selectedPeecProject: string;
  setSelectedPeecProject: (val: string) => void;
  validatingPeec: boolean;
  onValidatePeec: () => void;
  isEditMode: boolean;
}

export const PeecCredentialForm: React.FC<PeecCredentialFormProps> = ({
  secretValue,
  setSecretValue,
  peecProjectsList,
  selectedPeecProject,
  setSelectedPeecProject,
  validatingPeec,
  onValidatePeec,
  isEditMode,
}) => {
  return (
    <div className="space-y-4">
      {!isEditMode && (
        <>
          <div>
            <label className="block text-[11px] font-bold text-navy uppercase tracking-widest mb-1.5">
              Peec.ai API Key
            </label>
            <input
              type="password"
              required
              value={secretValue}
              onChange={(e) => setSecretValue(e.target.value)}
              placeholder="peec_live_••••••••••••"
              className="w-full bg-dashboard-bg border border-dashboard-border rounded-xl px-4 py-2.5 text-xs text-navy focus:outline-none focus:border-red"
            />
          </div>

          <button
            type="button"
            onClick={onValidatePeec}
            disabled={validatingPeec || !secretValue}
            className="w-full py-2.5 bg-navy/5 hover:bg-navy/10 text-navy font-bold text-xs uppercase tracking-widest rounded-xl transition-all border border-navy/10 flex items-center justify-center gap-2"
          >
            {validatingPeec ? (
              <>
                <RefreshCw size={14} className="animate-spin text-red" />
                Validando API Key y Proyectos…
              </>
            ) : (
              '🔍 Validar y Cargar Proyectos'
            )}
          </button>
        </>
      )}

      {/* Selector de Proyecto Peec */}
      {peecProjectsList.length > 0 && (
        <div className="p-4 bg-dashboard-bg/50 border border-dashboard-border rounded-xl space-y-2 animate-in fade-in">
          <label className="block text-[10px] font-bold text-navy uppercase tracking-widest mb-1">
            Proyecto de Peec.ai Asociado
          </label>
          <select
            value={selectedPeecProject}
            onChange={(e) => setSelectedPeecProject(e.target.value)}
            className="w-full bg-white border border-dashboard-border rounded-lg px-3 py-2 text-xs text-navy focus:outline-none focus:border-red"
          >
            {peecProjectsList.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.id})
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};
