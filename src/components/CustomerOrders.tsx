import React, { useState } from 'react';
import { CustomerScreen } from './CustomerHome';

interface CustomerOrdersProps {
  onNavigate: (screen: CustomerScreen) => void;
}

export const CustomerOrders: React.FC<CustomerOrdersProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'activos' | 'anteriores' | 'favoritos' | 'cancelados'>(
    'activos'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [toastStore, setToastStore] = useState<string | null>(null);

  const handleReorder = (storeName: string) => {
    setToastStore(storeName);
    setTimeout(() => setToastStore(null), 2800);
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
              onClick={() => onNavigate('profile')}
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

      <main className="flex-1 flex flex-col relative w-full pb-24 bg-surface">
        <div className="flex flex-col w-full pb-6">
          {/* Sub-Header contextual */}
          <section className="px-space-md pt-space-sm pb-space-xs flex items-center justify-between">
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  Despachos Neiva en vivo
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                Historial de antojos y pedidos registrados
              </p>
            </div>
            <button
              onClick={() => onNavigate('chat')}
              className="h-9 px-3 rounded-full bg-surface-container-high text-on-surface flex items-center gap-1.5 active:scale-95 transition-all shadow-sm cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">
                support_agent
              </span>
              <span className="font-label-md text-label-md">Ayuda</span>
            </button>
          </section>

          {/* Filtros / Tabs */}
          <section className="px-space-md py-space-sm">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
              <button
                onClick={() => setActiveTab('activos')}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full font-label-md text-label-md flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer ${
                  activeTab === 'activos'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-high text-on-surface-variant'
                }`}
                type="button"
              >
                <span>Activos</span>
                <span className="w-4 h-4 rounded-full bg-on-primary/20 text-on-primary text-[10px] flex items-center justify-center font-bold">
                  1
                </span>
              </button>
              <button
                onClick={() => setActiveTab('anteriores')}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full font-label-md text-label-md flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer ${
                  activeTab === 'anteriores'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-high text-on-surface-variant'
                }`}
                type="button"
              >
                <span>Anteriores</span>
                <span className="px-1.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface text-[10px] font-bold">
                  8
                </span>
              </button>
              <button
                onClick={() => setActiveTab('favoritos')}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full font-label-md text-label-md flex items-center gap-1 active:scale-95 transition-all cursor-pointer ${
                  activeTab === 'favoritos'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-high text-on-surface-variant'
                }`}
                type="button"
              >
                <span className="material-symbols-outlined text-[15px] text-primary">favorite</span>
                <span>Favoritos</span>
              </button>
              <button
                onClick={() => setActiveTab('cancelados')}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full font-label-md text-label-md flex items-center gap-1 active:scale-95 transition-all cursor-pointer ${
                  activeTab === 'cancelados'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-high text-on-surface-variant'
                }`}
                type="button"
              >
                <span>Cancelados</span>
              </button>
            </div>
          </section>

          {/* Barra de búsqueda */}
          <section className="px-space-md pt-space-xs pb-space-sm">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-10 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm shadow-sm focus:outline-none focus:bg-surface-container transition-all"
                placeholder="Buscar por restaurante o plato (ej: Picada, Burger)..."
                type="text"
              />
              <button
                aria-label="Filtrar por fecha"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">tune</span>
              </button>
            </div>
          </section>

          {/* Banner de Gamificación */}
          <section className="px-space-md py-space-xs">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-container p-3.5 text-on-primary shadow-sm">
              <div className="relative z-10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-on-primary/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 text-[22px]">
                    🏆
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-headline-sm text-headline-sm text-on-primary">
                        ¡Nivel Comelón Huilense!
                      </span>
                      <span className="font-label-sm text-label-sm bg-on-primary/25 text-on-primary px-1.5 py-0.5 rounded-full">
                        9/10
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-primary/90 truncate">
                      Haz 1 pedido más para ganar cupón de{' '}
                      <strong className="font-bold text-on-primary">$10.000 COP</strong>
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-on-primary text-primary flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">card_giftcard</span>
                  </div>
                </div>
              </div>
              <div className="w-full bg-black/20 h-1.5 rounded-full mt-2.5 overflow-hidden">
                <div className="bg-on-primary h-full rounded-full w-[90%]"></div>
              </div>
            </div>
          </section>

          {/* SECCIÓN 1: Pedido en Curso */}
          <section className="px-space-md pt-space-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-ping"></span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  Pedido en Curso
                </h2>
              </div>
              <span className="font-label-sm text-label-sm text-tertiary bg-tertiary-container/10 px-2 py-0.5 rounded-full font-bold">
                Llega en ~18 min
              </span>
            </div>

            <div className="relative rounded-2xl bg-surface-container-lowest p-4 shadow-md flex flex-col gap-3.5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-symbols-outlined text-[28px]">lunch_dining</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                        La Esquina del Sabor
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant/80">
                        #AV-1082
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 truncate">
                      <span className="material-symbols-outlined text-[14px] text-tertiary">
                        store
                      </span>
                      Sede Centro • Cra 7 # 10-45
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm flex-shrink-0">
                  <span className="material-symbols-outlined text-[14px]">two_wheeler</span>
                  En Camino
                </span>
              </div>

              <div className="bg-surface-container-low rounded-xl p-3 flex flex-col gap-1.5">
                <div className="flex items-start justify-between text-on-surface font-body-sm text-body-sm gap-2">
                  <span className="font-medium text-on-surface leading-tight">
                    1x Hamburguesa Artesanal Doble Carne
                  </span>
                  <span className="text-on-surface-variant flex-shrink-0">$32.000</span>
                </div>
                <p className="font-body-sm text-[11px] text-on-surface-variant/80 -mt-1 pl-4">
                  + Mozzarella fundido, + Tocineta crujiente, Pan Brioche
                </p>
                <div className="flex items-start justify-between text-on-surface font-body-sm text-body-sm gap-2 pt-1">
                  <span className="font-medium text-on-surface leading-tight">
                    1x Coca-Cola Zero 400ml
                  </span>
                  <span className="text-on-surface-variant flex-shrink-0">$6.000</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-on-surface">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Total abonado
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    $38.000 COP
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px] text-secondary">
                    account_balance_wallet
                  </span>
                  <span>Nequi • Pagado</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => onNavigate('tracking')}
                  className="h-11 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">near_me</span>
                  <span>Mapa en Vivo</span>
                </button>
                <button
                  onClick={() => onNavigate('chat')}
                  className="h-11 rounded-xl bg-surface-container-high text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-1.5 active:bg-surface-container-highest transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">chat</span>
                  <span>Chat Repartidor</span>
                </button>
              </div>
            </div>
          </section>

          {/* SECCIÓN 2: Historial de Pedidos Anteriores */}
          <section className="px-space-md pt-space-lg flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Pedidos Anteriores
              </h2>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                8 entregados en Neiva
              </span>
            </div>

            {/* TARJETA HISTORIAL 1 */}
            <article className="rounded-2xl bg-surface-container-lowest p-4 shadow-sm flex flex-col gap-3 transition-all hover:shadow-md">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0 text-on-primary-fixed">
                    <span className="material-symbols-outlined text-[24px]">fastfood</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                      La Esquina del Sabor
                    </h3>
                    <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      Ayer, 8:54 PM • Cra 5 # 14-22
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold flex-shrink-0">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Entregado
                </span>
              </div>

              <div className="text-on-surface font-body-sm text-body-sm flex flex-col gap-0.5">
                <p className="text-on-surface leading-snug">
                  <span className="font-semibold">1x</span> Hamburguesa Artesanal Doble Carne
                  (Término 3/4, Tocineta ahumada)
                </p>
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span>
                    <span className="font-semibold text-on-surface">1x</span> Coca-Cola Zero 400ml
                  </span>
                  <span className="font-label-md text-label-md font-bold text-on-surface">
                    $38.000 COP
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 text-on-surface-variant font-label-sm text-label-sm">
                <div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded-md text-on-surface">
                  <span className="material-symbols-outlined text-[15px] text-primary">star</span>
                  <span className="font-bold">5.0</span>
                  <span className="text-on-surface-variant text-[11px]">(Calificado)</span>
                </div>
                <span className="text-on-surface-variant text-[11px]">Ticket #AV-0941</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => handleReorder('La Esquina del Sabor')}
                  className="flex-1 h-10 rounded-xl bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  <span>Repetir este Antojo</span>
                </button>
                <button
                  aria-label="Ver factura electrónica"
                  onClick={() => onNavigate('invoice')}
                  className="h-10 px-3 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1 active:bg-surface-container-highest transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                    receipt_long
                  </span>
                  <span className="hidden sm:inline">Factura</span>
                </button>
              </div>
            </article>

            {/* TARJETA HISTORIAL 2 */}
            <article className="rounded-2xl bg-surface-container-lowest p-4 shadow-sm flex flex-col gap-3 transition-all hover:shadow-md">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-surface-container-high flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-symbols-outlined text-[24px]">outdoor_grill</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Asados &amp; Carnes El Huilense
                    </h3>
                    <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      Viernes 24 Oct, 1:15 PM • Quirinal
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold flex-shrink-0">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Entregado
                </span>
              </div>

              <div className="text-on-surface font-body-sm text-body-sm flex flex-col gap-0.5">
                <p className="text-on-surface leading-snug">
                  <span className="font-semibold">1x</span> Picada Huilense Tradicional para 2
                  (Chicharrón, costilla, plátano con queso y arepa campesina)
                </p>
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span>
                    <span className="font-semibold text-on-surface">2x</span> Jugo de Cholupa en
                    leche 16oz
                  </span>
                  <span className="font-label-md text-label-md font-bold text-on-surface">
                    $54.500 COP
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 text-on-surface-variant font-label-sm text-label-sm">
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px]">payments</span>
                  <span>Efectivo contra entrega</span>
                </div>
                <div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded-md text-on-surface">
                  <span className="material-symbols-outlined text-[15px] text-primary">star</span>
                  <span className="font-bold">4.8</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => handleReorder('Asados & Carnes El Huilense')}
                  className="flex-1 h-10 rounded-xl bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  <span>Repetir este Antojo</span>
                </button>
                <button
                  aria-label="Ver detalles"
                  onClick={() => onNavigate('invoice')}
                  className="h-10 px-3 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1 active:bg-surface-container-highest transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                    info
                  </span>
                </button>
              </div>
            </article>

            {/* TARJETA HISTORIAL 3 */}
            <article className="rounded-2xl bg-surface-container-lowest p-4 shadow-sm flex flex-col gap-3 transition-all hover:shadow-md">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-surface-container-high flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-symbols-outlined text-[24px]">local_pizza</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Pizzería Artesanal San Pedro
                    </h3>
                    <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      18 Oct, 7:40 PM • Casa Mamá (Altico)
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold flex-shrink-0">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Entregado
                </span>
              </div>

              <div className="text-on-surface font-body-sm text-body-sm flex flex-col gap-0.5">
                <p className="text-on-surface leading-snug">
                  <span className="font-semibold">1x</span> Pizza Familiar 8 Quesos &amp; Albahaca
                  fresca con bordes rellenos de bocadillo veleño
                </p>
                <div className="flex items-center justify-between text-on-surface-variant pt-1">
                  <span className="text-on-surface-variant">Pagado con Daviplata</span>
                  <span className="font-label-md text-label-md font-bold text-on-surface">
                    $46.000 COP
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => handleReorder('Pizzería Artesanal San Pedro')}
                  className="flex-1 h-10 rounded-xl bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  <span>Repetir este Antojo</span>
                </button>
                <button
                  onClick={() => onNavigate('rating')}
                  className="h-10 px-3.5 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 active:bg-surface-container-highest transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    rate_review
                  </span>
                  <span>Calificar</span>
                </button>
              </div>
            </article>

            {/* TARJETA HISTORIAL 4 */}
            <article className="rounded-2xl bg-surface-container-lowest p-4 shadow-sm flex flex-col gap-3 opacity-90">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-surface-container-high flex items-center justify-center flex-shrink-0 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[24px]">bakery_dining</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Arepas del Huila Gourmet
                    </h3>
                    <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      12 Oct, 9:10 PM
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold flex-shrink-0">
                  <span className="material-symbols-outlined text-[14px]">cancel</span>
                  Cancelado
                </span>
              </div>

              <div className="text-on-surface font-body-sm text-body-sm flex flex-col gap-1">
                <p className="text-on-surface-variant leading-snug">
                  2x Arepa de Choclo con Queso Campesino y Mantequilla
                </p>
                <div className="p-2 rounded-lg bg-surface-container text-on-surface-variant font-body-sm text-[12px] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">check</span>
                  <span>Reembolso total aplicado exitosamente a tu Nequi ($18.000 COP)</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="font-label-md text-label-md text-on-surface-variant line-through">
                  $18.000 COP
                </span>
                <button
                  onClick={() => handleReorder('Arepas del Huila Gourmet')}
                  className="h-9 px-4 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 active:bg-surface-container-highest transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    restart_alt
                  </span>
                  <span>Pedir nuevamente</span>
                </button>
              </div>
            </article>
          </section>

          {/* Toast Notification Flotante */}
          {toastStore && (
            <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-2xl shadow-xl flex items-center justify-between gap-3 z-50">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-label-md text-inverse-on-surface font-bold">
                    ¡Antojo añadido al carrito!
                  </span>
                  <span className="font-body-sm text-body-sm text-inverse-on-surface/80 truncate">
                    {toastStore} listo para checkout
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[20px] text-primary-fixed-dim">
                shopping_cart
              </span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
