import React, { useState } from 'react';

interface MerchantCatalogProps {
  onGoToToppings?: () => void;
}

export const MerchantCatalog: React.FC<MerchantCatalogProps> = ({ onGoToToppings }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos (28)');
  const [filterText, setFilterText] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [dishName, setDishName] = useState('Hamburguesa Artesanal Doble Carne');
  const [dishPrice, setDishPrice] = useState('24.000');
  const [dishDesc, setDishDesc] = useState(
    'Doble carne de res de 150g a la parrilla, doble queso cheddar fundido, tocineta crocante caramelizada, lechuga romana fresca, cebolla morada en aros y pan brioche sellado con mantequilla de ajo.'
  );

  const [availability, setAvailability] = useState<{ [key: string]: boolean }>({
    burger: true,
    salchipapa: true,
    perro: true,
    desgranado: false,
  });

  const categories = [
    'Todos (28)',
    'Hamburguesas (8)',
    'Salchipapas (6)',
    'Perros Calientes (5)',
    'Pizzas & Desgranados (5)',
    'Bebidas (4)',
  ];

  const openEditFor = (name: string, price: string) => {
    setDishName(name);
    setDishPrice(price);
    setDrawerOpen(true);
  };

  return (
    <div className="flex flex-col w-full gap-space-lg pb-space-xl">
      {/* Dynamic Summary / Status Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
              Total Productos
            </span>
            <span className="font-metric-number text-metric-number text-on-surface tabular-nums">
              28
            </span>
            <span className="font-body-sm text-body-sm text-tertiary flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-sm">trending_up</span> 100% cartas
              operativas
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">fastfood</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
              Activos en Neiva
            </span>
            <span className="font-metric-number text-metric-number text-on-surface tabular-nums">
              24
            </span>
            <span className="font-body-sm text-body-sm text-secondary mt-1">
              Despacho inmediato
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-2xl">check_circle</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
              Agotados / Pausa
            </span>
            <span className="font-metric-number text-metric-number text-error tabular-nums">4</span>
            <span className="font-body-sm text-body-sm text-error flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-sm">error</span> Requiere insumos
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-error-container/30 flex items-center justify-center text-error">
            <span className="material-symbols-outlined text-2xl">inventory_2</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
              Ventas Catálogo (Mes)
            </span>
            <span className="font-metric-number text-metric-number text-on-surface tabular-nums">
              1.240
            </span>
            <span className="font-body-sm text-body-sm text-tertiary flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-sm">bolt</span> +18.4% vs mes anterior
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
            <span className="material-symbols-outlined text-2xl">local_fire_department</span>
          </div>
        </div>
      </div>

      {/* Header de Gestión de Catálogo */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary animate-ping"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                Menú en Vivo • La Esquina del Sabor
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface mt-1">
              Catálogo de Comidas Rápidas
            </h1>
            <p className="font-body-md text-body-md text-secondary">
              Administra disponibilidad de menú, precios base y categorías activas para Neiva.
            </p>
          </div>
          <div className="flex items-center gap-space-sm flex-wrap">
            <button
              onClick={onGoToToppings}
              className="flex items-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-lg text-label-lg transition-colors shadow-sm cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-lg">tune</span>
              <span>Ajustes Rápidos</span>
            </button>
            <button
              onClick={() => openEditFor('Nuevo Plato Artesanal', '20.000')}
              className="flex items-center gap-2 px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:scale-[0.98] transition-all cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-xl">add_circle</span>
              <span>+ Crear Nuevo Producto</span>
            </button>
          </div>
        </div>

        {/* Category Pills & Global Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md pt-space-xs">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                }`}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative min-w-[280px]">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-secondary text-lg">
              search
            </span>
            <input
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full pl-9 pr-12 py-2 bg-surface text-on-surface placeholder:text-secondary rounded-lg font-body-md text-body-md shadow-sm focus:outline-none focus:bg-surface-container-lowest"
              placeholder="Filtrar por nombre o ingrediente..."
              type="text"
            />
            <kbd className="absolute right-2.5 top-2 font-label-sm text-label-sm text-secondary bg-surface-container px-1.5 py-0.5 rounded">
              F3
            </kbd>
          </div>
        </div>
      </div>

      {/* Main Product Canvas */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-space-md bg-surface-container-low flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <span className="font-headline-sm text-headline-sm text-on-surface">
              Listado Maestro de Platos
            </span>
            <span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-0.5 rounded-full">
              Sede Principal
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-body-sm text-body-sm text-secondary hidden sm:inline">
              Modo Vista:
            </span>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-surface-container-lowest text-primary shadow-sm'
                  : 'hover:bg-surface-container-highest text-secondary'
              }`}
              title="Vista Tabla"
              type="button"
            >
              <span className="material-symbols-outlined text-lg">table_rows</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-surface-container-lowest text-primary shadow-sm'
                  : 'hover:bg-surface-container-highest text-secondary'
              }`}
              title="Vista Tarjetas"
              type="button"
            >
              <span className="material-symbols-outlined text-lg">grid_view</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                <th className="py-3 px-space-md">Producto</th>
                <th className="py-3 px-space-md">Categoría</th>
                <th className="py-3 px-space-md">Precio Base (COP)</th>
                <th className="py-3 px-space-md">Toppings &amp; Personalización</th>
                <th className="py-3 px-space-md">Desempeño</th>
                <th className="py-3 px-space-md text-center">Disponibilidad</th>
                <th className="py-3 px-space-md text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="py-space-md px-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 shadow-sm">
                      <img
                        alt="Hamburguesa Artesanal Doble Carne"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXUoU0Fcdt-2J_cCb8-tym4BslA58th_dbO4Sj7TRFjkur2KN1X2jMhdsK1BhyhqjxAd3N0i8OpRWIfl1-mJuHoRc0vq5N4HdQr1r0bC5Oddpo9faA7TOobWgIktOSlcBHi_gfDRn-Gaq6t0_tJ40tIMyo4usw1j_Q5wEHxX42XpjqfXBLFEmQPIGasLFHjROTHwlskOV764y3ehXg85Dfm0ZLtdZSlqwgj1g1zqa1cjyOE15u2S5FNA"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                        Hamburguesa Artesanal Doble Carne
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary truncate">
                        2 carnes 150g, queso cheddar fundido, tocineta ahumada
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap">
                  <span className="bg-surface-container px-2.5 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant">
                    Hamburguesas
                  </span>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    $24.000
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-secondary">
                      <span className="material-symbols-outlined text-sm text-primary">layers</span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        8 Toppings permitidos
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary truncate max-w-xs">
                      Queso, Tocineta, Huevo codorniz, Salsas artesanas
                    </span>
                  </div>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-base">
                      shopping_bag
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface">142</span>
                    <span className="font-body-sm text-body-sm text-secondary">pedidos/mes</span>
                  </div>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap text-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      checked={availability.burger}
                      onChange={() =>
                        setAvailability((a) => ({ ...a, burger: !a.burger }))
                      }
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
                    <span
                      className={`ms-2 font-label-sm text-label-sm uppercase font-bold tracking-wider ${
                        availability.burger ? 'text-tertiary' : 'text-error'
                      }`}
                    >
                      {availability.burger ? 'Disponible' : 'Pausado'}
                    </span>
                  </label>
                </td>
                <td className="py-space-md px-space-md text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => openEditFor('Hamburguesa Artesanal Doble Carne', '24.000')}
                      className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                      title="Editar Producto"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button
                      onClick={() => openEditFor('Hamburguesa Artesanal Doble Carne (Copia)', '24.000')}
                      className="p-2 text-secondary hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                      title="Duplicar Ficha"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">content_copy</span>
                    </button>
                    <button
                      onClick={() =>
                        setAvailability((a) => ({ ...a, burger: !a.burger }))
                      }
                      className="p-2 text-secondary hover:text-error hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                      title="Pausar en Plataforma"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">pause_circle</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="py-space-md px-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 shadow-sm">
                      <img
                        alt="Salchipapa Mixta Especial Costeña"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuATx1eNz9LmDAfaoqiO0dP2Bf1MKFFBrPzZT7tnFMa0PavCsxgXzyvDlHNsoO0OmrHudbgdQ_FHAV1IorGcxMpuzXMHkiuFhw4Ox3PIJpAZvWfhIfZmEJhvgbAh_wiqjG7iHhbvchZUTyNq_l1zyiSmpkGp9YJs_UQJCV4EHfYANHq-SfyJK79nJsaKtuMGjyQuJp4msZ2dw2sHQO32XA9xQYsJnQ8zS5DrjMEC6lt22sKCxBLZCtXLLw"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                          Salchipapa Mixta Especial Costeña
                        </span>
                        <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">
                            local_fire_department
                          </span>{' '}
                          Más vendido
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-secondary truncate">
                        Papa criolla, salchicha manguera, carne desmechada, queso costeño
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap">
                  <span className="bg-surface-container px-2.5 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant">
                    Salchipapas
                  </span>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    $22.500
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-secondary">
                      <span className="material-symbols-outlined text-sm text-primary">layers</span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        10 Toppings permitidos
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary truncate max-w-xs">
                      Maicitos, Papita ripio, Queso costeño rallado, Salsa tártara
                    </span>
                  </div>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">
                      trending_up
                    </span>
                    <span className="font-label-lg text-label-lg text-primary font-bold">210</span>
                    <span className="font-body-sm text-body-sm text-secondary">pedidos/mes</span>
                  </div>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap text-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      checked={availability.salchipapa}
                      onChange={() =>
                        setAvailability((a) => ({ ...a, salchipapa: !a.salchipapa }))
                      }
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
                    <span
                      className={`ms-2 font-label-sm text-label-sm uppercase font-bold tracking-wider ${
                        availability.salchipapa ? 'text-tertiary' : 'text-error'
                      }`}
                    >
                      {availability.salchipapa ? 'Disponible' : 'Pausado'}
                    </span>
                  </label>
                </td>
                <td className="py-space-md px-space-md text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => openEditFor('Salchipapa Mixta Especial Costeña', '22.500')}
                      className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                      title="Editar Producto"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button
                      onClick={() => openEditFor('Salchipapa Mixta (Copia)', '22.500')}
                      className="p-2 text-secondary hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                      title="Duplicar Ficha"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">content_copy</span>
                    </button>
                    <button
                      onClick={() =>
                        setAvailability((a) => ({ ...a, salchipapa: !a.salchipapa }))
                      }
                      className="p-2 text-secondary hover:text-error hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                      title="Pausar en Plataforma"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">pause_circle</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="py-space-md px-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 shadow-sm">
                      <img
                        alt="Perro Caliente Especial Suizo"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_ZrALPtu8U4l0PzHKj9H23Jp2ElcrBfNBtcy05MmTQwMAwEOs0hfOmm711FIO0uGcJuDjlatcQdDqKd1xGAOtFNFTkk8zAEY-YMxixXoHO4hVHXdnIx9Kbcxdi-MVBQbEN3uHL9olYma8SeHWv85NQmbiKNO1jVsFqQ-3jnugaQvvE6v4n7Nw7zbyWJc55hf1HMUOsHE0aY2rZwMybAOwu8ZTsXGaqia9QMlzPSXj5SOReDxgoRGEPQ"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                        Perro Caliente Especial Suizo
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary truncate">
                        Salchicha suiza premium, queso mozzarella derretido, tocineta y ripio
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap">
                  <span className="bg-surface-container px-2.5 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant">
                    Perros Calientes
                  </span>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    $16.000
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-secondary">
                      <span className="material-symbols-outlined text-sm text-primary">layers</span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        6 Toppings permitidos
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary truncate max-w-xs">
                      Huevo codorniz, Piña caramelizada, Ripio crocante
                    </span>
                  </div>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-base">
                      shopping_bag
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface">88</span>
                    <span className="font-body-sm text-body-sm text-secondary">pedidos/mes</span>
                  </div>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap text-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      checked={availability.perro}
                      onChange={() => setAvailability((a) => ({ ...a, perro: !a.perro }))}
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
                    <span
                      className={`ms-2 font-label-sm text-label-sm uppercase font-bold tracking-wider ${
                        availability.perro ? 'text-tertiary' : 'text-error'
                      }`}
                    >
                      {availability.perro ? 'Disponible' : 'Pausado'}
                    </span>
                  </label>
                </td>
                <td className="py-space-md px-space-md text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => openEditFor('Perro Caliente Especial Suizo', '16.000')}
                      className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                      title="Editar Producto"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button
                      onClick={() => openEditFor('Perro Caliente Suizo (Copia)', '16.000')}
                      className="p-2 text-secondary hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                      title="Duplicar Ficha"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">content_copy</span>
                    </button>
                    <button
                      onClick={() => setAvailability((a) => ({ ...a, perro: !a.perro }))}
                      className="p-2 text-secondary hover:text-error hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                      title="Pausar en Plataforma"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">pause_circle</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 4 */}
              <tr
                className={`${
                  availability.desgranado
                    ? 'hover:bg-surface-container-low'
                    : 'bg-error-container/10 hover:bg-error-container/20'
                } transition-colors group`}
              >
                <td className="py-space-md px-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 shadow-sm opacity-70">
                      <img
                        alt="Desgranado Criollo con Chicharrón"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb8wbSNXePisbZISIeiKq7xG31T8zge6dOVdlh5HRQ_38uGZqjwPFPqLn7ubsreWqbnuNRuBWh4WLxejxzz2b19a-HnIli_h1D-PcIidUvofqqOqB79mx8jZFCCLPI2VCuVFfFco_fEJtmt8c-HPO1J_TQUTqdZ2ml3LJSPEKJY2A3K-JPb7XHNHABK1A7YrhQ_pbKpn2Sz1kAhoAq2yoRLCHJNUrb3IELVg0ElshTWxdReG1iOqDHtA"
                      />
                      {!availability.desgranado && (
                        <div className="absolute inset-0 bg-surface-dim/40 flex items-center justify-center">
                          <span className="material-symbols-outlined text-error text-xl">
                            block
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                          Desgranado Criollo con Chicharrón
                        </span>
                        {!availability.desgranado && (
                          <span className="bg-error text-on-error font-label-sm text-label-sm px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">warning</span>{' '}
                            Agotado Temporalmente
                          </span>
                        )}
                      </div>
                      <span className="font-body-sm text-body-sm text-error font-medium truncate">
                        {availability.desgranado
                          ? 'Maíz tierno desgranado con chicharrón crocante'
                          : 'Sin stock de chicharrón crocante en cocina'}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap">
                  <span className="bg-surface-container px-2.5 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant">
                    Pizzas &amp; Desgranados
                  </span>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap">
                  <span
                    className={`font-headline-sm text-headline-sm text-on-surface font-bold ${
                      !availability.desgranado ? 'line-through opacity-60' : ''
                    }`}
                  >
                    $26.000
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <div className="flex flex-col gap-1 opacity-70">
                    <div className="flex items-center gap-1.5 text-secondary">
                      <span className="material-symbols-outlined text-sm text-secondary">
                        layers
                      </span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        9 Toppings vinculados
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary truncate max-w-xs">
                      Maíz tierno desgranado, Queso costeño, Tocineta
                    </span>
                  </div>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap">
                  <div className="flex items-center gap-2 opacity-60">
                    <span className="material-symbols-outlined text-secondary text-base">
                      shopping_bag
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface">95</span>
                    <span className="font-body-sm text-body-sm text-secondary">pedidos/mes</span>
                  </div>
                </td>
                <td className="py-space-md px-space-md whitespace-nowrap text-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      checked={availability.desgranado}
                      onChange={() =>
                        setAvailability((a) => ({ ...a, desgranado: !a.desgranado }))
                      }
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary"></div>
                    <span
                      className={`ms-2 font-label-sm text-label-sm uppercase font-bold tracking-wider ${
                        availability.desgranado ? 'text-tertiary' : 'text-error'
                      }`}
                    >
                      {availability.desgranado ? 'Disponible' : 'Agotado'}
                    </span>
                  </label>
                </td>
                <td className="py-space-md px-space-md text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => openEditFor('Desgranado Criollo con Chicharrón', '26.000')}
                      className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                      title="Editar Producto"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button
                      onClick={() => openEditFor('Desgranado Criollo (Copia)', '26.000')}
                      className="p-2 text-secondary hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                      title="Duplicar Ficha"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">content_copy</span>
                    </button>
                    <button
                      onClick={() =>
                        setAvailability((a) => ({ ...a, desgranado: !a.desgranado }))
                      }
                      className="p-2 text-tertiary hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                      title="Reactivar Insumo"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">
                        published_with_changes
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quick Pagination & Kitchen Alert Footer */}
        <div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">schedule</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Sincronizado con punto de venta de Neiva hace 1 minuto
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-label-md text-label-md text-secondary">
              Mostrando 4 de 28 productos
            </span>
            <div className="flex items-center gap-1">
              <button
                className="px-2.5 py-1 rounded bg-surface-container-highest text-secondary opacity-50 cursor-not-allowed"
                disabled
                type="button"
              >
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button
                className="px-3 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold"
                type="button"
              >
                1
              </button>
              <button
                className="px-3 py-1 rounded bg-surface-container hover:bg-surface-container-high font-label-sm text-label-sm"
                type="button"
              >
                2
              </button>
              <button
                className="px-3 py-1 rounded bg-surface-container hover:bg-surface-container-high font-label-sm text-label-sm"
                type="button"
              >
                3
              </button>
              <button
                className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface"
                type="button"
              >
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Section: Gestión de Adiciones en Tiempo Real & Recomendaciones */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
                Topping Más Solicitado
              </span>
              <span className="bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">
                +34% frec.
              </span>
            </div>
            <div className="flex items-center gap-space-sm mt-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">egg</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Huevo de Codorniz (x3)
                </span>
                <span className="font-body-sm text-body-sm text-secondary">
                  +$3.500 COP • 430 pedidos
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 bg-surface-container-low p-2 rounded-lg flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-secondary">
              Inventario en barra: 120 unidades
            </span>
            <span className="font-label-sm text-label-sm text-tertiary font-bold uppercase">
              Abastecido
            </span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
                Ajuste de Margen Neiva
              </span>
              <span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-0.5 rounded-full">
                Auto-sugerido
              </span>
            </div>
            <div className="flex items-center gap-space-sm mt-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">price_change</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Papas Francesas Grandes
                </span>
                <span className="font-body-sm text-body-sm text-secondary">
                  Recomendación de subida a $9.000
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-end">
            <button
              onClick={() => openEditFor('Papas Francesas Grandes', '9.000')}
              className="font-label-sm text-label-sm text-primary hover:underline font-bold flex items-center gap-0.5 cursor-pointer"
              type="button"
            >
              Aplicar cambio <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-wider">
                Regla de Domicilios Neiva
              </span>
              <span className="bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">
                Activo
              </span>
            </div>
            <div className="flex items-center gap-space-sm mt-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">two_wheeler</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Empaque Térmico Obligatorio
                </span>
                <span className="font-body-sm text-body-sm text-secondary">
                  Añade $1.000 de packaging en combos
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-end">
            <button
              onClick={onGoToToppings}
              className="font-label-sm text-label-sm text-secondary hover:text-on-surface font-semibold flex items-center gap-0.5 cursor-pointer"
              type="button"
            >
              Ver parámetros <span className="material-symbols-outlined text-sm">settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Drawer / Panel Lateral de Edición Rápida */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-surface-container-lowest shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-space-lg bg-surface-container-low flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
              Edición de Ficha Gastronómica
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface">{dishName}</h2>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-space-lg flex flex-col gap-space-md">
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-on-surface font-semibold">
              Fotografía del Plato
            </label>
            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-surface-container flex items-center justify-center group shadow-sm">
              <img
                alt={dishName}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfMVWGtRx3ItGL_krIySw0fPiplblgfOCOee29pGMR0RViR-PRR6P3iAKTrVkjSeJY6GW9BEq-DD7UtsHk9pMGpANZhb847tIdE2ZPNXSyoZ1Q-Ier7GCdL4Pt5vRx8U5Nms4mOTML8_vnO6DTZApb37xnZavMkxO5bIQ9RmeKKHfGYVGYR5HjfDZRA9_Gl-WQfJhe2xPP8xd3BtO3emxSruxTpQFOPgFscMO3S-tprors4j-chK9rWw"
              />
              <div className="absolute inset-0 bg-inverse-surface/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-label-sm text-label-sm text-on-surface flex items-center gap-1 shadow"
                  type="button"
                >
                  <span className="material-symbols-outlined text-sm">photo_camera</span> Cambiar
                  Foto
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-label-md text-label-md text-on-surface font-semibold">
              Nombre del Plato *
            </label>
            <input
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-low shadow-sm"
              type="text"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-on-surface font-semibold">
                Categoría *
              </label>
              <select className="w-full px-3 py-2 rounded-lg bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-low shadow-sm">
                <option value="hamburguesas">Hamburguesas</option>
                <option value="salchipapas">Salchipapas</option>
                <option value="perros">Perros Calientes</option>
                <option value="desgranados">Pizzas &amp; Desgranados</option>
                <option value="bebidas">Bebidas</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-label-md text-on-surface font-semibold">
                Precio Base (COP) *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-secondary font-body-md text-body-md font-bold">
                  $
                </span>
                <input
                  value={dishPrice}
                  onChange={(e) => setDishPrice(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 rounded-lg bg-surface text-on-surface font-body-md text-body-md font-bold focus:outline-none focus:bg-surface-container-low shadow-sm"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-label-md text-label-md text-on-surface font-semibold">
              Descripción e Ingredientes Base
            </label>
            <textarea
              value={dishDesc}
              onChange={(e) => setDishDesc(e.target.value)}
              className="w-full p-3 rounded-lg bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-low shadow-sm"
              rows={3}
            />
          </div>

          <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-base">tune</span>
                Grupo de Toppings Asignado
              </span>
              <button
                onClick={onGoToToppings}
                className="font-label-sm text-label-sm text-primary font-semibold cursor-pointer hover:underline"
                type="button"
              >
                Configurar Grupos
              </button>
            </div>
            <select className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm">
              <option>Toppings Hamburguesas Premium (8 Máximo)</option>
              <option>Toppings Clásicos Comidas Rápidas</option>
              <option>Toppings Salchipapas Neiva Full</option>
            </select>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="bg-surface-container-lowest px-2 py-0.5 rounded text-secondary font-label-sm text-label-sm">
                + Queso Mozzarella ($3.000)
              </span>
              <span className="bg-surface-container-lowest px-2 py-0.5 rounded text-secondary font-label-sm text-label-sm">
                + Tocineta Ahumada ($3.500)
              </span>
              <span className="bg-surface-container-lowest px-2 py-0.5 rounded text-secondary font-label-sm text-label-sm">
                + Huevo de Codorniz ($3.500)
              </span>
              <span className="bg-surface-container-lowest px-2 py-0.5 rounded text-secondary font-label-sm text-label-sm">
                + Cebolla Crispy ($2.000)
              </span>
            </div>
          </div>
        </div>

        <div className="p-space-md bg-surface-container-low flex items-center justify-between gap-space-sm">
          <button
            onClick={() => setDrawerOpen(false)}
            className="px-space-md py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface font-label-lg text-label-lg transition-colors cursor-pointer"
            type="button"
          >
            Cancelar
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDrawerOpen(false)}
              className="px-space-md py-2.5 rounded-lg bg-error-container/40 text-error hover:bg-error hover:text-on-error font-label-lg text-label-lg transition-colors cursor-pointer"
              type="button"
            >
              Pausar Plato
            </button>
            <button
              onClick={() => setDrawerOpen(false)}
              className="px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md transition-all cursor-pointer"
              type="button"
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
