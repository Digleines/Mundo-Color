import React, { useState } from 'react';
import { PRODUCTS, STORE_INFO } from '../data/mockData';
import { Product } from '../types';
import { Sparkles, MessageCircle, Eye, SlidersHorizontal } from 'lucide-react';

interface CatalogSectionProps {
  onSelectProduct: (product: Product) => void;
  onOpenCustomizer: () => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  onSelectProduct,
  onOpenCustomizer,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Todos los detalles' },
    { id: 'bouquets', label: 'Bouquets de globos' },
    { id: 'desayunos', label: 'Desayunos sorpresa' },
    { id: 'cajas', label: 'Cajas personalizadas' },
    { id: 'carteleras', label: 'Carteleras' },
    { id: 'peluches', label: 'Peluches' },
    { id: 'rosas', label: 'Rosas de satén' },
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrderWhatsapp = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const msg = `¡Hola Mundo Color! Quiero pedir información y ordenar el detalle: *${product.name}* (Ref: ${product.id}) en Valledupar.`;
    const url = `https://wa.me/${STORE_INFO.phoneClean}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="catalogo" className="py-16 md:py-24 bg-[#FAF7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#666699] inline-block">
            CATÁLOGO ARTESANAL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2E2A3B] tracking-tight">
            Nuestros detalles
          </h2>
          <p className="text-sm sm:text-base text-[#706A82] leading-relaxed">
            Cada creación es elaborada con dedicación y toques únicos para que tu regalo sea inolvidable en Valledupar.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-[#EEDBEE]/60">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#666699] text-white shadow-sm'
                      : 'bg-white text-[#706A82] border border-[#EEDBEE] hover:text-[#2E2A3B] hover:border-[#666699]/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Customizer Quick Link */}
          <button
            onClick={onOpenCustomizer}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EBD6EB]/80 text-[#666699] text-xs sm:text-sm font-semibold hover:bg-[#EBD6EB] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#BA7ABA]" />
            <span>¿Quieres algo único? Personalízalo</span>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EEDBEE]/80 shadow-[0_4px_16px_rgba(102,102,153,0.06)] hover:shadow-[0_12px_32px_rgba(102,102,153,0.12)] hover:border-[#CC99CC] transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-square overflow-hidden bg-[#F5F2F7]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Badge (e.g. Favorito, Novedad, Personalizable, Artesanal) */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#666699] shadow-sm border border-[#EEDBEE]">
                    {product.badge}
                  </div>
                )}

                {/* Quick view indicator on hover */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="px-3.5 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#2E2A3B] shadow-md flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver detalles</span>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2E2A3B] group-hover:text-[#666699] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#706A82] line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price Label & WhatsApp Action Button */}
                <div className="pt-2 border-t border-[#F5F0F8] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-wider text-[#BA7ABA] uppercase">
                      CONSULTAR PRECIO
                    </span>
                    <span className="text-xs font-medium text-[#706A82]">
                      Desde {product.price}
                    </span>
                  </div>

                  <button
                    onClick={(e) => handleOrderWhatsapp(e, product)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FF9999] hover:bg-[#F28585] text-[#2E2A3B] font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#2E2A3B]/20" />
                    <span>{product.buttonText}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
