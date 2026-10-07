import React, { useState } from 'react';
import { CustomerScreen } from './CustomerHome';

interface CustomerTrackingProps {
  onNavigate: (screen: CustomerScreen) => void;
}

export const CustomerTracking: React.FC<CustomerTrackingProps> = ({ onNavigate }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [recenterPulse, setRecenterPulse] = useState(false);
  const [chatDrawerOpen, setChatDrawerOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'driver',
      text: '¡Hola! Voy en camino por la Cra 5. Llego en aprox. 14 minutos con tu pedido caliente.',
      time: '8:37 PM',
    },
  ]);

  const sendMessage = (textToSend?: string) => {
    const msg = (textToSend ?? chatInput).trim();
    if (!msg) return;
    setMessages((prev) => [...prev, { sender: 'user', text: msg, time: 'Ahora' }]);
    setChatInput('');
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'driver',
          text: '¡Entendido! Ya casi cruzo la Carrera 5 hacia el Parque Santander. 👌',
          time: 'Ahora',
        },
      ]);
    }, 1000);
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
              onClick={() => onNavigate('rating')}
              className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold cursor-pointer"
              type="button"
            >
              Simular Entrega
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
        {/* Live Status Hero Banner */}
        <section className="px-gutter-sm pt-space-sm pb-space-xs">
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
            <div className="flex items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-xs min-w-0">
                <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
                  Pedido #AV-1082
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                  En Camino
                </span>
              </div>
              <button
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
                <span>8:42 PM</span>
              </button>
            </div>
            <div className="flex items-baseline justify-between mt-0.5">
              <div>
                <span className="block font-label-md text-label-md text-on-surface-variant">
                  Tiempo estimado de entrega
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-metric-number text-metric-number text-primary">
                    12 - 18
                  </span>
                  <span className="font-headline-md text-headline-md text-primary font-bold">
                    min
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-2 py-1 rounded-lg bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm font-bold">
                  Tráfico Fluido • Cra 5
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map Viewport of Neiva */}
        <section className="px-gutter-sm py-space-xs">
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-sm bg-surface-container">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpmuMlaLa-qcDU02dk-ZoYp-kAdmqtzkYrz_bgASpr6yky_sB_v_Vvxu4zBBWtp-92LGwhjKMMfZpRgufQu8Y97e7WkuYBbX-zbuqgFspBuOD2w6SUp-U9w4dm8nHi6Yq2b5zCTTDd5_0lOCaDqVLCuuWnRn9UvsQwDp46wlwJsstnvITQ79L8nUVAyRsLqyG9B7dDNU8wuTuVoG8BbPoLQnMVHlYzFvaXc5rV11bWq5Pl22W2IEKNUg')`,
              }}
            ></div>

            <div className="absolute inset-0 bg-surface/10 pointer-events-none">
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 360 288"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-20 20 C60 50, 40 180, 20 310"
                  opacity="0.65"
                  stroke="#dae2fd"
                  strokeLinecap="round"
                  strokeWidth="26"
                ></path>
                <path
                  className="animate-pulse"
                  d="M290 55 L250 110 L180 145 L130 205"
                  stroke="#cc4900"
                  strokeDasharray="7 5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="5"
                ></path>
                <path
                  d="M290 55 L250 110 L200 132"
                  opacity="0.4"
                  stroke="#00855b"
                  strokeLinecap="round"
                  strokeWidth="5"
                ></path>
              </svg>

              {/* Restaurant Pin */}
              <div className="absolute top-[42px] right-[54px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-surface-container-lowest px-2 py-0.5 rounded shadow-sm text-on-surface font-label-sm text-label-sm font-bold whitespace-nowrap mb-1">
                  La Esquina del Sabor
                </div>
                <div className="w-7 h-7 rounded-full bg-on-surface flex items-center justify-center text-surface shadow-md">
                  <span className="material-symbols-outlined text-[16px]">storefront</span>
                </div>
              </div>

              {/* Animated Courier Pin */}
              <div
                className={`absolute top-[125px] left-[188px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-300 ${
                  recenterPulse ? 'scale-125' : ''
                }`}
              >
                <div className="flex items-center gap-1 bg-primary text-on-primary px-2 py-0.5 rounded-full shadow-md text-label-sm font-label-sm font-bold animate-bounce">
                  <span>Carlos B.</span>
                  <span className="text-primary-fixed text-[10px]">• 32 km/h</span>
                </div>
                <div className="relative mt-1">
                  <span className="absolute inset-0 rounded-full bg-primary-container animate-ping opacity-75"></span>
                  <div className="relative w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[18px]">two_wheeler</span>
                  </div>
                </div>
              </div>

              {/* Customer Destination Pin */}
              <div className="absolute bottom-[44px] left-[98px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-tertiary text-on-tertiary px-2 py-0.5 rounded shadow-sm text-label-sm font-label-sm font-bold mb-1">
                  Tu Ubicación
                </div>
                <div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-3 right-3 flex flex-col gap-2">
              <button
                aria-label="Centrar en el domiciliario"
                onClick={() => {
                  setRecenterPulse(true);
                  setTimeout(() => setRecenterPulse(false), 400);
                }}
                className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface shadow-md flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">
                  my_location
                </span>
              </button>
            </div>

            <div className="absolute top-3 left-3 bg-surface-container-lowest/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                GPS Activo • Huila Centro
              </span>
            </div>
          </div>
        </section>

        {/* Courier Profile Card */}
        <section className="px-gutter-sm py-space-xs">
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="relative flex-shrink-0">
                  <img
                    alt="Carlos Bermúdez"
                    className="w-12 h-12 rounded-full object-cover shadow-sm bg-surface-container"
                    referrerPolicy="no-referrer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqsjb7i2fPLgBnl0NL9GU4mbQ7f5uQ7WTbON91O47T60q6LB_cNkDcLoKqCLM3pw4d6iFvPp5e_bkCfWdYLBDPCtkVXepjtC_dizyZosMDjRKbOTsk3RCsg-bYLOXPdQhqYCO6NRHRt3cUIoCQXz7SPC6rFdd0PvZUCeSEG_QQy2qR9ULSBiGPGarZt5oPELMXQoCjrmgDh8VOC3q9g6ScPHRDVUqQ4qZvgUw82_bMxAcmKvEdZu5D8Q"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary">
                    <span className="material-symbols-outlined text-[10px]">verified</span>
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">
                      Carlos Bermúdez
                    </h2>
                    <span className="inline-flex items-center text-primary text-[12px] font-bold">
                      <span className="material-symbols-outlined text-[14px]">star</span>
                      4.9
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    AKT 125 Negra • Placa{' '}
                    <span className="font-semibold text-on-surface">HUI-45F</span>
                  </p>
                  <p className="font-label-sm text-label-sm text-secondary">
                    320 entregas completadas con éxito
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => onNavigate('chat')}
                  className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-surface-container-highest active:scale-95 transition-transform cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px] text-primary">call</span>
                </button>
                <button
                  aria-label="Abrir chat en vivo con domiciliario"
                  onClick={() => onNavigate('chat')}
                  className="relative w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-tertiary ring-2 ring-surface-container-lowest"></span>
                </button>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-lg p-space-sm flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 flex-shrink-0">
                room_service
              </span>
              <div className="text-left min-w-0 flex-1">
                <span className="font-label-sm text-label-sm text-on-surface font-bold block uppercase tracking-wide">
                  Instrucción para entrega
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  "Dejar en portería frente al Parque Santander con el celador de turno."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Phase Order Stepper Card */}
        <section className="px-gutter-sm py-space-xs">
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
            <div className="flex items-center justify-between mb-space-sm">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Progreso de la Orden
              </h3>
              <span className="font-label-sm text-label-sm font-semibold text-primary">
                Paso 4 de 5
              </span>
            </div>

            <div className="relative flex flex-col gap-0 pl-1">
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-surface-container-highest pointer-events-none"></div>

              {/* 1. Confirmado */}
              <div className="relative flex items-start gap-3 pb-4">
                <div className="relative z-10 w-9 h-9 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </div>
                <div className="pt-1 min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">
                      Pedido Confirmado
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      8:18 PM
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Restaurante aceptó tu orden y validó pago
                  </p>
                </div>
              </div>

              {/* 2. En Cocina */}
              <div className="relative flex items-start gap-3 pb-4">
                <div className="relative z-10 w-9 h-9 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">skillet</span>
                </div>
                <div className="pt-1 min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">
                      En Cocina y Fogón
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      8:24 PM
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Preparando carne artesanal a término perfecto
                  </p>
                </div>
              </div>

              {/* 3. Empacado */}
              <div className="relative flex items-start gap-3 pb-4">
                <div className="relative z-10 w-9 h-9 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                </div>
                <div className="pt-1 min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">
                      Empacado &amp; Sellado
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      8:36 PM
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Empaque térmico con sellos de garantía listos
                  </p>
                </div>
              </div>

              {/* 4. En Camino (ACTIVE) */}
              <div className="relative flex items-start gap-3 pb-4">
                <div className="relative z-10 w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-[18px] animate-pulse">
                    sports_motorsports
                  </span>
                </div>
                <div className="pt-1 min-w-0 flex-1 bg-surface-container-low p-2.5 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg font-bold text-primary">
                      En Camino / En Ruta
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      Activo
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface font-semibold mt-0.5">
                    Carlos B. recogió tu pedido hace 6 min
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                    Avanzando por Carrera 5 en dirección a Parque Santander
                  </p>
                </div>
              </div>

              {/* 5. Entregado */}
              <div className="relative flex items-start gap-3">
                <div className="relative z-10 w-9 h-9 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[18px]">doorbell</span>
                </div>
                <div className="pt-1 min-w-0 flex-1 opacity-70">
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg font-semibold text-on-surface">
                      Entrega en Destino
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Pendiente
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Confirmación con pin de recibo en portería
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collapsible Order Details Panel */}
        <section className="px-gutter-sm py-space-xs">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
            <button
              aria-expanded={accordionOpen}
              onClick={() => setAccordionOpen(!accordionOpen)}
              className="w-full p-space-md flex items-center justify-between text-left active:bg-surface-container-low transition-colors cursor-pointer"
              type="button"
            >
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                </div>
                <div className="min-w-0">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold block truncate">
                    La Esquina del Sabor
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    2 productos • $38.000 COP
                  </span>
                </div>
              </div>
              <span
                className={`material-symbols-outlined text-[22px] text-on-surface-variant transition-transform duration-200 ${
                  accordionOpen ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>

            {accordionOpen && (
              <div className="px-space-md pb-space-md pt-1 flex flex-col gap-space-sm">
                <div className="space-y-3 pt-2">
                  <div className="flex items-start justify-between gap-space-sm">
                    <div className="flex items-start gap-2.5 min-w-0">
                      <span className="w-6 h-6 rounded bg-surface-container text-primary font-bold text-label-md flex items-center justify-center flex-shrink-0">
                        1x
                      </span>
                      <div className="min-w-0">
                        <span className="font-label-lg text-label-lg text-on-surface font-semibold block">
                          Hamburguesa Artesanal Doble Carne
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Doble Queso Mozzarella, Tocineta Ahumada, Salsa de la Casa
                        </p>
                      </div>
                    </div>
                    <span className="font-label-lg text-label-lg text-on-surface font-bold whitespace-nowrap">
                      $32.000
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-space-sm">
                    <div className="flex items-start gap-2.5 min-w-0">
                      <span className="w-6 h-6 rounded bg-surface-container text-primary font-bold text-label-md flex items-center justify-center flex-shrink-0">
                        1x
                      </span>
                      <div className="min-w-0">
                        <span className="font-label-lg text-label-lg text-on-surface font-semibold block">
                          Coca-Cola Zero 400ml
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Bien fría con hielo sellado
                        </p>
                      </div>
                    </div>
                    <span className="font-label-lg text-label-lg text-on-surface font-bold whitespace-nowrap">
                      $6.000
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Help & Dispute Support Hub */}
        <section className="px-gutter-sm pt-space-xs pb-space-md">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => onNavigate('chat')}
              className="w-full py-3 px-space-md rounded-xl bg-surface-container-high text-on-surface font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 active:scale-98 transition-transform cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px] text-primary">
                support_agent
              </span>
              <span>¿Problemas con el pedido? Soporte Antojo Neiva</span>
            </button>
            <div className="flex items-center justify-center gap-1.5 text-center text-on-surface-variant font-label-sm text-label-sm pt-1">
              <span className="material-symbols-outlined text-[14px]">shield</span>
              <span>Garantía de frescura y puntualidad Antojo-Virtual</span>
            </div>
          </div>
        </section>

        {/* Quick Chat Drawer Modal */}
        {chatDrawerOpen && (
          <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex flex-col justify-end">
            <div className="w-full max-w-md mx-auto bg-surface-container-lowest rounded-t-2xl p-space-md flex flex-col gap-space-sm shadow-xl">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></div>
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    Chat con Carlos Bermúdez
                  </span>
                </div>
                <button
                  onClick={() => setChatDrawerOpen(false)}
                  className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {['Ya bajé a portería', '¿En qué punto vas?', 'Dejar en portería porfa'].map(
                  (txt) => (
                    <button
                      key={txt}
                      onClick={() => sendMessage(txt)}
                      className="px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm whitespace-nowrap active:bg-primary active:text-on-primary cursor-pointer"
                      type="button"
                    >
                      "{txt}"
                    </button>
                  )
                )}
              </div>
              <div className="flex flex-col gap-2.5 h-44 overflow-y-auto p-2 bg-surface-container-low rounded-lg">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`${
                      m.sender === 'user'
                        ? 'self-end bg-primary text-on-primary rounded-tr-none'
                        : 'self-start bg-surface-container-lowest text-on-surface rounded-tl-none'
                    } max-w-[80%] p-2.5 rounded-xl font-body-sm text-body-sm shadow-sm`}
                  >
                    {m.text}
                    <span className="block text-[10px] opacity-75 text-right mt-1">{m.time}</span>
                  </div>
                ))}
              </div>
              <form
                className="flex items-center gap-2 pt-1"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
              >
                <input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none"
                  placeholder="Escribe un mensaje al repartidor..."
                  type="text"
                />
                <button
                  className="w-11 h-11 rounded-lg bg-primary text-on-primary flex items-center justify-center flex-shrink-0 cursor-pointer"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
