import React, { useState } from 'react';
import { CustomerScreen } from './CustomerHome';

interface CustomerCheckoutProps {
  onNavigate: (screen: CustomerScreen) => void;
}

export const CustomerCheckout: React.FC<CustomerCheckoutProps> = ({ onNavigate }) => {
  const [burgerQty, setBurgerQty] = useState(1);
  const [drinkQty, setDrinkQty] = useState(1);
  const [selectedZone, setSelectedZone] = useState('Neiva Centro');
  const [contactless, setContactless] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<'nequi' | 'cash' | 'card'>('nequi');
  const [cashAmount, setCashAmount] = useState('$50.000 COP');
  const [confirming, setConfirming] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const subtotal = burgerQty * 31500 + drinkQty * 5500;
  const total = subtotal + 1000; // Delivery 3500 - Coupon 3500 + Eco Packaging 1000

  const handleConfirmOrder = () => {
    setConfirming(true);
    setTimeout(() => {
      setToastMsg('¡Pedido #AV-1082 enviado a cocina!');
      setTimeout(() => {
        setConfirming(false);
        onNavigate('tracking');
      }, 1200);
    }, 800);
  };

  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen flex flex-col max-w-md mx-auto relative shadow-2xl">
      <header className="sticky top-0 w-full z-40 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 px-space-md flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm min-w-0 flex-1">
            <button
              aria-label="Volver"
              onClick={() => onNavigate('customization')}
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
              onClick={() => onNavigate('profile')}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full pb-40 bg-surface">
        {toastMsg && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-4 py-2 rounded-full font-label-md text-label-md shadow-xl flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">
              check_circle
            </span>
            <span>{toastMsg}</span>
          </div>
        )}

        {/* Local Activo y Estimación */}
        <section className="px-space-md py-space-sm bg-surface-container-low shadow-sm">
          <div className="flex items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]">storefront</span>
              </div>
              <div className="min-w-0">
                <p className="font-headline-sm text-headline-sm text-on-surface truncate">
                  La Esquina del Sabor
                </p>
                <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="inline-block w-2 h-2 rounded-full bg-tertiary"></span>
                  <span>Neiva Centro</span>
                  <span>•</span>
                  <span className="flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[13px]">timer</span>
                    25-35 min
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2.5 py-1 rounded-full flex items-center gap-1 flex-shrink-0">
              <span className="material-symbols-outlined text-[14px]">local_shipping</span>
              <span>Abierto</span>
            </div>
          </div>
        </section>

        {/* Banner de Descuento */}
        <div className="mx-space-md mt-space-sm p-3 rounded-lg bg-tertiary/10 flex items-center justify-between gap-space-sm shadow-sm">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[16px]">celebration</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface truncate">
              Cupón <strong className="font-label-md text-tertiary">PRIMERAORDEN</strong> aplicado
              (-$3.500 COP)
            </p>
          </div>
          <span className="material-symbols-outlined text-tertiary text-[18px]">verified</span>
        </div>

        {/* Sección 1: Resumen de Ítems */}
        <section className="mt-space-md px-space-md flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1.5">
              <span>Tus Antojos</span>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">
                {burgerQty + drinkQty} ítems
              </span>
            </h2>
            <button
              onClick={() => onNavigate('home')}
              className="text-primary font-label-md text-label-md flex items-center gap-1 active:opacity-75 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">delete_sweep</span>
              <span>Vaciar</span>
            </button>
          </div>

          {/* Ítem 1 */}
          <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-3">
            <div className="flex items-start justify-between gap-space-sm">
              <div className="flex gap-3 min-w-0">
                <img
                  alt="Hamburguesa Artesanal Doble Carne"
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0 shadow-sm"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB4yvV-f6WMzqJQvK7eIkZxTaaRgdwfLi0M2CGJ5n8R58qap5BJ7NXemFDUQ2DcV4DSypiDc_ZvMikA7tH_LQZsFlvVtqfCkJONm0UCasE_gAVJupMgC-LoXcM6CjFjUkWs4tkrlpNrbEO50CJp_LytN-5Vr8GBvmtgA7cJ0ZVngY1oco1GtVqgCAtAu9dTuC73nkshlZQ6Sa2rtC6Fuqc51oXiQ7K5Y_sPVtoT323A3xGrewFdx876w"
                />
                <div className="min-w-0">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                    Hamburguesa Artesanal Doble Carne
                  </h3>
                  <p className="font-label-md text-label-md text-primary">$31.500 COP</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                    (Base: $24.000 COP)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  aria-label="Editar adicionales"
                  onClick={() => onNavigate('customization')}
                  className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant active:scale-95 cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                </button>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
              <div className="flex items-center justify-between text-[13px]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">
                    add_circle
                  </span>
                  Doble Queso Mozzarella
                </span>
                <span className="font-label-sm text-label-sm text-on-surface">+$3.500 COP</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">
                    add_circle
                  </span>
                  Tocineta Ahumada Crujiente
                </span>
                <span className="font-label-sm text-label-sm text-on-surface">+$4.000 COP</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    check
                  </span>
                  Salsa Tártara Especial de Ajo
                </span>
                <span className="font-label-sm text-label-sm text-tertiary">Gratis</span>
              </div>
              <div className="flex items-center justify-between text-[13px] text-on-surface-variant/80">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-error">
                    remove_circle
                  </span>
                  Sin cebolla
                </span>
                <span className="font-label-sm text-label-sm">Excluido</span>
              </div>
              <div className="mt-1 pt-1.5 border-t border-surface-container flex items-start gap-1.5 text-[12px] text-on-surface">
                <span className="material-symbols-outlined text-[15px] text-primary flex-shrink-0">
                  sticky_note_2
                </span>
                <span className="italic font-body-sm">"Término 3/4 bien asadita por favor"</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Cantidad
              </span>
              <div className="flex items-center gap-3 bg-surface-container rounded-full px-2 py-1 shadow-inner">
                <button
                  onClick={() => setBurgerQty((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 rounded-full bg-surface-container-lowest text-on-surface flex items-center justify-center active:scale-95 shadow-sm cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">remove</span>
                </button>
                <span className="font-headline-sm text-headline-sm text-on-surface px-1">
                  {burgerQty}
                </span>
                <button
                  onClick={() => setBurgerQty((q) => q + 1)}
                  className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-95 shadow-sm cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                </button>
              </div>
            </div>
          </article>

          {/* Ítem 2 */}
          <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-3">
            <div className="flex items-start justify-between gap-space-sm">
              <div className="flex gap-3 min-w-0">
                <img
                  alt="Coca-Cola Zero 400ml"
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0 shadow-sm"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg3UkSZVXgsqckCNk6d0d3qej8wcMg72azvoaQ9LNwKV1RMubfrNxNvocPNSWXcOFrkGKJTuYTUGm757NLxriGrz0KC0V7ErNICrO90RIT0Xa-T6TkMwYM09A4hCQeasRZbVbntqzR4z58saa2Sxvk4XKquAjm0eXwUF-v0AncZc36keXnh6XpirxOIHESZULDqIuS8rXETTgqkfFLkJ-r-_ImxYPARC7s0-4tZyc4wBOVzhWLUdKPhQ"
                />
                <div className="min-w-0">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                    Coca-Cola Zero 400ml
                  </h3>
                  <p className="font-label-md text-label-md text-primary">$5.500 COP</p>
                  <div className="flex items-center gap-1 text-[12px] text-tertiary mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">ac_unit</span>
                    <span>Fría de nevera</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Cantidad
              </span>
              <div className="flex items-center gap-3 bg-surface-container rounded-full px-2 py-1 shadow-inner">
                <button
                  onClick={() => setDrinkQty((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 rounded-full bg-surface-container-lowest text-on-surface flex items-center justify-center active:scale-95 shadow-sm cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">remove</span>
                </button>
                <span className="font-headline-sm text-headline-sm text-on-surface px-1">
                  {drinkQty}
                </span>
                <button
                  onClick={() => setDrinkQty((q) => q + 1)}
                  className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-95 shadow-sm cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                </button>
              </div>
            </div>
          </article>

          <button
            onClick={() => onNavigate('home')}
            className="w-full py-3 px-4 rounded-xl bg-surface-container-low text-primary font-headline-sm text-headline-sm flex items-center justify-center gap-2 hover:bg-surface-container active:scale-[0.99] transition-all shadow-sm cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">add_circle_outline</span>
            <span>Agregar más antojos del local</span>
          </button>
        </section>

        {/* Sección 2: Dirección de Entrega */}
        <section className="mt-space-lg px-space-md flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-[20px]">
                location_on
              </span>
              <span>Dirección de Entrega</span>
            </h2>
            <button
              onClick={() => onNavigate('profile')}
              className="text-primary font-label-md text-label-md active:underline cursor-pointer"
              type="button"
            >
              Cambiar
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[22px]">home_pin</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                    {selectedZone}
                  </span>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed">
                    Principal
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface mt-0.5 font-semibold">
                  Cra 5 # 14-22, Apto 302
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[15px] text-tertiary">
                    near_me
                  </span>
                  Frente al Parque Santander, reja blanca
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-1.5">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Otros barrios guardados
              </label>
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {['Neiva Centro', 'Quirinal (Cra 8)', 'Altico (Calle 7)', 'Las Granjas'].map(
                  (zone) => (
                    <button
                      key={zone}
                      onClick={() => setSelectedZone(zone)}
                      className={`px-3 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap cursor-pointer ${
                        selectedZone === zone
                          ? 'bg-primary text-on-primary shadow-sm'
                          : 'bg-surface-container text-on-surface-variant'
                      }`}
                      type="button"
                    >
                      {zone}
                    </button>
                  )
                )}
              </div>
            </div>

            <label className="mt-1 pt-3 border-t border-surface-container flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">meeting_room</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">
                    Entregar en portería / sin contacto
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
                    El domiciliario dejará el paquete en recepción
                  </p>
                </div>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <input
                  checked={contactless}
                  onChange={() => setContactless(!contactless)}
                  className="sr-only peer"
                  type="checkbox"
                />
                <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </div>
            </label>
          </div>
        </section>

        {/* Sección 3: Métodos de Pago */}
        <section className="mt-space-lg px-space-md flex flex-col gap-space-sm">
          <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary text-[20px]">payments</span>
            <span>Forma de Pago</span>
          </h2>

          <div className="flex flex-col gap-space-sm">
            {/* Opción 1: Nequi */}
            <div
              onClick={() => setPaymentMethod('nequi')}
              className={`bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all cursor-pointer relative overflow-hidden ${
                paymentMethod === 'nequi'
                  ? 'bg-gradient-to-r from-primary-fixed/20 to-transparent'
                  : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-purple-950 text-white flex items-center justify-center font-headline-sm font-bold flex-shrink-0 shadow-sm">
                    <span className="text-[13px] tracking-tight">Nequi</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-headline-sm text-headline-sm text-on-surface">
                        Nequi / Daviplata
                      </p>
                      <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full">
                        Recomendado
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Transferencia directa sin comisión
                    </p>
                  </div>
                </div>
                <span
                  className={`material-symbols-outlined text-[24px] ${
                    paymentMethod === 'nequi' ? 'text-primary' : 'text-outline'
                  }`}
                >
                  {paymentMethod === 'nequi' ? 'radio_button_checked' : 'radio_button_unchecked'}
                </span>
              </div>

              <div className="mt-3 pt-3 border-t border-surface-container flex flex-col gap-2.5">
                <div className="bg-surface-container-low rounded-lg p-3 flex items-center justify-between">
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                      Número para transferir
                    </p>
                    <p className="font-headline-sm text-headline-sm text-on-surface tracking-wide">
                      318 452 9011
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                      La Esquina del Sabor — NIT/Cédula 1075...
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigator.clipboard?.writeText('3184529011');
                      setToastMsg('Número Nequi copiado');
                      setTimeout(() => setToastMsg(null), 2000);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md flex items-center gap-1 active:scale-95 shadow-sm cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">content_copy</span>
                    <span>Copiar</span>
                  </button>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm bg-surface-container/50 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    upload_file
                  </span>
                  <span className="text-[12px]">
                    Podrás adjuntar tu captura o mostrarla al repartidor al llegar.
                  </span>
                </div>
              </div>
            </div>

            {/* Opción 2: Efectivo */}
            <div
              onClick={() => setPaymentMethod('cash')}
              className={`bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all cursor-pointer ${
                paymentMethod === 'cash'
                  ? 'bg-gradient-to-r from-primary-fixed/20 to-transparent'
                  : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">local_atm</span>
                  </div>
                  <div>
                    <p className="font-headline-sm text-headline-sm text-on-surface">
                      Efectivo contraentrega
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Pagas al recibir tu domicilio en mano
                    </p>
                  </div>
                </div>
                <span
                  className={`material-symbols-outlined text-[24px] ${
                    paymentMethod === 'cash' ? 'text-primary' : 'text-outline'
                  }`}
                >
                  {paymentMethod === 'cash' ? 'radio_button_checked' : 'radio_button_unchecked'}
                </span>
              </div>

              <div className="mt-3 pt-3 border-t border-surface-container flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                  ¿Con cuánto vas a pagar? (Para llevarte cambio)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Exacto ($38k)', '$50.000 COP', '$100.000 COP'].map((amt) => (
                    <button
                      key={amt}
                      onClick={(e) => {
                        e.stopPropagation();
                        setPaymentMethod('cash');
                        setCashAmount(amt);
                      }}
                      className={`py-2 px-2 rounded-lg font-label-md text-label-md text-center cursor-pointer ${
                        paymentMethod === 'cash' && cashAmount === amt
                          ? 'bg-primary text-on-primary'
                          : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                      }`}
                      type="button"
                    >
                      {amt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Opción 3: Datáfono */}
            <div
              onClick={() => setPaymentMethod('card')}
              className={`bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all cursor-pointer ${
                paymentMethod === 'card'
                  ? 'bg-gradient-to-r from-primary-fixed/20 to-transparent'
                  : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-secondary-container text-on-secondary-fixed flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">credit_card</span>
                  </div>
                  <div>
                    <p className="font-headline-sm text-headline-sm text-on-surface">
                      Datáfono contraentrega
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Tarjeta Débito, Crédito o Contactless
                    </p>
                  </div>
                </div>
                <span
                  className={`material-symbols-outlined text-[24px] ${
                    paymentMethod === 'card' ? 'text-primary' : 'text-outline'
                  }`}
                >
                  {paymentMethod === 'card' ? 'radio_button_checked' : 'radio_button_unchecked'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 4: Resumen de Cuenta */}
        <section className="mt-space-lg px-space-md flex flex-col gap-space-sm">
          <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary text-[20px]">receipt_long</span>
            <span>Resumen de Cuenta</span>
          </h2>
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-on-surface-variant font-body-md text-body-md">
              <span>Subtotal productos ({burgerQty + drinkQty})</span>
              <span className="font-label-lg text-label-lg text-on-surface">
                ${subtotal.toLocaleString('es-CO')} COP
              </span>
            </div>
            <div className="flex items-center justify-between text-on-surface-variant font-body-md text-body-md">
              <span className="flex items-center gap-1">
                <span>Domicilio ({selectedZone})</span>
                <span className="material-symbols-outlined text-[16px] text-outline">info</span>
              </span>
              <span className="font-label-lg text-label-lg text-on-surface">$3.500 COP</span>
            </div>
            <div className="flex items-center justify-between text-on-surface-variant font-body-md text-body-md">
              <span className="flex items-center gap-1">
                <span>Empaque térmico ecológico</span>
                <span className="material-symbols-outlined text-[16px] text-tertiary">eco</span>
              </span>
              <span className="font-label-lg text-label-lg text-on-surface">$1.000 COP</span>
            </div>
            <div className="flex items-center justify-between font-body-md text-body-md text-tertiary">
              <span className="flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-[16px]">local_offer</span>
                <span>Descuento cupón (Envío gratis)</span>
              </span>
              <span className="font-label-lg text-label-lg text-tertiary">-$3.500 COP</span>
            </div>
            <div className="pt-3 mt-1 border-t border-surface-container flex items-baseline justify-between">
              <div>
                <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Total a Pagar
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                  Impuestos y tarifas incluidas
                </p>
              </div>
              <p className="font-metric-number text-metric-number text-primary font-extrabold tracking-tight tabular-nums">
                ${total.toLocaleString('es-CO')}{' '}
                <span className="text-[14px] font-bold text-on-surface-variant">COP</span>
              </p>
            </div>
          </div>
        </section>

        {/* Sticky Bottom Checkout Bar */}
        <aside className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-40 bg-surface/95 backdrop-blur-xl border-t border-surface-container-high px-space-md py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Total a debitar / entregar
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold tabular-nums">
                    ${total.toLocaleString('es-CO')} COP
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    ({burgerQty + drinkQty} ítems)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-label-sm text-tertiary bg-tertiary-fixed px-2 py-0.5 rounded-full">
                <span className="material-symbols-outlined text-[13px]">lock</span>
                <span>Pago Seguro</span>
              </div>
            </div>

            <button
              onClick={handleConfirmOrder}
              disabled={confirming}
              className="w-full py-3.5 px-4 rounded-xl bg-primary-container text-on-primary font-headline-sm text-headline-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:bg-primary active:scale-[0.98] transition-all cursor-pointer"
              type="button"
            >
              {confirming ? (
                <>
                  <span className="inline-block animate-spin material-symbols-outlined text-[20px]">
                    progress_activity
                  </span>
                  <span>Despachando a Cocina...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">restaurant</span>
                  <span>Confirmar Pedido y Enviar a Cocina</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </>
              )}
            </button>
            <p className="font-body-sm text-body-sm text-center text-on-surface-variant text-[11px] leading-tight">
              Al confirmar, el restaurante comenzará a preparar tu pedido inmediatamente.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
};
