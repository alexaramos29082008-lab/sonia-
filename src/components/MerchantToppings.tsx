import React, { useState } from 'react';

export const MerchantToppings: React.FC = () => {
  const [alertText, setAlertText] = useState(
    'Motor de Personalización Activo: Sincronización instantánea POS-Móvil vinculada con Neiva - Sede Centro.'
  );
  const [alertHighlight, setAlertHighlight] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Simulator state
  const [simMozzarella, setSimMozzarella] = useState(true);
  const [simTocineta, setSimTocineta] = useState(false);

  // Toppings stock state
  const [stocks, setStocks] = useState<{ [key: string]: boolean }>({
    mozzarella: true,
    costeno: true,
    cheddar: true,
    tocineta: true,
    carne: true,
    chicharron: false,
    tartara: true,
    fosforito: true,
    codorniz: true,
  });

  const [ruleExcludeFree, setRuleExcludeFree] = useState(true);

  const toggleStock = (key: string, name: string) => {
    const next = !stocks[key];
    setStocks((s) => ({ ...s, [key]: next }));
    setAlertText(
      `Stock actualizado: ${name} está ahora ${next ? 'DISPONIBLE' : 'AGOTADO'} en la app de clientes.`
    );
    setAlertHighlight(true);
    setTimeout(() => setAlertHighlight(false), 3000);
  };

  const simTotal = 22000 + (simMozzarella ? 3500 : 0) + (simTocineta ? 4000 : 0);

  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* Dynamic Notification Bar */}
      <div
        className={`mb-space-md p-space-sm rounded-xl shadow-sm flex items-center justify-between transition-all duration-300 ${
          alertHighlight
            ? 'bg-primary-fixed text-on-primary-fixed'
            : 'bg-surface-container-lowest text-on-surface'
        }`}
      >
        <div className="flex items-center gap-space-sm min-w-0">
          <span className="flex h-2.5 w-2.5 rounded-full bg-tertiary"></span>
          <span className="font-label-md text-label-md truncate">{alertText}</span>
        </div>
        <div className="flex items-center gap-space-md">
          <span className="font-body-sm text-body-sm text-secondary hidden sm:inline">
            Última edición hace 3 min
          </span>
          <button
            onClick={() => {
              setAlertText('¡Sincronización con app móvil completada en 0.08s!');
              setAlertHighlight(true);
              setTimeout(() => setAlertHighlight(false), 2500);
            }}
            className="font-label-sm text-label-sm text-primary hover:text-primary-container uppercase tracking-wider flex items-center gap-1 cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-sm">sync</span> Forzar Sync
          </button>
        </div>
      </div>

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pb-space-lg">
        <div className="max-w-3xl flex flex-col gap-space-xs">
          <div className="flex items-center gap-2">
            <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
              HU-09 • Motor de Modificadores
            </span>
            <span className="font-body-sm text-body-sm text-secondary">
              | 3 Grupos activos • 9 Toppings registrados
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Gestión de Toppings, Adiciones y Modificadores
          </h1>
          <p className="font-body-md text-body-md text-secondary leading-relaxed">
            Controla el recálculo dinámico de precios, límites mínimos/máximos de selección y stock
            de ingredientes adicionales para cada tipo de comida rápida.
          </p>
        </div>

        <div className="flex items-center gap-space-sm self-start lg:self-auto">
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors shadow-sm cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-lg">tune</span>
            <span>Reordenar</span>
          </button>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg shadow-md transition-all active:scale-[0.98] cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-lg">add_circle</span>
            <span>+ Crear Nuevo Grupo de Toppings</span>
          </button>
        </div>
      </div>

      {/* Stat Grid Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mb-space-lg">
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-1">
          <div className="flex items-center justify-between text-secondary">
            <span className="font-label-md text-label-md">Toppings en Venta</span>
            <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
          </div>
          <span className="font-metric-number text-metric-number text-on-surface tabular-nums">
            {Object.values(stocks).filter(Boolean).length}
          </span>
          <span className="font-body-sm text-body-sm text-tertiary flex items-center gap-0.5">
            <span className="material-symbols-outlined text-xs">trending_up</span> 89%
            disponibilidad
          </span>
        </div>

        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-1">
          <div className="flex items-center justify-between text-secondary">
            <span className="font-label-md text-label-md">Ingredientes Agotados</span>
            <span className="material-symbols-outlined text-error text-lg">warning</span>
          </div>
          <span className="font-metric-number text-metric-number text-error tabular-nums">
            {Object.values(stocks).filter((v) => !v).length}
          </span>
          <span className="font-body-sm text-body-sm text-error flex items-center gap-0.5">
            <span className="material-symbols-outlined text-xs">block</span> Chicharrón Carnudo
          </span>
        </div>

        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-1">
          <div className="flex items-center justify-between text-secondary">
            <span className="font-label-md text-label-md">Ticket Promedio Adición</span>
            <span className="material-symbols-outlined text-primary text-lg">payments</span>
          </div>
          <span className="font-metric-number text-metric-number text-on-surface tabular-nums">
            $3.420
          </span>
          <span className="font-body-sm text-body-sm text-secondary">COP por orden con extra</span>
        </div>

        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-1">
          <div className="flex items-center justify-between text-secondary">
            <span className="font-label-md text-label-md">Recálculo Instantáneo</span>
            <span className="material-symbols-outlined text-tertiary text-lg">bolt</span>
          </div>
          <span className="font-metric-number text-metric-number text-tertiary tabular-nums">
            0.08s
          </span>
          <span className="font-body-sm text-body-sm text-secondary">Latencia de checkout</span>
        </div>
      </div>

      {/* Primary Workspace */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
        {/* Left Column: Customization Groups */}
        <div className="xl:col-span-8 flex flex-col gap-space-lg">
          {/* Group 1: Quesos y Fundidos */}
          <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm bg-surface-container-low p-space-md rounded-lg">
              <div className="flex items-start gap-space-sm">
                <span className="p-2 bg-primary-fixed text-on-primary-fixed rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">lunch_dining</span>
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Quesos y Fundidos
                    </h2>
                    <span className="bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full uppercase">
                      Opcional • Múltiple
                    </span>
                    <span className="bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full">
                      Límite global: Máx 4
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                    Aplica a:{' '}
                    <span className="font-semibold text-on-surface">
                      Hamburguesas, Salchipapas, Desgranados
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-space-xs self-end sm:self-center">
                <button
                  onClick={() => setModalOpen(true)}
                  className="p-2 text-secondary hover:text-on-surface hover:bg-surface-container rounded-lg cursor-pointer"
                  title="Editar Grupo"
                  type="button"
                >
                  <span className="material-symbols-outlined text-base">edit</span>
                </button>
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:bg-primary-container transition-all cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-sm">add</span> Nuevo Topping
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-space-sm">
              {/* Item 1.1 */}
              <div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md transition-all shadow-sm">
                <div className="flex items-center gap-space-md min-w-0">
                  <div className="h-12 w-12 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">local_pizza</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Doble Queso Mozzarella derretido
                      </span>
                      <span className="bg-surface-container-highest text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded">
                        Límite: Máx 2
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Fundido caliente al vapor de plancha artesanal
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-space-lg">
                  <div className="flex flex-col text-right">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      +$3.500 COP
                    </span>
                    <span
                      className={`font-label-sm text-label-sm font-bold uppercase ${
                        stocks.mozzarella ? 'text-tertiary' : 'text-error'
                      }`}
                    >
                      {stocks.mozzarella ? 'En Stock' : 'Sin Stock'}
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      checked={stocks.mozzarella}
                      onChange={() => toggleStock('mozzarella', 'Doble Queso Mozzarella')}
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
                  </label>
                </div>
              </div>

              {/* Item 1.2 */}
              <div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md transition-all shadow-sm">
                <div className="flex items-center gap-space-md min-w-0">
                  <div className="h-12 w-12 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">grain</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Queso Costeño Rallado Artesanal
                      </span>
                      <span className="bg-surface-container-highest text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded">
                        Límite: Máx 3
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Salado tradicional del caribe para mazorcas y salchipapas
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-space-lg">
                  <div className="flex flex-col text-right">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      +$3.000 COP
                    </span>
                    <span
                      className={`font-label-sm text-label-sm font-bold uppercase ${
                        stocks.costeno ? 'text-tertiary' : 'text-error'
                      }`}
                    >
                      {stocks.costeno ? 'En Stock' : 'Sin Stock'}
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      checked={stocks.costeno}
                      onChange={() => toggleStock('costeno', 'Queso Costeño Rallado')}
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
                  </label>
                </div>
              </div>

              {/* Item 1.3 */}
              <div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md transition-all shadow-sm">
                <div className="flex items-center gap-space-md min-w-0">
                  <div className="h-12 w-12 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">bakery_dining</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Salsa de Queso Cheddar Americano
                      </span>
                      <span className="bg-surface-container-highest text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded">
                        Límite: Máx 2
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Cremosa y tibia servida en copa de despacho
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-space-lg">
                  <div className="flex flex-col text-right">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      +$2.800 COP
                    </span>
                    <span
                      className={`font-label-sm text-label-sm font-bold uppercase ${
                        stocks.cheddar ? 'text-tertiary' : 'text-error'
                      }`}
                    >
                      {stocks.cheddar ? 'En Stock' : 'Sin Stock'}
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      checked={stocks.cheddar}
                      onChange={() => toggleStock('cheddar', 'Salsa de Cheddar Americano')}
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Group 2: Proteínas & Carnes Extra */}
          <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm bg-surface-container-low p-space-md rounded-lg">
              <div className="flex items-start gap-space-sm">
                <span className="p-2 bg-primary text-on-primary rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">kebab_dining</span>
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Proteínas &amp; Carnes Extra
                    </h2>
                    <span className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-2 py-0.5 rounded-full uppercase">
                      Adicional • Costo Alto
                    </span>
                    {!stocks.chicharron && (
                      <span className="bg-error-container text-on-error-container font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">
                        1 Agotado
                      </span>
                    )}
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                    Aplica a:{' '}
                    <span className="font-semibold text-on-surface">
                      Hamburguesas, Salchipapas
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-space-xs self-end sm:self-center">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:bg-primary-container transition-all cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-sm">add</span> Nuevo Topping
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-space-sm">
              {/* Item 2.1 */}
              <div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md transition-all shadow-sm">
                <div className="flex items-center gap-space-md min-w-0">
                  <div className="h-12 w-12 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">save_as</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Tocineta Ahumada Crujiente (2 tiras)
                      </span>
                      <span className="bg-surface-container-highest text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded">
                        Límite: Máx 3
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Curada artesanalmente en madera de manzano
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-space-lg">
                  <div className="flex flex-col text-right">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      +$4.000 COP
                    </span>
                    <span
                      className={`font-label-sm text-label-sm font-bold uppercase ${
                        stocks.tocineta ? 'text-tertiary' : 'text-error'
                      }`}
                    >
                      {stocks.tocineta ? 'En Stock' : 'Sin Stock'}
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      checked={stocks.tocineta}
                      onChange={() => toggleStock('tocineta', 'Tocineta Ahumada')}
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
                  </label>
                </div>
              </div>

              {/* Item 2.2 */}
              <div className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md transition-all shadow-sm">
                <div className="flex items-center gap-space-md min-w-0">
                  <div className="h-12 w-12 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">set_meal</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Carne de Res Artesanal 150g
                      </span>
                      <span className="bg-surface-container-highest text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded">
                        Límite: Máx 1
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Blend de pecho y cadera sellado al término 3/4
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-space-lg">
                  <div className="flex flex-col text-right">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      +$6.500 COP
                    </span>
                    <span
                      className={`font-label-sm text-label-sm font-bold uppercase ${
                        stocks.carne ? 'text-tertiary' : 'text-error'
                      }`}
                    >
                      {stocks.carne ? 'En Stock' : 'Sin Stock'}
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      checked={stocks.carne}
                      onChange={() => toggleStock('carne', 'Carne Artesanal 150g')}
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
                  </label>
                </div>
              </div>

              {/* Item 2.3 */}
              <div
                className={`${
                  stocks.chicharron ? 'bg-surface-container-low' : 'bg-error-container/25'
                } p-space-md rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md transition-all shadow-sm`}
              >
                <div className="flex items-center gap-space-md min-w-0">
                  <div className="h-12 w-12 rounded-lg bg-error-container text-on-error-container overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">dinner_dining</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`font-label-lg text-label-lg text-on-surface ${
                          !stocks.chicharron ? 'line-through opacity-70' : ''
                        }`}
                      >
                        Porción de Chicharrón Carnudo
                      </span>
                      {!stocks.chicharron && (
                        <span className="bg-error text-on-error font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold uppercase">
                          Agotado Temporal
                        </span>
                      )}
                    </div>
                    <span className="font-body-sm text-body-sm text-error font-medium">
                      {stocks.chicharron
                        ? 'Chicharrón carnudo al estilo huilense'
                        : 'Bloqueado en la app del cliente para evitar quejas de pedido'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-space-lg">
                  <div className="flex flex-col text-right">
                    <span
                      className={`font-headline-sm text-headline-sm ${
                        stocks.chicharron ? 'text-primary font-bold' : 'text-secondary line-through'
                      }`}
                    >
                      +$5.500 COP
                    </span>
                    <span
                      className={`font-label-sm text-label-sm font-bold uppercase ${
                        stocks.chicharron ? 'text-tertiary' : 'text-error'
                      }`}
                    >
                      {stocks.chicharron ? 'En Stock' : 'Sin Stock'}
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      checked={stocks.chicharron}
                      onChange={() => toggleStock('chicharron', 'Chicharrón Carnudo')}
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Business Rules & Live Preview */}
        <div className="xl:col-span-4 flex flex-col gap-space-lg sticky top-20">
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm pb-space-xs">
              <span className="material-symbols-outlined text-primary text-xl">gavel</span>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Reglas de Negocio &amp; PRD
                </h3>
                <span className="font-body-sm text-body-sm text-secondary">
                  Parámetros globales de despacho
                </span>
              </div>
            </div>

            <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-on-surface">
                    Excluir ingredientes sin costo
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary mt-1">
                    Permite al cliente solicitar “Sin cebolla”, “Sin salsas” o “Sin ripio” sin
                    alterar el precio final.
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
                  <input
                    checked={ruleExcludeFree}
                    onChange={() => setRuleExcludeFree(!ruleExcludeFree)}
                    className="sr-only peer"
                    type="checkbox"
                  />
                  <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center gap-1.5 mt-2 bg-surface-container-highest/60 px-2 py-1 rounded font-label-sm text-label-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-sm text-tertiary">check</span>
                <span>Aplica a Comandas de Cocina KDS</span>
              </div>
            </div>

            <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-label-lg text-label-lg text-on-surface">
                      Recálculo dinámico en vivo
                    </span>
                    <span className="font-label-sm text-label-sm bg-tertiary-container text-on-tertiary-container px-1.5 py-0.2 rounded font-bold uppercase">
                      Forzado
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-secondary mt-1">
                    Cada adición suma inmediatamente al subtotal del carrito vía WebSockets sin
                    refrescar página.
                  </span>
                </div>
                <div className="relative inline-flex items-center opacity-80 cursor-not-allowed flex-shrink-0 mt-1">
                  <input checked className="sr-only peer" disabled type="checkbox" />
                  <div className="w-11 h-6 bg-tertiary rounded-full peer after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:rounded-full after:h-5 after:w-5"></div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
              <div className="flex items-center justify-between">
                <span className="font-label-lg text-label-lg text-on-surface">
                  Toppings máx. por plato
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  6 adiciones
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-secondary">
                Protege el tiempo de armado de cocina en horas pico (Viernes a Domingo).
              </span>
            </div>

            <button
              onClick={() => {
                setAlertText('Reglas de negocio guardadas y aplicadas al punto de venta.');
                setAlertHighlight(true);
                setTimeout(() => setAlertHighlight(false), 2500);
              }}
              className="w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-base">save</span> Guardar Reglas de
              Negocio
            </button>
          </div>

          {/* Mini Live Preview of Customer Experience */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">smartphone</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Vista Previa Cliente
                </h3>
              </div>
              <span className="font-label-sm text-label-sm bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded-full font-bold uppercase animate-pulse">
                En Vivo
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-secondary">
              Simulador interactivo del modal que visualizan los clientes al armar su pedido en
              Neiva.
            </p>

            <div className="bg-surface-container-high rounded-xl p-space-sm shadow-inner flex flex-col gap-2">
              <div className="bg-surface-container-lowest rounded-lg p-space-sm flex items-center gap-space-sm shadow-sm">
                <img
                  alt="Hamburguesa Antojo Especial"
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ4JBvrx7Az3rXz6DLaVRMnyMY6uxP8AB9egmyezrNVRhfhJWLVGQkaQGaewUBgea0PWDyOO-ARFOZhQFgTxVygcoE6p0TPWxwXnYZG6xN4lhw0QeMmsSr9ag9mxzEj_QW4ItSMxgvFy59U1Y9RWwrAZUGwiOkkqXx_MjjvyfFlWs8bpY0xCZaSfFy6_YSqW9EpMEL9fsBfXYY2YZz0Fw2y4NvhZnWQt__9qZVNZPa76e4cguIzEsgYA"
                />
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-label-md text-label-md text-on-surface truncate">
                    Hamburguesa Antojo Especial
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    Base: $22.000 COP
                  </span>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-lg p-space-sm flex flex-col gap-2 shadow-sm text-xs">
                <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">
                  ¿Deseas personalizar tu plato?
                </span>
                <label className="flex items-center justify-between p-2 rounded bg-surface-container hover:bg-surface-container-highest cursor-pointer transition-colors">
                  <div className="flex items-center gap-2">
                    <input
                      checked={simMozzarella}
                      onChange={(e) => setSimMozzarella(e.target.checked)}
                      className="accent-primary rounded h-4 w-4"
                      type="checkbox"
                    />
                    <span className="font-label-sm text-label-sm text-on-surface">
                      Doble Queso Mozzarella
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    +$3.500
                  </span>
                </label>

                <label className="flex items-center justify-between p-2 rounded bg-surface-container hover:bg-surface-container-highest cursor-pointer transition-colors">
                  <div className="flex items-center gap-2">
                    <input
                      checked={simTocineta}
                      onChange={(e) => setSimTocineta(e.target.checked)}
                      className="accent-primary rounded h-4 w-4"
                      type="checkbox"
                    />
                    <span className="font-label-sm text-label-sm text-on-surface">
                      Tocineta Crujiente
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    +$4.000
                  </span>
                </label>

                <div className="flex items-center justify-between p-2 rounded bg-surface-container/40 opacity-50 cursor-not-allowed">
                  <div className="flex items-center gap-2">
                    <input className="rounded h-4 w-4" disabled type="checkbox" />
                    <span className="font-label-sm text-label-sm text-secondary line-through">
                      Chicharrón Carnudo
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-error font-bold">Agotado</span>
                </div>

                <div className="mt-1 pt-2 border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary">
                    Exclusión gratis:
                  </span>
                  <span className="bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm px-1.5 py-0.5 rounded">
                    Sin Cebolla • $0
                  </span>
                </div>
              </div>

              <div className="bg-primary text-on-primary rounded-lg p-space-sm flex items-center justify-between shadow-sm">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm opacity-90">Precio Recalculado</span>
                  <span className="font-headline-sm text-headline-sm font-extrabold tracking-tight tabular-nums">
                    ${simTotal.toLocaleString('es-CO')} COP
                  </span>
                </div>
                <button
                  className="bg-on-primary text-primary px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold uppercase shadow-sm"
                  type="button"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Creating New Topping Group */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-xl flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-primary-fixed text-on-primary-fixed rounded-lg">
                  <span className="material-symbols-outlined text-lg">category</span>
                </span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  Crear Grupo de Toppings
                </h2>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded text-secondary hover:text-on-surface cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="flex flex-col gap-space-sm">
              <label className="flex flex-col gap-1">
                <span className="font-label-md text-label-md text-on-surface">
                  Nombre del Grupo
                </span>
                <input
                  className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                  placeholder="Ej: Bebidas Extra, Término de Carne, Vegetales"
                  type="text"
                />
              </label>

              <div className="grid grid-cols-2 gap-space-sm">
                <label className="flex flex-col gap-1">
                  <span className="font-label-md text-label-md text-on-surface">
                    Mínimo de selección
                  </span>
                  <input
                    className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue={0}
                    min={0}
                    type="number"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="font-label-md text-label-md text-on-surface">
                    Máximo permitido
                  </span>
                  <input
                    className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue={4}
                    min={1}
                    type="number"
                  />
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-space-sm pt-2">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md cursor-pointer"
                type="button"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setModalOpen(false);
                  setAlertText('Nuevo grupo de toppings creado y vinculado.');
                  setAlertHighlight(true);
                  setTimeout(() => setAlertHighlight(false), 2500);
                }}
                className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-sm cursor-pointer"
                type="button"
              >
                Crear y Configurar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
