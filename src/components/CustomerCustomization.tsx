import React, { useState } from 'react';
import { CustomerScreen } from './CustomerHome';

interface CustomerCustomizationProps {
  onNavigate: (screen: CustomerScreen) => void;
}

export const CustomerCustomization: React.FC<CustomerCustomizationProps> = ({ onNavigate }) => {
  const BASE_PRICE = 24000;
  const [quantity, setQuantity] = useState(1);
  const [selectedCheeses, setSelectedCheeses] = useState<number[]>([3500]);
  const [selectedProteins, setSelectedProteins] = useState<number[]>([4000]);
  const [selectedSauce, setSelectedSauce] = useState<number>(0);
  const [exclusions, setExclusions] = useState<{ [key: string]: boolean }>({
    'Sin cebolla': false,
    'Sin salsas': false,
    'Sin ripio de papa': false,
  });
  const [kitchenNotes, setKitchenNotes] = useState('');
  const [showToast, setShowToast] = useState(false);

  const toggleCheese = (price: number) => {
    if (selectedCheeses.includes(price)) {
      setSelectedCheeses(selectedCheeses.filter((p) => p !== price));
    } else if (selectedCheeses.length < 2) {
      setSelectedCheeses([...selectedCheeses, price]);
    }
  };

  const toggleProtein = (price: number) => {
    if (selectedProteins.includes(price)) {
      setSelectedProteins(selectedProteins.filter((p) => p !== price));
    } else if (selectedProteins.length < 2) {
      setSelectedProteins([...selectedProteins, price]);
    }
  };

  const unitTotal =
    BASE_PRICE +
    selectedCheeses.reduce((a, b) => a + b, 0) +
    selectedProteins.reduce((a, b) => a + b, 0) +
    selectedSauce;
  const grandTotal = unitTotal * quantity;

  const handleAddToCart = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      onNavigate('checkout');
    }, 1400);
  };

  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen flex flex-col max-w-md mx-auto relative shadow-2xl">
      <header className="sticky top-0 w-full z-40 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 px-space-md flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm min-w-0 flex-1">
            <button
              aria-label="Volver"
              onClick={() => onNavigate('home')}
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
              className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
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

      <main className="flex-1 flex flex-col relative w-full pb-36 bg-surface">
        {/* Hero Product Media */}
        <div className="relative w-full h-72 overflow-hidden bg-surface-container-highest">
          <img
            alt="Hamburguesa Artesanal Doble Carne"
            className="w-full h-full object-cover transform scale-105"
            referrerPolicy="no-referrer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwbdIiy_jEiNfj0JyRj3ARUZLFvC30BNONzE5Ro5nimExthov4fg_63VHau9W1M80Uv5PHjLnYX_uV8URW5C2UAbCYt5UitijQ5MmsgNG-cbrXf2NNu3oMEPUrA-e2f21ZjuS7k8qyJZmKToHy_quc4Ujj4ExAOJyryU_VO7oIDMizauWnD6xzMNKXbor-SdbrdmwBDZeSMR-B1KE42v33VMqe9RDbh_Hlqze0IjfOwpkxwElHr754kA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-space-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md shadow-md">
              <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
              <span className="font-label-md text-label-md text-on-surface truncate">
                2 carnes 100% Angus 150g • Pan brioche
              </span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md shadow-md ml-auto">
              <span className="material-symbols-outlined text-primary-container text-[16px]">
                star
              </span>
              <span className="font-label-md text-label-md text-on-surface font-bold">4.9</span>
              <span className="font-label-sm text-label-sm text-secondary">(184)</span>
            </div>
          </div>
        </div>

        {/* Dish Title & Base Meta Info */}
        <div className="px-space-md pt-space-md">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-secondary-container text-on-secondary-container mb-1.5">
            <span className="material-symbols-outlined text-[14px]">storefront</span>
            <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider">
              La Esquina del Sabor
            </span>
          </div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">
            Hamburguesa Artesanal Doble Carne
          </h2>

          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-metric-number text-metric-number text-primary tracking-tight font-extrabold">
              $24.000
            </span>
            <span className="font-label-md text-label-md text-secondary">COP base</span>
            <span className="ml-auto inline-flex items-center gap-1 text-tertiary font-label-md text-label-md font-semibold bg-tertiary-fixed/30 px-2.5 py-1 rounded-full">
              <span className="material-symbols-outlined text-[16px]">local_fire_department</span>{' '}
              Más pedida hoy
            </span>
          </div>

          <p className="mt-2 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Doble medallón jugoso de carne Angus premium (300g totales), pan brioche sellado en
            mantequilla clarificada, lechuga romana fresca, tomate milano y cebolla caramelizada
            suave.
          </p>
        </div>

        {/* Live Customization Engine */}
        <div className="mt-6 flex flex-col gap-6 px-space-md">
          {/* Grupo 1: Quesos y Fundidos */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">lunch_dining</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Quesos &amp; Fundidos
                </h3>
              </div>
              <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-1 rounded-full uppercase tracking-wider">
                Opcional • Máx 2
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-secondary mb-3">
              Dale un toque extra cremoso y fundente a tus carnes Angus.
            </p>
            <div className="space-y-2">
              {[
                {
                  name: 'Doble Queso Mozzarella derretido',
                  desc: 'Fundido a la plancha caliente',
                  price: 3500,
                },
                {
                  name: 'Queso Costeño Rallado Artesanal',
                  desc: 'Toque típico salado y crocante',
                  price: 3000,
                },
                {
                  name: 'Salsa de Queso Cheddar Americano',
                  desc: 'Bañado artesanal caliente',
                  price: 2800,
                },
              ].map((item) => {
                const checked = selectedCheeses.includes(item.price);
                return (
                  <label
                    key={item.name}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer ${
                      checked ? 'bg-primary-fixed/20 text-on-surface' : 'bg-surface-container-low'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <input
                        checked={checked}
                        onChange={() => toggleCheese(item.price)}
                        className="w-5 h-5 rounded text-primary-container accent-primary focus:ring-0 cursor-pointer"
                        type="checkbox"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-lg text-label-lg text-on-surface">
                          {item.name}
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary truncate">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                    <span className="font-label-md text-label-md font-bold text-primary flex-shrink-0 ml-2">
                      +${item.price.toLocaleString('es-CO')} COP
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Grupo 2: Proteínas & Extras */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">skillet</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Proteínas &amp; Extras
                </h3>
              </div>
              <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-1 rounded-full uppercase tracking-wider">
                Opcional • Máx 2
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-secondary mb-3">
              Maximiza el nivel de sabor y textura crocante.
            </p>
            <div className="space-y-2">
              <label
                className={`flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer ${
                  selectedProteins.includes(4000)
                    ? 'bg-primary-fixed/20 text-on-surface'
                    : 'bg-surface-container-low'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <input
                    checked={selectedProteins.includes(4000)}
                    onChange={() => toggleProtein(4000)}
                    className="w-5 h-5 rounded text-primary-container accent-primary focus:ring-0 cursor-pointer"
                    type="checkbox"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-lg text-label-lg text-on-surface">
                      Tocineta Ahumada Crujiente (2 tiras)
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary truncate">
                      Ahumada en leña de manzano
                    </span>
                  </div>
                </div>
                <span className="font-label-md text-label-md font-bold text-primary flex-shrink-0 ml-2">
                  +$4.000 COP
                </span>
              </label>

              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-high/60 opacity-70 cursor-not-allowed">
                <div className="flex items-center gap-3 min-w-0">
                  <input className="w-5 h-5 rounded cursor-not-allowed" disabled type="checkbox" />
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-lg text-label-lg text-secondary line-through">
                      Porción de Chicharrón Carnudo
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Crocante al estilo huilense
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm font-bold text-on-error-container bg-error-container px-2.5 py-1 rounded-full flex-shrink-0 ml-2">
                  <span className="material-symbols-outlined text-[12px]">block</span> Agotado hoy
                </span>
              </div>
            </div>
          </div>

          {/* Grupo 3: Salsas de la Casa */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[18px]">local_cafe</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Salsas de la Casa
                </h3>
              </div>
              <span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/30 font-semibold px-2 py-1 rounded-full uppercase tracking-wider">
                1ra Gratis
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-secondary mb-3">
              Elige la salsa insignia para sellar el sabor de tu pedido.
            </p>
            <div className="space-y-2">
              {[
                {
                  name: 'Salsa Tártara Especial de Ajo',
                  desc: 'Receta casera cremosa',
                  price: 0,
                  label: 'Gratis',
                },
                {
                  name: 'Piña Caramelizada Artesanal',
                  desc: 'Reducción agridulce en trocitos',
                  price: 1500,
                  label: '+$1.500 COP',
                },
                {
                  name: 'Salsa BBQ Ahumada',
                  desc: 'Aroma a roble y miel de caña',
                  price: 0,
                  label: 'Gratis',
                },
              ].map((sauce, idx) => (
                <label
                  key={sauce.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <input
                      checked={selectedSauce === sauce.price && (idx === 0 || sauce.price > 0)}
                      onChange={() => setSelectedSauce(sauce.price)}
                      className="w-5 h-5 text-primary-container accent-primary focus:ring-0 cursor-pointer"
                      name="salsa"
                      type="radio"
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-lg text-label-lg text-on-surface">
                        {sauce.name}
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary truncate">
                        {sauce.desc}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`font-label-md text-label-md font-bold flex-shrink-0 ml-2 ${
                      sauce.price === 0 ? 'text-tertiary' : 'text-primary'
                    }`}
                  >
                    {sauce.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Grupo 4: Exclusiones sin costo */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined text-[18px]">do_not_disturb_on</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Exclusiones sin costo
                </h3>
              </div>
              <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-1 rounded-full uppercase tracking-wider">
                A tu gusto
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-secondary mb-3.5">
              ¿No te gusta algún ingrediente de base? Quítalo aquí sin costo.
            </p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(exclusions).map((key) => {
                const active = exclusions[key];
                return (
                  <button
                    key={key}
                    onClick={() => setExclusions((e) => ({ ...e, [key]: !e[key] }))}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full font-label-md text-label-md transition-all select-none active:scale-95 cursor-pointer ${
                      active
                        ? 'bg-error-container text-on-error-container'
                        : 'bg-surface-container text-on-surface'
                    }`}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {active ? 'check' : 'cancel'}
                    </span>
                    <span>{key}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grupo 5: Instrucciones a cocina */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-[20px]">edit_note</span>
              <label className="font-headline-sm text-headline-sm text-on-surface">
                Instrucciones a cocina
              </label>
            </div>
            <textarea
              value={kitchenNotes}
              onChange={(e) => setKitchenNotes(e.target.value)}
              className="w-full rounded-lg bg-surface-container-low p-3 font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:bg-surface-container-highest transition-colors resize-none"
              placeholder="Ej. Salsa tártara aparte por favor, término de carne bien asada..."
              rows={2}
            />
            <div className="flex items-center justify-between mt-1 px-1">
              <span className="font-label-sm text-label-sm text-secondary">
                Nuestro chef leerá tu nota antes de preparar.
              </span>
              <span className="font-label-sm text-label-sm text-secondary">Máx 120</span>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Action Bar */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-40 bg-surface-container-lowest/95 backdrop-blur-lg shadow-[0_-8px_24px_rgba(0,0,0,0.08)] px-space-md pt-3 pb-4">
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div className="flex items-center bg-surface-container-high rounded-full p-1">
              <button
                aria-label="Disminuir cantidad"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface shadow-sm active:scale-90 transition-transform cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">remove</span>
              </button>
              <span className="w-8 text-center font-headline-sm text-headline-sm text-on-surface font-bold">
                {quantity}
              </span>
              <button
                aria-label="Aumentar cantidad"
                onClick={() => setQuantity((q) => Math.min(15, q + 1))}
                className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface shadow-sm active:scale-90 transition-transform cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">add</span>
              </button>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                Total Calculado
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-headline-md text-headline-md font-extrabold text-on-surface tracking-tight tabular-nums">
                  ${grandTotal.toLocaleString('es-CO')}
                </span>
                <span className="font-label-sm text-label-sm font-semibold text-secondary">
                  COP
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full h-12 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span>Agregar al Carrito • ${grandTotal.toLocaleString('es-CO')} COP</span>
          </button>
        </div>

        {/* Notification Toast */}
        {showToast && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50">
            <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-3.5 shadow-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-label-lg text-label-lg font-bold truncate">
                  ¡Hamburguesa agregada!
                </p>
                <p className="font-body-sm text-body-sm opacity-85 truncate">
                  {quantity}x Personalizada (${grandTotal.toLocaleString('es-CO')} COP)
                </p>
              </div>
              <span className="font-label-sm text-label-sm font-bold text-tertiary-fixed uppercase">
                Ver carrito
              </span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
