/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MerchantLayout, MerchantPage } from './components/MerchantLayout';
import { MerchantLiveDispatch } from './components/MerchantLiveDispatch';
import { MerchantCatalog } from './components/MerchantCatalog';
import { MerchantToppings } from './components/MerchantToppings';
import { CustomerHome, CustomerScreen } from './components/CustomerHome';
import { CustomerOrders } from './components/CustomerOrders';
import { CustomerProfile } from './components/CustomerProfile';
import { CustomerCustomization } from './components/CustomerCustomization';
import { CustomerCheckout } from './components/CustomerCheckout';
import { CustomerTracking } from './components/CustomerTracking';
import { CustomerChat } from './components/CustomerChat';
import { CustomerRating } from './components/CustomerRating';
import { CustomerInvoice } from './components/CustomerInvoice';

export default function App() {
  const [role, setRole] = useState<'merchant' | 'customer'>('merchant');
  const [merchantPage, setMerchantPage] = useState<MerchantPage>('gestion-de-pedidos-en-vivo');
  const [customerScreen, setCustomerScreen] = useState<CustomerScreen>('home');
  const [screenSelectorOpen, setScreenSelectorOpen] = useState(false);

  const showMobileTabNav =
    role === 'customer' && ['home', 'orders', 'profile'].includes(customerScreen);

  const allScreens: {
    title: string;
    subtitle: string;
    role: 'merchant' | 'customer';
    target: string;
    icon: string;
  }[] = [
    {
      title: '1. Gestión Operativa KDS',
      subtitle: 'Comerciante • Despacho en Vivo',
      role: 'merchant',
      target: 'gestion-de-pedidos-en-vivo',
      icon: 'notifications_active',
    },
    {
      title: '2. Catálogo de Productos',
      subtitle: 'Comerciante • Menú y Precios',
      role: 'merchant',
      target: 'catalogo-de-productos',
      icon: 'restaurant_menu',
    },
    {
      title: '3. Personalización & Toppings',
      subtitle: 'Comerciante • Motor Modificadores',
      role: 'merchant',
      target: 'personalizacion-toppings',
      icon: 'tune',
    },
    {
      title: '4. Inicio & Explorar Antojos',
      subtitle: 'Cliente Móvil • Delivery Neiva',
      role: 'customer',
      target: 'home',
      icon: 'storefront',
    },
    {
      title: '5. Personalizar Plato (Burger)',
      subtitle: 'Cliente Móvil • Adiciones en Vivo',
      role: 'customer',
      target: 'customization',
      icon: 'lunch_dining',
    },
    {
      title: '6. Checkout & Pago Nequi',
      subtitle: 'Cliente Móvil • Confirmar Orden',
      role: 'customer',
      target: 'checkout',
      icon: 'shopping_bag',
    },
    {
      title: '7. Rastreo GPS en Vivo',
      subtitle: 'Cliente Móvil • Mapa y Progreso',
      role: 'customer',
      target: 'tracking',
      icon: 'two_wheeler',
    },
    {
      title: '8. Chat en Vivo (#AV-1082)',
      subtitle: 'Cliente Móvil • Cocina & Moto',
      role: 'customer',
      target: 'chat',
      icon: 'chat',
    },
    {
      title: '9. Calificación & Propina',
      subtitle: 'Cliente Móvil • Entrega Exitosa',
      role: 'customer',
      target: 'rating',
      icon: 'star',
    },
    {
      title: '10. Factura Electrónica DIAN',
      subtitle: 'Cliente Móvil • Comprobante QR',
      role: 'customer',
      target: 'invoice',
      icon: 'receipt',
    },
    {
      title: '11. Historial de Pedidos',
      subtitle: 'Cliente Móvil • Activos y Anteriores',
      role: 'customer',
      target: 'orders',
      icon: 'receipt_long',
    },
    {
      title: '12. Mi Perfil & Club Puntos',
      subtitle: 'Cliente Móvil • Direcciones y VIP',
      role: 'customer',
      target: 'profile',
      icon: 'account_circle',
    },
  ];

  const handleSelectScreen = (s: (typeof allScreens)[0]) => {
    setRole(s.role);
    if (s.role === 'merchant') {
      setMerchantPage(s.target as MerchantPage);
    } else {
      setCustomerScreen(s.target as CustomerScreen);
    }
    setScreenSelectorOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-surface-container">
      {/* Floating Quick Screen Switcher Pill */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        {screenSelectorOpen && (
          <div className="bg-surface-container-lowest border border-surface-container-highest rounded-2xl shadow-2xl p-3 w-80 max-h-[75vh] overflow-y-auto flex flex-col gap-1.5">
            <div className="flex items-center justify-between px-2 py-1 border-b border-surface-container">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Pantallas Antojo-Virtual
              </span>
              <button
                onClick={() => setScreenSelectorOpen(false)}
                className="p-1 rounded-full hover:bg-surface-container text-secondary cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            {allScreens.map((s) => {
              const isCurrent =
                (s.role === 'merchant' && role === 'merchant' && merchantPage === s.target) ||
                (s.role === 'customer' && role === 'customer' && customerScreen === s.target);
              return (
                <button
                  key={s.title}
                  onClick={() => handleSelectScreen(s)}
                  className={`w-full flex items-center gap-2.5 p-2 rounded-xl text-left transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'hover:bg-surface-container-low text-on-surface'
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">{s.icon}</span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-md text-label-md font-bold truncate">
                      {s.title}
                    </span>
                    <span
                      className={`font-body-sm text-[11px] truncate ${
                        isCurrent ? 'text-on-primary/80' : 'text-secondary'
                      }`}
                    >
                      {s.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        <div className="flex items-center gap-2 bg-inverse-surface text-inverse-on-surface p-1.5 rounded-full shadow-2xl">
          <button
            onClick={() => setRole('merchant')}
            className={`px-3 py-1.5 rounded-full font-label-sm text-label-sm flex items-center gap-1 transition-all cursor-pointer ${
              role === 'merchant'
                ? 'bg-primary text-on-primary font-bold'
                : 'text-inverse-on-surface/80 hover:text-white'
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[15px]">desktop_windows</span>
            <span>POS Comerciante</span>
          </button>
          <button
            onClick={() => setRole('customer')}
            className={`px-3 py-1.5 rounded-full font-label-sm text-label-sm flex items-center gap-1 transition-all cursor-pointer ${
              role === 'customer'
                ? 'bg-primary text-on-primary font-bold'
                : 'text-inverse-on-surface/80 hover:text-white'
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[15px]">smartphone</span>
            <span>App Cliente</span>
          </button>
          <button
            onClick={() => setScreenSelectorOpen(!screenSelectorOpen)}
            className="px-3 py-1.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1 cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[15px]">grid_view</span>
            <span>12 Pantallas</span>
          </button>
        </div>
      </div>

      {/* Merchant Desktop View */}
      {role === 'merchant' && (
        <MerchantLayout
          activePage={merchantPage}
          onNavigate={(page) => setMerchantPage(page)}
          onSwitchRole={() => setRole('customer')}
          onNewProductClick={() => setMerchantPage('catalogo-de-productos')}
        >
          {merchantPage === 'gestion-de-pedidos-en-vivo' && (
            <MerchantLiveDispatch
              onOpenChat={() => {
                setRole('customer');
                setCustomerScreen('chat');
              }}
              onOpenMap={() => {
                setRole('customer');
                setCustomerScreen('tracking');
              }}
            />
          )}
          {merchantPage === 'catalogo-de-productos' && (
            <MerchantCatalog onGoToToppings={() => setMerchantPage('personalizacion-toppings')} />
          )}
          {merchantPage === 'personalizacion-toppings' && <MerchantToppings />}
          {(merchantPage === 'historial-reportes' ||
            merchantPage === 'configuracion-del-negocio') && (
            <MerchantLiveDispatch
              onOpenChat={() => {
                setRole('customer');
                setCustomerScreen('chat');
              }}
              onOpenMap={() => {
                setRole('customer');
                setCustomerScreen('tracking');
              }}
            />
          )}
        </MerchantLayout>
      )}

      {/* Customer Mobile View */}
      {role === 'customer' && (
        <div className="min-h-screen bg-surface-container-high">
          {customerScreen === 'home' && <CustomerHome onNavigate={setCustomerScreen} />}
          {customerScreen === 'orders' && <CustomerOrders onNavigate={setCustomerScreen} />}
          {customerScreen === 'profile' && <CustomerProfile onNavigate={setCustomerScreen} />}
          {customerScreen === 'customization' && (
            <CustomerCustomization onNavigate={setCustomerScreen} />
          )}
          {customerScreen === 'checkout' && <CustomerCheckout onNavigate={setCustomerScreen} />}
          {customerScreen === 'tracking' && <CustomerTracking onNavigate={setCustomerScreen} />}
          {customerScreen === 'chat' && <CustomerChat onNavigate={setCustomerScreen} />}
          {customerScreen === 'rating' && <CustomerRating onNavigate={setCustomerScreen} />}
          {customerScreen === 'invoice' && <CustomerInvoice onNavigate={setCustomerScreen} />}

          {/* Shared Mobile Bottom Navigation Bar */}
          {showMobileTabNav && (
            <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-40 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)]">
              <div className="h-16 px-space-sm flex items-center justify-around">
                <button
                  onClick={() => setCustomerScreen('home')}
                  className={`min-w-[64px] h-12 flex flex-col items-center justify-center gap-0.5 transition-colors cursor-pointer ${
                    customerScreen === 'home'
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[22px]">storefront</span>
                  <span className="font-label-md text-label-md">Inicio</span>
                </button>
                <button
                  onClick={() => setCustomerScreen('customization')}
                  className="min-w-[64px] h-12 flex flex-col items-center justify-center gap-0.5 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[22px]">search</span>
                  <span className="font-label-md text-label-md">Buscar</span>
                </button>
                <button
                  onClick={() => setCustomerScreen('orders')}
                  className={`relative min-w-[64px] h-12 flex flex-col items-center justify-center gap-0.5 transition-colors cursor-pointer ${
                    customerScreen === 'orders'
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[22px]">receipt_long</span>
                  <span className="font-label-md text-label-md">Pedidos</span>
                  <span className="absolute top-1 right-3.5 px-1.5 py-0.2 bg-primary text-on-primary font-label-sm text-label-sm rounded-full leading-none scale-90">
                    1
                  </span>
                </button>
                <button
                  onClick={() => setCustomerScreen('profile')}
                  className={`min-w-[64px] h-12 flex flex-col items-center justify-center gap-0.5 transition-colors cursor-pointer ${
                    customerScreen === 'profile'
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[22px]">account_circle</span>
                  <span className="font-label-md text-label-md">Perfil</span>
                </button>
              </div>
            </nav>
          )}
        </div>
      )}
    </div>
  );
}

