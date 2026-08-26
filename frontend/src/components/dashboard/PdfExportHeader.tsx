// frontend/src/components/dashboard/PdfExportHeader.tsx
import React from 'react';
import type { TenantConfig } from '../../types';
import { getProxiedLogoUrl } from '../../services/tenantResolver';

interface PdfExportHeaderProps {
  tenant: TenantConfig;
  fromDate?: string;
  toDate?: string;
}

export const PdfExportHeader: React.FC<PdfExportHeaderProps> = ({ tenant, fromDate, toDate }) => {
  return (
    <div className="bg-white -mx-8 -mt-8 mb-6 px-8 py-5 border-b border-dashboard-border flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-6">
        {tenant?.logo_url ? (
          <img
            src={getProxiedLogoUrl(tenant.logo_url)}
            crossOrigin="anonymous"
            alt={tenant.tenant_name}
            className="h-10 object-contain max-w-[150px]"
          />
        ) : (
          <div className="text-red font-black text-xl tracking-tighter">
            {tenant?.tenant_name || 'LLYC'}
          </div>
        )}
        <div className="h-6 w-[1px] bg-dashboard-border"></div>
        <div className="text-[11px] font-black uppercase tracking-widest text-navy">
          Intelligence Dashboard <span className="text-mid font-medium">2026</span>
        </div>
        <div className="h-6 w-[1px] bg-dashboard-border"></div>
        <img
          src={`${import.meta.env.BASE_URL || '/'}llyc_logo_pdf.png`}
          alt="LLYC"
          crossOrigin="anonymous"
          className="h-7 object-contain"
        />
      </div>
      <div className="text-[11px] font-bold text-navy uppercase tracking-widest bg-dashboard-bg px-3 py-1.5 rounded-lg border border-dashboard-border">
        Fechas analizadas: <span className="text-red">{fromDate || '--'}</span>{' '}
        <span className="text-mid font-normal">a</span>{' '}
        <span className="text-red">{toDate || '--'}</span>
      </div>
    </div>
  );
};
