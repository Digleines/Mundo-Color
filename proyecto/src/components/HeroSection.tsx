import React from 'react';
import { Images } from '../assets/images';
import { STORE_INFO } from '../data/mockData';
import { Gift, CheckCircle2, Sparkles, MapPin, Heart } from 'lucide-react';
import { Product } from '../types';

interface HeroSectionProps {
  onOpenProductModal: (productId: string) => void;
  onOpenCustomizer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenProductModal,
  onOpenCustomizer,
}) => {
  const whatsappHeroUrl = `https://wa.me/${STORE_INFO.phoneClean}?text=${encodeURIComponent(
    '¡Hola Mundo Color! Quiero pedir un detalle para sorprender a alguien especial en Valledupar.'
  )}`;

  return (
    <section id="inicio" className="relative pt-6 pb-14 md:pt-10 md:pb-20 overflow-hidden">
      {/* Soft ambient background glow */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#F4E8F8]/60 via-[#EBDCF2]/40 to-[#FAF7FC]/0 blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#EEDBEE] shadow-[0_2px_8px_rgba(102,102,153,0.06)] text-xs font-semibold tracking-wider text-[#666699] uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#BA7ABA]" />
              <span>Valledupar, Cesar • Transversal 23 # 19A - 12</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-semibold text-[#2E2A3B] leading-[1.15] tracking-[-0.02em] text-balance">
              Detalles con amor para sorprender a quien más quieres
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5A556B] max-w-xl leading-relaxed font-normal">
              Bouquets, desayunos sorpresa, cajas personalizadas y peluches en Valledupar. Diseñamos recuerdos inolvidables hechos totalmente a mano.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FF9999] hover:bg-[#F28585] text-[#2E2A3B] font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] group"
              >
                <Gift className="w-5 h-5 text-[#2E2A3B] transition-transform group-hover:scale-110" />
                <span>Quiero mi detalle</span>
              </a>

              <button
                onClick={onOpenCustomizer}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#F9F5FC] text-[#666699] border border-[#666699]/40 font-semibold text-sm transition-all shadow-sm hover:border-[#666699]"
              >
                <Sparkles className="w-4 h-4 text-[#BA7ABA]" />
                <span>Armar detalle personalizado</span>
              </button>
            </div>

            {/* Reassurance text */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#706A82] font-medium pt-1">
              <CheckCircle2 className="w-4 h-4 text-[#7A9E7E] shrink-0" />
              <span>Respuesta rápida y asesoría cercana por WhatsApp</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() => onOpenProductModal('bouquets-globos')}
              className="group relative w-full max-w-md sm:max-w-lg lg:max-w-none bg-white p-3 sm:p-4 rounded-3xl shadow-[0_12px_36px_rgba(102,102,153,0.12)] border border-[#EEDBEE]/80 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(102,102,153,0.18)]"
            >
              {/* Media container */}
              <div className="relative aspect-[4/3.8] overflow-hidden rounded-2xl bg-[#F5F2F7]">
                <img
                  src={Images.heroBouquet}
                  alt="Bouquet Original de Mundo Color en Valledupar con peluche y rosas eternas de satén"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle gradient overlay at bottom for card caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Corner floating tag */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#666699] border border-[#E6E0F0] shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFAD47]" />
                  <span>Favorito Valledupar</span>
                </div>

                {/* Bottom caption card mimicking Image 4 */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-[#F0EBF5] shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#EBD6EB] flex items-center justify-center shrink-0">
                      <Heart className="w-4 h-4 text-[#7B4F7D] fill-[#7B4F7D]" />
                    </div>
                    <div>
                      <h2 className="text-xs font-bold text-[#666699] tracking-wider uppercase">
                        BOUQUET ORIGINAL
                      </h2>
                      <p className="text-[11px] text-[#706A82]">
                        Confeccionado a mano con amor
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#BA7ABA] group-hover:underline">
                    Ver más →
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
