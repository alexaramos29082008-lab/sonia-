import React, { useState } from 'react';

export type CustomerScreen =
  | 'home'
  | 'orders'
  | 'profile'
  | 'customization'
  | 'checkout'
  | 'tracking'
  | 'chat'
  | 'rating'
  | 'invoice';

interface CustomerHomeProps {
  onNavigate: (screen: CustomerScreen) => void;
}

export const CustomerHome: React.FC<CustomerHomeProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Burgers');
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({
    esquina: true,
    fogata: false,
    paisa: false,
  });

  const categories = [
    { name: 'Burgers', icon: 'lunch_dining' },
    { name: 'Salchipapas', icon: 'fastfood' },
    { name: 'Pizzas', icon: 'local_pizza' },
    { name: 'Desgranados', icon: 'skillet' },
    { name: 'Perros', icon: 'hot_tub' },
    { name: 'Bebidas', icon: 'local_cafe' },
  ];

  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen flex flex-col max-w-md mx-auto relative shadow-2xl">
      {/* Header */}
      <header className="sticky top-0 w-full z-40 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 px-space-md flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm min-w-0 flex-1">
            <img
              alt="Antojo-Virtual Logo"
              className="h-8 w-auto object-contain flex-shrink-0"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XWt7MurRgRJGuWoOt_igEjKZ4PeYeZC7zk_7QKUAEptS3GBGZ1dAo_SJk3i-TNnBVUES8hhU3P2LP1NIlWSHjoQjQ1j24FTiqge5N4ZUWkSeOBurQl0hufTiUbipBFVN5o_QTCN4aayGKeF8T3VQ2rGmvG_U4ZfL0FEofUhUj7TZNy_hXsN_bQrlHOPX7_RuIQPidZmgcs05A3VxWzefcBsDbQDCkQo5kljhnCWKPZx59Si_J9cOpu4cA"
            />
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-space-xs text-primary leading-none">
                <span className="material-symbols-outlined text-[15px]">location_on</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
                  Entregar en Neiva
                </span>
              </div>
              <button
                onClick={() => onNavigate('profile')}
                className="flex items-center gap-space-xs text-left group min-w-0 cursor-pointer"
                type="button"
              >
                <span className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-primary transition-colors">
                  Cra 5 # 14-22, Centro
                </span>
                <span className="material-symbols-outlined text-on-surface-variant text-[18px] flex-shrink-0 group-hover:translate-y-0.5 transition-transform">
                  keyboard_arrow_down
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-space-xs flex-shrink-0">
            <button
              aria-label="Notificaciones y alertas"
              onClick={() => onNavigate('tracking')}
              className="relative w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-primary ring-2 ring-surface"></span>
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 ml-space-xs cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full pb-28 bg-surface">
        {/* Search and Quick Filter */}
        <section className="px-space-md pt-space-sm pb-space-sm">
          <div className="flex items-center gap-space-sm">
            <div className="relative flex-1 flex items-center bg-surface-container-low rounded-xl shadow-sm">
              <span className="material-symbols-outlined text-outline text-[20px] ml-space-sm select-none">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent py-2.5 px-space-xs font-body-md text-on-surface placeholder:text-secondary focus:outline-none"
                placeholder="¿Qué se te antoja hoy? (ej. Salchipapas, Burger)"
                type="text"
              />
            </div>
            <button
              aria-label="Filtros"
              onClick={() => onNavigate('customization')}
              className="w-11 h-11 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high flex items-center justify-center shadow-sm active:scale-95 transition-transform flex-shrink-0 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>
        </section>

        {/* Promotions Carousel Banner */}
        <section className="px-space-md py-space-xs">
          <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary-container via-primary to-on-primary-fixed text-on-primary shadow-md">
            <div className="relative p-space-md flex flex-col justify-between min-h-[148px]">
              <div className="flex items-center justify-between gap-space-sm">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-lowest/20 backdrop-blur-sm text-on-primary font-label-sm text-label-sm uppercase tracking-wider">
                  Especial Neiva 🔥
                </span>
                <div className="flex items-center gap-1 font-label-md text-label-md bg-black/20 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  <span>25-35 min</span>
                </div>
              </div>
              <div className="my-space-xs max-w-[82%]">
                <h2 className="font-headline-md text-headline-md text-on-primary leading-tight">
                  Noches de Desgranado &amp; Costeña
                </h2>
                <p className="font-body-sm text-body-sm text-on-primary/90 mt-0.5">
                  20% OFF en La Esquina del Sabor • Envío gratis 1ra orden
                </p>
              </div>
              <div className="flex items-center justify-between pt-space-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-on-primary"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-on-primary/40"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-on-primary/40"></span>
                </div>
                <button
                  onClick={() => onNavigate('customization')}
                  className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md shadow hover:bg-surface-container-low active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                  type="button"
                >
                  <span>Aprovechar</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Food Categories */}
        <section className="py-space-sm">
          <div className="px-space-md flex items-center justify-between mb-space-xs">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Categorías populares
            </h3>
            <button
              onClick={() => onNavigate('customization')}
              className="font-label-md text-label-md text-primary hover:underline cursor-pointer"
              type="button"
            >
              Ver todas
            </button>
          </div>
          <div className="flex gap-space-sm overflow-x-auto px-space-md pb-space-xs no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className="flex flex-col items-center gap-1.5 flex-shrink-0 group cursor-pointer"
                type="button"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-primary shadow-sm transition-colors ${
                    selectedCategory === cat.name
                      ? 'bg-primary-fixed'
                      : 'bg-surface-container-low group-hover:bg-primary-fixed/50'
                  }`}
                >
                  <span className="material-symbols-outlined text-[26px]">{cat.icon}</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Featured / Trending Dishes Section */}
        <section className="px-space-md py-space-sm">
          <div className="flex items-center justify-between mb-space-sm">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-[20px]">
                local_fire_department
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Antojos Populares cerca de ti
              </h3>
            </div>
            <span className="font-label-sm text-label-sm uppercase text-secondary">
              Neiva Centro
            </span>
          </div>

          <div className="flex flex-col gap-space-sm">
            {/* Dish Card 1 */}
            <article
              onClick={() => onNavigate('customization')}
              className="bg-surface-container-lowest rounded-2xl p-space-sm shadow-sm flex gap-space-sm items-center relative overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="relative w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container">
                <img
                  alt="Burger Doble Carne"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKTUgx7wl0FQDrklAlQUC17FnbHO_NTMbeXSMXdsoYpYGu_hSomfOxKMZDPEVlCpGeIhhmTSSzOlTFgbolf6BBMkKfad6LXOgjfwFoUQ55-FfCXjlP8jWnp6cHrBEr_UV0XLABr9k5I4guW8RZr5QwHHlalc0LDk16zz-wyDx6U6kfZpNKIavP4gMjQBBp1UIbhqv1-2FEWRYHRYLmc_XRQVedFfe4vMF7PGjcNXcfXwbHuT26bshchg"
                />
                <span className="absolute top-1 left-1 bg-primary text-on-primary font-label-sm text-[9px] px-1.5 py-0.5 rounded-full shadow">
                  Top #1
                </span>
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch py-0.5">
                <div>
                  <div className="flex items-center gap-1 text-secondary text-body-sm">
                    <span className="truncate">La Esquina del Sabor</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface truncate mt-0.5">
                    Burger Doble Carne
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary truncate">
                    Queso cheddar fundido, tocineta y pan brioche
                  </p>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    $24.000{' '}
                    <span className="font-label-sm text-label-sm text-secondary font-normal">
                      COP
                    </span>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('customization');
                    }}
                    className="h-8 px-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md flex items-center gap-1 active:scale-95 shadow transition-all cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span>
                    <span>Pedir</span>
                  </button>
                </div>
              </div>
            </article>

            {/* Dish Card 2 */}
            <article
              onClick={() => onNavigate('customization')}
              className="bg-surface-container-lowest rounded-2xl p-space-sm shadow-sm flex gap-space-sm items-center relative overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="relative w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container">
                <img
                  alt="Salchipapa Salvaje"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLHcJzMwO23htiQ1XWuSjVY7KKN2W79d1s1aeE2kx8SfXbXtUEFp2KfjcGdta5ZIWnea_zHtH_X1Teu7ldZ3Eqqn5uUeBYgjZfTXir6Huya9KwMANQKbY_5RnWcXvFfVbtjNaOGBBcuqohKeOvBChqugW7kplFnwt8Dx5vo81l3Vpj-xenivwr_Fe8dwLla55vzAh9BiKVpCx8eEvH9gmygSsyY3d8fLlGw3YEDYB73SIQW9MmKDPuhg"
                />
                <span className="absolute top-1 left-1 bg-tertiary-container text-on-tertiary font-label-sm text-[9px] px-1.5 py-0.5 rounded-full shadow">
                  Más Vendido
                </span>
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch py-0.5">
                <div>
                  <div className="flex items-center gap-1 text-secondary text-body-sm">
                    <span className="truncate">La Esquina del Sabor</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface truncate mt-0.5">
                    Salchipapa Salvaje
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary truncate">
                    Salchicha manguera, carne desmechada y queso costeño
                  </p>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    $22.500{' '}
                    <span className="font-label-sm text-label-sm text-secondary font-normal">
                      COP
                    </span>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('customization');
                    }}
                    className="h-8 px-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md flex items-center gap-1 active:scale-95 shadow transition-all cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span>
                    <span>Pedir</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Open Restaurants in Neiva Section */}
        <section className="px-space-md py-space-sm mb-4">
          <div className="flex items-center justify-between mb-space-sm">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Locales Abiertos en Neiva
              </h3>
              <p className="font-body-sm text-body-sm text-secondary">
                Ordenados por cercanía y calificación
              </p>
            </div>
            <button
              onClick={() => onNavigate('customization')}
              className="font-label-md text-label-md text-primary flex items-center gap-0.5 cursor-pointer"
              type="button"
            >
              <span>Filtrar</span>
              <span className="material-symbols-outlined text-[16px]">sort</span>
            </button>
          </div>

          <div className="flex flex-col gap-space-md">
            {/* Restaurant 1 */}
            <div
              onClick={() => onNavigate('customization')}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm flex flex-col cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 w-full bg-surface-container">
                <img
                  alt="La Esquina del Sabor"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwoLhys7iSc5RMWttSDz3ITIctqlXBR6oJ1gss0q-1ZOIhUBYd2pDMAKHo9cpLl9_iDGSPswhdRUJqlavWtUbaBaySnSCEdZj09ke-4dHrjO3h_lZdEdrRf00mNA13UHmZWiPRvXTT3uFqbr3m9WKeomUgXWCFM8t34X1gGIh7I6kXHOmj6iS6QOexnxUNqStf8Ak4Zeyb3r9ZTuAnQOah94d2IkKMumS7ds5MACPSXc9K7baHDrFmEw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-[10px] uppercase font-bold tracking-wide shadow">
                    El rey de la salchipapa
                  </span>
                </div>
                <button
                  aria-label="Favorito"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFavorites((f) => ({ ...f, esquina: !f.esquina }));
                  }}
                  className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center transition-colors cursor-pointer ${
                    favorites.esquina ? 'text-error' : 'text-secondary hover:text-error'
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">favorite</span>
                </button>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                  <span className="font-label-md text-label-md px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">timer</span> 20-30 min
                  </span>
                  <span className="font-label-md text-label-md px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">two_wheeler</span> Envío
                    $3.500
                  </span>
                </div>
              </div>
              <div className="p-space-sm flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    La Esquina del Sabor
                  </h4>
                  <div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full">
                    <span className="material-symbols-outlined text-primary text-[14px]">star</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">
                      4.9
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary">(180+)</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-secondary">
                  Salchipapas costeñas • Hamburguesas artesanales • Mazorcadas
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[14px]">verified</span> Local
                    Verificado
                  </span>
                  <span className="text-secondary text-[12px]">•</span>
                  <span className="font-label-sm text-label-sm text-secondary">
                    A 1.2 km de tu ubicación
                  </span>
                </div>
              </div>
            </div>

            {/* Restaurant 2 */}
            <div
              onClick={() => onNavigate('customization')}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm flex flex-col cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 w-full bg-surface-container">
                <img
                  alt="La Fogata Huilense Burgers"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm7F3MKD3reTEETP59NuB8mBh6ifOvIGp_-dO17guOSij7gydhyBUymfyT68i0X3V5vmRW4gYFwm9IDTQS54E0TvgdbQle4p8mYe8Zdtv9IxFCJ8DxEBQl0wHFGcI04fMcyV0BFn0U-VD2Yrl1HvucL-x7-hl0dU6rLq_D8gdkyTzQLWVjaFCnnLY33X_RBcq3JojqUdLo9PEysEjuuwX6kWa1Vfi_26wMF58JnqOVRaQTX29GUT9NDg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-[10px] uppercase font-bold tracking-wide shadow">
                    Carne 100% Brangus
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                  <span className="font-label-md text-label-md px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">timer</span> 15-25 min
                  </span>
                  <span className="font-label-md text-label-md px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">two_wheeler</span> Envío
                    $4.000
                  </span>
                </div>
              </div>
              <div className="p-space-sm flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    La Fogata Huilense Burgers
                  </h4>
                  <div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full">
                    <span className="material-symbols-outlined text-primary text-[14px]">star</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">
                      4.8
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary">(94)</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-secondary">
                  Hamburguesas al carbón • Aros de cebolla • Malteadas
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="font-label-sm text-label-sm text-secondary">
                    A 1.8 km en Quirinal
                  </span>
                </div>
              </div>
            </div>

            {/* Restaurant 3 */}
            <div
              onClick={() => onNavigate('customization')}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm flex flex-col cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 w-full bg-surface-container">
                <img
                  alt="Perros & Desgranados El Paisa"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4Ue5GPG8cS68ljzMeX4mMA2-G3tGsUmUR-_QR6hE9nZR81hXBLWkvrcdBbOEg5uTu7GaJIe4GKjif-yH9oVlvP7xkNL1d4M07D7qcc-0YrandCdOBmAQq42XbaqJY40uvSBXZLh6I6ytuTdaHs1lwQmCshbnoOPwOHOL3UFr503YXovtot5jh3C47gY-jvqsTGopkwadME5MR8u6Y-TLrvNzGQC-XRTDKlS9ZyUAe58x20cd7IXSy5g"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                  <span className="font-label-md text-label-md px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">timer</span> 30-40 min
                  </span>
                  <span className="font-label-md text-label-md px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">two_wheeler</span> Envío
                    $3.000
                  </span>
                </div>
              </div>
              <div className="p-space-sm flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    Perros &amp; Desgranados El Paisa
                  </h4>
                  <div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full">
                    <span className="material-symbols-outlined text-primary text-[14px]">star</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">
                      4.7
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary">(210)</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-secondary">
                  Perros calientes especiales • Desgranados mixtos • Picadas
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="font-label-sm text-label-sm text-secondary">
                    A 2.4 km en Las Granjas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Bottom Cart Pill */}
        <aside className="fixed bottom-20 left-0 right-0 px-space-md z-30 pointer-events-none">
          <div className="max-w-md mx-auto pointer-events-auto bg-on-surface text-surface-container-lowest rounded-2xl p-3 shadow-xl flex items-center justify-between transition-transform active:scale-[0.98]">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary font-label-md text-label-md flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-tertiary rounded-full text-[10px] flex items-center justify-center text-white font-bold">
                  1
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md truncate text-surface-container-lowest">
                  Tu antojo en camino
                </span>
                <span className="font-body-sm text-body-sm text-surface-dim truncate">
                  La Esquina del Sabor • 1 item
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="font-headline-sm text-headline-sm text-primary-fixed-dim">
                $24.000
              </span>
              <button
                onClick={() => onNavigate('checkout')}
                className="px-3 py-1.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow flex items-center gap-1 transition-colors cursor-pointer"
                type="button"
              >
                <span>Ver</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};
