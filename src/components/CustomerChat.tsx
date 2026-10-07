import React, { useState } from 'react';
import { CustomerScreen } from './CustomerHome';

interface CustomerChatProps {
  onNavigate: (screen: CustomerScreen) => void;
}

export const CustomerChat: React.FC<CustomerChatProps> = ({ onNavigate }) => {
  const [channel, setChannel] = useState<'restaurant' | 'driver' | 'support'>('restaurant');
  const [comandaModalOpen, setComandaModalOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [recording, setRecording] = useState(false);
  const [extraMessages, setExtraMessages] = useState<{ text: string; time: string }[]>([]);

  const handleSend = () => {
    if (!chatInput.trim()) return;
    setExtraMessages((prev) => [...prev, { text: chatInput.trim(), time: '8:41 PM' }]);
    setChatInput('');
  };

  const getPlaceholder = () => {
    if (channel === 'restaurant') return 'Mensaje para La Esquina del Sabor...';
    if (channel === 'driver') return 'Escribe a Carlos (Repartidor en moto)...';
    return 'Describe tu problema al Soporte Antojo Neiva...';
  };

  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen flex flex-col max-w-md mx-auto relative shadow-2xl">
      <header className="sticky top-0 w-full z-40 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 px-space-md flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm min-w-0 flex-1">
            <button
              aria-label="Volver"
              onClick={() => onNavigate('tracking')}
              className="w-11 h-11 -ml-1.5 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors active:scale-95 flex-shrink-0 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-headline-sm overflow-hidden shadow-sm">
                <span className="material-symbols-outlined text-[22px]">storefront</span>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-tertiary rounded-full border-2 border-surface"></span>
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight">
                Chat del Pedido #AV-1082
              </h1>
              <div className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                <p className="font-body-sm text-body-sm text-tertiary font-semibold truncate">
                  En vivo{' '}
                  <span className="text-on-surface-variant font-normal">
                    • La Esquina del Sabor
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-space-xs flex-shrink-0">
            <button
              aria-label="Llamar al restaurante o soporte"
              className="w-11 h-11 rounded-full flex items-center justify-center text-primary hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors active:scale-95 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">call</span>
            </button>
            <button
              aria-label="Más opciones de pedido"
              onClick={() => setComandaModalOpen(true)}
              className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors active:scale-95 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">more_vert</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full pb-36 bg-surface">
        {/* Pinned Order & Context Bar */}
        <section className="sticky top-16 z-30 bg-surface/95 backdrop-blur-md shadow-sm">
          <div className="px-space-md pt-space-xs pb-space-sm flex items-center gap-space-xs overflow-x-auto no-scrollbar">
            <button
              onClick={() => setChannel('restaurant')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm flex-shrink-0 transition-transform active:scale-95 cursor-pointer ${
                channel === 'restaurant'
                  ? 'bg-primary-fixed text-on-primary-fixed'
                  : 'bg-surface-container-high text-on-surface-variant'
              }`}
              type="button"
            >
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="font-label-md text-label-md font-bold">Restaurante</span>
              <span className="font-label-sm text-label-sm bg-surface-container-lowest text-primary px-1.5 py-0.5 rounded-full">
                En línea
              </span>
            </button>

            <button
              onClick={() => setChannel('driver')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full flex-shrink-0 transition-colors active:scale-95 cursor-pointer ${
                channel === 'driver'
                  ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                  : 'bg-surface-container-high text-on-surface-variant'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[15px] text-tertiary">
                two_wheeler
              </span>
              <span className="font-label-md text-label-md">Carlos B. (Moto)</span>
            </button>

            <button
              onClick={() => setChannel('support')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full flex-shrink-0 transition-colors active:scale-95 cursor-pointer ${
                channel === 'support'
                  ? 'bg-error-container text-on-error-container'
                  : 'bg-surface-container-high text-on-surface-variant'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[15px] text-secondary">
                support_agent
              </span>
              <span className="font-label-md text-label-md">Soporte Neiva</span>
            </button>
          </div>

          <div className="mx-space-md mb-2 bg-surface-container-lowest rounded-xl p-space-sm shadow-sm">
            <div className="flex items-center justify-between gap-space-xs">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed flex-shrink-0">
                  <span className="material-symbols-outlined text-[18px]">lunch_dining</span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                      #AV-1082
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">
                      En Camino
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    2 ítems • $38.000 COP • Cra 5 # 14-22
                  </p>
                </div>
              </div>
              <button
                onClick={() => setComandaModalOpen(true)}
                className="px-2.5 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1 hover:bg-surface-container-highest transition-colors active:scale-95 flex-shrink-0 cursor-pointer"
                type="button"
              >
                <span>Comanda</span>
                <span className="material-symbols-outlined text-[16px]">receipt_long</span>
              </button>
            </div>

            <div className="mt-2 pt-2 bg-surface-container-low rounded-lg px-2.5 py-1.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[16px] animate-pulse">
                  timer
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  Llegada estimada: <strong className="font-headline-sm">8:42 PM</strong>
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-tertiary font-bold">
                ~4 min restantes
              </span>
            </div>
          </div>
        </section>

        {/* Chat Scroll Canvas */}
        <section className="flex flex-col px-space-md py-space-sm space-y-3">
          <div className="flex items-center justify-center my-1">
            <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold tracking-wide">
              Hoy, 8:20 PM • Neiva, Huila
            </span>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-surface-container-low rounded-xl p-3 shadow-sm flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[16px]">soup_kitchen</span>
              </div>
              <div className="flex-1">
                <p className="font-body-sm text-body-sm text-on-surface leading-tight">
                  <strong>Pedido confirmado</strong> por{' '}
                  <span className="font-semibold text-primary">La Esquina del Sabor</span>. La
                  cocina inició la preparación de tu Hamburguesa Artesanal Doble Carne.
                </p>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block">
                  8:20 PM
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="max-w-[85%] bg-primary-container text-on-primary-container rounded-2xl rounded-tr-sm p-3.5 shadow-sm">
              <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                Buenas noches, por favor asegúrense de que la carne sea término 3/4 bien asadita y
                recuerden la salsa tártara aparte, gracias! 🍔
              </p>
            </div>
            <div className="flex items-center gap-1 mt-1 mr-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">8:22 PM</span>
              <span className="material-symbols-outlined text-[14px] text-tertiary">done_all</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 max-w-[90%]">
            <div className="relative flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold shadow-sm overflow-hidden">
                <img
                  alt="Chef Parrillero"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNWst-SM8yLEHgj6Ge_7sqShOuNG5xGkfYWMLSf8TzcXE_7wwjPb-CSAzKMGLpKpax4FMPEb1M0n8GUOUecQ3YyLCceinTN2EkLS1gxtdxXRik-dtDVjgRxfUIHYunuCxxWbsuunWoXsxx0qkg8_O_O2ZA6cPjPhu1-uqQoEhU1pd4PXRhbOEK7wQK_63U3WL0GdjDmvasXUU0D5jRel24juPUwSk-D7ToEjuepRi_AytNWZtAdGZ6WA"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-tertiary"></span>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-surface-container-lowest text-on-surface rounded-2xl rounded-tl-sm p-3.5 shadow-sm space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-label-md text-label-md font-bold text-primary">
                    La Esquina del Sabor
                  </span>
                  <span className="font-label-sm text-label-sm bg-surface-container px-1.5 py-0.5 rounded text-on-surface-variant">
                    Chef Parrillero
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  ¡Hola Valentina! Claro que sí, con mucho gusto. Nuestro parrillero ya tomó la
                  comanda: carne 3/4 bien selladita al carbón y empacamos dos tarrinas de salsa
                  tártara de cortesía para que la disfrutes bien fresca.
                </p>
                <div className="rounded-xl overflow-hidden shadow-sm mt-1">
                  <div
                    className="w-full h-32 bg-cover bg-center relative flex items-end p-2"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAorYqt6BLpoYM2SeSNJGHpCNx9fa3zfRhUxNE-Mej4r-HeU3ZngKDg7jsnLWQw3xnt4lcFxjQlIn8tI7yrUdZomy6iFElXeoc7mEskMXbIfHArETaVGPAjvtiVSF3PMC4X6qtSGodA8MVUjdF4AjpJ5m7lvPMe4hskvgNiLDOQgcfTYy1x7NLbbJO2OsAEGjEf2ZMaTGdJvEtOUCbKyRn8aye-7Egwm-ZMW9az_aqi1PGNm1yPedkFqA')`,
                    }}
                  >
                    <div className="bg-inverse-surface/80 backdrop-blur-sm px-2 py-0.5 rounded-md flex items-center gap-1 text-inverse-on-surface">
                      <span className="material-symbols-outlined text-[13px] text-primary-fixed">
                        photo_camera
                      </span>
                      <span className="font-label-sm text-label-sm">
                        Foto de cocina • Tu carne en parrilla
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 ml-1">
                8:25 PM
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-surface-container-low rounded-xl p-3 shadow-sm flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[16px]">sports_motorsports</span>
              </div>
              <div className="flex-1">
                <p className="font-body-sm text-body-sm text-on-surface leading-tight">
                  <strong>Carlos Bermúdez</strong> recogió tu pedido en el restaurante y va en ruta
                  por la Carrera 5 hacia el Parque Santander.
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-tertiary font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
                    GPS Activo
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    • AKT NKD 125 (Placa QWL-44E)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dispatch / Driver Location Mini Map Strip */}
          <div
            onClick={() => onNavigate('tracking')}
            className="w-full bg-surface-container-lowest rounded-2xl p-2.5 shadow-sm space-y-2 cursor-pointer"
          >
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[18px]">near_me</span>
                <span className="font-label-md text-label-md font-bold text-on-surface">
                  Carlos está a 6 cuadras
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Cra 5 con Cll 11
              </span>
            </div>
            <div
              className="w-full h-24 bg-cover bg-center rounded-xl shadow-inner relative flex items-center justify-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnv0uHiskPvIdRXxRzOPHcDPZzFhjpmtL757-7mpvd6EvU3YmxQMGrM9hqK2toG3GLmWUcojFmUkTE0f4AupO99sJlSUGDm57HQa7hCOtjXZLYhUzCDnKdtKu9TR0M-Kyk2U-aMDWB1JXGgoHcdewjngigJKARBPrZvxiASm0NKkRQ8yke_B_DY8Bs2OKi0zRqF1wU8bFem25yRlH_qAYNmJSRPW6E0cZTt7aF2vunWkaV48m9Xo_PaA')`,
              }}
            >
              <div className="px-2.5 py-1 rounded-full bg-inverse-surface/90 text-inverse-on-surface shadow-md flex items-center gap-1.5">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px]">
                  motorcycle
                </span>
                <span className="font-label-sm text-label-sm font-semibold">
                  Carlos en movimiento
                </span>
              </div>
            </div>
          </div>

          {/* Driver Message */}
          <div className="flex items-start gap-2.5 max-w-[90%]">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold shadow-sm overflow-hidden flex-shrink-0">
              <img
                alt="Carlos Bermúdez"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEaDhtj-n86qeykrhBDqSJiD6MbpGS8sdPALfWxCXVnqOEk7F6kaWIuvUL7r1YADYqjVrWvv15e1MjLuZbVQkvRcxdXWxRRYft9JSx1s8u9zb4Y6SztEM2VXwfjORGwlufCEAj7EYAsuvE8NXnBFQtFb2lWL8Qmglh0xTgCYT5jfVkqHZOxAUXhKcxyafZsDBBT5sIMYwuwW31ayb1CEmjEQm7qkcCx98eDmJAIoc9nPdobzVXUZJnIg"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-surface-container-lowest text-on-surface rounded-2xl rounded-tl-sm p-3.5 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-label-md text-label-md font-bold text-secondary">
                    Carlos Bermúdez
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">
                    Repartidor
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  Buenas noches doña Valentina, ya voy por la Carrera 5, llego en aproximadamente 8
                  minutos a la portería del edificio.
                </p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 ml-1">
                8:39 PM
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="max-w-[85%] bg-primary-container text-on-primary-container rounded-2xl rounded-tr-sm p-3.5 shadow-sm">
              <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                ¡Muchas gracias Carlos! Ya avisé en portería para que te autoricen el ingreso. 🙌
              </p>
            </div>
            <div className="flex items-center gap-1 mt-1 mr-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">8:40 PM</span>
              <span className="material-symbols-outlined text-[14px] text-primary">done_all</span>
            </div>
          </div>

          {extraMessages.map((msg, i) => (
            <div key={i} className="flex flex-col items-end">
              <div className="max-w-[85%] bg-primary-container text-on-primary-container rounded-2xl rounded-tr-sm p-3.5 shadow-sm">
                <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                  {msg.text}
                </p>
              </div>
              <div className="flex items-center gap-1 mt-1 mr-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {msg.time}
                </span>
                <span className="material-symbols-outlined text-[14px] text-primary">
                  done_all
                </span>
              </div>
            </div>
          ))}

          {/* Real-time typing bubble */}
          <div className="flex items-center gap-2 max-w-[70%] opacity-90">
            <div className="w-6 h-6 rounded-full bg-secondary-fixed-dim flex items-center justify-center text-on-secondary-fixed text-[11px] font-bold">
              CB
            </div>
            <div className="bg-surface-container-lowest rounded-full px-3 py-1.5 shadow-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant ml-1">
                Carlos escribe...
              </span>
            </div>
          </div>
        </section>

        {/* Bottom Floating Interactive Deck */}
        <section className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-40 bg-surface/95 backdrop-blur-xl pb-4 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
          <div className="px-space-md pt-2.5 pb-1.5 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {[
              '🛵 ¿Por dónde vienes?',
              '🚪 Ya bajé a portería',
              '🥫 ¿Empacaron servilletas?',
              '💳 Billete de $50.000',
            ].map((reply) => (
              <button
                key={reply}
                onClick={() => setChatInput(reply)}
                className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md flex-shrink-0 transition-transform active:scale-95 shadow-sm cursor-pointer"
                type="button"
              >
                {reply}
              </button>
            ))}
          </div>

          <div className="px-space-md py-2 flex items-center gap-2">
            <button
              aria-label="Adjuntar foto o comprobante"
              onClick={() => setChatInput('📸 Comprobante Nequi adjunto')}
              className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center hover:bg-surface-container-highest transition-colors active:scale-95 flex-shrink-0 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">add_photo_alternate</span>
            </button>
            <div className="flex-1 bg-surface-container-lowest rounded-full px-3.5 py-1.5 shadow-sm flex items-center gap-2">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none"
                placeholder={getPlaceholder()}
                type="text"
              />
              <button
                aria-label="Grabar mensaje de voz"
                onClick={() => setRecording(!recording)}
                className={`transition-colors flex-shrink-0 cursor-pointer ${
                  recording ? 'text-error' : 'text-on-surface-variant hover:text-primary'
                }`}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">mic</span>
              </button>
            </div>
            <button
              aria-label="Enviar mensaje"
              onClick={handleSend}
              className="w-11 h-11 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md hover:bg-primary-container transition-transform active:scale-90 flex-shrink-0 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </div>
        </section>

        {/* Comanda Modal */}
        {comandaModalOpen && (
          <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-sm flex flex-col justify-end">
            <div className="max-w-md w-full mx-auto bg-surface rounded-t-3xl flex flex-col p-space-md shadow-xl">
              <div className="w-12 h-1.5 bg-surface-container-highest rounded-full mx-auto mb-3"></div>
              <div className="flex items-center justify-between pb-2">
                <div>
                  <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                    Detalle del Pedido
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Comanda #AV-1082
                  </h2>
                </div>
                <button
                  onClick={() => setComandaModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              <div className="py-2 space-y-2">
                <div className="p-3 bg-surface-container-lowest rounded-xl flex items-start justify-between shadow-sm">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-md text-label-md font-bold text-primary">1x</span>
                      <p className="font-label-lg text-label-lg font-bold text-on-surface">
                        Hamburguesa Artesanal Doble Carne
                      </p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      • Término: 3/4 bien sellado
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      • Queso cheddar doble, tocineta crujiente
                    </p>
                    <p className="font-body-sm text-body-sm text-primary font-medium">
                      • 2x Salsa tártara cortesía en tarrina
                    </p>
                  </div>
                  <span className="font-label-md text-label-md font-bold text-on-surface">
                    $32.000
                  </span>
                </div>

                <div className="p-3 bg-surface-container-lowest rounded-xl flex items-start justify-between shadow-sm">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-md text-label-md font-bold text-primary">1x</span>
                      <p className="font-label-lg text-label-lg font-bold text-on-surface">
                        Coca-Cola Zero 400ml
                      </p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      • Bien fría con vaso y limón
                    </p>
                  </div>
                  <span className="font-label-md text-label-md font-bold text-on-surface">
                    $6.000
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => setComandaModalOpen(false)}
                  className="w-full py-3 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:bg-primary-container active:scale-[0.98] transition-transform cursor-pointer"
                  type="button"
                >
                  Entendido, Volver al Chat
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
