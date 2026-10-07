import React, { useState } from 'react';
import { CustomerScreen } from './CustomerHome';

interface CustomerRatingProps {
  onNavigate: (screen: CustomerScreen) => void;
}

export const CustomerRating: React.FC<CustomerRatingProps> = ({ onNavigate }) => {
  const [driverRating, setDriverRating] = useState(5);
  const [restRating, setRestRating] = useState(5);
  const [tipAmount, setTipAmount] = useState(4000);
  const [customTipOpen, setCustomTipOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [publicReview, setPublicReview] = useState(true);
  const [successToast, setSuccessToast] = useState(false);
  const [selectedBadges, setSelectedBadges] = useState<{ [key: string]: boolean }>({
    '⚡ Entrega ultra rápida': false,
    '🛡️ Empaque intacto y caliente': true,
    '🛵 Muy amable y cordial': true,
    '📍 Siguió indicaciones de portería': false,
    '🥩 Punto de carne perfecto': true,
    '🥓 Toppings abundantes': true,
    '🍯 Salsa deliciosa': false,
  });

  const driverFeedbackMap: { [key: number]: string } = {
    1: 'Necesita mejorar bastante',
    2: 'Hubo demoras o detalles en el trato',
    3: 'Servicio estándar',
    4: '¡Muy buen servicio y entrega!',
    5: '¡Excelente servicio y puntualidad!',
  };

  const restFeedbackMap: { [key: number]: string } = {
    1: 'No cumplió las expectativas (1/5)',
    2: 'Puede mejorar el sabor o temperatura (2/5)',
    3: 'Estuvo aceptable (3/5)',
    4: '¡Muy rico todo! (4/5)',
    5: '¡Deliciosa, súper recomendada! (5/5)',
  };

  const toggleBadge = (badge: string) => {
    setSelectedBadges((b) => ({ ...b, [badge]: !b[badge] }));
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
              onClick={() => onNavigate('invoice')}
              className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm cursor-pointer"
              type="button"
            >
              Ver Factura
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

      <main className="flex-1 flex flex-col relative w-full pb-32 bg-surface">
        <form
          className="flex flex-col gap-space-md p-space-md w-full"
          onSubmit={(e) => {
            e.preventDefault();
            setSuccessToast(true);
          }}
        >
          {/* 1. Cabecera de Confirmación Exitosa */}
          <section className="flex flex-col items-center text-center pt-space-xs pb-space-sm">
            <div className="relative mb-space-sm">
              <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center shadow-md animate-bounce">
                <span className="material-symbols-outlined text-primary text-[36px]">
                  check_circle
                </span>
              </div>
              <span className="absolute -bottom-1 -right-1 bg-tertiary text-on-tertiary p-1 rounded-full text-[14px] flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[16px]">celebration</span>
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[14px]">moped</span>
              Entrega completada
            </span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
              ¡Pedido entregado con éxito!
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-1">
              Pedido <span className="font-label-lg text-on-surface">#AV-1082</span> • La Esquina
              del Sabor
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
              <span className="material-symbols-outlined text-[15px] text-tertiary">schedule</span>
              Entregado hoy a las 8:54 PM • Neiva, Huila
            </p>
            <div className="mt-3 py-2 px-4 rounded-xl bg-surface-container-low w-full text-center">
              <p className="font-body-sm text-body-sm text-on-surface font-medium">
                ¿Qué tal estuvo tu experiencia gastronómica hoy? ✨
              </p>
            </div>
          </section>

          {/* 2. Módulo 1: Calificación del Domiciliario */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <img
                  alt="Carlos Bermúdez"
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9gONtz-D1KPsP7Mu4CpV7W7jp5Cg08BgroWKra9qRVBj9iUhCqiZe13btWk4meHV4-IIJupOvfDUeM1p7PuG9CpYJ00MYXKNSrxYGdWOxCWM3gbq6Fe-Qsy73W0nu7N1S_9E1EDfsmPPgOXbmUBlfv16cCL3njFjh3c6646UmDDjGvVfWfHBKOmBXIfIgEtK0wpQSJJufY0m23CxFhook-9Py-lWUiWrdp4Cy3Ksxdh7wxGQttlwHPw"
                />
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary text-[10px] shadow">
                  <span className="material-symbols-outlined text-[11px]">verified</span>
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                    Carlos Bermúdez
                  </h3>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                    Pro
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-secondary truncate">
                  AKT 125 Negra • Placa{' '}
                  <span className="font-semibold text-on-surface">HUI-45F</span>
                </p>
                <div className="flex items-center gap-1 text-primary text-[12px] font-label-sm">
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span>4.9 (420+ entregas en Neiva)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center py-1">
              <p className="font-label-md text-label-md text-secondary mb-2">
                Califica la atención de Carlos
              </p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setDriverRating(star)}
                    className={`transition-transform active:scale-90 focus:outline-none cursor-pointer ${
                      star <= driverRating ? 'text-primary' : 'text-secondary-fixed-dim'
                    }`}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[34px]">star</span>
                  </button>
                ))}
              </div>
              <p className="font-label-md text-label-md text-primary mt-1.5 font-semibold text-center">
                {driverFeedbackMap[driverRating]}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">
                ¿Qué se destacó de su servicio?
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  '⚡ Entrega ultra rápida',
                  '🛡️ Empaque intacto y caliente',
                  '🛵 Muy amable y cordial',
                  '📍 Siguió indicaciones de portería',
                ].map((badge) => (
                  <button
                    key={badge}
                    onClick={() => toggleBadge(badge)}
                    className={`px-3 py-1.5 rounded-full font-label-md text-label-md transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer ${
                      selectedBadges[badge]
                        ? 'bg-primary-fixed text-on-primary-fixed font-semibold'
                        : 'bg-surface-container text-on-surface'
                    }`}
                    type="button"
                  >
                    <span>{badge}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Propina Voluntaria */}
            <div className="rounded-xl bg-surface-container-low p-space-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    volunteer_activism
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    Propina para Carlos
                  </span>
                </div>
                <span className="text-[11px] font-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-bold">
                  100% domiciliario
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-secondary">
                El 100% de tu propina va directo a Carlos para apoyar a los domiciliarios de Neiva.
              </p>

              <div className="grid grid-cols-4 gap-2 pt-1">
                {[
                  { label: 'Sin propina', val: 0 },
                  { label: '$2.000', val: 2000 },
                  { label: '$4.000', val: 4000, top: true },
                  { label: '$6.000', val: 6000 },
                ].map((tip) => (
                  <button
                    key={tip.label}
                    onClick={() => {
                      setTipAmount(tip.val);
                      setCustomTipOpen(false);
                    }}
                    className={`py-2 px-1 rounded-lg text-center font-label-md text-label-md transition-all active:scale-95 relative cursor-pointer ${
                      tipAmount === tip.val
                        ? 'bg-primary text-on-primary shadow-sm font-bold'
                        : 'bg-surface-container text-on-surface'
                    }`}
                    type="button"
                  >
                    {tip.top && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-on-surface text-surface-bright text-[9px] px-1 rounded uppercase tracking-tighter">
                        Top
                      </span>
                    )}
                    {tip.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => setCustomTipOpen(!customTipOpen)}
                  className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1 cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                  Ingresar valor personalizado
                </button>
                <span className="font-label-md text-label-md font-bold text-on-surface">
                  {tipAmount > 0 ? `+$${tipAmount.toLocaleString('es-CO')} COP` : 'Sin propina'}
                </span>
              </div>

              {customTipOpen && (
                <div className="pt-1">
                  <div className="flex items-center gap-2 bg-surface-container-lowest rounded-lg px-3 py-2">
                    <span className="font-label-md text-label-md text-secondary">$</span>
                    <input
                      onChange={(e) => setTipAmount(parseInt(e.target.value, 10) || 0)}
                      className="w-full bg-transparent text-on-surface font-headline-sm text-headline-sm focus:outline-none"
                      placeholder="Ej. 5000"
                      type="number"
                    />
                    <span className="font-label-sm text-label-sm text-secondary">COP</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 3. Módulo 2: Calificación de la Comida & Restaurante */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center gap-3">
              <img
                alt="La Esquina del Sabor"
                className="w-14 h-14 rounded-xl object-cover shadow-sm flex-shrink-0"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgzNNTwd3Bp58mPLbYUUyHegvri52r1HdhQG7y1ZptAsqWyL93CfkhT46DRGpHFlcEkWM73SWhxEkcHKqznNq3iKqZBUumhXtopz7nRF7uv2QvVKzXw_nJ4PcXu7zEIuMiHEMl9AOAh9eAz3ka5HvZznjglAY4jQG79KWUgLmVXi6LavxRKR8neQMt86J3fefmHAroFTFRp2IZORIDdvxaKN00PSC8cV5VeXolRbwgyBPiCvJmgp9b3A"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                  La Esquina del Sabor
                </h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  Especialidad en Hamburguesas &amp; Parrilla
                </p>
                <div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]">restaurant</span>
                  <span>Cocina artesanal de Neiva</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center py-1 bg-surface-container-low rounded-xl p-3">
              <p className="font-label-md text-label-md text-on-surface font-semibold mb-1.5">
                ¿Qué tal estuvo la comida en general?
              </p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRestRating(star)}
                    className={`transition-transform active:scale-90 focus:outline-none cursor-pointer ${
                      star <= restRating ? 'text-primary' : 'text-secondary-fixed-dim'
                    }`}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[32px]">star</span>
                  </button>
                ))}
              </div>
              <span className="font-label-md text-label-md text-primary mt-1 font-bold">
                {restFeedbackMap[restRating]}
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
                <span>Tu opinión para Neiva</span>
                <span className="text-secondary font-body-sm text-body-sm">
                  {comment.length} / 250
                </span>
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full rounded-xl bg-surface-container-low p-3 text-on-surface font-body-md text-body-md placeholder:text-secondary focus:outline-none focus:bg-surface-container-lowest transition-colors resize-none"
                maxLength={250}
                placeholder="Cuéntale a la comunidad de Neiva qué fue lo que más te gustó de tu hamburguesa o qué podemos mejorar..."
                rows={3}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">
                Foto de tu plato
              </label>
              <div className="flex items-center gap-3">
                <button
                  className="flex-1 py-3 px-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-center justify-center gap-2 text-on-surface active:scale-[0.98] cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    add_a_photo
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="font-label-md text-label-md font-bold text-on-surface leading-tight">
                      📸 Agregar foto de tu plato
                    </span>
                    <span className="font-label-sm text-label-sm text-tertiary font-bold">
                      +50 Puntos Antojo extra
                    </span>
                  </div>
                </button>
                <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                  <img
                    alt="Foto plato"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSiGpqgjE7ZWFjqXf-Vz93yC2k47Yfhjvm0wP-mRg8QyD9S4NHJjJ1ZytcS59xzaLzIgb7OIrAAWTOoAb9Lj0QYKIZVfnWGapvx3uXfo4FMXtmYtq_kCy_H5LSFoYSpQBRTjqqoT8Nql_d5DwN_S8t13hAmHQSVkoUmtuCwXYg7jqVEm7JtrniXz74JcLgaXyXWJFsePY6QpUh5o39bfCj6oTlnvWETwAq25TN7bF4J-eUj_6wfePXbQ"
                  />
                  <span className="absolute top-0.5 right-0.5 bg-on-surface/70 text-on-primary rounded-full p-0.5 text-[10px]">
                    <span className="material-symbols-outlined text-[12px]">check</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Módulo de Preferencias / Publicación */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">
                  public
                </span>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-bold">
                    Hacer mi reseña pública
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    Aparecerá en el perfil del restaurante y ayudará a otros comensales de Neiva
                  </span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                <input
                  checked={publicReview}
                  onChange={() => setPublicReview(!publicReview)}
                  className="sr-only peer"
                  type="checkbox"
                />
                <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="rounded-lg bg-surface-container-low p-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  alt="Antojo Puntos"
                  className="w-5 h-5 object-contain"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XWt7MurRgRJGuWoOt_igEjKZ4PeYeZC7zk_7QKUAEptS3GBGZ1dAo_SJk3i-TNnBVUES8hhU3P2LP1NIlWSHjoQjQ1j24FTiqge5N4ZUWkSeOBurQl0hufTiUbipBFVN5o_QTCN4aayGKeF8T3VQ2rGmvG_U4ZfL0FEofUhUj7TZNy_hXsN_bQrlHOPX7_RuIQPidZmgcs05A3VxWzefcBsDbQDCkQo5kljhnCWKPZx59Si_J9cOpu4cA"
                />
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                  Total a ganar por tu feedback:
                </span>
              </div>
              <div className="flex items-center gap-1 text-primary font-label-md text-label-md font-bold">
                <span className="material-symbols-outlined text-[16px]">stars</span>
                <span>+150 Pts</span>
              </div>
            </div>
          </div>

          {/* 5. Sticky Bottom Action Bar */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-40 bg-surface/90 backdrop-blur-md px-space-md py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] flex flex-col items-center gap-1">
            <button
              className="w-full h-12 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              type="submit"
            >
              <span>Enviar Calificación</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
            <button
              onClick={() => onNavigate('orders')}
              className="py-1 px-4 text-secondary hover:text-on-surface font-label-md text-label-md transition-colors cursor-pointer"
              type="button"
            >
              Omitir por ahora
            </button>
          </div>
        </form>

        {/* Modal Toast de Éxito */}
        {successToast && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-inverse-surface/40 backdrop-blur-sm">
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg max-w-xs w-full text-center shadow-xl flex flex-col items-center gap-space-sm">
              <div className="w-16 h-16 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed mb-1">
                <span className="material-symbols-outlined text-[36px]">workspace_premium</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface">
                ¡Gracias por tu apoyo!
              </h4>
              <p className="font-body-md text-body-md text-secondary">
                Tu calificación ayuda a Carlos y al equipo de La Esquina del Sabor.
              </p>
              <div className="w-full py-2.5 px-3 rounded-xl bg-primary-fixed text-on-primary-fixed font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[20px]">celebration</span>
                <span>+150 Puntos Antojo</span>
              </div>
              <button
                onClick={() => {
                  setSuccessToast(false);
                  onNavigate('home');
                }}
                className="w-full mt-2 h-11 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold cursor-pointer"
                type="button"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
