import React, { useState } from 'react';

export type MerchantPage =
  | 'gestion-de-pedidos-en-vivo'
  | 'catalogo-de-productos'
  | 'personalizacion-toppings'
  | 'historial-reportes'
  | 'configuracion-del-negocio';

interface MerchantLayoutProps {
  activePage: MerchantPage;
  onNavigate: (page: MerchantPage) => void;
  onSwitchRole: () => void;
  onNewProductClick?: () => void;
  children: React.ReactNode;
}

export const MerchantLayout: React.FC<MerchantLayoutProps> = ({
  activePage,
  onNavigate,
  onSwitchRole,
  onNewProductClick,
  children,
}) => {
  const [storeOpen, setStoreOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems: { id: MerchantPage; label: string; icon: string; badge?: string }[] = [
    {
      id: 'gestion-de-pedidos-en-vivo',
      label: 'Gestión de Pedidos en Vivo',
      icon: 'notifications_active',
      badge: '4 nuevos',
    },
    {
      id: 'catalogo-de-productos',
      label: 'Catálogo de Productos',
      icon: 'restaurant_menu',
    },
    {
      id: 'personalizacion-toppings',
      label: 'Personalización & Toppings',
      icon: 'tune',
    },
    {
      id: 'historial-reportes',
      label: 'Historial & Reportes',
      icon: 'analytics',
    },
    {
      id: 'configuracion-del-negocio',
      label: 'Configuración del Negocio',
      icon: 'settings',
    },
  ];

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-low flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50">
        <div className="flex flex-col">
          <div className="p-space-md flex items-center gap-space-sm bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
            <img
              alt="Antojo Virtual Merchant Logo"
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfLcfAgd3EUgCqQmugCb6UczhC66eGXu_bhtyZQjrb1Ps3g7YoMsJwpw8hO5C8M_dkIQS_VteGQX76PvEMTc0979qm5xgmYHpxXNpDamjleKl68WImHA-GcfZhu33j948E0j_Tp_8UrD35Cb0tLBD4clubQgCHpB55e7ciYZPMbxLgKh-mEVDuwrTEbfOy7rYhFPbB-TUvNfn40VecIyfN4lBqOKggkF3CP6AROWukvb13Tid-4agsA"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight">
                Antojo-Virtual
              </span>
              <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                Comerciante
              </span>
            </div>
          </div>

          <div className="p-space-md">
            <div className="p-space-sm bg-surface-container rounded-lg flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs text-on-surface">
                <span className="material-symbols-outlined text-secondary text-sm">storefront</span>
                <span className="font-label-md text-label-md truncate">La Esquina del Sabor</span>
              </div>
              <span className="font-body-sm text-body-sm text-secondary truncate px-space-xs">
                Neiva - Centro
              </span>
              <div className="mt-space-xs pt-space-xs flex items-center justify-between bg-surface-container-lowest px-space-sm py-1 rounded">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      storeOpen ? 'bg-tertiary animate-pulse' : 'bg-error'
                    }`}
                  ></span>
                  <span
                    className={`font-label-sm text-label-sm truncate uppercase tracking-wider ${
                      storeOpen ? 'text-tertiary' : 'text-error'
                    }`}
                  >
                    {storeOpen ? 'Abierto' : 'Pausado'}
                  </span>
                </div>
                <button
                  aria-label="Estado de tienda"
                  onClick={() => setStoreOpen(!storeOpen)}
                  className="font-label-sm text-label-sm text-secondary hover:text-on-surface flex items-center gap-0.5 cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-base">
                    {storeOpen ? 'toggle_on' : 'toggle_off'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-1 px-space-md">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center justify-between px-space-md py-2.5 rounded-lg font-label-lg text-label-lg transition-all cursor-pointer text-left ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
                >
                  <div className="flex items-center gap-space-sm min-w-0">
                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`${
                        isActive
                          ? 'bg-on-primary text-primary'
                          : 'bg-primary-container text-on-primary-container'
                      } font-label-sm text-label-sm px-2 py-0.5 rounded-full flex-shrink-0`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-space-md bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] m-space-md rounded-xl flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-sm">
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQwU-9NdeQgsrU3Hg4V2-RY0xjXwlIg07HDn20yGylXWS0k4jn3sjpNePvRoBFbXCK_hBEFbOCb6QomeNwk99K-u-vjAZg_Q3mDDCXQHX7WDoXvxarj0ufwwca4FRtzVakNTJuyEx0-i6qGeTiGWQfQZMUS7B0vfOesvcBa_0rDGFH6OTvFyTmBv1aITBWx_hKT7mCBSRxUaiWsVnLbM8hFQQ1hL272X1i_mV69zTSrcrnGjNFRoqrAw"
            />
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-label-md text-label-md text-on-surface truncate">
                Juan Felipe López
              </span>
              <span className="font-body-sm text-body-sm text-secondary truncate">
                Administrador
              </span>
            </div>
          </div>
          <button
            onClick={onSwitchRole}
            className="w-full flex items-center justify-center gap-1.5 py-1.5 px-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm uppercase tracking-wider transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-sm">swap_horiz</span>
            Cambiar a Vista Cliente
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="pl-72">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-gutter flex items-center justify-between">
          <div className="flex items-center gap-space-md flex-1 max-w-xl">
            <div className="relative w-full flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-secondary text-lg">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-14 py-2 bg-surface-container-lowest text-on-surface placeholder:text-secondary rounded-lg font-body-md text-body-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Buscar pedidos (#ID, cliente, plato)..."
                type="text"
              />
              <kbd className="absolute right-3 font-label-sm text-label-sm text-secondary bg-surface-container px-1.5 py-0.5 rounded">
                Ctrl K
              </kbd>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 px-space-sm py-1.5 rounded-full bg-surface-container-low text-secondary flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-base">location_on</span>
              <span className="font-label-md text-label-md text-on-surface truncate">
                Neiva, Huila
              </span>
            </div>
          </div>

          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-2 bg-surface-container-low px-space-sm py-1.5 rounded-full">
              <span className="material-symbols-outlined text-secondary text-base">volume_up</span>
              <span className="hidden sm:inline font-label-sm text-label-sm text-on-surface-variant">
                Alertas de audio
              </span>
              <span className="h-2 w-2 rounded-full bg-tertiary"></span>
            </div>
            <button
              aria-label="Notificaciones"
              onClick={() => onNavigate('gestion-de-pedidos-en-vivo')}
              className="relative p-2 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-xl">notifications</span>
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary"></span>
            </button>
            <button
              onClick={() => {
                if (onNewProductClick) {
                  onNewProductClick();
                } else {
                  onNavigate('catalogo-de-productos');
                }
              }}
              className="flex items-center gap-1.5 bg-primary text-on-primary hover:bg-primary-container px-space-md py-2 rounded-lg font-label-lg text-label-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-lg">add</span>
              <span>Nuevo Producto</span>
            </button>
            <div className="flex items-center">
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-surface-container"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQwU-9NdeQgsrU3Hg4V2-RY0xjXwlIg07HDn20yGylXWS0k4jn3sjpNePvRoBFbXCK_hBEFbOCb6QomeNwk99K-u-vjAZg_Q3mDDCXQHX7WDoXvxarj0ufwwca4FRtzVakNTJuyEx0-i6qGeTiGWQfQZMUS7B0vfOesvcBa_0rDGFH6OTvFyTmBv1aITBWx_hKT7mCBSRxUaiWsVnLbM8hFQQ1hL272X1i_mV69zTSrcrnGjNFRoqrAw"
              />
            </div>
          </div>
        </header>

        <main className="relative pt-24 bg-surface min-h-screen w-full px-gutter pb-margin">
          {children}
        </main>
      </div>
    </div>
  );
};
