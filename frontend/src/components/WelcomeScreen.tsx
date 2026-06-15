// frontend/src/components/WelcomeScreen.tsx
import React, { useState } from 'react';
import { ShieldCheck, LayoutGrid, Users, Lock, ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';

interface WelcomeScreenProps {
  onSelectGA4: () => void;
  onSelectAdobe: (creds: any) => void;
  onSelectPeec: (apiKey: string) => void;
  onFileUpload: (file: File) => void;
  tenant?: {
    tenant_id: string;
    tenant_name: string;
    logo_url: string;
    primary_color: string;
  };
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ 
  tenant
}) => {
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState(false);

  // Manejador para el login de Superadmin con simulación de Google Sign-In
  const handleGoogleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccess(false);

    const emailClean = adminEmail.toLowerCase().trim();

    if (!emailClean) {
      setAuthError('Por favor, introduce tu correo corporativo.');
      return;
    }

    // Validación estricta del dominio corporativo de LLYC
    if (!emailClean.endsWith('@llyc.global') && !emailClean.endsWith('@llyc.ai')) {
      setAuthError('Acceso denegado: El correo electrónico debe pertenecer obligatoriamente al dominio corporativo @llyc.global o @llyc.ai.');
      return;
    }

    // Éxito en la validación del dominio
    setAuthSuccess(true);
    setTimeout(() => {
      // Registrar la sesión del usuario simulada y redireccionar al panel de administración (#admin)
      localStorage.setItem('admin_user_email', emailClean);
      window.location.hash = '#admin';
    }, 1200);
  };

  const handleClientSelect = (clientId: string) => {
    // Carga de inquilino dinámico mediante redirección con query param en demo
    window.location.href = `/?tenant=${clientId}`;
  };

  return (
    <div className="fixed inset-0 bg-navy flex items-center justify-center p-5 z-[1000]">
      {/* FONDO DE LLYC DEGRADADO */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red/10 via-navy to-navy pointer-events-none"></div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 max-w-lg w-full shadow-2xl relative backdrop-blur-md text-center">
        {/* LOGO DINÁMICO */}
        {tenant?.logo_url ? (
          <img src={tenant.logo_url} alt={tenant.tenant_name} className="h-12 object-contain mb-8 mx-auto max-w-[200px]" />
        ) : (
          <div className="text-red font-black text-4xl mb-8 tracking-tighter">LLYC</div>
        )}
        
        <h2 className="text-2xl font-black text-white tracking-tight mb-2">Portal Analítico Inteligente</h2>
        <p className="text-xs text-mid mb-10 uppercase tracking-widest font-semibold">Marketing Control Panel 2026</p>

        {!isAdminLogin ? (
          /* SELECCIÓN PRINCIPAL DE PORTAL */
          <div className="space-y-4 text-left">
            <button 
              onClick={() => handleClientSelect('sanitas')}
              className="w-full bg-white/5 border border-white/10 hover:border-teal/50 hover:bg-white/[0.08] p-5 rounded-2xl flex items-center justify-between transition-all group group-hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-sm text-white">Acceso Cliente (Sanitas)</h3>
                  <p className="text-[11px] text-mid mt-0.5">Ver Dashboard analítico de marca Sanitas</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-mid group-hover:text-white transition-colors" />
            </button>

            <button 
              onClick={() => handleClientSelect('llyc')}
              className="w-full bg-white/5 border border-white/10 hover:border-red/50 hover:bg-white/[0.08] p-5 rounded-2xl flex items-center justify-between transition-all group group-hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red/10 flex items-center justify-center text-red">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-sm text-white">Acceso Analítica LLYC</h3>
                  <p className="text-[11px] text-mid mt-0.5">Ver Dashboard con el branding corporativo</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-mid group-hover:text-white transition-colors" />
            </button>

            <button 
              onClick={() => setIsAdminLogin(true)}
              className="w-full bg-red/10 border border-red/20 hover:bg-red/20 p-5 rounded-2xl flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red flex items-center justify-center text-white">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-sm text-white">Superadmin LLYC</h3>
                  <p className="text-[11px] text-red/80 mt-0.5">Administrar clientes y Secret Manager</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-red group-hover:text-white transition-colors" />
            </button>
          </div>
        ) : (
          /* PANTALLA DE AUTENTICACIÓN CON GOOGLE DE SUPERADMIN */
          <div className="text-left space-y-5">
            <div className="flex items-center gap-2 mb-4">
              <button 
                onClick={() => { setIsAdminLogin(false); setAuthError(null); }}
                className="text-xs font-bold text-mid hover:text-white transition-colors"
              >
                ← Volver
              </button>
            </div>

            <div className="text-center mb-6">
              <h3 className="font-black text-white text-base">Autenticación Superadmin</h3>
              <p className="text-xs text-mid mt-1">Es necesario verificar tu cuenta corporativa de Google LLYC</p>
            </div>

            {authError && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-start gap-2.5 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{authError}</span>
              </div>
            )}

            {authSuccess && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-start gap-2.5 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 animate-bounce" />
                <span>¡Autenticado con éxito! Redireccionando...</span>
              </div>
            )}

            <form onSubmit={handleGoogleSignIn} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-mid mb-1">Correo Corporativo de Google</label>
                <input 
                  type="email" 
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  placeholder="ejemplo@llyc.global"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-red transition-colors font-semibold"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-red text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-red/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red/25"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V13.4h6.887C18.2 15.614 15.645 18 12.24 18c-3.86 0-7-3.14-7-7s3.14-7 7-7c1.73 0 3.32.63 4.54 1.76l2.365-2.365C17.155 1.455 14.81 0 12.24 0c-6.075 0-11 4.925-11 11s4.925 11 11 11c6.34 0 11.24-4.46 11.24-11 0-.74-.08-1.46-.22-2.115H12.24z"/>
                </svg>
                Iniciar Sesión con Google
              </button>
            </form>
          </div>
        )}

        {/* PIE DE PORTAL */}
        <div className="mt-12 flex items-center justify-center gap-2 text-[10px] text-mid font-bold uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5 text-mid" />
          LLYC Analytics · Secure Access Compliant
        </div>
      </div>
    </div>
  );
};
