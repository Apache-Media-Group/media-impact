// frontend/src/components/methodology/MethodologyModal.tsx
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MethodologyModal: React.FC<MethodologyModalProps> = ({ isOpen, onClose }) => {
  const [showFormulas, setShowFormulas] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-navy/80 flex items-center justify-center p-5 z-[2000] backdrop-blur-sm transition-all duration-300">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-6 border-b border-dashboard-border bg-dashboard-bg/50">
          <h3 className="text-lg font-bold text-navy uppercase tracking-widest flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-teal"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Metodología de Clusters
          </h3>
          <button
            onClick={onClose}
            className="text-mid hover:text-red transition-colors p-1 rounded-full hover:bg-red-light"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
          <div className="space-y-6 text-sm text-navy/80 leading-relaxed">
            <p>
              Los <strong className="text-navy">Clusters de Comportamiento IA</strong> clasifican el
              tráfico inferido basándose en modelos de intención del usuario cuando interactúa con
              respuestas generadas por Inteligencia Artificial.
            </p>

            <div className="space-y-4">
              <div className="bg-dashboard-bg p-4 rounded-xl border border-dashboard-border/50">
                <h4 className="font-bold text-navy mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F54963' }}></span>
                  Transaccional
                </h4>
                <p>
                  Usuarios con alta intención de compra o conversión inmediata. Provienen de prompts que
                  buscan productos específicos, comparativas de precios o enlaces directos de contratación.
                </p>
              </div>

              <div className="bg-dashboard-bg p-4 rounded-xl border border-dashboard-border/50">
                <h4 className="font-bold text-navy mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#36A7B7' }}></span>
                  Investigación
                </h4>
                <p>
                  Usuarios en fase exploratoria o de "mid-funnel". Sus interacciones con la IA suelen ser
                  preguntas de profundidad, tutoriales, o evaluaciones detalladas de servicios antes de
                  tomar una decisión.
                </p>
              </div>

              <div className="bg-dashboard-bg p-4 rounded-xl border border-dashboard-border/50">
                <h4 className="font-bold text-navy mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#0A263B' }}></span>
                  Respuesta Rápida
                </h4>
                <p>
                  Usuarios que buscan un dato puntual (FAQs, números de contacto, horarios). El clic suele
                  ser para verificar o ampliar ligeramente la información mostrada por la IA (Zero-Click
                  searches).
                </p>
              </div>

              <div className="bg-dashboard-bg p-4 rounded-xl border border-dashboard-border/50">
                <h4 className="font-bold text-navy mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E8A020' }}></span>
                  Casual
                </h4>
                <p>
                  Tráfico menos dirigido, derivado de conversaciones periféricas o menciones de marca sin
                  una intención clara de negocio. Tienen el engagement rate más bajo.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-dashboard-border">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xs text-mid">
                  La distribución se calcula utilizando un modelo de propensión basado en las dimensiones
                  semánticas de la consulta de IA inicial y el comportamiento post-clic.
                </p>
                <button
                  onClick={() => setShowFormulas(!showFormulas)}
                  className="text-xs font-bold text-teal hover:text-navy transition-colors px-3 py-1.5 border border-teal/20 rounded-md hover:bg-teal/5 flex-shrink-0 ml-4"
                >
                  {showFormulas ? 'Ocultar Fórmulas' : 'Ver Fórmulas'}
                </button>
              </div>

              {showFormulas && (
                <div className="bg-navy rounded-xl p-5 text-white/90 text-xs font-mono space-y-4 shadow-inner mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div>
                    <div className="text-teal-light mb-1 font-bold">1. Transaccional (Weight: 1.5)</div>
                    <div>
                      Score = (conversion_rate * 40) + (bounce_rate_inverse * 20) + (time_on_site_score * 20) + semantic_intent(buy, hire, price)
                    </div>
                  </div>
                  <div>
                    <div className="text-teal-light mb-1 font-bold">2. Investigación (Weight: 1.2)</div>
                    <div>
                      Score = (pages_per_session * 30) + (time_on_site_score * 30) + semantic_intent(how, what, compare, review)
                    </div>
                  </div>
                  <div>
                    <div className="text-teal-light mb-1 font-bold">3. Respuesta Rápida (Weight: 1.0)</div>
                    <div>
                      Score = (bounce_rate * 50) + (short_time_on_site * 30) + semantic_intent(contact, address, hours, faq)
                    </div>
                  </div>
                  <div>
                    <div className="text-teal-light mb-1 font-bold">4. Casual (Weight: 0.8)</div>
                    <div>
                      Score = Default fallback para tráfico de baja retención sin keywords transaccionales o de investigación explícitas.
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/10 text-[10px] text-white/50">
                    * semantic_intent() se resuelve vía Natural Language Processing en BigQuery, cruzando la Query original reportada por la IA con nuestro corpus de intenciones.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
