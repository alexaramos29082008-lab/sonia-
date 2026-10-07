import React, { useState } from 'react';
import { CustomerScreen } from './CustomerHome';

interface CustomerProfileProps {
  onNavigate: (screen: CustomerScreen) => void;
}

export const CustomerProfile: React.FC<CustomerProfileProps> = ({ onNavigate }) => {
  const [liveAlerts, setLiveAlerts] = useState(true);
  const [promoAlerts, setPromoAlerts] = useState(true);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen flex flex-col max-w-md mx-auto relative shadow-2xl">
      <header className="sticky top-0 w-full z-40 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 px-space-md flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm min-w-0 flex-1">
            <div className="w-10 h-10 rounded-full bg-primary-container/15 flex items-center justify-center flex-shrink-0 text-primary">
              <span className="material-symbols-outlined text-[24px]">person</span>
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="font-headline-sm text-headline-sm text-on-surface truncate">
                Mi Perfil
              </h1>
              <div className="flex items-center gap-space-xs text-on-surface-variant leading-none">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Cuenta activa • Neiva
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-space-xs flex-shrink-0">
            <button
              aria-label="Configuración de cuenta"
              onClick={() => triggerToast('Ajustes de cuenta actualizados')}
              className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">settings</span>
            </button>
            <button
              aria-label="Centro de ayuda y soporte"
              onClick={() => onNavigate('chat')}
              className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">help_outline</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full pb-28 bg-surface">
        {toastMsg && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
              check_circle
            </span>
            <span className="font-label-md text-label-md">{toastMsg}</span>
          </div>
        )}

        <div className="px-space-md pt-space-md pb-space-lg flex flex-col gap-space-lg">
          {/* 1. User Hero & Profile Card */}
          <div className="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm overflow-hidden flex flex-col gap-space-md">
            <div className="absolute -right-12 -top-12 w-36 h-36 rounded-full bg-primary-fixed/30 pointer-events-none blur-2xl"></div>
            <div className="flex items-center gap-space-md">
              <div className="relative flex-shrink-0">
                <img
                  alt="Valentina Duque Cabrera"
                  className="w-20 h-20 rounded-full object-cover shadow-md"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeKXERojBlOtCyjeuEgj409hWwVV_MfBZLFEDJLp4GXudhPBNSaAp09aOGTJsSZNzaJYM-vPSuF4TZ5bmd7mLIhQgaKyvwPRKUhAEe77FqeHq7Sesr9Srxw3MJRn7sRHSfSCb1d2CFn84nKfIADwD1oNsjqU-QBwiqd3nLeBG6kA8A1j-GxkJ4FPdfbEvNVhCIpn7ZyJjEPS6lXn1c9nLz98rwq8Th0VtdOIfOY8O1qfEVvo7CDaWGTg"
                />
                <button
                  aria-label="Cambiar foto de perfil"
                  onClick={() => triggerToast('Cámara lista para nueva foto')}
                  className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shadow hover:bg-primary-container transition-transform active:scale-95 cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                </button>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-space-xs flex-wrap">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[12px] text-primary">
                      stars
                    </span>
                    Cliente Antojo VIP
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface truncate mt-1">
                  Valentina Duque Cabrera
                </h2>
                <div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    location_on
                  </span>
                  <span className="truncate">Neiva, Huila • Huilense con sazón</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 pt-2">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low text-on-surface">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">phone_iphone</span>
                  </div>
                  <span className="font-body-md text-body-md truncate">+57 318 452 9011</span>
                </div>
                <span className="inline-flex items-center gap-1 text-tertiary font-label-md text-label-md flex-shrink-0">
                  <span className="material-symbols-outlined text-[16px]">verified</span> Verificado
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low text-on-surface">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </div>
                  <span className="font-body-md text-body-md truncate">
                    valentina.duque@email.com
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-tertiary font-label-md text-label-md flex-shrink-0">
                  <span className="material-symbols-outlined text-[16px]">verified</span> Activo
                </span>
              </div>
            </div>
          </div>

          {/* 2. Antojo Rewards & Balance Card */}
          <div className="relative bg-gradient-to-br from-primary-container to-primary rounded-xl p-space-md text-on-primary-container shadow-md overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-on-primary/10 blur-xl pointer-events-none"></div>
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed font-bold opacity-90">
                  <span className="material-symbols-outlined text-[16px]">military_tech</span>
                  Club Puntos Antojo
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-metric-number text-metric-number font-extrabold text-on-primary leading-tight">
                    480
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary-fixed">
                    Pts acumulados
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-on-primary/15 backdrop-blur-md flex items-center justify-center text-on-primary shadow-inner">
                <span className="material-symbols-outlined text-[26px]">monetization_on</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-primary-fixed mt-2">
              Equivalente a <strong className="text-on-primary font-semibold">$4.800 COP</strong>{' '}
              para descontar en tu próximo achira burger o asado huilense.
            </p>
            <div className="mt-4 pt-3 bg-on-primary/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-1.5 font-label-sm text-label-sm text-on-primary">
                <span className="font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span> Nivel Oro
                  Huilense
                </span>
                <span>Faltan 120 pts para Envíos Gratis</span>
              </div>
              <div className="w-full h-2 rounded-full bg-on-primary/20 overflow-hidden">
                <div className="h-full bg-tertiary-fixed rounded-full w-4/5"></div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('home')}
              className="w-full mt-3 py-2.5 px-space-md rounded-lg bg-on-primary text-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow hover:bg-surface-bright transition-all active:scale-[0.98] cursor-pointer"
              type="button"
            >
              <span>Ver Catálogo de Premios &amp; Cupones</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          {/* 3. Saved Addresses in Neiva */}
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Direcciones en Neiva
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Tus puntos frecuentes de entrega y domicilio
                </p>
              </div>
              <button
                onClick={() => triggerToast('Abriendo selector de direcciones en Neiva')}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm active:scale-95 transition-transform cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">add_location_alt</span>
                <span>Nueva</span>
              </button>
            </div>

            <div className="flex flex-col gap-space-sm mt-1">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-2 relative">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined text-[20px]">home</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">Casa</h4>
                        <span className="px-2 py-0.5 rounded-full bg-primary-container/15 text-primary font-label-sm text-label-sm uppercase tracking-wide">
                          Principal
                        </span>
                      </div>
                      <p className="font-body-md text-body-md font-semibold text-on-surface">
                        Cra 5 # 14-22, Apto 302, Edificio San Pedro
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <button
                      aria-label="Editar dirección Casa"
                      onClick={() => triggerToast('Editando dirección Principal')}
                      className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors cursor-pointer"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col gap-1 text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-center gap-1.5 text-on-surface font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">
                      near_me
                    </span>
                    <span>Neiva Centro — Frente al Parque Santander (reja blanca)</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary flex-shrink-0">
                      speaker_notes
                    </span>
                    <span className="italic">
                      "Timbrar en el 302 o dejar con Don Rigoberto en recepción."
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed flex-shrink-0">
                      <span className="material-symbols-outlined text-[20px]">apartment</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">
                          Oficina
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Trabajo
                        </span>
                      </div>
                      <p className="font-body-md text-body-md font-semibold text-on-surface">
                        Calle 21 # 5A-40, Piso 3
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col gap-1 text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-center gap-1.5 text-on-surface font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">
                      near_me
                    </span>
                    <span>Barrio Quirinal — A media cuadra de la Gobernación</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary flex-shrink-0">
                      speaker_notes
                    </span>
                    <span className="italic">
                      "Llamar al celular al llegar, bajo enseguida por la rampa."
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-full bg-error-container/50 flex items-center justify-center text-error flex-shrink-0">
                      <span className="material-symbols-outlined text-[20px]">favorite</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">
                          Casa Mamá (Altico)
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Familiar
                        </span>
                      </div>
                      <p className="font-body-md text-body-md font-semibold text-on-surface">
                        Carrera 12 # 7-35, Casa 2
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-lg p-2.5 flex items-center gap-1.5 text-on-surface font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    near_me
                  </span>
                  <span>Barrio Altico — Esquina con calle 7, fachada ladrillo a la vista</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('tracking')}
                className="w-full py-3.5 px-space-md rounded-xl bg-surface-container-low hover:bg-surface-container text-primary font-label-lg text-label-lg flex items-center justify-center gap-2 transition-colors active:scale-[0.99] shadow-sm cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">explore</span>
                <span>Fijar nueva ubicación en el mapa de Neiva</span>
              </button>
            </div>
          </div>

          {/* 4. Payment Methods Section */}
          <div className="flex flex-col gap-space-sm">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Billeteras &amp; Métodos de Pago
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Pagos instantáneos sin recargos
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col gap-1">
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/10 flex items-center justify-center text-primary-container font-black text-sm flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px] text-primary">
                      account_balance_wallet
                    </span>
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Nequi Directo
                      </span>
                      <span className="px-2 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
                        Predeterminado
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Vinculado • 318 *** 9011
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-tertiary text-[20px]">
                  check_circle
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-error-container/30 flex items-center justify-center text-error font-black text-sm flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">contactless</span>
                  </div>
                  <div className="truncate">
                    <span className="font-label-lg text-label-lg text-on-surface block">
                      Daviplata
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Activo • 318 *** 9011
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
                  chevron_right
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant font-black text-sm flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">credit_card</span>
                  </div>
                  <div className="truncate">
                    <span className="font-label-lg text-label-lg text-on-surface block">
                      Mastercard Bancolombia
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Terminada en •••• 4821
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
                  chevron_right
                </span>
              </div>

              <button
                onClick={() => triggerToast('Vinculación PSE lista')}
                className="w-full mt-1 py-2.5 text-center text-primary font-label-md text-label-md rounded-lg hover:bg-primary-fixed/20 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">add_card</span>
                <span>Vincular otra tarjeta o método PSE</span>
              </button>
            </div>
          </div>

          {/* 5. App Preferences & Kitchen Habits */}
          <div className="flex flex-col gap-space-sm">
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Preferencias &amp; Soporte
            </h3>
            <div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col gap-1">
              <div className="flex items-center justify-between p-3 rounded-lg">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      notifications_active
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-label-lg text-label-lg text-on-surface block truncate">
                      Alertas en tiempo real
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant block">
                      Notificaciones por WhatsApp y Push
                    </span>
                  </div>
                </div>
                <button
                  aria-checked={liveAlerts}
                  onClick={() => setLiveAlerts(!liveAlerts)}
                  className={`w-12 h-6 rounded-full relative p-0.5 transition-colors flex items-center flex-shrink-0 cursor-pointer ${
                    liveAlerts ? 'bg-primary' : 'bg-surface-container-highest'
                  }`}
                  role="switch"
                  type="button"
                >
                  <span
                    className={`w-5 h-5 bg-on-primary rounded-full shadow-md transform transition-transform ${
                      liveAlerts ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  ></span>
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">local_offer</span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-label-lg text-label-lg text-on-surface block truncate">
                      Descuentos y Días Especiales
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant block">
                      Promos gastronómicas de Neiva
                    </span>
                  </div>
                </div>
                <button
                  aria-checked={promoAlerts}
                  onClick={() => setPromoAlerts(!promoAlerts)}
                  className={`w-12 h-6 rounded-full relative p-0.5 transition-colors flex items-center flex-shrink-0 cursor-pointer ${
                    promoAlerts ? 'bg-primary' : 'bg-surface-container-highest'
                  }`}
                  role="switch"
                  type="button"
                >
                  <span
                    className={`w-5 h-5 bg-on-primary rounded-full shadow-md transform transition-transform ${
                      promoAlerts ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  ></span>
                </button>
              </div>

              <button
                onClick={() => onNavigate('customization')}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors text-left cursor-pointer"
                type="button"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">no_meals</span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-label-lg text-label-lg text-on-surface block truncate">
                      Notas de cocina por defecto
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant block truncate">
                      "Sin cebolla de rama", salsas aparte, etc.
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
                  chevron_right
                </span>
              </button>

              <button
                onClick={() => onNavigate('invoice')}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors text-left cursor-pointer"
                type="button"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">receipt</span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-label-lg text-label-lg text-on-surface block truncate">
                      Facturación y Comprobantes
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant block">
                      Historial electrónico DIAN
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
                  chevron_right
                </span>
              </button>

              <button
                onClick={() => onNavigate('chat')}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors text-left cursor-pointer"
                type="button"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-tertiary-container/15 flex items-center justify-center text-tertiary flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">support_agent</span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-label-lg text-label-lg text-on-surface block truncate">
                      Línea de Soporte Neiva
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant block">
                      Atención con un asesor local 24/7
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
                  chevron_right
                </span>
              </button>
            </div>
          </div>

          {/* 6. Session & Account Actions */}
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => triggerToast('Sesión verificada en Neiva')}
              className="w-full py-3 px-space-md rounded-xl bg-error-container/30 hover:bg-error-container/60 text-error font-label-lg text-label-lg flex items-center justify-center gap-2 transition-colors active:scale-[0.98] cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
              <span>Cerrar sesión en este dispositivo</span>
            </button>
            <div className="text-center flex flex-col items-center gap-0.5 py-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase font-semibold">
                Antojo-Virtual • Versión 2.4.0
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Hecho con sabor en Neiva, Huila ☀️🇨🇴
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
