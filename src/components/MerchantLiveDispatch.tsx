import React, { useState } from 'react';

interface TicketData {
  id: string;
  customer: string;
  address: string;
  item: string;
  total: string;
  payment: string;
}

interface MerchantLiveDispatchProps {
  onOpenChat?: () => void;
  onOpenMap?: () => void;
}

export const MerchantLiveDispatch: React.FC<MerchantLiveDispatchProps> = ({
  onOpenChat,
  onOpenMap,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [printing, setPrinting] = useState<'idle' | 'printing' | 'done'>('idle');
  const [chimeAlert, setChimeAlert] = useState(false);
  const [selectedCourier, setSelectedCourier] = useState('andres');
  const [ticket, setTicket] = useState<TicketData>({
    id: 'AV-1082',
    customer: 'Valentina Ortiz',
    address: 'Barrio Quirinal',
    item: 'Salchipapa Especial Salvaje',
    total: '28.500',
    payment: 'Nequi Aprobado',
  });

  const [orderStates, setOrderStates] = useState<{
    av1082: 'nuevo' | 'cocina' | 'rechazado';
    av1083: 'nuevo' | 'cocina';
    av1080: 'cocina' | 'barra';
    av1081Notified: boolean;
    av1079Dispatched: boolean;
  }>({
    av1082: 'nuevo',
    av1083: 'nuevo',
    av1080: 'cocina',
    av1081Notified: false,
    av1079Dispatched: false,
  });

  const loadComandaDetail = (
    id: string,
    customer: string,
    address: string,
    item: string,
    total: string,
    payment: string
  ) => {
    setTicket({ id, customer, address, item, total, payment });
    setDrawerOpen(true);
  };

  const handlePrintReceipt = () => {
    setPrinting('printing');
    setTimeout(() => {
      setPrinting('done');
      setTimeout(() => {
        setPrinting('idle');
        setDrawerOpen(false);
      }, 1200);
    }, 900);
  };

  const triggerChime = () => {
    setChimeAlert(true);
    setTimeout(() => setChimeAlert(false), 2000);
  };

  return (
    <div className="flex flex-col w-full gap-space-lg">
      {/* Top Real-time Dispatch Banner & Kitchen Metrics */}
      <section className="flex flex-col gap-space-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                Despacho en Vivo • Turno Noche Neiva
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface">
              Gestión Operativa de Cocina &amp; Despacho
            </h1>
          </div>
          {/* Action Utilities */}
          <div className="flex items-center flex-wrap gap-space-sm">
            <div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-low shadow-sm">
              <span className="material-symbols-outlined text-secondary text-lg">
                wifi_tethering
              </span>
              <span className="font-label-md text-label-md text-on-surface">
                Sincronización POS Activa
              </span>
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            </div>
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md shadow-sm transition-all cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-base">receipt_long</span>
              <span>Último Ticket Térmico</span>
            </button>
            <button
              onClick={triggerChime}
              className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-all cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-base">
                {chimeAlert ? 'notifications_active' : 'volume_up'}
              </span>
              <span>{chimeAlert ? '¡Sonando Chime 105dB!' : 'Probar Chime (105dB)'}</span>
            </button>
          </div>
        </div>

        {/* Metric Stat Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
          {/* Metric 1 */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-secondary">Ventas de Hoy</span>
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-xs">trending_up</span> +18.4%
              </span>
            </div>
            <div className="mt-space-sm flex items-baseline gap-space-xs">
              <span className="font-metric-number text-metric-number text-on-surface tabular-nums">
                $348.500
              </span>
              <span className="font-label-sm text-label-sm text-secondary">COP</span>
            </div>
            <span className="mt-space-xs font-body-sm text-body-sm text-secondary">
              32 órdenes completadas hoy
            </span>
          </div>

          {/* Metric 2 */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-secondary">Pedidos Activos</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> 6 en
                curso
              </span>
            </div>
            <div className="mt-space-sm flex items-baseline gap-space-xs">
              <span className="font-metric-number text-metric-number text-on-surface tabular-nums">
                06
              </span>
              <span className="font-label-sm text-label-sm text-secondary">tickets</span>
            </div>
            <div className="mt-space-xs flex items-center gap-2">
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full w-3/4"></div>
              </div>
              <span className="font-label-sm text-label-sm text-secondary">75% cap.</span>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-secondary">
                Tiempo Promedio Despacho
              </span>
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-xs">speed</span> Óptimo
              </span>
            </div>
            <div className="mt-space-sm flex items-baseline gap-space-xs">
              <span className="font-metric-number text-metric-number text-on-surface tabular-nums">
                19
              </span>
              <span className="font-label-sm text-label-sm text-secondary">minutos</span>
            </div>
            <span className="mt-space-xs font-body-sm text-body-sm text-secondary">
              Meta estandar: &lt; 25 min
            </span>
          </div>

          {/* Metric 4 */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-secondary">
                Domiciliarios Asignados
              </span>
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm">
                3 en calle
              </span>
            </div>
            <div className="mt-space-sm flex items-baseline gap-space-xs">
              <span className="font-metric-number text-metric-number text-on-surface tabular-nums">
                3{' '}
                <span className="text-secondary font-label-lg text-label-lg">/ 4 flota</span>
              </span>
            </div>
            <span className="mt-space-xs font-body-sm text-body-sm text-secondary truncate">
              Altico • Quirinal • Las Granjas
            </span>
          </div>
        </div>
      </section>

      {/* Live Operational Kanban Board (4 Columns) */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md items-start">
        {/* COLUMN 1: NUEVOS / PENDIENTES */}
        <div className="flex flex-col gap-space-sm bg-surface-container-low p-space-sm rounded-xl">
          <div className="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-lg shadow-sm">
            <div className="flex items-center gap-space-xs">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Nuevos</h2>
            </div>
            <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">
              2 pedidos
            </span>
          </div>

          {/* Card 1: Pedido #AV-1082 */}
          <div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-md transition-all hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
            <div className="flex items-start justify-between gap-space-xs">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    #AV-1082
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary">
                    Hace 2m
                  </span>
                </div>
                <span className="font-label-md text-label-md text-on-surface mt-0.5">
                  Valentina Ortiz
                </span>
                <div className="flex items-center gap-1 text-secondary font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-xs text-primary">
                    location_on
                  </span>
                  <span>Barrio Quirinal (Cra 6 #18)</span>
                </div>
              </div>
              <button
                onClick={() =>
                  loadComandaDetail(
                    'AV-1082',
                    'Valentina Ortiz',
                    'Barrio Quirinal',
                    'Salchipapa Especial Salvaje',
                    '28.500',
                    'Nequi Aprobado'
                  )
                }
                className="p-1 rounded text-secondary hover:text-on-surface hover:bg-surface-container cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-lg">visibility</span>
              </button>
            </div>

            <div className="mt-space-sm p-space-sm rounded-lg bg-surface-container flex flex-col gap-space-xs">
              <div className="flex items-start justify-between">
                <span className="font-label-md text-label-md text-on-surface">
                  1x Salchipapa Especial Salvaje
                </span>
                <span className="font-label-sm text-label-sm text-secondary">$23.000</span>
              </div>
              <ul className="pl-2 flex flex-col gap-0.5 text-on-surface-variant font-body-sm text-body-sm">
                <li className="flex items-center gap-1 text-tertiary">
                  <span className="material-symbols-outlined text-xs">add_circle</span> + Tocineta
                  crujiente
                </li>
                <li className="flex items-center gap-1 text-tertiary">
                  <span className="material-symbols-outlined text-xs">add_circle</span> + Queso
                  costeño rallado
                </li>
                <li className="flex items-center gap-1 text-error">
                  <span className="material-symbols-outlined text-xs">remove_circle</span> Sin
                  cebolla en salsa
                </li>
              </ul>
              <div className="flex items-center justify-between pt-1 text-on-surface">
                <span className="font-body-sm text-body-sm">1x Coca-Cola Zero 400ml</span>
                <span className="font-label-sm text-label-sm text-secondary">$5.500</span>
              </div>
            </div>

            <div className="mt-space-sm flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-tertiary">verified</span>
                  Nequi Verificado
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                $28.500
              </span>
            </div>

            <div className="mt-space-md grid grid-cols-2 gap-space-xs">
              <button
                onClick={() => setOrderStates((s) => ({ ...s, av1082: 'cocina' }))}
                className="py-2.5 px-space-sm rounded-lg bg-tertiary hover:bg-tertiary-container text-on-tertiary font-label-md text-label-md shadow-sm transition-all flex items-center justify-center gap-1 cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-base">
                  {orderStates.av1082 === 'cocina' ? 'check' : 'skillet'}
                </span>
                <span>{orderStates.av1082 === 'cocina' ? 'Aceptado' : 'Aceptar'}</span>
              </button>
              <button
                onClick={() => setOrderStates((s) => ({ ...s, av1082: 'rechazado' }))}
                className="py-2.5 px-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-error font-label-md text-label-md transition-all flex items-center justify-center gap-1 cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-base">cancel</span>
                <span>{orderStates.av1082 === 'rechazado' ? 'Rechazado' : 'Rechazar'}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Pedido #AV-1083 */}
          <div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md">
            <div className="flex items-start justify-between gap-space-xs">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    #AV-1083
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary">
                    Hace 5m
                  </span>
                </div>
                <span className="font-label-md text-label-md text-on-surface mt-0.5">
                  Carlos Méndez
                </span>
                <div className="flex items-center gap-1 text-secondary font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-xs text-primary">
                    location_on
                  </span>
                  <span>Calle 8 #14-22 (Centro)</span>
                </div>
              </div>
              <button
                onClick={() =>
                  loadComandaDetail(
                    'AV-1083',
                    'Carlos Méndez',
                    'Calle 8 #14-22',
                    '2x Hamburguesa Doble Artesanal',
                    '46.000',
                    'Efectivo $50.000 (Cambio: $4.000)'
                  )
                }
                className="p-1 rounded text-secondary hover:text-on-surface hover:bg-surface-container cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-lg">visibility</span>
              </button>
            </div>

            <div className="mt-space-sm p-space-sm rounded-lg bg-surface-container flex flex-col gap-space-xs">
              <div className="flex items-start justify-between">
                <span className="font-label-md text-label-md text-on-surface">
                  2x Hamburguesa Doble Artesanal
                </span>
                <span className="font-label-sm text-label-sm text-secondary">$46.000</span>
              </div>
              <ul className="pl-2 flex flex-col gap-0.5 text-on-surface-variant font-body-sm text-body-sm">
                <li className="flex items-center gap-1 text-tertiary">
                  <span className="material-symbols-outlined text-xs">add_circle</span> + Doble
                  carne Angus
                </li>
                <li className="flex items-center gap-1 text-tertiary">
                  <span className="material-symbols-outlined text-xs">add_circle</span> + Salsa
                  tártara de la casa
                </li>
              </ul>
            </div>

            <div className="mt-space-sm flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">payments</span>
                Efectivo ($50.000)
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                $46.000
              </span>
            </div>

            <div className="mt-space-md">
              <button
                onClick={() => setOrderStates((s) => ({ ...s, av1083: 'cocina' }))}
                className="w-full py-2.5 px-space-sm rounded-lg bg-tertiary hover:bg-tertiary-container text-on-tertiary font-label-md text-label-md shadow-sm transition-all flex items-center justify-center gap-1 cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-base">
                  {orderStates.av1083 === 'cocina' ? 'check_circle' : 'skillet'}
                </span>
                <span>
                  {orderStates.av1083 === 'cocina' ? 'En Cocina' : 'Aceptar & Cocinar'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* COLUMN 2: EN PREPARACIÓN */}
        <div className="flex flex-col gap-space-sm bg-surface-container-low p-space-sm rounded-xl">
          <div className="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-lg shadow-sm">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-lg text-primary">restaurant</span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">En Cocina</h2>
            </div>
            <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-bold">
              2 órdenes
            </span>
          </div>

          {/* Card 3: Pedido #AV-1080 */}
          <div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  #AV-1080
                </span>
                <span className="block font-label-md text-label-md text-on-surface">
                  Mariana Gómez
                </span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-xs">timer</span>
                <span>12:40 en parrilla</span>
              </div>
            </div>

            <div className="mt-space-sm p-space-sm rounded-lg bg-surface-container">
              <span className="font-label-md text-label-md text-on-surface">
                1x Perro Caliente Suizo Monumental
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Salchicha suiza artesanal, ripio de papa, queso fundido cuádruple.
              </p>
            </div>

            <div className="mt-space-sm flex items-center justify-between text-secondary font-body-sm text-body-sm">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">room_service</span> Estación
                Plancha 2
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                $19.000
              </span>
            </div>

            <div className="mt-space-md">
              <button
                onClick={() => setOrderStates((s) => ({ ...s, av1080: 'barra' }))}
                className="w-full py-2.5 px-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-base">check_circle</span>
                <span>
                  {orderStates.av1080 === 'barra'
                    ? 'Listo en Barra'
                    : 'Marcar Listo para Recoger'}
                </span>
              </button>
            </div>
          </div>

          {/* Card 4: Pedido #AV-1081 */}
          <div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  #AV-1081
                </span>
                <span className="block font-label-md text-label-md text-on-surface">
                  Andrés Perdomo
                </span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-surface-container-highest text-on-surface font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-xs">timer</span>
                <span>07:15 en horno</span>
              </div>
            </div>

            <div className="mt-space-sm p-space-sm rounded-lg bg-surface-container">
              <span className="font-label-md text-label-md text-on-surface">
                1x Pizza Personal Criolla
              </span>
              <p className="font-body-sm text-body-sm text-tertiary mt-0.5 font-medium">
                + Topping extra de Maíz Dulce tierno
              </p>
            </div>

            <div className="mt-space-sm flex items-center justify-between text-secondary font-body-sm text-body-sm">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">local_pizza</span> Horno Piedra
                1
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                $22.000
              </span>
            </div>

            <div className="mt-space-md">
              <button
                onClick={() => setOrderStates((s) => ({ ...s, av1081Notified: true }))}
                className="w-full py-2.5 px-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-base">notifications_active</span>
                <span>
                  {orderStates.av1081Notified
                    ? 'Aviso enviado al repartidor'
                    : 'Avisar Faltan 3 Minutos'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* COLUMN 3: LISTO EN BARRA */}
        <div className="flex flex-col gap-space-sm bg-surface-container-low p-space-sm rounded-xl">
          <div className="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-lg shadow-sm">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-lg text-tertiary">inventory_2</span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Listo en Barra</h2>
            </div>
            <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-bold">
              1 empaque
            </span>
          </div>

          {/* Card 5: Pedido #AV-1079 */}
          <div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    #AV-1079
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
                    Empacado
                  </span>
                </div>
                <span className="block font-label-md text-label-md text-on-surface mt-0.5">
                  Familia Cabrera
                </span>
                <span className="font-body-sm text-body-sm text-secondary">
                  Altico (Cra 12 #4-50)
                </span>
              </div>
              <span className="material-symbols-outlined text-tertiary text-2xl">check_box</span>
            </div>

            <div className="mt-space-sm p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
              <span className="font-label-md text-label-md text-on-surface">
                Combo Familiar Alitas BBQ (24 pcs)
              </span>
              <span className="font-body-sm text-body-sm text-secondary">
                Papas rústicas + Salsas empacadas térmicamente
              </span>
              <span className="font-label-sm text-label-sm text-primary font-semibold">
                Térmica: Bolsa Sellada #09
              </span>
            </div>

            <div className="mt-space-sm flex flex-col gap-1">
              <label className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                Asignar Repartidor Flota
              </label>
              <div className="relative">
                <select
                  value={selectedCourier}
                  onChange={(e) => setSelectedCourier(e.target.value)}
                  className="w-full py-2 px-space-sm bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
                >
                  <option value="andres">Andrés Rojas - Moto AKT 125 (En puerta)</option>
                  <option value="javier">Javier Peña - Boxer CT 100 (A 2 min)</option>
                  <option value="externo">Despacho Domicilio Local Externo</option>
                </select>
                <span className="material-symbols-outlined text-secondary text-base absolute right-3 top-2.5 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            <div className="mt-space-md flex items-center justify-between pt-1">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                $62.000
              </span>
              <button
                onClick={() => setOrderStates((s) => ({ ...s, av1079Dispatched: true }))}
                className="py-2.5 px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-all flex items-center gap-1 cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-base">two_wheeler</span>
                <span>{orderStates.av1079Dispatched ? 'En Ruta' : 'Despachar'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* COLUMN 4: EN RUTA */}
        <div className="flex flex-col gap-space-sm bg-surface-container-low p-space-sm rounded-xl">
          <div className="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-lg shadow-sm">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-lg text-secondary">
                sports_motorsports
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">En Ruta</h2>
            </div>
            <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold">
              1 en calle
            </span>
          </div>

          {/* Card 6: Pedido #AV-1078 */}
          <div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    #AV-1078
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                    GPS Activo
                  </span>
                </div>
                <span className="block font-label-md text-label-md text-on-surface mt-0.5">
                  Daniela Castro
                </span>
                <span className="font-body-sm text-body-sm text-secondary">
                  Las Granjas (Calle 35 Norte)
                </span>
              </div>
              <span className="material-symbols-outlined text-primary text-2xl animate-pulse">
                navigation
              </span>
            </div>

            <div className="mt-space-sm p-space-sm rounded-lg bg-surface-container flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary">Repartidor:</span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Carlos B. (Moto 02)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary">Salida de local:</span>
                <span className="font-body-sm text-body-sm text-on-surface">Hace 9 min</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary">ETA Estimado:</span>
                <span className="font-label-md text-label-md text-tertiary font-bold">
                  ~ 4 minutos
                </span>
              </div>
            </div>

            <div className="mt-space-sm relative rounded-lg overflow-hidden bg-surface-container h-24 flex items-center justify-center">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#565e74_1px,transparent_1px)] [background-size:8px_8px]"></div>
              <div className="z-10 flex flex-col items-center">
                <div className="flex items-center gap-1 text-primary font-label-sm text-label-sm font-bold bg-surface-container-lowest px-2 py-1 rounded shadow-sm">
                  <span className="material-symbols-outlined text-sm">near_me</span>
                  <span>Av. 26 con Calle 32</span>
                </div>
                <span className="font-body-sm text-body-sm text-secondary mt-1">
                  Velocidad: 38 km/h
                </span>
              </div>
            </div>

            <div className="mt-space-md grid grid-cols-2 gap-space-xs">
              <button
                onClick={onOpenMap}
                className="py-2 px-space-xs rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 transition-all cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-sm">map</span>
                <span>Ver Mapa</span>
              </button>
              <button
                onClick={onOpenChat}
                className="py-2 px-space-xs rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md flex items-center justify-center gap-1 transition-all cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Chat Cliente</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Dispatch Fleet Map & Route Radar */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
        <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-space-sm">
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Flota Local en Servicio
              </h2>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-secondary">
                3 Motores
              </span>
            </div>
            <div className="flex flex-col gap-space-sm">
              {/* Rider 1 */}
              <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed font-bold font-label-sm text-label-sm">
                    CR
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface">Carlos B.</span>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Las Granjas • #AV-1078
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm">
                  Entregando
                </span>
              </div>
              {/* Rider 2 */}
              <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed font-bold font-label-sm text-label-sm">
                    AR
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface">
                      Andrés Rojas
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary">
                      En Local • Asignando #1079
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">
                  En Base
                </span>
              </div>
              {/* Rider 3 */}
              <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed font-bold font-label-sm text-label-sm">
                    JP
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface">Javier Peña</span>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Retornando desde Altico
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm">
                  Libre en 2m
                </span>
              </div>
            </div>
          </div>
          <div className="pt-space-md mt-space-sm flex items-center justify-between">
            <span className="font-body-sm text-body-sm text-secondary">
              Tiempo máx de espera de moto: 3 min
            </span>
            <button
              onClick={onOpenMap}
              className="text-primary hover:text-primary-container font-label-md text-label-md flex items-center gap-0.5 cursor-pointer"
              type="button"
            >
              <span>Ajustar Zonas</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Live Geographic Dispatch Radar */}
        <div className="lg:col-span-2 rounded-xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between z-10">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                Cobertura en Directo
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Radar de Entregas Activas Neiva
              </h2>
            </div>
            <div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-primary text-base">my_location</span>
              <span className="font-label-md text-label-md text-on-surface">Perímetro 6.5 km</span>
            </div>
          </div>

          <div
            className="mt-space-md w-full h-56 rounded-xl bg-cover bg-center relative flex items-center justify-center overflow-hidden shadow-sm"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtKbzf0BoTIvlMhy7l6b6OgrCxVOYUb-yCacTMxSY1wB8f1VSYWQAEeCa08GFjiGDL2Hfa9ZPcskWYTXcokHrLdpON4xwNiz2Ue9QeWggG45B_NmJxC_2SbOp99AbwST4X0j4D3zf1pYpYhDp1BZgCX-4qiVrEwm1p7CyGXkj2B4kE8wDQ_EhaKsTM7OxKWHG0vifawz63-0cgOlJi99xHpgtwE33D7YDdDRGD_x5gEgRHvcaTd3KTQQ')`,
            }}
          >
            <div className="absolute top-8 left-1/4 p-1.5 rounded-full bg-primary text-on-primary shadow-lg flex items-center gap-1 scale-95 hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-xs">local_pizza</span>
              <span className="font-label-sm text-label-sm pr-1">La Esquina (Base)</span>
            </div>
            <div className="absolute bottom-10 right-1/3 p-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed shadow-md flex items-center gap-1 animate-bounce">
              <span className="material-symbols-outlined text-xs">sports_motorsports</span>
              <span className="font-label-sm text-label-sm pr-1">#AV-1078 (Las Granjas)</span>
            </div>
          </div>

          <div className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm text-on-surface z-10">
            <div className="flex items-center gap-space-md">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                <span className="font-body-sm text-body-sm text-secondary">Sede Centro</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
                <span className="font-body-sm text-body-sm text-secondary">Rutas Fluidas</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span className="font-body-sm text-body-sm text-secondary">Zona Alta Demanda</span>
              </div>
            </div>
            <button
              onClick={onOpenMap}
              className="py-1.5 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex items-center gap-1 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-sm">fullscreen</span>
              <span>Expandir Monitor de Tráfico</span>
            </button>
          </div>
        </div>
      </section>

      {/* Slide-over Drawer: Thermal ESC/POS Ticket & Kitchen Comanda Detail */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-surface-container-lowest shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-space-lg bg-surface-container-low flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-xl">receipt</span>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Comanda de Cocina
              </span>
              <span className="font-label-sm text-label-sm text-secondary">
                Formato Ticket Térmico 80mm ESC/POS
              </span>
            </div>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-1 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="p-space-lg flex-1 overflow-y-auto flex flex-col gap-space-md bg-surface">
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col font-mono text-on-surface">
            <div className="text-center pb-space-sm">
              <h3 className="font-headline-sm text-headline-sm font-extrabold text-on-surface tracking-tight">
                ANTOJO-VIRTUAL
              </h3>
              <p className="font-body-sm text-body-sm text-secondary">
                La Esquina del Sabor • Neiva
              </p>
              <p className="font-label-sm text-label-sm text-secondary">NIT: 901.482.119-4</p>
              <div className="my-2 border-dashed border-t border-surface-container-highest"></div>
              <span className="font-headline-lg text-headline-lg font-black text-primary">
                #{ticket.id}
              </span>
              <p className="font-body-sm text-body-sm text-secondary">06 Nov 2024 - 19:42:10</p>
            </div>
            <div className="py-space-sm flex flex-col gap-1">
              <div className="flex justify-between font-label-md text-label-md">
                <span>CLIENTE:</span>
                <span className="font-bold">{ticket.customer}</span>
              </div>
              <div className="flex justify-between font-label-md text-label-md">
                <span>DESTINO:</span>
                <span className="text-right">{ticket.address}</span>
              </div>
              <div className="flex justify-between font-label-md text-label-md">
                <span>PAGO:</span>
                <span className="text-tertiary font-bold">{ticket.payment}</span>
              </div>
            </div>
            <div className="my-2 border-dashed border-t border-surface-container-highest"></div>
            <div className="py-space-sm flex flex-col gap-space-sm">
              <div className="flex flex-col">
                <div className="flex justify-between font-label-md text-label-md font-bold">
                  <span>{ticket.item}</span>
                  <span>${ticket.total}</span>
                </div>
                <div className="pl-2 font-body-sm text-body-sm text-secondary">
                  <p>• [TOPPING] Tocineta crujiente</p>
                  <p>• [TOPPING] Queso costeño rallado</p>
                  <p className="text-error font-bold">• [ALERTA] SIN CEBOLLA</p>
                </div>
              </div>
              <div className="flex justify-between font-label-md text-label-md font-bold">
                <span>1x Coca-Cola Zero 400ml</span>
                <span>$5.500</span>
              </div>
            </div>
            <div className="my-2 border-dashed border-t border-surface-container-highest"></div>
            <div className="flex justify-between font-headline-sm text-headline-sm font-bold pt-1">
              <span>TOTAL A COBRAR:</span>
              <span>${ticket.total} COP</span>
            </div>
            <div className="mt-space-md p-space-sm bg-surface-container rounded text-center">
              <span className="font-label-sm text-label-sm text-secondary uppercase">
                Generado por Dispatch Hub Antojo-Virtual
              </span>
            </div>
          </div>
        </div>

        <div className="p-space-lg bg-surface-container-low flex items-center gap-space-sm shadow-md">
          <button
            onClick={handlePrintReceipt}
            className="flex-1 py-3 px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm flex items-center justify-center gap-space-xs transition-all cursor-pointer"
            type="button"
          >
            {printing === 'idle' && (
              <>
                <span className="material-symbols-outlined text-lg">print</span>
                <span>Imprimir Comanda (ESC/POS)</span>
              </>
            )}
            {printing === 'printing' && (
              <>
                <span className="material-symbols-outlined animate-spin text-lg">
                  progress_activity
                </span>
                <span>Imprimiendo en Cocina...</span>
              </>
            )}
            {printing === 'done' && (
              <>
                <span className="material-symbols-outlined text-lg">check_circle</span>
                <span>¡Enviado a Impresora Térmica!</span>
              </>
            )}
          </button>
          <button
            onClick={() => setDrawerOpen(false)}
            className="py-3 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-all cursor-pointer"
            type="button"
          >
            Cerrar
          </button>
        </div>
      </div>

      {/* Ambient Backdrop for Drawer */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm z-40 transition-opacity"
        ></div>
      )}
    </div>
  );
};
