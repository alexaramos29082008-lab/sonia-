import React, { useState } from 'react';
import { CustomerScreen } from './CustomerHome';

interface CustomerInvoiceProps {
  onNavigate: (screen: CustomerScreen) => void;
}

export const CustomerInvoice: React.FC<CustomerInvoiceProps> = ({ onNavigate }) => {
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  const copyCufe = () => {
    const fullCufe =
      'a8f4be67d23a105c92841fbc8921e3305a41bf82069b2d847118274a92c81df034bbca91823c';
    navigator.clipboard?.writeText(fullCufe);
    showToast('¡Código CUFE copiado con éxito!');
  };

  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen flex flex-col max-w-md mx-auto relative shadow-2xl">
      <header className="sticky top-0 w-full z-40 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 px-space-md flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm min-w-0 flex-1">
            <button
              aria-label="Volver"
              onClick={() => onNavigate('orders')}
              className="w-11 h-11 -ml-1.5 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <img
              alt="Antojo-Virtual Logo"
              className="h-7 w-auto object-contain flex-shrink-0"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XWt7MurRgRJGuWoOt_igEjKZ4PeYeZC7zk_7QKUAEptS3GBGZ1dAo_SJk3i-TNnBVUES8hhU3P2LP1NIlWSHjoQjQ1j24FTiqge5N4ZUWkSeOBurQl0hufTiUbipBFVN5o_QTCN4aayGKeF8T3VQ2rGmvG_U4ZfL0FEofUhUj7TZNy_hXsN_bQrlHOPX7_RuIQPidZmgcs05A3VxWzefcBsDbQDCkQo5kljhnCWKPZx59Si_J9cOpu4cA"
            />
            <h1 className="font-headline-md text-headline-md text-on-surface truncate">
              Detalle Restaurante
            </h1>
          </div>
          <div className="flex items-center gap-space-xs flex-shrink-0">
            <button
              aria-label="Compartir"
              onClick={() => showToast('Enlace de factura copiado')}
              className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full pb-28 bg-surface">
        {toastMsg && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-space-md py-2.5 rounded-full shadow-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
              check_circle
            </span>
            <span className="font-label-md text-label-md">{toastMsg}</span>
          </div>
        )}

        <div className="px-space-md flex flex-col gap-space-md pt-2">
          {/* Top Official DIAN Validation Hero Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-3 relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-tertiary/5 pointer-events-none"></div>
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-container/15 text-tertiary">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-bold">
                  Validado por la DIAN
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary">
                Resolución 187640281928
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-secondary">
                Factura Electrónica de Venta
              </span>
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-headline-md text-headline-md text-on-surface">
                  FE-AV-04921
                </span>
                <span className="font-label-md text-label-md px-2 py-0.5 rounded-md bg-secondary-container text-on-secondary-fixed font-semibold">
                  Prefijo Oficial FE
                </span>
              </div>
              <div className="flex items-center gap-1 text-secondary mt-1">
                <span className="material-symbols-outlined text-[15px]">event</span>
                <span className="font-body-sm text-body-sm">24 Octubre 2024 • 8:54:12 PM COT</span>
              </div>
            </div>

            {/* CUFE Box */}
            <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  Código Único CUFE
                </span>
                <button
                  onClick={copyCufe}
                  className="flex items-center gap-1 text-primary hover:text-primary-container active:scale-95 transition-transform cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[14px]">content_copy</span>
                  <span className="font-label-sm text-label-sm font-semibold">Copiar</span>
                </button>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface font-mono break-all truncate">
                a8f4be67d23a105c92841fbc8921e3305a41bf82069b2d84711...92c81d
              </p>
            </div>
          </div>

          {/* Main Receipt Body */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
            <div className="p-space-md bg-surface-container-low/60 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[24px]">restaurant</span>
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface truncate">
                      La Esquina del Sabor S.A.S.
                    </h2>
                    <p className="font-body-sm text-body-sm text-secondary">
                      NIT: 901.482.910-4 • Régimen Responsable IVA
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold flex-shrink-0">
                  #AV-1082
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-on-surface-variant font-body-sm text-body-sm pt-1">
                <div>
                  <span className="text-secondary block font-label-sm text-label-sm">
                    UBICACIÓN
                  </span>
                  <span className="truncate block">Cra 5 # 14-22, Neiva Centro</span>
                </div>
                <div>
                  <span className="text-secondary block font-label-sm text-label-sm">
                    ACTIVIDAD ECONÓMICA
                  </span>
                  <span className="truncate block">CIIU 5611 (Restaurantes)</span>
                </div>
              </div>
            </div>

            {/* Ticket Separator */}
            <div className="relative w-full h-4 bg-surface-container-lowest flex items-center justify-between overflow-hidden px-1">
              <div className="w-3 h-3 rounded-full bg-surface -ml-2.5"></div>
              <div className="flex-1 border-t-2 border-dashed border-surface-container-highest mx-2 opacity-50"></div>
              <div className="w-3 h-3 rounded-full bg-surface -mr-2.5"></div>
            </div>

            {/* Customer & Dispatch Info */}
            <div className="p-space-md flex flex-col gap-2.5">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                Adquirente / Cliente
              </span>
              <div className="grid grid-cols-2 gap-y-2 gap-x-3">
                <div className="col-span-2">
                  <span className="font-label-md text-label-md text-on-surface font-semibold block">
                    Valentina Duque Cabrera
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    C.C. 1.075.289.412 • +57 318 452 9011
                  </span>
                </div>
                <div className="col-span-2 bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="material-symbols-outlined text-[18px] text-primary flex-shrink-0">
                      location_on
                    </span>
                    <div className="min-w-0">
                      <span className="font-label-sm text-label-sm text-secondary block">
                        Entrega en Neiva
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface truncate block">
                        Cra 5 # 14-22, Edif. San Pedro 302
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-label-sm text-label-sm text-secondary block">
                      Medio de Pago
                    </span>
                    <span className="font-label-md text-label-md text-tertiary font-semibold flex items-center gap-1 justify-end">
                      <span className="material-symbols-outlined text-[14px]">
                        account_balance_wallet
                      </span>{' '}
                      Nequi
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Itemized Breakdown */}
            <div className="p-space-md flex flex-col gap-3">
              <div className="flex items-center justify-between pb-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  Detalle de Productos &amp; Servicios
                </span>
                <span className="font-label-sm text-label-sm text-secondary">Tarifa INC/IVA</span>
              </div>

              <div className="flex flex-col gap-1.5 bg-surface-container-low/40 rounded-lg p-2.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex gap-2">
                    <span className="font-label-md text-label-md text-primary font-bold">1×</span>
                    <div>
                      <span className="font-label-md text-label-md text-on-surface font-semibold block">
                        Hamburguesa Artesanal Doble Carne
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary">
                        Base 200g res madurada, pan brioche
                      </span>
                    </div>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold flex-shrink-0">
                    $24.500
                  </span>
                </div>
                <div className="pl-6 flex flex-col gap-1 text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-outline"></span> + Mozzarella fundido
                    </span>
                    <span>+$3.500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-outline"></span> + Tocineta crujiente
                      ahumada
                    </span>
                    <span>+$4.000</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 mt-1 text-on-surface">
                  <span className="font-label-sm text-label-sm text-secondary font-medium">
                    Subtotal ítem gravable (INC 8%)
                  </span>
                  <span className="font-label-md text-label-md font-bold text-on-surface">
                    $32.000 COP
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-2 bg-surface-container-low/40 rounded-lg p-2.5">
                <div className="flex gap-2">
                  <span className="font-label-md text-label-md text-primary font-bold">1×</span>
                  <div>
                    <span className="font-label-md text-label-md text-on-surface font-semibold block">
                      Coca-Cola Zero 400ml
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Bebida embotellada fría • INC 8%
                    </span>
                  </div>
                </div>
                <span className="font-label-md text-label-md text-on-surface font-semibold flex-shrink-0">
                  $6.000 COP
                </span>
              </div>

              <div className="flex flex-col gap-2 pt-1 font-body-sm text-body-sm">
                <div className="flex items-center justify-between text-secondary">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">moped</span>
                    Costo de Entrega (Ruta Centro Neiva)
                  </span>
                  <span className="text-on-surface font-medium">$4.000 COP</span>
                </div>
                <div className="flex items-center justify-between text-secondary">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">
                      volunteer_activism
                    </span>
                    Propina voluntaria repartidor (Carlos B.)
                  </span>
                  <div className="text-right">
                    <span className="text-on-surface font-medium block">$4.000 COP</span>
                    <span className="font-label-sm text-label-sm text-tertiary">
                      Exenta de impuestos
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-primary">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-[16px]">local_offer</span>
                    Descuento Club Puntos Antojo-Virtual
                  </span>
                  <span className="font-semibold">-$4.000 COP</span>
                </div>
              </div>
            </div>

            {/* Financial & Tax Liquidation */}
            <div className="p-space-md bg-surface-container-low flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-secondary font-body-sm text-body-sm">
                <span>Subtotal base gravable</span>
                <span>$38.000 COP</span>
              </div>
              <div className="flex items-center justify-between text-secondary font-body-sm text-body-sm">
                <span className="flex items-center gap-1">
                  Impuesto Nacional al Consumo (INC 8%)
                  <span className="material-symbols-outlined text-[14px] text-secondary">info</span>
                </span>
                <span className="font-medium text-on-surface">$2.815 COP</span>
              </div>
              <div className="flex items-center justify-between text-secondary font-body-sm text-body-sm">
                <span>Impuesto sobre las Ventas (IVA 0% / Exceptuado)</span>
                <span>$0 COP</span>
              </div>
              <div className="flex items-center justify-between text-secondary font-body-sm text-body-sm">
                <span>Total Servicios Logísticos &amp; Propinas</span>
                <span>$4.000 COP</span>
              </div>
              <div className="w-full h-0.5 bg-surface-container-high my-1"></div>

              <div className="flex items-end justify-between">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary block uppercase tracking-wider">
                    Total Facturado &amp; Pagado
                  </span>
                  <div className="inline-flex items-center gap-1 text-tertiary mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span className="font-label-sm text-label-sm font-bold">
                      PAGO APROBADO NEQUI (Ref NQ-8491028)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-metric-number text-metric-number text-on-surface font-extrabold tabular-nums">
                    $42.000
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary block font-semibold">
                    COP
                  </span>
                </div>
              </div>
            </div>

            {/* DIAN Security & Verification Section */}
            <div className="p-space-md flex flex-col gap-4 bg-surface-container-lowest">
              <div className="flex gap-3 items-center">
                <div className="w-24 h-24 bg-surface-container-low rounded-lg p-1.5 flex-shrink-0 flex items-center justify-center shadow-inner">
                  <svg
                    className="w-full h-full text-on-surface"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                  >
                    <rect fill="currentColor" height="26" rx="2" width="26" x="5" y="5"></rect>
                    <rect fill="white" height="18" width="18" x="9" y="9"></rect>
                    <rect fill="currentColor" height="10" width="10" x="13" y="13"></rect>
                    <rect fill="currentColor" height="26" rx="2" width="26" x="69" y="5"></rect>
                    <rect fill="white" height="18" width="18" x="73" y="9"></rect>
                    <rect fill="currentColor" height="10" width="10" x="77" y="13"></rect>
                    <rect fill="currentColor" height="26" rx="2" width="26" x="5" y="69"></rect>
                    <rect fill="white" height="18" width="18" x="9" y="73"></rect>
                    <rect fill="currentColor" height="10" width="10" x="13" y="77"></rect>
                    <rect height="6" width="6" x="36" y="8"></rect>
                    <rect height="6" width="6" x="46" y="8"></rect>
                    <rect height="6" width="6" x="56" y="8"></rect>
                    <rect height="6" width="10" x="36" y="18"></rect>
                    <rect height="6" width="12" x="50" y="18"></rect>
                    <rect height="8" width="6" x="8" y="36"></rect>
                    <rect height="6" width="10" x="18" y="36"></rect>
                    <rect height="6" width="16" x="8" y="48"></rect>
                    <rect height="6" width="8" x="8" y="58"></rect>
                    <rect height="8" width="8" x="34" y="34"></rect>
                    <rect height="6" width="8" x="46" y="34"></rect>
                    <rect height="8" width="8" x="58" y="34"></rect>
                    <rect height="8" width="16" x="34" y="46"></rect>
                    <rect height="8" width="12" x="54" y="46"></rect>
                    <rect height="16" width="6" x="70" y="36"></rect>
                    <rect height="8" width="12" x="80" y="40"></rect>
                    <rect height="6" width="22" x="70" y="56"></rect>
                    <rect height="12" width="8" x="34" y="58"></rect>
                    <rect height="6" width="14" x="46" y="58"></rect>
                    <rect height="6" width="26" x="34" y="74"></rect>
                    <rect height="8" width="14" x="46" y="84"></rect>
                    <rect height="8" width="6" x="66" y="68"></rect>
                    <rect height="8" width="16" x="76" y="68"></rect>
                    <rect height="12" width="12" x="66" y="80"></rect>
                    <rect height="12" width="10" x="82" y="80"></rect>
                  </svg>
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-1 text-tertiary">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">
                      Certificado DIAN Vigente
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Firma digital avalada por GSE - Gestión de Seguridad Electrónica S.A.
                  </p>
                  <span className="font-label-sm text-label-sm text-outline font-mono truncate">
                    HASH: e7b2049f48ac100238c92842187b99c0
                  </span>
                </div>
              </div>

              <button
                onClick={() => showToast('Verificando estado en portal DIAN...')}
                className="w-full py-2.5 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface text-center font-label-md text-label-md flex items-center justify-center gap-2 active:scale-[0.99] transition-all cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  travel_explore
                </span>
                <span>Consultar comprobante en portal DIAN</span>
              </button>
            </div>
          </div>

          {/* Operational & Action Buttons */}
          <div className="flex flex-col gap-2.5 pt-1">
            <button
              onClick={() => showToast('Generando PDF oficial DIAN de FE-AV-04921...')}
              className="w-full py-3.5 px-space-md rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span>Descargar Factura en PDF (Oficial DIAN)</span>
            </button>
            <button
              onClick={() => showToast('Enviando soporte fiscal a valentina.duque@email.com')}
              className="w-full py-3 px-space-md rounded-xl bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">forward_to_inbox</span>
              <span>Reenviar XML y PDF a mi correo</span>
            </button>
            <p className="font-body-sm text-body-sm text-secondary text-center px-4 pt-1">
              Documento emitido conforme al Estatuto Tributario Colombiano y la Resolución 000042 de
              la DIAN. Expedido para Neiva, Huila a través de Antojo-Virtual.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
